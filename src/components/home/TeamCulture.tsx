import React from 'react';
import styles from './TeamCulture.module.css';
import { Users, Globe, Shield, Activity, BarChart3, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const TeamCulture = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>

                {/* Team & Culture Split */}
                <div className={styles.splitSection}>
                    <div className={`${styles.textColumn} reveal`}>
                        <h2 className="heading-section text-gradient mb-6">The Zenexa Difference</h2>
                        <h3 className={styles.subHeading}>Expertise You Can Trust</h3>

                        <div className={styles.featureBlock}>
                            <h4 className={styles.featureTitle}>The Team</h4>
                            <p className={styles.featureText}>
                                AAPC-certified coders, CDI specialists led by an RN, and experts in getting legal-grade records. We bring clinical precision to revenue cycle management.
                            </p>
                        </div>

                        <div className={styles.featureBlock}>
                            <h4 className={styles.featureTitle}>The Culture</h4>
                            <p className={styles.featureText}>
                                We're not an offshore office; we're part of your main office. Our "One Team" philosophy means that your KPIs are the same as our survival metrics.
                            </p>
                        </div>

                        <Link href="/about">
                            <Button variant="secondary">Learn About Our Story</Button>
                        </Link>
                    </div>

                    <div className={`${styles.imageColumn} reveal delay-200`}>
                        <div className={`${styles.cultureCard} glass-card`}>
                            <div className={styles.statRow}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Certified Coders</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>24/7</span>
                                    <span className={styles.statLabel}>One Team Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Corporate Values */}
                <div className={styles.valuesSection}>
                    <h3 className={`${styles.centeredHeading} heading-section reveal`}>The Rules We Follow</h3>
                    <div className={styles.valuesGrid}>
                        <div className={`${styles.valueCard} glass-card reveal delay-100`}>
                            <Lock size={40} className="text-teal-600 mb-4" />
                            <h4>Uncompromised Compliance</h4>
                            <p>In a time when cybersecurity is a "revenue emergency," we see data security as a matter of clinical safety. Our infrastructure is like a fortress.</p>
                        </div>
                        <div className={`${styles.valueCard} glass-card reveal delay-200`}>
                            <BarChart3 size={40} className="text-teal-600 mb-4" />
                            <h4>Radical Transparency</h4>
                            <p>No fees that aren't clear and no processes that are hard to understand. Our real-time dashboards show you everything you need to know about the status of your revenue cycle.</p>
                        </div>
                        <div className={`${styles.valueCard} glass-card reveal delay-300`}>
                            <Activity size={40} className="text-teal-600 mb-4" />
                            <h4>Relentless Optimization</h4>
                            <p>The status quo is a resource that is losing value. We constantly improve our workflows to stay ahead of changes in payer policies and rules.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
