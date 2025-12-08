import React from 'react';
import styles from './Compliance.module.css';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Shield, Lock, Award, Check, FileCheck } from 'lucide-react';

export const Compliance = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.shieldBg} />

            <div className={styles.header}>
                <h2 className={styles.headline}>Enterprise-Grade Security</h2>
                <p className={styles.subheadline}>We protect your data with military-grade security and 100% regulatory compliance</p>
            </div>

            <div className={styles.grid}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <Lock size={32} />
                    </div>
                    <h3 className={styles.title}>Data Security</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> End-to-end encryption (AES-256)</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Multi-factor authentication</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Role-based access controls</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Regular security audits</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> SOC II Type II certified</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <Shield size={32} />
                    </div>
                    <h3 className={styles.title}>HIPAA & Regulatory</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> 100% HIPAA & HITECH compliant</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Business Associate Agreements</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Annual compliance audits</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Incident response procedures</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Zero data breaches in 15+ years</li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <Award size={32} />
                    </div>
                    <h3 className={styles.title}>Certifications</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> ISO 27001 Information Security</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> AAPC & AHIMA certifications</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> NCCPA accreditation</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Industry-leading quality standards</li>
                        <li className={styles.item}><Check size={16} className={styles.checkIcon} /> Continuous staff training</li>
                    </ul>
                </div>
            </div>

            <div className={styles.ctaWrapper}>
                <Button leftIcon={<FileCheck size={18} />}>View Compliance Documentation</Button>
            </div>
        </Section>
    );
};
