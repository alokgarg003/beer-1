import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';

export default function Footer() {
    const contributors = [
        {
            name: 'Mia',
            github: 'https://github.com/Alok Garg',
            linkedin: 'https://www.linkedin.com/in/alok-garg-561a16196'
        }
    ];
    return (
        <footer>
            <h3 className={styles.footH}>Beer is brought to you by:</h3>
            <div className={styles.developers}>
            {contributors.map((coder) => {
                return (
                    <div className={styles.devContainer} key={coder.name}>
                        <p className={styles.devName}>{coder.name}</p>
                        <div className={styles.contact}>
                            <a href={coder.linkedin} className={styles.contactIcon}>
                                <LinkedinOutlined />
                            </a>
                            <a href={coder.github} className={styles.contactIcon}>
                                <GithubOutlined />
                            </a>
                        </div>
                    </div>
                )
            })}
            </div>
        </footer>
    )
};