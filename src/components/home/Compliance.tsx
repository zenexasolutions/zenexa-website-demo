import React from 'react';
import styles from './Compliance.module.css';
import { Shield, Eye, TrendingUp, Lock, BarChart, Search } from 'lucide-react';

const values = [
    {
        icon: <Shield size={40} />,
        title: "Uncompromised Compliance",
        description: "In a time when cybersecurity is a \"revenue emergency,\" we see data security as a matter of clinical safety. Our infrastructure is like a fortress.",
        features: ["Military-grade Encryption", "HIPAA/SOC2 Audited", "Real-time Monitoring"]
    },
    {
        icon: <Eye size={40} />,
        title: "Radical Transparency",
        description: "No fees that aren't clear and no processes that are hard to understand. Our real-time dashboards show you everything about the status of your revenue cycle.",
        features: ["Real-time Dashboards", "Clear Financials", "Weekly Performance Reviews"]
    },
    {
        icon: <TrendingUp size={40} />,
        title: "Relentless Optimization",
        description: "The status quo is a resource that is losing value. We constantly improve our workflows to stay ahead of changes in payer policies and rules.",
        features: ["Predictive Analytics", "Workflow Automation", "Payer Policy Intelligence"]
    }
];

export const Compliance = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Our Philosophy</span>
                    <h2 className={styles.headline}>The Rules We Follow</h2>
                    <p className={styles.subheadline}>
                        The operating system of trust for the US healthcare economy.
                    </p>
                </div>

                <div className={styles.grid}>
                    {values.map((val, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {val.icon}
                                <div className={styles.iconGlow}></div>
                            </div>
                            <h3 className={styles.cardTitle}>{val.title}</h3>
                            <p className={styles.cardText}>
                                {val.description}
                            </p>
                            <div className={styles.features}>
                                {val.features.map((f, i) => (
                                    <div key={i} className={styles.featureItem}>
                                        <div className={styles.bullet}></div>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.cardDecorative}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.bgDecoration}>
                <div className={styles.gradientSphere}></div>
            </div>
        </section>
    );
};
