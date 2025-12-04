import React from 'react';
import styles from './WhyOutsource.module.css';
import { Section } from '@/components/ui/Section';
import { XCircle, CheckCircle2, Award, Users, Cpu, Headphones } from 'lucide-react';

export const WhyOutsource = () => {
    return (
        <Section className={styles.section}>
            <h2 className={styles.headline}>Why Outsource Your BPO Services to Zenexa?</h2>
            <p className={styles.subheadline}>The numbers tell the story</p>

            <div className={styles.grid}>
                {/* Challenge Column */}
                <div className={`${styles.column} ${styles.challenge}`}>
                    <h3 className={styles.columnTitle}>The Challenge</h3>
                    <div className={styles.item}>
                        <XCircle size={20} className={styles.icon} />
                        <span>In-house RCM team costs $600K-$1.2M annually</span>
                    </div>
                    <div className={styles.item}>
                        <XCircle size={20} className={styles.icon} />
                        <span>High turnover leads to inconsistent quality</span>
                    </div>
                    <div className={styles.item}>
                        <XCircle size={20} className={styles.icon} />
                        <span>Compliance risks and audit exposure</span>
                    </div>
                    <div className={styles.item}>
                        <XCircle size={20} className={styles.icon} />
                        <span>Systems integration challenges</span>
                    </div>
                    <div className={styles.item}>
                        <XCircle size={20} className={styles.icon} />
                        <span>Limited scalability for growth</span>
                    </div>
                </div>

                {/* Solution Column */}
                <div className={`${styles.column} ${styles.solution}`}>
                    <h3 className={styles.columnTitle}>The Zenexa Solution</h3>
                    <div className={styles.item}>
                        <CheckCircle2 size={20} className={styles.icon} />
                        <span>Outsourced RCM costs 40-60% less</span>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle2 size={20} className={styles.icon} />
                        <span>Stable, trained, certified team</span>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle2 size={20} className={styles.icon} />
                        <span>100% HIPAA compliance with BAA</span>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle2 size={20} className={styles.icon} />
                        <span>Seamless EHR/EMR integration</span>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle2 size={20} className={styles.icon} />
                        <span>Scale up or down based on needs</span>
                    </div>
                </div>
            </div>

            <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}><Award size={32} /></div>
                    <h4 className={styles.benefitTitle}>Experience</h4>
                    <p className={styles.benefitText}>15+ years in healthcare BPO. 200+ satisfied clients. Billions in claims processed.</p>
                </div>
                <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}><Users size={32} /></div>
                    <h4 className={styles.benefitTitle}>Expertise</h4>
                    <p className={styles.benefitText}>AAPC/AHIMA certified coders. Specialty-specific knowledge. Advanced training.</p>
                </div>
                <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}><Cpu size={32} /></div>
                    <h4 className={styles.benefitTitle}>Technology</h4>
                    <p className={styles.benefitText}>AI-powered coding assistance. RPA automation. Secure cloud infrastructure.</p>
                </div>
                <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}><Headphones size={32} /></div>
                    <h4 className={styles.benefitTitle}>Support</h4>
                    <p className={styles.benefitText}>24/7 dedicated support team. Rapid issue resolution. Regular status reporting.</p>
                </div>
            </div>
        </Section>
    );
};
