import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Ambient Background Effects */}
            <div className={styles.ambientGlow} />
            <div className={styles.gridOverlay} />

            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        The Future of Revenue Cycle Management
                    </div>

                    {/* Main Headline */}
                    <h1 className={styles.headline}>
                        Revenue Resilience for the <br />
                        <span className={styles.highlight}>Modern Healthcare Enterprise.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className={styles.subheadline}>
                        Zenexa: Powering the Pulse of Modern Healthcare. We combine <strong>Agentic AI</strong> with <strong>Certified HIM Professionals</strong> to deliver uncompromised compliance and best-in-class performance.
                    </p>

                    {/* CTAs */}
                    <div className={styles.actions}>
                        <Button size="lg" className={styles.primaryCta}>
                            Get Started <ArrowRight size={18} />
                        </Button>
                        <button className={styles.secondaryCta}>
                            <PlayCircle size={22} />
                            <span>See How It Works</span>
                        </button>
                    </div>

                    {/* Trusted By / Social Proof (Text only) */}
                    <div className={styles.trustedBy}>
                        <p>Trusted by forward-thinking healthcare organizations nationwide</p>
                    </div>
                </div>

                {/* Visual / Image Section */}
                <div className={styles.visualWrapper}>
                    <div className={styles.imageCard}>
                        <div className={styles.cardGlow} />
                        <Image
                            src="/images/healthcare-team.png"
                            alt="Zenexa Advanced RCM Dashboard"
                            width={900}
                            height={600}
                            className={styles.heroImage}
                            priority
                            quality={100}
                        />
                        {/* Floating Elements for 3D effect */}
                        <div className={styles.floatingCard1}>
                            <div className={styles.cardIcon}>🛡️</div>
                            <div className={styles.cardText}>
                                <strong>99.9%</strong>
                                <span>Compliance Accuracy</span>
                            </div>
                        </div>
                        <div className={styles.floatingCard2}>
                            <div className={styles.cardIcon}>⚡</div>
                            <div className={styles.cardText}>
                                <strong>Automated</strong>
                                <span>Claim Scrubbing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
