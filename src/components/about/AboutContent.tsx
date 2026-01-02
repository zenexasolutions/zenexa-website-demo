import React from 'react';
import Image from 'next/image';
import styles from './AboutContent.module.css';
import { Rocket, History, Shield, Eye, Award, Users, Lock } from 'lucide-react';

export const AboutContent = () => {
    return (
        <div className={styles.aboutContainer}>
            {/* Mission & Vision Section */}
            <section className={styles.missionVision}>
                <div className={styles.content}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionText}>
                            <h2 className={styles.sectionTitle}>Engineering the Future of Care</h2>
                            <p className={styles.text}>
                                At Zenexa Infotech, we think that administrative problems are the hidden enemy of patient care.
                                Every dollar lost to a technical denial and every hour a nurse spends looking for a medical record
                                is a resource that could have been used for healing. We are here to get those resources back.
                            </p>

                            <div className={styles.missionBox}>
                                <h3>Our Mission</h3>
                                <p>
                                    To give healthcare organizations safe, scalable, and smart solutions that produce measurable
                                    financial results while making sure they follow all the rules.
                                </p>
                            </div>
                        </div>

                        <div className={styles.missionImageWrapper}>
                            <Image
                                src="/images/about-mission.png"
                                alt="Healthcare team collaborating on patient care"
                                fill
                                className={styles.missionImage}
                            />
                        </div>
                    </div>

                    <div className={styles.visionBox}>
                        <Rocket size={40} className={styles.visionIcon} />
                        <h3>Our Vision</h3>
                        <p>
                            To be the operating system of trust for the US healthcare economy—a future where providers,
                            payers, and partners work together using technology-driven workflows that make administrative
                            waste unnecessary.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.storySection}>
                <div className={styles.storyHeader}>
                    <History size={18} />
                    <span>OUR STORY</span>
                </div>
                <h2 className={styles.sectionTitle}>From Frustration in the Industry to Leader in Innovation</h2>

                <div className={styles.storyContent}>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>The Catalyst (2025)</h4>
                                <p>
                                    Zenexa was started in 2025 by healthcare revenue cycle professionals who had seen
                                    the same painful pattern over and over again: great clinical teams losing money that
                                    could have been avoided, worrying about compliance, and having to deal with
                                    administrative tasks that took their attention away from patient care.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>The Difference</h4>
                                <p>
                                    Zenexa was made to be different. From the start, our model put results ahead of activity.
                                    We spent money on specialized talent—AAPC and AHIMA certified coders who are experts in
                                    their fields, not just regular billing clerks.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>The Launch (Today)</h4>
                                <p>
                                    Today, Zenexa is launching with a mission to redefine the industry. Armed with
                                    AAPC-certified experts and the latest in Agentic AI technology, we are
                                    building the next generation of healthcare RCM—a future where providers
                                    can focus entirely on clinical excellence while we handle the rest.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>The Rules That Help Us Make Every Choice</h2>
                <p className={styles.valuesIntro}>Our fundamental beliefs and code of conduct.</p>

                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <Shield size={32} className={styles.valueIcon} />
                        <h4>1. Integrity Without Compromise</h4>
                        <p>
                            We never suggest upcoding, questionable documentation practices, or aggressive billing
                            strategies that could get you in trouble with an audit.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <Award size={32} className={styles.valueIcon} />
                        <h4>2. Relentless Excellence</h4>
                        <p>
                            We don&apos;t use the phrase &quot;good enough.&quot; When industry standards say 12% denials,
                            we aim for 4%. No room for mediocrity.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <Eye size={32} className={styles.valueIcon} />
                        <h4>3. Radical Openness</h4>
                        <p>
                            No hiding behind vague numbers. You see everything about your revenue cycle performance
                            in real-time, even when we make mistakes.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <Users size={32} className={styles.valueIcon} />
                        <h4>4. Real Partnership</h4>
                        <p>
                            We only do well when you do well. This isn&apos;t transactional outsourcing; it&apos;s a
                            strategic partnership where your financial health is our main goal.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <Lock size={32} className={styles.valueIcon} />
                        <h4>5. Safety First</h4>
                        <p>
                            A single data breach can ruin a healthcare organization&apos;s reputation and financial
                            stability. We follow military-grade security rules.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
