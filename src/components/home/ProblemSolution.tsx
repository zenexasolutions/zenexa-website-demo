import React from 'react';
import styles from './ProblemSolution.module.css';
import { AlertTriangle, XCircle, DollarSign, Users, ShieldAlert, CheckCircle2, TrendingUp, ShieldCheck, Clock, Zap } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Problem Side (Chaos) */}
                <div className={`${styles.column} ${styles.problem}`}>
                    <h2 className={styles.problemTitle}>
                        <AlertTriangle size={40} />
                        <span>The Challenge</span>
                    </h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><DollarSign size={24} /></div>
                            <p className={styles.text}>Claim denials waste <strong>$200+ billion</strong> annually in US healthcare revenue.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><Clock size={24} /></div>
                            <p className={styles.text}>Manual processes delay payment cycles by <strong>60+ days</strong> on average.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><ShieldAlert size={24} /></div>
                            <p className={styles.text}>Compliance risks and HIPAA breaches can cost up to <strong>$50,000</strong> per violation.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><Users size={24} /></div>
                            <p className={styles.text}>Staffing shortages and high turnover destabilize critical operations.</p>
                        </div>
                    </div>
                </div>

                {/* Solution Side (Order) */}
                <div className={`${styles.column} ${styles.solution}`}>
                    <h2 className={styles.solutionTitle}>
                        <Zap size={40} />
                        <span>The Zenexa Edge</span>
                    </h2>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><CheckCircle2 size={24} /></div>
                            <p className={styles.text}>Our <strong>99%+ accuracy</strong> eliminates denials and maximizes reimbursements.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><TrendingUp size={24} /></div>
                            <p className={styles.text}>Streamlined RCM reduces Days in A/R to under <strong>30 days</strong>.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><ShieldCheck size={24} /></div>
                            <p className={styles.text}>Military-grade security and <strong>100% HIPAA compliance</strong> guaranteed.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}><Clock size={24} /></div>
                            <p className={styles.text}>Dedicated offshore + onshore teams with <strong>24/7 availability</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
