import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Pill, Shield, TrendingUp, BarChart3, Activity, Clock, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Pharmacy Billing & Revenue Cycle | Zenexa',
    description: 'Defending Pharmacy Margins in a Volatile Landscape. Specialized solutions for LTC and Home Infusion.',
};

export default function PharmacyBilling() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Defending Pharmacy Margins in a Volatile Landscape.</h1>
                        <p className={styles.heroSubtitle}>
                            The pharmacy business model is under siege. From the &quot;DIR Hangover&quot; to retroactive clawbacks, profitability requires vigilance. Zenexa provides a fortress around your revenue.
                        </p>
                        <div className="mt-10">
                            <Button size="lg">Secure Your Revenue Today</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Solutions Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Specialized for LTC & Home Infusion</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Expert systems for the complex details that generic billers miss.</p>
                    </div>

                    <div className={styles.specializationGrid}>
                        {/* Home Infusion */}
                        <div className={styles.specCard}>
                            <div className={styles.cardIcon}><Activity size={32} /></div>
                            <h3>Home Infusion Optimization</h3>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.itemBullet}></div>
                                    <p><strong>Per Diem vs. Itemized:</strong> Forensic checking of flushes, diluents, and prophylactic drugs that automated systems often miss.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.itemBullet}></div>
                                    <p><strong>Clinical Success Tracking:</strong> PA handling so patients get therapy sooner and you see the money faster.</p>
                                </div>
                            </div>
                        </div>

                        {/* LTC */}
                        <div className={styles.specCard}>
                            <div className={styles.cardIcon}><BarChart3 size={32} /></div>
                            <h3>LTC Census Matrix Management</h3>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.itemBullet}></div>
                                    <p><strong>Real-Time Census Checks:</strong> Tracking patient status changes (Part A to Part B to Medicaid) to stop denials at the source.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.itemBullet}></div>
                                    <p><strong>Speed of Prior Authorization:</strong> Efficient turnarounds for rapid fulfillment and billing cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PBM Tactic Defense */}
            <section className={styles.container}>
                <div className={styles.pbmSection}>
                    <div className={styles.gradientBlob}></div>
                    <div className={styles.container}>
                        <div className={styles.pbmGrid}>
                            <div className={styles.pbmContent}>
                                <h2 className={styles.pbmTitle}>Fighting PBM Tactics</h2>
                                <p className={styles.pbmText}>
                                    Pharmacy Benefit Managers (PBMs) use complicated algorithms to explain why they don&apos;t pay enough. We use data to fight back.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">DIR Fee Mitigation</h4>
                                            <p className="text-slate-400">Real-time adjudication rates to find &quot;underwater&quot; claims immediately.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Inventory Cash Flow</h4>
                                            <p className="text-slate-400">Free up working capital by speeding up the reimbursement lifecycle.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="mt-12 neon-glow-teal">View Detailed Defense Strategy</Button>
                            </div>

                            <div className={styles.visualSide}>
                                <div className={styles.mockupContainer}>
                                    <Image
                                        src="/images/pharmacy_billing_mockup.png"
                                        alt="Pharmacy Revenue Hub Mockup"
                                        width={1000}
                                        height={1000}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
