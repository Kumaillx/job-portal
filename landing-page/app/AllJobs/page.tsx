
import Image from 'next/image';
import fdev from '@/app/images/F-dev.png'; 
import bdev from '@/app/images/B-dev.png';
import UI from '@/app/images/UI.png';
import styles from '@/styles/Alljobs.module.css'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import bd from '@/app/images/BD.png';
import qa from '@/app/images/QA.png';
import mk from '@/app/images/Marketing.png';
import Link from 'next/link';

function JobsPage() {
  return (
    
    <section className={styles.availableJobs}>
      <div className={styles.footerContainer}>
          <Navbar />
        </div>
      <h2>Available Jobs</h2>
      <div className={styles.jobCards}>
        
        <div className={styles.jobCard}>
            
          <Image src={fdev} alt="Frontend Developer" />
          <h3>Frontend Developer</h3>
          <p>React | Next.js | TypeScript</p>
        
        </div>
        <div className={styles.jobCard}>
          <Image src={bdev} alt="Backend Developer" />
          <h3>Backend Developer</h3>
          <p>Node.js | Express | SQL</p>
        </div>
        <div className={styles.jobCard}>
          <Image src={UI} alt="UI/UX Designer" />
          <h3>UI/UX Designer</h3>
          <p>Figma | Adobe XD | Prototyping</p>
        </div>
      </div>


      <div className={styles.hi}>
        
      </div>

      <div className={styles.jobCards}>
        <div className={styles.jobCard}>
          <Image src={bd} alt="Business Developer" />
          <h3>Business Developer</h3>
          <p>Business | Sales | Marketing</p>
        </div>
        <div className={styles.jobCard}>
          <Image src={qa} alt="QA Tester" />
          <h3>QA Testing</h3>
          <p>Auto Testing | Manual Testing | SQA</p>
        </div>
        <div className={styles.jobCard}>
          <Image src={mk} alt="Marketing" />
          <h3>Marketing</h3>
          <p>Social Media | Campaign | Ads</p>
        </div>
      </div>



      
      <div className={styles.hi}>
        
      </div>
    <div className={styles.footerContainer}>
          <Footer />
        </div>
    </section>
    
  );
}


export default JobsPage;