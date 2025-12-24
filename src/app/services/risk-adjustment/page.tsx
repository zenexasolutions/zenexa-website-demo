import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Shield, Target, FileCheck, Layers, ArrowRight, Zap, CheckCircle2, Activity, BarChart2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Chart Abstraction and Risk Adjustment (HCC) | Zenexa',
    description: 'Accurate Coding for the V28 Era. Helping you deal with the change to the CMS-HCC Version 28 model with clinical accuracy.',
};

export default function RiskAdjustment() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>Clinical Precision</span>
                        <h1 className={styles.heroTitle}>Accurate Coding for the V28 Era.</h1>
                        <p className={styles.heroSubtitle}>
                            The transition to CMS-HCC Version 28 represents a fundamental shift in acuity measurement.
                            Zenexa Infotech provides the clinical depth needed to navigate this transition with
                            uncompromised accuracy.
                        </p>
                        <div className={styles.heroActions}>
                            <Button size="lg" rightIcon={<ArrowRight size={20} />}>Analyze Your Risk Scores</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Model Split */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.modelGrid}>
                        <div className={styles.textSide}>
                            <h2 className={styles.sectionTitle}>The &quot;Two-Model&quot; Proficiency</h2>
                            <p className={styles.description}>
                                During the 2024–2026 phase-in period, risk scores are blended (67% V28 / 33% V24).
                                Your coding partner must be expert in both schemas simultaneously. We isolate the
                                clinical indicators that drive accuracy in both models.
                            </p>

                            <div className={styles.infoCards}>
                                <div className={`${styles.infoCard} ${styles.teal}`}>
                                    <div className={styles.iconBox}><Shield size={24} /></div>
                                    <div className={styles.cardText}>
                                        <h4>V28 Model Focus</h4>
                                        <p>Intensive focus on heart-disease interactions and severe malnutrition specificity required by the new model.</p>
                                    </div>
                                </div>
                                <div className={`${styles.infoCard} ${styles.slate}`}>
                                    <div className={styles.iconBox}><Layers size={24} /></div>
                                    <div className={styles.cardText}>
                                        <h4>Audit-Ready Validation</h4>
                                        <p>Strict validation of MEAT criteria to ensure every diagnosis is defensible in RADV audits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.visualSide}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                                        alt="Risk Adjustment Analysis"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEAT Protocol */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.meatSection}>
                        <h2 className={styles.meatTitle}>The MEAT Validation Protocol</h2>
                        <p className={styles.meatSubtitle}>Every abstracted diagnosis must be supported by active clinical evidence.</p>

                        <div className={styles.meatGrid}>
                            <div className={styles.meatCard}>
                                <span className={styles.letter}>M</span>
                                <h4>Monitor</h4>
                                <p>Signs, symptoms, and disease progression.</p>
                            </div>
                            <div className={styles.meatCard}>
                                <span className={styles.letter}>E</span>
                                <h4>Evaluate</h4>
                                <p>Test results and treatment response review.</p>
                            </div>
                            <div className={styles.meatCard}>
                                <span className={styles.letter}>A</span>
                                <h4>Assess</h4>
                                <p>Physical exam and medical record audit.</p>
                            </div>
                            <div className={styles.meatCard}>
                                <span className={styles.letter}>T</span>
                                <h4>Treat</h4>
                                <p>Medications and active management plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Synergy */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.synergyCard}>
                        <div className={styles.synergyContent}>
                            <h2 className={styles.sectionTitle}>HEDIS & Quality Synergy</h2>
                            <p className={styles.description}>
                                Our &quot;One Chart, Two Benefits&quot; workflow captures HEDIS data points during
                                risk adjustment reviews, protecting your RAF scores while simultaneously
                                elevating your Star Ratings.
                            </p>
                            <ul className={styles.synergyList}>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Gaps-in-Care Identification</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Star Rating Optimization</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Clinical Abstraction Efficiency</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.performanceCard}>
                            <div className={styles.cardHeader}>
                                <BarChart2 size={32} className={styles.accentIcon} />
                                <span className={styles.performanceBadge}>Performance</span>
                            </div>
                            <h3 className={styles.cardTitle}>Forensic Chart Review</h3>
                            <p className={styles.cardText}>Our teams identify historical conditions that lack current documentation, triggering proactive provider engagement.</p>
                            <Button variant="secondary" fullWidth>Request Case Study</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
