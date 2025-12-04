import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Medical Coding Services | Zenexa',
    description: 'Certified medical coding services with 99% accuracy.',
};

export default function CodingPage() {
    return (
        <>
            <PageHero
                headline="Medical Coding Services"
                subheadline="Precision coding by AAPC & AHIMA certified experts to maximize your revenue."
                tagline="Accuracy Matters"
            />
            <ServiceDetail
                title="Expert Medical Coding Solutions"
                description="Our team of certified coders ensures accurate and compliant coding for all specialties. We stay updated with the latest ICD-10, CPT, and HCPCS guidelines to minimize denials and optimize reimbursement."
                features={[
                    "99%+ Coding Accuracy Guaranteed",
                    "Certified Coders (CPC, CCS, CCS-P)",
                    "Specialty-Specific Expertise",
                    "24-Hour Turnaround Time",
                    "DNFB Reduction Strategies"
                ]}
                process={[
                    { title: "Chart Retrieval", description: "Secure access to medical records via EHR or scanned documents." },
                    { title: "Clinical Review", description: "Thorough review of documentation for specificity and completeness." },
                    { title: "Code Assignment", description: "Accurate assignment of ICD-10, CPT, and HCPCS codes." },
                    { title: "Quality Audit", description: "Multi-tier audit process to ensure accuracy before submission." },
                    { title: "Feedback Loop", description: "Regular feedback to providers on documentation improvements." }
                ]}
            />
            <CTA />
        </>
    );
}
