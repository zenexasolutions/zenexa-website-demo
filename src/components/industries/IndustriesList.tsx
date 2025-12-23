import React from 'react';
import Image from 'next/image';
import styles from './IndustriesList.module.css';
import { Section } from '@/components/ui/Section';
import { Building2, Stethoscope, Activity, HeartPulse, Truck, Network, CheckCircle2 } from 'lucide-react';

const industries = [
    {
        id: "hospitals",
        title: "Big Hospital Systems",
        subtitle: "Keeping Revenue Strong When Algorithms Say No",
        icon: <Building2 size={40} />,
        image: "/images/industry-hospital.png",
        problem: "You can't handle denials by hand anymore. The biggest threat in 2025 is the \"Algorithmic Denial,\" which are automated payer systems that flag claims for medical necessity on a large scale. Hospital operating margins are stabilizing but still thin.",
        solution: "We use an \"exception-based\" RCM model. Our AI agents take care of status checks and simple denials on their own, while our expert teams work on high-value clinical appeals and complicated DRG downgrades.",
        highlights: [
            { title: "Algorithmic Defense", desc: "AI-powered predictive modeling to find possible denials before submission." },
            { title: "Legacy A/R Recovery", desc: "Teams deployed to work on accounts 90+ days to recover \"written-off\" revenue." },
            { title: "CDI Services", desc: "RN-led teams ensure inpatient charts avoid medical necessity denials." }
        ]
    },
    {
        id: "physician-groups",
        title: "Physician Groups",
        subtitle: "From Fee-for-Service to Value-Based Precision",
        icon: <Stethoscope size={40} />,
        image: "/images/industry-physician.png",
        problem: "Multi-specialty groups are stuck in the \"Middle Zone.\" You deal with hospital-level billing complexity while making the switch to MIPS Value Pathways (MVPs) in 2025. Reporting quality measures while fighting lower fee schedules threatens practice independence.",
        solution: "We are your main business office. We protect your providers from administrative problems so they can focus on RVU production while we handle the switch to value-based reimbursement.",
        highlights: [
            { title: "MVP Readiness", desc: "Specialized reporting for 2025 MIPS Value Pathways to avoid fines." },
            { title: "Unified Billing", desc: "Single RCM strategy for multi-specialty coding across all departments." },
            { title: "Patient Engagement", desc: "\"Retail-style\" billing support that lowers bad debt." }
        ]
    },
    {
        id: "ascs",
        title: "Ambulatory Surgery Centers",
        subtitle: "Profit from Cases Beyond the Facility Fee",
        icon: <Activity size={40} />,
        image: "/images/industry-asc.png",
        problem: "ASCs work on a different chassis than hospitals. Implant reimbursement and device designs often hide the profit margin. With new bundling rules and lower implant payments, a missed bill or incorrect \"SG\" modifier can turn profitable surgery into a loss.",
        solution: "We break down the \"Facility vs. Professional\" wall. Our ASC-specific teams find unbundled revenue opportunities, ensuring you don't miss money on high-cost implants, anchors, and screws.",
        highlights: [
            { title: "Implant Revenue Defense", desc: "Special workflows to ensure pass-through payments are recorded correctly." },
            { title: "2026 Guideline Prep", desc: "Proactive coding audits for stricter high-acuity procedure rules." },
            { title: "Device-Intensive Logic", desc: "Optimized billing for device-intensive procedure codes." }
        ]
    },
    {
        id: "health-plans",
        title: "Health Plans",
        subtitle: "Bridging Risk, Quality, and Member Experience",
        icon: <HeartPulse size={40} />,
        image: "/images/industry-health-plan.png",
        problem: "The \"V28 Cliff\" and HEDIS digital transition make 2025 a big year for payers. CMS-HCC V28 needs detailed paperwork to keep risk scores, and NCQA is pushing for digital quality measurement. You need forensic accuracy in chart retrieval and data abstraction.",
        solution: "We are the engine room for your quality and risk departments. We use clinical abstraction and fast medical record retrieval to fill in HEDIS gaps and check risk scores without bothering providers.",
        highlights: [
            { title: "HEDIS Hybrid Support", desc: "Nurse abstraction teams handling peak-season volume with 99%+ reliability." },
            { title: "V28 Risk Validation", desc: "Chart reviews finding clinical evidence for codes that meet V28 standards." },
            { title: "Interoperability", desc: "FHIR-enabled data exchange services meeting CMS requirements." }
        ]
    },
    {
        id: "urgent-care",
        title: "Urgent Care Centers",
        subtitle: "High-Velocity RCM for the On-Demand Era",
        icon: <Truck size={40} />,
        image: "/images/industry-urgent-care.png",
        problem: "In urgent care, speed is everything and volume is key. You deal with \"Case Rate\" contracts vs. Fee-for-Service, extra attention on \"S-Codes,\" and Modifier 25 compliance for E/M services with procedures. A coding bottleneck stops cash flow immediately.",
        solution: "We offer \"Next-Day Coding\" to keep up with patient volume. Our systems are calibrated for urgent care speed, handling high volumes of lower-acuity visits with the same care as complicated claims.",
        highlights: [
            { title: "Case-Rate Logic", desc: "Automated logic separating Case Rate payers from FFS payers." },
            { title: "Occupational Medicine", desc: "Special handling of Workers' Comp and employer-paid services." },
            { title: "Modifier 25 Compliance", desc: "Documentation audits ensuring E/M visits stand up to audits." }
        ]
    },
    {
        id: "ipas-msos",
        title: "IPAs and MSOs",
        subtitle: "The Infrastructure of Risk-Bearing Healthcare",
        icon: <Network size={40} />,
        image: "/images/industry-physician.png",
        problem: "IPAs and MSOs are getting more involved in \"downside risk.\" Success requires delegated credentialing done correctly and keeping total cost of care under control. Managing a network of independent doctors needs a central brain for compliance and claims processing.",
        solution: "We are the backbone of your network's operations. We ensure your MSO runs as smoothly as a single business by managing the \"Delegated Credentialing\" roster and processing capitated claims.",
        highlights: [
            { title: "Delegated Credentialing", desc: "Provider list management meeting NCQA standards to prevent leakage." },
            { title: "Capitation & Claims", desc: "Correctly processing claims against capitated pools for on-time payment." },
            { title: "Leakage Analytics", desc: "Finding where patients go outside your network to tighten referrals." }
        ]
    }
];

