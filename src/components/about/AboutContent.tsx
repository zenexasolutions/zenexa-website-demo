import React from 'react';
import styles from './AboutContent.module.css';
import { Section } from '@/components/ui/Section';

export const AboutContent = () => {
    return (
        <Section>
            <div className={styles.grid}>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032"
                        alt="Zenexa Team"
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Our Mission & Vision</h2>
                    <p className={styles.text}>
                        Founded in 2010, Zenexa has grown from a small medical coding firm to a global healthcare BPO leader. Our mission is to empower healthcare organizations to focus on patient care by handling the complexities of revenue cycle management.
                    </p>
                    <p className={styles.text}>
                        We believe in a partnership approach, acting as an extension of your team rather than just a vendor. With operations in India and support teams in the USA, we offer the perfect blend of cost-efficiency, expertise, and 24/7 availability.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Team Members</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>200+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>24/7</span>
                            <span className={styles.statLabel}>Global Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
