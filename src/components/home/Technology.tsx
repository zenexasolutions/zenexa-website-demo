import React from 'react';
import styles from './Technology.module.css';
import { Cpu, Shield, Activity } from 'lucide-react';

export const Technology = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.content} reveal`}>
                    <h2 className="heading-section text-gradient mb-6">The Technology</h2>
                    <p className={styles.lead}>
                        AI-powered claim scrubbing, predictive denial modeling, and automated checks of eligibility.
                    </p>
                    <div className={styles.techGrid}>
                        <div className={`${styles.techCard} glass-card reveal delay-100`}>
                            <Cpu size={32} className="text-teal-500 mb-4" />
                            <h4>AI Scrubbing</h4>
                            <p>Automated error detection before submission.</p>
                        </div>
                        <div className={`${styles.techCard} glass-card reveal delay-200`}>
                            <Activity size={32} className="text-teal-500 mb-4" />
                            <h4>Predictive Modeling</h4>
                            <p>Forecast denial risks with precision.</p>
                        </div>
                        <div className={`${styles.techCard} glass-card reveal delay-300`}>
                            <Shield size={32} className="text-teal-500 mb-4" />
                            <h4>Auto-Eligibility</h4>
                            <p>Real-time coverage verification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
