import React from 'react';
import styles from './Stats.module.css';

const stats = [
    { number: "200+", label: "Healthcare Organizations", subtext: "Trust Zenexa for Revenue Resilience" },
    { number: "$4.2B", label: "Claims Processed Each Year", subtext: "Best-in-Class Performance Metrics" },
    { number: "99%+", label: "Coding Accuracy", subtext: "AAPC/AHIMA Certified Standards" },
    { number: "98%+", label: "Clean Claim Rate", subtext: "Far Exceeding Industry Averages" }
];

export const Stats = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statBox}>
                            <div className={styles.numberRow}>
                                <div className={styles.number}>{stat.number}</div>
                                <div className={styles.indicator}></div>
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                            <div className={styles.subtext}>{stat.subtext}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.backgroundBar}></div>
        </section>
    );
};
