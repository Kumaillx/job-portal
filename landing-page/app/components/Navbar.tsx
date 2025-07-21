'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import logo from '@/app/images/logo.png';
import slide1 from '@/app/images/Nav-slide1.png';
import slide2 from '@/app/images/Nav-slide2.png';
import slide3 from '@/app/images/Nav-slide3.png';

 function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="UltraCodes Logo" width={300} height={70} />
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
      
      <div style={{ fontSize:'-webkit-xxx-large' ,textAlign: 'center', marginTop: '30px' }}>
        Explore career opportunities at Ultra Codes 
      </div>

      <div className={styles.logoWrapper}>
        <Image className={styles.logoImage} src={slide1} alt="UltraCodes Logo" />
        <Image className={styles.logoImage} src={slide2} alt="UltraCodes Logo" />
        <Image className={styles.logoImage} src={slide3} alt="UltraCodes Logo" />
      </div>  
      
    
    </header>
  );
}

export default Navbar;