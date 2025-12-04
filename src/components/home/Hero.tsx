import React from 'react';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, CheckCircle2, Clock, Users, PlayCircle, TrendingUp, Activity, DollarSign } from 'lucide-react';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.glow} ${styles.glow1}`} />
            <div className={`${styles.glow} ${styles.glow2}`} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        The Future of <span className={styles.highlight}>Healthcare Revenue</span> Operations
                    </h1>
                    <p className={styles.subheadline}>
                        Zenexa transforms your revenue cycle into a high-performance engine.
                        Reduce denials by 50% and accelerate cash flow with our AI-enhanced BPO solutions.
                    </p>

                    <div className={styles.badges}>
                        <div className={styles.badge}>
                            <ShieldCheck size={16} className="text-emerald-400" /> HIPAA Compliant
                        </div>
                        <div className={styles.badge}>
                            <CheckCircle2 size={16} className="text-emerald-400" /> 99% Accuracy
                        </div>
                        <div className={styles.badge}>
                            <Users size={16} className="text-emerald-400" /> 24/7 Support
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button size="lg">
                            Start Free Consultation
                        </Button>
                        <Button variant="secondary" size="lg" leftIcon={<PlayCircle size={18} />}>
                            View Platform Demo
                        </Button>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* Main Dashboard Card */}
                    <div className={styles.dashboardCard}>
                        <div className={styles.dashboardHeader}>
                            <span className={styles.dashboardTitle}>Revenue Command Center</span>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                            </div>
                        </div>

                        <div className={styles.statGrid}>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>Clean Claim Rate</div>
                                <div className={styles.statValue} style={{ color: '#10b981' }}>99.2%</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>Days in A/R</div>
                                <div className={styles.statValue}>22 Days</div>
                            </div>
                        </div>

                        <div className={styles.chartArea}>
                            {/* Abstract Chart SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4db8a8" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#4db8a8" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,120 C50,100 100,130 150,80 S250,100 300,40 S350,60 400,20 V150 H0 Z" fill="url(#chartGradient)" />
                                <path d="M0,120 C50,100 100,130 150,80 S250,100 300,40 S350,60 400,20" fill="none" stroke="#4db8a8" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className={`${styles.floatCard} ${styles.float1}`}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '8px', borderRadius: '8px' }}>
                            <DollarSign size={20} color="#10b981" />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Revenue Recovered</div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>$4.2M</div>
                        </div>
                    </div>

                    <div className={`${styles.floatCard} ${styles.float2}`}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '8px', borderRadius: '8px' }}>
                            <Activity size={20} color="#f59e0b" />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Denials Resolved</div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>1,240</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
