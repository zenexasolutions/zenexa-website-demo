import React from 'react';
import styles from './LogoStrip.module.css';
import { Building2, Activity, HeartPulse, Stethoscope, Cross, Shield, Zap, Globe } from 'lucide-react';

const logos = [
    { icon: <Building2 size={24} />, name: "MEDICARE PLUS" },
    { icon: <Activity size={24} />, name: "HEALTHFLOW" },
    { icon: <HeartPulse size={24} />, name: "CARESYSTEMS" },
    { icon: <Stethoscope size={24} />, name: "DOCGROUP" },
    { icon: <Cross size={24} />, name: "UNITY HEALTH" },
    { icon: <Shield size={24} />, name: "SECUREMED" },
    { icon: <Zap size={24} />, name: "RAPIDCARE" },
    { icon: <Globe size={24} />, name: "GLOBALHEALTH" },
];

export const LogoStrip = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.line}></div>
                    <p className={styles.text}>Trusted Expertise Across 200+ Organizations</p>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.scroller}>
                    <div className={styles.scrollerInner}>
                        {/* Triple the list to ensure smooth infinite scroll on wide screens */}
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className={styles.logoItem}>
                                <div className={styles.iconBox}>
                                    {logo.icon}
                                </div>
                                <span className={styles.name}>{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
