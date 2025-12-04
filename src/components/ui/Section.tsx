import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    variant?: 'default' | 'dark' | 'light' | 'white';
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    variant = 'default',
    className = '',
    id
}) => {
    const variantClass = variant === 'default' ? '' : styles[variant];

    return (
        <section id={id} className={`${styles.section} ${variantClass} ${className}`}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};
