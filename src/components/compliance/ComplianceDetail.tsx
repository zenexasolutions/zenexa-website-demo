import React from 'react';
import styles from './ComplianceDetail.module.css';
import { Section } from '@/components/ui/Section';
import { ShieldCheck, Lock, FileCheck, Server } from 'lucide-react';

export const ComplianceDetail = () => {
    return (
        <Section className={styles.section}>
            <p className={styles.intro}>
                At Zenexa, compliance is not just a department; it's ingrained in our DNA. We adhere to the strictest international standards to ensure your data is secure, private, and managed with the utmost integrity.
            </p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>
                        <ShieldCheck size={32} /> HIPAA Compliance
                    </h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Full compliance with HIPAA Privacy & Security Rules</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Signed Business Associate Agreements (BAA) with all clients</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Regular HIPAA training for all employees</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Dedicated Compliance Officer</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>
                        <Lock size={32} /> Data Security
                    </h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> 256-bit AES Encryption for data at rest and in transit</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Multi-Factor Authentication (MFA) access controls</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> Secure, paperless environment</li>
                        <li className={styles.item}><FileCheck size={20} className={styles.icon} /> 24/7 Network Monitoring and Intrusion Detection</li>
                    </ul>
                </div>
            </div>

            <div className={styles.certGrid}>
                <div className={styles.certItem}>
                    <div className={styles.certLogo}>ISO</div>
                    <span className={styles.certName}>ISO 27001:2013 Certified</span>
                </div>
                <div className={styles.certItem}>
                    <div className={styles.certLogo}>SOC</div>
                    <span className={styles.certName}>SOC 2 Type II Audited</span>
                </div>
                <div className={styles.certItem}>
                    <div className={styles.certLogo}>GDPR</div>
                    <span className={styles.certName}>GDPR Compliant</span>
                </div>
                <div className={styles.certItem}>
                    <div className={styles.certLogo}>PCI</div>
                    <span className={styles.certName}>PCI-DSS Compliant</span>
                </div>
            </div>
        </Section>
    );
};
