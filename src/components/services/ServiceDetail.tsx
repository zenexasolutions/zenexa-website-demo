'use client';

import React from 'react';
import styles from './ServiceDetail.module.css';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ServiceDetailProps {
    title: string;
    description: string;
    features: string[];
    process: { title: string; description: string }[];
}

const navLinks = [
    { name: 'End-to-End RCM', href: '/services/rcm' },
    { name: 'Medical Coding', href: '/services/coding' },
    { name: 'Claims Processing', href: '/services/claims' },
    { name: 'HEDIS Services', href: '/services/hedis' },
    { name: 'Denial Management', href: '/services/denial' },
    { name: 'Data Management', href: '/services/data' },
];

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, features, process }) => {
    const pathname = usePathname();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <nav className={styles.sidebarNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <div className={styles.content}>
                    <div>
                        <h2 className={styles.sectionTitle}>{title}</h2>
                        <p className={styles.text}>{description}</p>

                        <ul className={styles.featureList}>
                            {features.map((feature, index) => (
                                <li key={index} className={styles.featureItem}>
                                    <CheckCircle2 size={24} className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className={styles.sectionTitle}>Our Methodology</h2>
                        <div className={styles.processSteps}>
                            {process.map((step, index) => (
                                <div key={index} className={styles.step}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepInfo}>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
