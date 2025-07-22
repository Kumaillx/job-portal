import React from 'react';
import styles from '@/styles/Footer.module.css';



function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.contactItem}>
          
          <span>info@ultracodes.io</span>
        </div>
        <div className={styles.contactItem}>
          
          <span>+1 707–925–3592</span>
        </div>
        <div className={styles.contactItem}>
          
          <span>5900 Balcones Dr, Suite 21564 Austin, TX 78731</span>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>
          © <strong>Ultra Codes LLC</strong>, 2025 | All Rights Reserved.
          <a href="#"> Privacy Policy </a> | <a href="#"> Terms of Use </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
