import React from 'react';
import styles from './layout.module.css';

const Footer = () => {
    return (
        <div style={{ display: 'flex' }}>   
        
            <footer className={styles.footer}>
              <h6 style={{margin:15}}>&copy; 2023 All rights reserved.</h6>
            </footer>
          </div>
      );
};

export default Footer;
