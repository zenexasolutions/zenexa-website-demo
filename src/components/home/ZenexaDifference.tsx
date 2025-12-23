import React from 'react';
import Image from 'next/image';
import styles from './ZenexaDifference.module.css';
import { Section } from '@/components/ui/Section';
import { Cpu, Users, Heart, CheckCircle2 } from 'lucide-react';

export const ZenexaDifference = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.topContent}>
                    <div className={styles.header}>
                        <span className={styles.badge}>The Zenexa Difference</span>
                        <h2 className={styles.headline}>Intelligence with a Human in the Loop</h2>
                        <div className={styles.accentLine}></div>
                    </div>

                    <div className={styles.mainGrid}>
                        <div className={styles.textContent}>
                            <p className={styles.intro}>
                                The industry is quickly moving toward automation that doesn&apos;t require any supervision.
                                <span className={styles.highlight}> We think this is wrong.</span> AI is strong, but it doesn&apos;t have
                                the subtlety of clinical work.
                            </p>
                            <p className={styles.description}>
                                Zenexa keeps the right balance: we use <strong>Agentic AI</strong> to handle the repetitive parts
                                of data processing, but we use <strong>Certified HIM Professionals</strong> to handle the exceptions.
                            </p>

                            <div className={styles.uspList}>
                                <div className={styles.uspItem}>
                                    <CheckCircle2 size={20} className={styles.uspIcon} />
                                    <span>Bridging the clinical gap with AI precision</span>
                                </div>
                                <div className={styles.uspItem}>
                                    <CheckCircle2 size={20} className={styles.uspIcon} />
                                    <span>Expert oversight on every edge case</span>
                                </div>
                                <div className={styles.uspItem}>
                                    <CheckCircle2 size={20} className={styles.uspIcon} />
                                    <span>Scalable technology meets human intuition</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.visualSide}>
                            <div className={styles.imageContainer}>
                                <div className={styles.glowBox}></div>
                                <div className={styles.imageScrollWrapper}>
                                    <Image
                                        src="/images/zenexa-difference.png"
                                        alt="AI and Human Expertise Working Together"
                                        fill
                                        className={styles.image}
                                        priority
                                    />
                                </div>
                                <div className={styles.floatingCard}>
                                    <div className={styles.floatingTag}>Agentic AI</div>
                                    <div className={styles.floatingTag}>HIM Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.pillarsGrid}>
                    <div className={styles.pillar}>
                        <div className={styles.pillarPlate}>
                            <div className={styles.iconContainer}>
                                <Cpu size={32} />
                                <div className={styles.iconGlow}></div>
                            </div>
                            <h3 className={styles.pillarTitle}>The Technology</h3>
                            <p className={styles.pillarText}>
                                AI-powered claim scrubbing, predictive denial modeling, and automated checks of eligibility.
                            </p>
                        </div>
                    </div>

                    <div className={styles.pillar}>
                        <div className={styles.pillarPlate}>
                            <div className={styles.iconContainer}>
                                <Users size={32} />
                                <div className={styles.iconGlow}></div>
                            </div>
                            <h3 className={styles.pillarTitle}>The Team</h3>
                            <p className={styles.pillarText}>
                                AAPC-certified coders, CDI specialists led by an RN, and experts in getting legal-grade records.
                            </p>
                        </div>
                    </div>

                    <div className={styles.pillar}>
                        <div className={styles.pillarPlate}>
                            <div className={styles.iconContainer}>
                                <Heart size={32} />
                                <div className={styles.iconGlow}></div>
                            </div>
                            <h3 className={styles.pillarTitle}>The Culture</h3>
                            <p className={styles.pillarText}>
                                We&apos;re not an offshore office; we&apos;re part of your main office. Our &quot;One Team&quot; philosophy
                                means that your KPIs are our survival metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
