import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Shield, Zap, Database, ArrowRight, Layers, Search } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Provider Outreach & Medical Record Retrieval | Zenexa',
    description: 'Smart-Chase technology cuts turnaround times by 40%. Direct EHR integration with Epic, Cerner, and Athena.',
};

export default function ProviderOutreach() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>Revenue Resilience</span>
                        <h1 className={styles.heroTitle}>Retrieval at the Speed of Decision.</h1>
                        <p className={styles.heroSubtitle}>
                            Information delays are decision delays. Zenexa Infotech&apos;s &quot;Smart-Chase&quot; method
                            transforms retrieval, cutting turnaround times by as much as 40%.
                        </p>
                        <div className={styles.heroActions}>
                            <Button size="lg" rightIcon={<ArrowRight size={20} />}>Schedule Strategy Session</Button>
                            <Button variant="outline" size="lg">Review Success Stories</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Chase Solution */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.solutionGrid}>
                        <div className={styles.textSide}>
                            <h2 className={styles.sectionTitle}>The Smart-Chase Methodology</h2>
                            <p className={styles.description}>
                                Waiting 30 days for a medical chart is a problem for payers closing HEDIS gaps,
                                attorneys building mass tort cases, and underwriters assessing risk. We remove
                                the administrative friction from data exchange.
                            </p>

                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><Database size={24} /></div>
                                    <div className={styles.featureText}>
                                        <h3>Direct EHR Integration</h3>
                                        <p>Direct digital connections with major EHR platforms like Epic, Cerner, and Athena for instant extraction.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><Zap size={24} /></div>
                                    <div className={styles.featureText}>
                                        <h3>Predictive Outreach Algorithms</h3>
                                        <p>Our system determines the best time and channel (fax, portal, secure email, voice) to maximize provider response.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><Layers size={24} /></div>
                                    <div className={styles.featureText}>
                                        <h3>Clinical QA Layer</h3>
                                        <p>Every record is audited to ensure the page is complete, legible, and follows specific request parameters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.visualSide}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1576091160550-2187d80aeffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                                        alt="Zenexa Smart Retrieval Dashboard"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Standard Table */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.tableSection}>
                        <h2 className={styles.tableTitle}>The Zenexa Standard</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        <th>Metric</th>
                                        <th>Zenexa Standard</th>
                                        <th>Industry Average</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Turnaround Time (Expedited)</td>
                                        <td className={styles.zenexaValue}>10 Days</td>
                                        <td className={styles.industryValue}>14-21 Days</td>
                                    </tr>
                                    <tr>
                                        <td>Retrieval Success Rate</td>
                                        <td className={styles.zenexaValue}>95% within 30 Days</td>
                                        <td className={styles.industryValue}>75-80%</td>
                                    </tr>
                                    <tr>
                                        <td>Provider Abrasion Score</td>
                                        <td className={styles.zenexaValue}>Low (Digital-First)</td>
                                        <td className={styles.industryValue}>High (Phone-First)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Expertise Footer */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.footerCard}>
                        <div className={styles.footerDecor}></div>
                        <div className={styles.footerIcon}>
                            <Shield size={64} />
                        </div>
                        <h3>Legal-Grade Retrieval</h3>
                        <p>
                            Navigating state custodianship laws and HIPAA &quot;Right of Access&quot; requires legal expertise.
                            Our teams are trained on state-specific laws, making every authorization valid and every retrieval defensible.
                        </p>
                        <Button variant="secondary" size="lg">Consult Our Legal Team</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
