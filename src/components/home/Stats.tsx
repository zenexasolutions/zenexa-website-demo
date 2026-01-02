import React from 'react';
import styles from './Stats.module.css';

const stats = [
    { number: "Targeted", label: "Accuracy Rate", subtext: "Aiming for 99%+ Clean Claim Precision" },
    { number: "Elite", label: "Certified Team", subtext: "AAPC/AHIMA Standards in Every Workflow" },
    { number: "Modern", label: "Healthcare Tech", subtext: "Agentic AI & Secure Infrastructure" },
    { number: "Rapid", label: "Growth Vision", subtext: "Building the RCM Powerhouse of Tomorrow" }
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
