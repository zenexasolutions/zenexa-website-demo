"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, Sparkles, Lock } from 'lucide-react';

export const CTA = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.badge}>
                            <CheckCircle2 size={16} />
                            <span>99%+ Accuracy Guaranteed</span>
                        </div>
                        <h2 className={styles.headline}>Ready to Transform Your Revenue Cycle?</h2>
                        <p className={styles.subheadline}>
                            Join 200+ healthcare organizations optimizing their financial performance with Zenexa.
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="John Doe" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Work Email</label>
                            <input type="email" className={styles.input} placeholder="john@hospital.com" required />
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Organization Type</label>
                            <select className={styles.select}>
                                <option>Hospital System</option>
                                <option>Physician Group</option>
                                <option>Health Plan</option>
                                <option>Ambulatory Surgery Center</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles.fullWidth}>
                            <Button size="lg" style={{ width: '100%', height: '56px', fontSize: '1.1rem' }} rightIcon={<ArrowRight size={20} />}>
                                Schedule Free Consultation
                            </Button>
                        </div>

                        <p className={styles.privacy}>
                            <Lock size={14} />
                            Your information is secure and encrypted.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
};
