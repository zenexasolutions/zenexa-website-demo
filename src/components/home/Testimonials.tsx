import React from 'react';
import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Zenexa reduced our claims denials from 18% to 3% within 6 months. Their attention to detail and compliance expertise is unmatched. We've increased our revenue by $400K annually.",
        name: "Jane Smith",
        role: "Revenue Cycle Director",
        initials: "JS"
    },
    {
        text: "Managing our RCM in-house was costing us $500K/year with constant compliance concerns. Zenexa cut that in half and improved our Days in A/R to 22 days. Best decision we made.",
        name: "Robert Johnson",
        role: "CFO, Physician Group",
        initials: "RJ"
    },
    {
        text: "We were struggling with HEDIS quality measures. Zenexa's mobile gap closure program improved our Star ratings by 0.5 points in one year. Their service is exceptional.",
        name: "Michelle Davis",
        role: "Plan Director, Health Plan",
        initials: "MD"
    }
];

export const Testimonials = () => {
    return (
        <section className={styles.section}>
            {/* Ambient Background Glows */}
            <div className={`${styles.glow} ${styles.glow1}`} />
            <div className={`${styles.glow} ${styles.glow2}`} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Client Success Stories</span>
                    <h2 className={styles.headline}>Trusted by Industry Leaders</h2>
                    <p className={styles.subheadline}>
                        Discover how healthcare organizations are transforming their revenue cycle and compliance with Zenexa.
                    </p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <Quote size={40} className={styles.quoteIcon} />

                            <p className={styles.text}>&quot;{t.text}&quot;</p>

                            <div className={styles.footer}>
                                <div className={styles.avatar}>
                                    {t.initials}
                                </div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.role}>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
