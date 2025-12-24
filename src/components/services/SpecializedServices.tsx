import React from 'react';
import Link from 'next/link';
import styles from './SpecializedServices.module.css';
import { ArrowRight, BarChart, Code, Database, FileText, Layout, PieChart } from 'lucide-react';

const specializedServices = [
    {
        title: "Revenue Cycle Management",
        description: "Seamless financial journey from registration to payment.",
        link: "/services/rcm",
        icon: <BarChart size={24} />
    },
    {
        title: "Medical Coding",
        description: "Precision coding by AAPC & AHIMA certified experts.",
        link: "/services/coding",
        icon: <Code size={24} />
    },
    {
        title: "Claims Processing",
        description: "Accelerate cash flow with accurate submissions.",
        link: "/services/claims",
        icon: <FileText size={24} />
    },
    {
        title: "HEDIS & Quality",
        description: "Boost Star Ratings with expert quality support.",
        link: "/services/hedis",
        icon: <PieChart size={24} />
    },
    {
        title: "Denial Management",
        description: "Turn denials into dollars with recovery strategies.",
        link: "/services/denial",
        icon: <Layout size={24} />
    },
    {
        title: "Data Management",
        description: "Secure and accurate indexing and entry services.",
        link: "/services/data",
        icon: <Database size={24} />
    }
];

export const SpecializedServices = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Precision-Engineered <span className="text-gradient">Specializations</span></h2>
                    <p className={styles.subtitle}>
                        Beyond our core expertise, we provide specialized solutions tailored to the unique operational challenges of healthcare enterprises.
                    </p>
                </div>

                <div className={styles.grid}>
                    {specializedServices.map((service, index) => (
                        <Link href={service.link} key={index} className={styles.card}>
                            <div className={styles.iconBox}>
                                {service.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            <div className={styles.arrowBox}>
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
