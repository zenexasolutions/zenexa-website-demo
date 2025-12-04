import React from 'react';
import styles from './Testimonials.module.css';
import { Section } from '@/components/ui/Section';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        text: "Zenexa reduced our claims denials from 18% to 3% within 6 months. Their attention to detail and compliance expertise is unmatched. We've increased our revenue by $400K annually.",
        name: "Jane Smith",
        role: "Revenue Cycle Director, 250-bed Hospital"
    },
    {
        text: "Managing our RCM in-house was costing us $500K/year with constant compliance concerns. Zenexa cut that in half and improved our Days in A/R to 22 days. Best decision we made.",
        name: "Robert Johnson",
        role: "CFO, Physician Group Practice"
    },
    {
        text: "We were struggling with HEDIS quality measures. Zenexa's mobile gap closure program improved our Star ratings by 0.5 points in one year. Their service is exceptional.",
        name: "Michelle Davis",
        role: "Plan Director, Health Plan"
    }
];

export const Testimonials = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.headline}>What Our Clients Say</h2>
                <p className={styles.subheadline}>Real results from real healthcare organizations</p>
            </div>

            <div className={styles.grid}>
                {testimonials.map((t, i) => (
                    <div key={i} className={styles.card}>
                        <Quote size={48} className={styles.quoteIcon} />
                        <p className={styles.text}>"{t.text}"</p>
                        <div className={styles.author}>
                            <span className={styles.name}>{t.name}</span>
                            <span className={styles.role}>{t.role}</span>
                        </div>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
