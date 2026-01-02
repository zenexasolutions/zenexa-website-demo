import React from 'react';
import styles from './LogoStrip.module.css';
import { Shield, Activity, CheckCircle2, Building2, HeartPulse, Globe } from 'lucide-react';

const logos = [
    { icon: <Shield size={24} />, name: "HIPAA COMPLIANT" },
    { icon: <Activity size={24} />, name: "HL7 STANDARDS" },
    { icon: <CheckCircle2 size={24} />, name: "AAPC CERTIFIED" },
    { icon: <Building2 size={24} />, name: "CMS ALIGNED" },
    { icon: <HeartPulse size={24} />, name: "ICD-10 READY" },
    { icon: <Activity size={24} />, name: "CPT EXPERTISE" },
    { icon: <Shield size={24} />, name: "SOC2 TARGETED" },
    { icon: <Globe size={24} />, name: "FHIR COMPLIANT" },
];

export const LogoStrip = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.line}></div>
                    <p className={styles.text}>Built for Modern Healthcare Standards</p>
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
