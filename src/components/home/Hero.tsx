import React from 'react';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, CheckCircle2, Users, PlayCircle, Activity, DollarSign, Zap, BarChart3 } from 'lucide-react';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Ambient Background Effects */}
            <div className={`${styles.glow} ${styles.glow1}`} />
            <div className={`${styles.glow} ${styles.glow2}`} />
            <div className={`${styles.glow} ${styles.glow3}`} />

            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <div className={styles.badgeContainer}>
                        <Zap size={16} className="text-emerald-400" />
                        <span className={styles.badgeText}>Next-Gen Revenue Cycle Management</span>
                    </div>

                    <h1 className={styles.headline}>
                        The Future of <br />
                        <span className={styles.highlight}>Revenue Operations</span>
                    </h1>

                    <p className={styles.subheadline}>
                        Zenexa transforms your healthcare revenue cycle into a high-performance engine.
                        Reduce denials by 50% and accelerate cash flow with our AI-enhanced BPO solutions.
                    </p>

                    <div className={styles.actions}>
                        <Button size="lg">
                            Start Free Consultation
                        </Button>
                        <Button variant="secondary" size="lg" leftIcon={<PlayCircle size={18} />}>
                            View Platform Demo
                        </Button>
                    </div>

                    <div className={styles.trustBadges}>
                        <div className={styles.trustItem}>
                            <ShieldCheck size={20} className="text-emerald-400" />
                            <span>HIPAA Compliant</span>
                        </div>
                        <div className={styles.trustItem}>
                            <CheckCircle2 size={20} className="text-emerald-400" />
                            <span>99% Accuracy</span>
                        </div>
                        <div className={styles.trustItem}>
                            <Users size={20} className="text-emerald-400" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual - 3D Glass Interface */}
                <div className={styles.visual}>
                    <div className={styles.perspectiveContainer}>
                        {/* Main Dashboard Interface */}
                        <div className={`${styles.glassCard} ${styles.mainDashboard}`}>
                            <div className={styles.dashboardHeader}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Activity size={20} className="text-emerald-400" />
                                    <span style={{ fontWeight: 600, color: '#fff' }}>Live Revenue Monitor</span>
                                </div>
                                <div className={styles.windowControls}>
                                    <div className={styles.controlDot} style={{ background: '#ef4444' }} />
                                    <div className={styles.controlDot} style={{ background: '#f59e0b' }} />
                                    <div className={styles.controlDot} style={{ background: '#10b981' }} />
                                </div>
                            </div>

                            <div className={styles.statRow}>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Clean Claim Rate</div>
                                    <div className={styles.statValue} style={{ color: '#10b981' }}>99.2%</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Days in A/R</div>
                                    <div className={styles.statValue}>22 Days</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Cash Flow</div>
                                    <div className={styles.statValue} style={{ color: '#00f0ff' }}>+18%</div>
                                </div>
                            </div>

                            <div className={styles.chartContainer}>
                                {/* Abstract Chart Visualization */}
                                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4db8a8" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#4db8a8" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,150 C50,140 100,160 150,100 S250,120 300,50 S350,80 400,20 V200 H0 Z" fill="url(#chartFill)" />
                                    <path d="M0,150 C50,140 100,160 150,100 S250,120 300,50 S350,80 400,20" fill="none" stroke="#4db8a8" strokeWidth="3" strokeLinecap="round" />

                                    {/* Data Points */}
                                    <circle cx="150" cy="100" r="4" fill="#fff" />
                                    <circle cx="300" cy="50" r="4" fill="#fff" />
                                    <circle cx="400" cy="20" r="4" fill="#fff" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Stats Cards */}
                        <div className={`${styles.glassCard} ${styles.floatCard} ${styles.float1}`}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '10px', borderRadius: '10px' }}>
                                <DollarSign size={24} color="#10b981" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Revenue Recovered</div>
                                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>$4.2M</div>
                            </div>
                        </div>

                        <div className={`${styles.glassCard} ${styles.floatCard} ${styles.float2}`}>
                            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '10px', borderRadius: '10px' }}>
                                <BarChart3 size={24} color="#f59e0b" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Denials Resolved</div>
                                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>1,240</div>
                            </div>
                        </div>

                        <div className={`${styles.glassCard} ${styles.floatCard} ${styles.float3}`}>
                            <div style={{ background: 'rgba(0, 240, 255, 0.2)', padding: '10px', borderRadius: '10px' }}>
                                <Zap size={24} color="#00f0ff" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Efficiency Boost</div>
                                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>3x Faster</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
