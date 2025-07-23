// 'use client' if you’re using interactivity or hooks
import Image from 'next/image';
import fdev from '@/app/images/F-dev.png'; // adjust if paths differ
import bdev from '@/app/images/B-dev.png';
import UI from '@/app/images/UI.png';
import styles from '@/styles/Alljobs.module.css'; // if styling separately

function JobsPage() {
  return (
    <section className={styles.availableJobs}>
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
    </section>
  );
}


export default JobsPage;