export const IndustriesList = () => {
    return (
        <Section>
            <div className={styles.industriesContainer}>
                {industries.map((ind) => (
                    <div key={ind.id} className={`${styles.industryBlock} reveal`}>
                        <div className={styles.industryHeader}>
                            <div className={styles.headerContent}>
                                <div className={styles.iconBox}>
                                    {ind.icon}
                                </div>
                                <div className={styles.headerText}>
                                    <h2 className={styles.industryTitle}>{ind.title}</h2>
                                    <h3 className={styles.industrySubtitle}>{ind.subtitle}</h3>
                                </div>
                            </div>
                            <div className={styles.industryImageWrapper}>
                                <Image
                                    src={ind.image}
                                    alt={ind.title}
                                    fill
                                    className={styles.industryImage}
                                />
                            </div>
                        </div>

                        <div className={styles.industryBody}>
                            <div className={styles.problemSolution}>
                                <div className={styles.problemBox}>
                                    <strong>The Problem</strong>
                                    <p>{ind.problem}</p>
                                </div>
                                <div className={styles.solutionBox}>
                                    <strong>The Zenexa Solution</strong>
                                    <p>{ind.solution}</p>
                                </div>
                            </div>

                            <div className={styles.highlightsBox}>
                                <h4>Service Highlights</h4>
                                <ul className={styles.highlightsList}>
                                    {ind.highlights.map((h, i) => (
                                        <li key={i}>
                                            <CheckCircle2 className="text-teal-600" size={20} />
                                            <div>
                                                <strong>{h.title}</strong>
                                                {h.desc}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
