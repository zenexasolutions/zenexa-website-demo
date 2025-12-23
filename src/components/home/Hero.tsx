import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { Zap, Phone, Users, Activity, FileCheck, DollarSign } from 'lucide-react';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Decorative Elements */}
            <div className={styles.circles}>
                <div className={styles.circle1} />
                <div className={styles.circle2} />
                <div className={styles.circle3} />
            </div>

            <div className={styles.mainWrapper}>
                <div className={styles.container}>
                    {/* Left Content Side */}
                    <div className={styles.content}>
                        <h1 className={styles.headline}>
                            Powering growth with <br />
                            <span className={styles.highlight}>Intelligence and Skill.</span>
                        </h1>
                        <p className={styles.subheadline}>
                            We are leading healthcare RCM partners across the States dedicated to
                            providing exceptional revenue performance for all providers.
                        </p>

                        <div className={styles.actions}>
                            <Button size="lg">Get Started</Button>
                            <button className={styles.callButton}>
                                <div className={styles.callIcon}><Phone size={20} /></div>
                                <span>Schedule Strategy Call</span>
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <div className={styles.statIcon}><Users size={20} /></div>
                                <div className={styles.statText}>
                                    <strong>500+</strong>
                                    <span>Specialized Staff</span>
                                </div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statIcon}><Activity size={20} /></div>
                                <div className={styles.statText}>
                                    <strong>98%</strong>
                                    <span>First-Pass Rate</span>
                                </div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statIcon}><FileCheck size={20} /></div>
                                <div className={styles.statText}>
                                    <strong>1M+</strong>
                                    <span>Claims Analyzed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Side */}
                    <div className={styles.visual}>
                        <div className={styles.slantedBackground} />
                        <div className={styles.imageOverlay}>
                            <Image
                                src="/images/healthcare-team.png"
                                alt="Zenexa Expert Team"
                                width={800}
                                height={800}
                                className={styles.heroImage}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
