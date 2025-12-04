import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Revenue Cycle Management | Zenexa',
    description: 'End-to-End RCM Solutions to Maximize Reimbursement.',
};

export default function RCMPage() {
    return (
        <>
            <PageHero
                headline="Revenue Cycle Management"
                subheadline="End-to-End Solutions to Maximize Reimbursement and Minimize Claims Denials"
                tagline="Our Core Expertise"
            />
            <ServiceDetail
                title="Understanding Revenue Cycle Management"
                description="Revenue Cycle Management encompasses the entire patient financial journey from registration through final payment posting. A well-optimized RCM process directly impacts your organization's financial health, reducing Days Sales Outstanding (DSO) and minimizing revenue leakage."
                features={[
                    "Average DSO reduction: 40-50%",
                    "Typical denial rate improvement: From 18% to 3-5%",
                    "Revenue recovery: $200K-$2M+ per client annually",
                    "Clean claim rates: 95%+ achievable",
                    "First-pass approval rates: 90%+"
                ]}
                process={[
                    { title: "Pre-Registration", description: "Accurate patient information capture and insurance verification." },
                    { title: "Coding & Charge Entry", description: "Expert ICD-10/CPT coding and accurate charge capture." },
                    { title: "Claim Submission", description: "Electronic claim submission with 99% first-pass rate." },
                    { title: "Payment Posting", description: "Accurate posting and reconciliation of payments." },
                    { title: "Denial Management", description: "Aggressive follow-up on denied claims." }
                ]}
            />
            <CTA />
        </>
    );
}
