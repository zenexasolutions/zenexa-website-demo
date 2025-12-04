import React from 'react';
import styles from './ServiceDetail.module.css';
import { Section } from '@/components/ui/Section';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailProps {
    title: string;
    description: string;
    features: string[];
    process: { title: string; description: string }[];
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, features, process }) => {
    return (
        <Section>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <nav className={styles.sidebarNav}>
                        <Link href="/services/rcm" className={styles.navLink}>End-to-End RCM</Link>
                        <Link href="/services/coding" className={styles.navLink}>Medical Coding</Link>
                        <Link href="/services/claims" className={styles.navLink}>Claims Processing</Link>
                        <Link href="/services/hedis" className={styles.navLink}>HEDIS Services</Link>
                        <Link href="/services/denial" className={styles.navLink}>Denial Management</Link>
                        <Link href="/services/data" className={styles.navLink}>Data Management</Link>
                    </nav>
                </aside>

                <div className={styles.content}>
                    <div>
                        <h2 className={styles.sectionTitle}>{title}</h2>
                        <p className={styles.text}>{description}</p>

                        <ul className={styles.featureList}>
                            {features.map((feature, index) => (
                                <li key={index} className={styles.featureItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className={styles.sectionTitle}>Our Process</h2>
                        <div className={styles.processSteps}>
                            {process.map((step, index) => (
                                <div key={index} className={styles.step}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
