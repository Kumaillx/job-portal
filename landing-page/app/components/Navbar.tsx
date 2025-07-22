'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import logo from '@/app/images/logo.png';

function Navbar() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Placeholder for upload logic (e.g., API call)
      console.log('Uploading file:', selectedFile.name);
      // Add your upload logic here (e.g., using fetch or axios to send to a server)
    } else {
      alert('Please select a file first!');
    }
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