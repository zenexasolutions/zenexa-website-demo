"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export const CTA = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mainBox}>
                    <div className={styles.textContent}>
                        <div className={styles.badge}>
                            <CheckCircle2 size={16} />
                            <span>Uncompromised Precision</span>
                        </div>
                        <h2 className={styles.headline}>
                            Ready to Achieve the <br />
                            <span className={styles.accentText}>Extraordinary in Care?</span>
                        </h2>
                        <p className={styles.subheadline}>
                            Your revenue cycle: A simple look at your revenue. At a large scale. At peace.
                            Join 200+ organizations moving from chaos to clarity.
                        </p>

                        <div className={styles.trustSignals}>
                            <div className={styles.signal}>
                                <div className={styles.signalDot}></div>
                                <span>99%+ Accuracy Guaranteed</span>
                            </div>
                            <div className={styles.signal}>
                                <div className={styles.signalDot}></div>
                                <span>SOC 2 Type II Certified</span>
                            </div>
                            <div className={styles.signal}>
                                <div className={styles.signalDot}></div>
                                <span>24/7 Forensic Auditing</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSide}>
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Schedule a Strategy Session</h3>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.inputGroup}>
                                    <input type="text" className={styles.input} placeholder="Full Name" required />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input type="email" className={styles.input} placeholder="Work Email" required />
                                </div>

                                <div className={styles.inputGroup}>
                                    <select className={styles.select} defaultValue="">
                                        <option value="" disabled>Organization Type</option>
                                        <option value="hospital">Hospital System</option>
                                        <option value="physician">Physician Group</option>
                                        <option value="health-plan">Health Plan</option>
                                        <option value="asc">Ambulatory Surgery Center</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <Button size="lg" style={{ width: '100%', height: '56px', fontSize: '1rem', marginTop: '1rem' }} rightIcon={<ArrowRight size={20} />}>
                                    Book My Free Audit
                                </Button>

                                <p className={styles.privacy}>
                                    <Lock size={12} />
                                    Military-grade encryption for your data privacy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.decor1}></div>
            <div className={styles.decor2}></div>
        </Section>
    );
};
