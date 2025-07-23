'use client';
import React from 'react';
import Navbar from './components/Navbar';
import AppStatus from "@/app/components/ApplicationStatus";
import Footer from "@/app/components/Footer";
import styles from '@/styles/LandingPage.module.css';
import Image from 'next/image';
import himg from '@/app/images/Hero-img.png';
import fdev from "@/app/images/F-dev.png";
import bdev from "@/app/images/B-dev.png";
import UI from "@/app/images/UI.png";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Your Dream Job Awaits</h1>
            <p>Find jobs that match your skills and passion.</p>
            <button className={styles.button}>
              <span>
<Link   
      href="/AllJobs" >
          Browse Jobs
        </Link>

  </span>
              </button>
          </div>
          <div className={styles.heroImage}>
            <Image src={himg} alt="Job Search" width={400} height={300} />
          </div>
        </section>

        <section className={styles.availableJobs}>
          <h2>Available Jobs</h2>
            <div className={styles.jobCards}>
          <Link href="/apply/frontend-developer" className={styles.jobCard}>
            <Image src={fdev} alt="Frontend Developer" />
            <h3>Frontend Developer</h3>
            <p>React | Next.js | TypeScript</p>
          </Link>

          <Link href="/apply/backend-developer" className={styles.jobCard}>
          <Image src={bdev} alt="Backend Developer" />
          <h3>Backend Developer</h3>
          <p>Node.js | Express | SQL</p>
          </Link>

          <Link href="/apply/ui-ux-designer" className={styles.jobCard}>
            <Image src={UI} alt="UI/UX Designer" />
            <h3>UI/UX Designer</h3>
            <p>Figma | Adobe XD | Prototyping</p>
          </Link>
        </div>
          
        </section>
       

        <button className={styles.button}>
  <span>
<Link   
      href="/AllJobs" >
          View All Jobs
        </Link>

  </span>
          
        </button>

        

        <AppStatus />
        <div className={styles.footerContainer}>
          <Footer />
        </div>
        
      </main>
    </>
  );
}
