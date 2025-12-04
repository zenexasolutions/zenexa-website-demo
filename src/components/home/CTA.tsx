"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const CTA = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.visual}>
                    <div className={styles.badge}>
                        <CheckCircle2 size={24} color="#22c55e" />
                        <span className={styles.badgeText}>99%+ Accuracy Guaranteed</span>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <h2 className={styles.headline}>Ready to Transform Your Revenue Cycle?</h2>
                    <p className={styles.subheadline}>Schedule a free 20-minute consultation with one of our healthcare BPO specialists</p>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name *</label>
                            <input type="text" className={styles.input} placeholder="John Doe" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Work Email *</label>
                            <input type="email" className={styles.input} placeholder="john@hospital.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Organization Type</label>
                            <select className={styles.select}>
                                <option>Hospital System</option>
                                <option>Physician Group</option>
                                <option>Health Plan</option>
                                <option>Ambulatory Surgery Center</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <Button size="lg" style={{ marginTop: '10px' }}>
                            Schedule Free Consultation
                        </Button>

                        <p className={styles.privacy}>
                            We respect your privacy. Your information is secure and will never be shared.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
};
