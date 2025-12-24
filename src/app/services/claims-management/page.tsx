import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FileCheck, ShieldAlert, Bot, Stethoscope, Microscope, Scissors, ArrowRight, Zap, Target } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Claims Management & Coding Support | Zenexa',
    description: 'Zero-Defect Revenue Cycle Management. Raising Clean Claim Rates to 98.7% with expert auditing and autonomous coding.',
};

export default function ClaimsManagement() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Zero-Defect Revenue Cycle Management.</h1>
                        <p className={styles.heroSubtitle}>
                            A &quot;clean claim&quot; is what keeps your practice going. We use expert auditing and autonomous technology to raise your CCR to over 98% and stop revenue loss at the source.
                        </p>
                        <div className={styles.heroActions}>
                            <Button size="lg">Optimize Your Claims Now</Button>
                            <Button variant="outline" size="lg">Review Performance Audit</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prevention vs Management */}
            <section className={styles.container}>
                <div className={styles.preventionSection}>
                    <div className={styles.preventionGrid}>
                        <div>
                            <h2 className={styles.preventionTitle}>The Denial Prevention System</h2>
                            <p className={styles.preventionText}>
                                We move from &quot;Denial Management&quot; (fixing mistakes) to &quot;Denial Prevention&quot; (stopping them before they happen).
                            </p>

                            <div className={styles.intelligenceCards}>
                                <div className={styles.intelligenceCard}>
                                    <h4>Front-End Intelligence</h4>
                                    <p>22% of denials are due to eligibility. Our automated bots check benefits 48 hours before appointments and alert you to gaps.</p>
                                </div>
                                <div className={styles.intelligenceCard}>
                                    <h4>Predictive Coding Scrubber</h4>
                                    <p>Using AI to identify NCCI edits, modifier mismatches, and medical necessity gaps before submission.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.imageContainer}>
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                                alt="Claims Intelligence Dashboard"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialty Expertise */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className="text-4xl font-extrabold text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}>Expertise in Your Specialty</h2>
                    <div className={styles.specialtyGrid}>
                        {/* Emergency Department */}
                        <div className={styles.specialtyCard}>
                            <div className={styles.iconBox}><Stethoscope size={32} /></div>
                            <h3>Emergency Department</h3>
                            <p>Experts at E/M leveling, critical care time tracking, and differentiating between active and historical diagnoses.</p>
                        </div>

                        {/* Radiology */}
                        <div className={styles.specialtyCard}>
                            <div className={styles.iconBox}><Microscope size={32} /></div>
                            <h3>Radiology</h3>
                            <p>Accurate anatomical specificity to ensure medical necessity and prevent denials for imaging services.</p>
                        </div>

                        {/* Surgery */}
                        <div className={styles.specialtyCard}>
                            <div className={styles.iconBox}><Scissors size={32} /></div>
                            <h3>Complex Surgery</h3>
                            <p>Correct unbundling analysis and precise modifier use for sessions involving multiple high-acuity procedures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics CTA */}
            <section className={styles.metricsCTA}>
                <div className={styles.container}>
                    <div className={styles.ctaWrapper}>
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>Aim for 98%+ Clean Claim Rate</h2>
                            <p className={styles.ctaText}>Don&apos;t settle for &quot;good enough&quot;. Let us show you how a zero-defect revenue cycle looks in action.</p>
                        </div>
                        <Button variant="secondary" size="lg" className="whitespace-nowrap">Schedule A Demo audit</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
