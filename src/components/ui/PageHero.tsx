import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
    headline: string;
    subheadline?: string;
    tagline?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ headline, subheadline, tagline }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgPattern} />
            <div className={styles.container}>
                {tagline && <span className={styles.tagline}>{tagline}</span>}
                <h1 className={styles.headline}>{headline}</h1>
                {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
            </div>
        </section>
    );
};
