import React from 'react';
import styles from './ProblemSolution.module.css';
import { AlertCircle, XCircle, DollarSign, Users, ShieldAlert, CheckCircle2, TrendingUp, ShieldCheck, Clock, Check } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section className={styles.section}>
            {/* Problem Side */}
            <div className={`${styles.column} ${styles.problem}`}>
                <div className={styles.container}>
                    <h2 className={styles.title}>The Revenue Cycle Challenge</h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><DollarSign size={20} /></div>
                            <span>Claim denials waste $200+ billion annually in US healthcare</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><Clock size={20} /></div>
                            <span>Manual processes delay payment by 60+ days</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><ShieldAlert size={20} /></div>
                            <span>Compliance risks and HIPAA breaches cost up to $50,000 per violation</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><Users size={20} /></div>
                            <span>Staffing shortages and high turnover destabilize operations</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><XCircle size={20} /></div>
                            <span>In-house teams cost 3-5x more than outsourced solutions</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Solution Side */}
            <div className={`${styles.column} ${styles.solution}`}>
                <div className={styles.container}>
                    <h2 className={styles.title}>The Zenexa Advantage</h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><CheckCircle2 size={20} /></div>
                            <span>Our 99%+ accuracy eliminates denials and maximizes reimbursements</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><TrendingUp size={20} /></div>
                            <span>Streamlined RCM reduces Days in A/R to under 30 days</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
                            <span>Military-grade security and 100% HIPAA compliance</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><Clock size={20} /></div>
                            <span>Dedicated offshore + onshore teams with 24/7 availability</span>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.iconWrapper}><Check size={20} /></div>
                            <span>40% cost savings vs. in-house operations</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
