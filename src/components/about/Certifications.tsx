import React from 'react';
import styles from './Certifications.module.css';
import { Shield, Lock, Award, CheckCircle, FileCheck, AlertTriangle } from 'lucide-react';

const certs = [
    {
        title: "HIPAA & HITECH Compliance",
        description: "Certified assessors do annual audits of the HIPAA Security Rule. Business Associate Agreement meets §164.308 standards. Breach notification procedures follow §164.408 rules.",
        icon: <Shield className="text-teal-600" size={32} />,
        items: ["Annual HIPAA Security Rule audits", "BAA compliance", "PHI access logging with anomaly detection"]
    },
    {
        title: "SOC 2 Type II Certification",
        description: "Every year, an audit of the controls for security, availability, and privacy. AICPA-certified auditors check independently with unqualified opinions on all trust principles.",
        icon: <Lock className="text-teal-600" size={32} />,
        items: ["Annual security audits", "Independent validation", "Public report available upon request"]
    },
    {
        title: "AAPC Corporate Partner",
        description: "American Academy of Professional Coders corporate partner and provider of continuing education. Coding certification sponsor and contributor to industry standards.",
        icon: <Award className="text-teal-600" size={32} />,
        items: ["Provider of Continuing Education", "Coding Certification Sponsor", "Industry Standards Contributor"]
    },
    {
        title: "AHIMA Corporate Member",
        description: "American Health Information Management Association corporate member. HIM certification supporter, privacy & security advocate, and workforce development partner.",
        icon: <CheckCircle className="text-teal-600" size={32} />,
        items: ["HIM Certification Supporter", "Privacy & Security Advocate", "Workforce Development Partner"]
    }
];

export const Certifications = () => {
    return (
        <section className={styles.section}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <h2 className="heading-section mb-6">Third-Party Validated. Audited All The Time.</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Compliant with HIPAA & HITECH. We maintain the highest standards of compliance.
                        Our infrastructure is a fortress for your data.
                    </p>
                </div>

                <div className={styles.grid}>
                    {certs.map((cert, index) => (
                        <div key={index} className={`${styles.card} glass-card reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className={styles.iconWrapper}>
                                {cert.icon}
                            </div>
                            <h3 className={styles.title}>{cert.title}</h3>
                            <p className={styles.description}>{cert.description}</p>
                            <ul className={styles.itemList}>
                                {cert.items.map((item, i) => (
                                    <li key={i}><FileCheck size={14} /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
