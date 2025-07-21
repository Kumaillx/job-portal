'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import logo from '@/app/images/logo.png';

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
      
      <div className="Breadcrumbs" style={{ fontSize:'-webkit-xxx-large' ,textAlign: 'left', marginTop: '30px' }}>
        Your Trusted Partner for Custom Web &amp; App Development
      </div>
        
      
    
    </header>
  );
}

export default Navbar;