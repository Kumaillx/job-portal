'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import logo from '@/app/images/logo.png';
import slide3 from '@/app/images/Nav-slide3.png'; // Using only slide3 as per the image

function Navbar() {
  return (
    <header className={styles.header}>
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
        {/* <div className={styles.imageContainer}>
          <Image src={slide3} alt="Leadership Presentation" width={800} height={400} />
        </div> */}
        <p className={styles.welcomeText}>Welcome to the Ultra Codes Job Portal</p>
      </div>
    </header>
  );
}

export default Navbar;