import React from 'react';
import styles from './LogoStrip.module.css';
import { Building2, Activity, HeartPulse, Stethoscope, Cross, Shield, Zap, Globe } from 'lucide-react';

const logos = [
    { icon: <Building2 size={28} />, name: "MediCare Plus" },
    { icon: <Activity size={28} />, name: "HealthFlow" },
    { icon: <HeartPulse size={28} />, name: "CareSystems" },
    { icon: <Stethoscope size={28} />, name: "DocGroup Inc." },
    { icon: <Cross size={28} />, name: "Unity Health" },
    { icon: <Shield size={28} />, name: "SecureMed" },
    { icon: <Zap size={28} />, name: "RapidCare" },
    { icon: <Globe size={28} />, name: "GlobalHealth" },
];

export const LogoStrip = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.text}>Trusted by 200+ Healthcare Organizations</p>

                <div className={styles.scroller}>
                    <div className={styles.scrollerInner}>
                        {/* Original List */}
                        {logos.map((logo, index) => (
                            <div key={index} className={styles.logoItem}>
                                <span className={styles.icon}>{logo.icon}</span>
                                <span>{logo.name}</span>
                            </div>
                        ))}
                        {/* Duplicated List for Infinite Scroll */}
                        {logos.map((logo, index) => (
                            <div key={`dup-${index}`} className={styles.logoItem}>
                                <span className={styles.icon}>{logo.icon}</span>
                                <span>{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
