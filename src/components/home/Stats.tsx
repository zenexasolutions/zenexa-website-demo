import React from 'react';
import styles from './Stats.module.css';

const stats = [
    { number: "200+", label: "Clients Served", subtext: "US Healthcare Organizations" },
    { number: "$4.2B+", label: "Revenue Recovered", subtext: "Maximized for Our Clients" },
    { number: "99%+", label: "Coding Accuracy", subtext: "AAPC/AHIMA Certified Coders" },
    { number: "40-50%", label: "Denial Reduction", subtext: "Average Client Improvement" }
];

export const Stats = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statBox}>
                            <div className={styles.orb}></div>
                            <div className={styles.number}>{stat.number}</div>
                            <div className={styles.label}>{stat.label}</div>
                            <div className={styles.subtext}>{stat.subtext}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
