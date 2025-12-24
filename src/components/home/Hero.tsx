import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Immersive Deep Background */}
            <div className={styles.bgGradient} />
            <div className={styles.gridCanvas} />
            <div className={styles.ambientLight} />

            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Glowing Tech Badge */}
                    <div className={styles.techBadge}>
                        <span className={styles.techBadgeDot} />
                        <span className={styles.techBadgeText}>The New Standard in RCM Intelligence</span>
                    </div>

                    {/* Cinematic Headline */}
                    <h1 className={styles.headline}>
                        Revenue Resilience <br />
                        <span className={styles.gradientText}>Reimagined.</span>
                    </h1>

                    {/* Refined Subheadline */}
                    <p className={styles.subheadline}>
                        Zenexa fuses <strong>Agentic AI</strong> with elite <strong>Human Expertise</strong> to eliminate denials and accelerate cash flow.
                        <br className="hidden md:block" /> Experience the precision of a 99.9% clean claim rate.
                    </p>

                    {/* Single High-Impact CTA */}
                    <div className={styles.actions}>
                        <Link href="/contact" className={styles.glowButton}>
                            <span className={styles.glowButtonContent}>
                                Get Started <ArrowRight size={20} className={styles.iconArrow} />
                            </span>
                            <div className={styles.glowButtonBg} />
                        </Link>
                    </div>


                </div>

                {/* Holographic Visual Engine */}
                <div className={styles.visualEngine}>
                    <div className={styles.holoContainer}>
                        {/* Main Glass Interface */}
                        <div className={styles.glassPanelMain}>
                            <div className={styles.panelHeader}>
                                <div className={styles.panelDot} />
                                <div className={styles.panelDot} />
                                <div className={styles.panelDot} />
                            </div>
                            <div className={styles.panelContent}>
                                <Image
                                    src="/images/healthcare-team.png" // Placeholder for dashboard UI
                                    alt="Zenexa Intelligence Engine"
                                    width={800}
                                    height={500}
                                    className={styles.dashboardImage}
                                    priority
                                />
                                <div className={styles.scanline} />
                            </div>
                        </div>

                        {/* Floating Data Nodes */}
                        <div className={`${styles.dataNode} ${styles.node1}`}>
                            <div className={styles.nodeIcon}>🛡️</div>
                            <div className={styles.nodeContent}>
                                <span className={styles.nodeLabel}>Denial Rate</span>
                                <span className={styles.nodeValue}>0.02%</span>
                            </div>
                        </div>

                        <div className={`${styles.dataNode} ${styles.node2}`}>
                            <div className={styles.nodeIcon}>⚡</div>
                            <div className={styles.nodeContent}>
                                <span className={styles.nodeLabel}>Processing</span>
                                <span className={styles.nodeValue}>Real-Time</span>
                            </div>
                        </div>

                        {/* Ambient Orbs */}
                        <div className={styles.orbPrimary} />
                        <div className={styles.orbSecondary} />
                    </div>
                </div>
            </div>
        </section>
    );
};
