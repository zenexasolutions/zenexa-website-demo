import React from 'react';
import styles from './LogoStrip.module.css';
import { Building2, Activity, HeartPulse, Stethoscope, Cross, Shield } from 'lucide-react';

export const LogoStrip = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.text}>Trusted by 200+ Healthcare Organizations</p>
                <div className={styles.logoGrid}>
                    <div className={styles.logoItem}>
                        <Building2 size={24} className={styles.icon} />
                        <span>MediCare Plus</span>
                    </div>
                    <div className={styles.logoItem}>
                        <Activity size={24} className={styles.icon} />
                        <span>HealthFlow</span>
                    </div>
                    <div className={styles.logoItem}>
                        <HeartPulse size={24} className={styles.icon} />
                        <span>CareSystems</span>
                    </div>
                    <div className={styles.logoItem}>
                        <Stethoscope size={24} className={styles.icon} />
                        <span>DocGroup Inc.</span>
                    </div>
                    <div className={styles.logoItem}>
                        <Cross size={24} className={styles.icon} />
                        <span>Unity Health</span>
                    </div>
                    <div className={styles.logoItem}>
                        <Shield size={24} className={styles.icon} />
                        <span>SecureMed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
