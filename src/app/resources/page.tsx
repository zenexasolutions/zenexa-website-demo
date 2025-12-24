import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ResourceList } from '@/components/resources/ResourceList';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Resources & Blog | Zenexa',
    description: 'Insights, guides, and news about healthcare revenue cycle management.',
};

import styles from './page.module.css';

export default function ResourcesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.gridPattern} />
                <div className={styles.heroGlow} />
                <div className={`${styles.decorativeCircle} ${styles.circle1}`} />
                <div className={`${styles.decorativeCircle} ${styles.circle2}`} />

                <div className={styles.heroContent}>
                    <span className={styles.tagline}>Knowledge Hub</span>
                    <h1 className={styles.headline}>Resources & Insights</h1>
                    <p className={styles.subheadline}>
                        Stay ahead with expert guides, whitepapers, and the latest trends
                        in healthcare revenue cycle management.
                    </p>
                </div>
            </section>

            <ResourceList />

            <div className={styles.newsletterSection}>
                <CTA />
            </div>
        </>
    );
}
