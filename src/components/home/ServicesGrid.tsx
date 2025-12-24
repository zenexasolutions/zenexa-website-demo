import React from 'react';
import styles from './ServicesGrid.module.css';
import { FileSearch, Pill, Target, FileText, ArrowRight, Zap, Shield, Activity, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <FileSearch size={32} />,
        title: "Provider Outreach & Medical Record Retrieval",
        subtitle: "Retrieval at the Speed of Decision",
        description: "Zenexa Infotech's \"Smart-Chase\" method changes the way retrieval works, cutting turnaround times by as much as 40%.",
        link: "/services/provider-outreach",
        accent: "#2dd4bf", // Teal 400
        features: ["Direct EHR Integration", "Predictive Outreach Algorithms", "Clinical QA Layer"]
    },
    {
        icon: <Pill size={32} />,
        title: "Pharmacy Billing & Revenue Cycle",
        subtitle: "Defending Pharmacy Margins",
        description: "Specialized solutions for LTC and Home Infusion. Zenexa Infotech provides a fortress around your revenue.",
        link: "/services/pharmacy-billing",
        accent: "#22d3ee", // Cyan 400
        features: ["DIR Fee Mitigation", "Inventory Cash Flow", "LTC Specialization"]
    },
    {
        icon: <Target size={32} />,
        title: "Chart Abstraction & Risk Adjustment (HCC)",
        subtitle: "Accurate Coding for the V28 Era",
        description: "Zenexa Infotech helps you deal with the change to the CMS-HCC Version 28 model with clinical accuracy.",
        link: "/services/risk-adjustment",
        accent: "#38bdf8", // Sky 400
        features: ["V28 Specificity", "MEAT Validation", "HEDIS Integration"]
    },
    {
        icon: <FileText size={32} />,
        title: "Claims Management & Coding Support",
        subtitle: "Zero-Defect Revenue Cycle",
        description: "Autonomous technology and expert auditing to raise your Clean Claim Rate (CCR) to over 98% and stop revenue loss.",
        link: "/services/claims-management",
        accent: "#4ade80", // Green 400
        features: ["Denial Prevention", "98%+ CCR", "Front-End Intelligence"]
    }
];

interface ServicesGridProps {
    hideHeader?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ hideHeader = false }) => {
    return (
        <section className={styles.section}>
            <div className={styles.backgroundEffects}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <div className={styles.container}>
                {!hideHeader && (
                    <div className={styles.header}>
                        <span className={styles.badge}>Our Core Expertise</span>
                        <h2 className={styles.headline}>
                            Powering the Pulse of <br />Modern Healthcare
                        </h2>
                        <p className={styles.subheadline}>
                            Forensic accuracy meets scalable technology. We transform administrative complexity into financial resilience.
                        </p>
                    </div>
                )}

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className={styles.cardLink}>
                            <div className={styles.card} style={{ '--accent': service.accent } as React.CSSProperties}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        {service.icon}
                                    </div>
                                    <div className={styles.cardTitles}>
                                        <h3 className={styles.title}>{service.title}</h3>
                                        <span className={styles.cardSubtitle}>{service.subtitle}</span>
                                    </div>
                                </div>
                                <p className={styles.description}>{service.description}</p>

                                <div className={styles.featureList}>
                                    {service.features.map((f, i) => (
                                        <div key={i} className={styles.featureItem}>
                                            <div className={styles.featureDot}></div>
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <span className={styles.cta}>
                                        Explore Service <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
