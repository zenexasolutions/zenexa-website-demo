import React from 'react';
import styles from './WhyZenexaContent.module.css';
import { Section } from '@/components/ui/Section';
import { CheckCircle2, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export const WhyZenexaContent = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.grid}>
                {/* Block 1 */}
                <div className={styles.featureBlock}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Unmatched Quality & Accuracy</h2>
                        <p className={styles.text}>
                            Quality isn't just a buzzword for us; it's our core promise. We target a 99%+ accuracy rate across all our coding and billing services, setting a new benchmark for the industry.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}><CheckCircle2 size={20} className={styles.icon} /> 3-Tier Quality Audit Process</li>
                            <li className={styles.item}><CheckCircle2 size={20} className={styles.icon} /> 100% Certified Coders (AAPC/AHIMA)</li>
                            <li className={styles.item}><CheckCircle2 size={20} className={styles.icon} /> Continuous Training & Education</li>
                        </ul>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.imagePlaceholder}>
                            <span>Quality Assurance Image</span>
                        </div>
                    </div>
                </div>

                {/* Block 2 */}
                <div className={`${styles.featureBlock} ${styles.reverse}`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Data Security You Can Trust</h2>
                        <p className={styles.text}>
                            Your data security is our top priority. We operate in a 100% HIPAA-compliant environment with military-grade encryption and strict physical security measures.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}><ShieldCheck size={20} className={styles.icon} /> ISO 27001 Standards</li>
                            <li className={styles.item}><ShieldCheck size={20} className={styles.icon} /> SOC 2 Type II Framework</li>
                            <li className={styles.item}><ShieldCheck size={20} className={styles.icon} /> Biometric Access Controls</li>
                        </ul>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.imagePlaceholder}>
                            <span>Security Image</span>
                        </div>
                    </div>
                </div>

                {/* Block 3 */}
                <div className={styles.featureBlock}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Scalable Solutions for Growth</h2>
                        <p className={styles.text}>
                            Whether you're a small practice or a large hospital system, our solutions scale with you. We can ramp up team size within 2 weeks to meet your changing needs.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}><TrendingUp size={20} className={styles.icon} /> Flexible Engagement Models</li>
                            <li className={styles.item}><TrendingUp size={20} className={styles.icon} /> Rapid Team Deployment</li>
                            <li className={styles.item}><TrendingUp size={20} className={styles.icon} /> No Long-term Contracts Required</li>
                        </ul>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.imagePlaceholder}>
                            <span>Scalability Image</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
