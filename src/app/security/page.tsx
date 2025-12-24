import React from 'react';
import { Section } from '@/components/ui/Section';
import { Shield, Lock, FileCheck } from 'lucide-react';
import styles from './styles.module.css';

export default function DataSecurityPage() {
    return (
        <main className={styles.main}>
            {/* Simple Hero for now, can be expanded */}
            <Section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <Shield size={16} /> Data Security & Compliance
                        </div>
                        <h1 className={styles.title}>
                            Fortress-Level Security for Your Data
                        </h1>
                        <p className={styles.subtitle}>
                            In a time when cybersecurity is a "revenue emergency," we see data security as a matter of clinical safety.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className={styles.details}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Lock className={styles.icon} />
                        <h3>Military-Grade Encryption</h3>
                        <p>All data is encrypted in transit and at rest using AES-256 standards.</p>
                    </div>
                    <div className={styles.card}>
                        <FileCheck className={styles.icon} />
                        <h3>SOC 2 Type II Certified</h3>
                        <p>Our controls are audited annually by independent third-party assessors.</p>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </Section>
        </main>
    );
}
