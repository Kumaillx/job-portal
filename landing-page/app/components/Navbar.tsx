'use client';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';
import logo from '@/app/images/logo.png';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


function Navbar() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter(); 


const handleUpload = () => {
  if (selectedFile) {
    const query = keywords.join(','); // Convert array to comma-separated string
    router.push(`/AllJobs?keywords=${query}`); // Pass as query param
  } else {
    alert('Please select a file first!');
  }
};



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if a file is selected

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file); // Set the selected file in state

      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, '');
      const rawWords = fileNameWithoutExtension
        .split(/[\s_\-]+/) // split by space, underscore, or dash
        .map(word => word.trim().toLowerCase()); // normalize the text
      const stopwords = ['cv', 'resume', 'final', 'file', 'my', 'copy', 'document'];
      const filteredKeywords = rawWords.filter(word => word && !stopwords.includes(word));

      // Save the extracted keywords
      setKeywords(filteredKeywords);

      // Log to console (for developer debugging)
      console.log('Extracted keywords:', filteredKeywords);
    }
  };
  
  const handleNavigation = ( ) => 
  {

      

  };

  return (
    <header 
    className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="UltraCodes Logo" width={150} height={40} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/services">Services</Link>
          <Link href="/hire">Hire</Link>
          <Link href="/company">Company</Link>
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers" className={styles.active}>
            Careers
          </Link>
        </nav>
        <div className={styles.cta}>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
      <div className={styles.careerSection}>
        <h1 className={styles.careerTitle}>EXPLORE CAREER OPPORTUNITIES</h1>
        <div className={styles.uploadSection}>
          <label className={styles.uploadLabel}>
            Upload Your CV
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={styles.uploadInput}
            />
          </label>

          <button
            onClick={handleUpload}
            className={styles.uploadButton}
            disabled={!selectedFile}
          >
            Search in Jobs
          </button>
          {selectedFile && (
            <p className={styles.fileName}>Selected file: {selectedFile.name}</p>
          )}
        </div>
        <p className={styles.welcomeText}>Welcome to the Ultra Codes Job Portal</p>
      </div>
    </header>
  );
}

export default Navbar;