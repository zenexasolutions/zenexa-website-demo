import React from 'react';
import styles from './LegalContent.module.css';

interface LegalContentProps {
    title: string;
    children: React.ReactNode;
}

export const LegalContent: React.FC<LegalContentProps> = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
