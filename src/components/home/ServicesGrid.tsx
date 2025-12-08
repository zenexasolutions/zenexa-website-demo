import React from 'react';
import styles from './ServicesGrid.module.css';
import { Section } from '@/components/ui/Section';
import { RefreshCw, FileText, CreditCard, Target, TrendingUp, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <RefreshCw size={32} />,
        title: "Revenue Cycle Management",
        description: "End-to-end RCM from pre-registration to final payment posting. Reduce DSO by 40-50% and achieve 95%+ clean claim rates.",
        link: "/services/rcm"
    },
    {
        icon: <FileText size={32} />,
        title: "Medical Coding",
        description: "AAPC/AHIMA certified coders delivering 99%+ accuracy across ICD-10, CPT, and HCPCS codes. Specialty-specific expertise.",
        link: "/services/coding"
    },
    {
        icon: <CreditCard size={32} />,
        title: "Claims Processing",
        description: "Real-time eligibility verification, pre-auth management, and automated claim submission. Achieve 90%+ first-pass approval rates.",
        link: "/services/claims"
    },
    {
        icon: <Target size={32} />,
        title: "HEDIS Gap Closure",
        description: "Mobile gap closure programs and preventive screening coordination. Improve Star ratings and member outcomes.",
        link: "/services/hedis"
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Denial Management",
        description: "Aggressive denial follow-up with 70%+ successful appeal rates. Recover underpaid and denied claims efficiently.",
        link: "/services/denial"
    },
    {
        icon: <Database size={32} />,
        title: "Data Management",
        description: "Accurate medical record data entry, scanning, indexing, and chart management with 99%+ quality assurance.",
        link: "/services/data"
    }
];

export const ServicesGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.headline}>
                    Comprehensive Healthcare Solutions
                </h2>
                <p className={styles.subheadline}>
                    Expert services across the entire revenue cycle, tailored to your organization&apos;s needs.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <Link href={service.link} key={index} className={styles.cardLink}>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            <div className={styles.cta}>
                                Learn More <ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
