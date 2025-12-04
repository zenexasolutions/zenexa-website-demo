import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Claims Processing Services | Zenexa',
    description: 'Efficient claims processing to accelerate your cash flow.',
};

export default function ClaimsPage() {
    return (
        <>
            <PageHero
                headline="Claims Processing Services"
                subheadline="Accelerate your cash flow with accurate and timely claims submission."
                tagline="Faster Payments"
            />
            <ServiceDetail
                title="Streamlined Claims Management"
                description="We handle the entire claims lifecycle, from eligibility verification to submission and tracking. Our goal is to ensure your claims are clean, compliant, and paid on the first submission."
                features={[
                    "98% Clean Claim Rate",
                    "Real-Time Eligibility Verification",
                    "Automated Claim Submission",
                    "Rejection Management",
                    "Secondary Claims Processing"
                ]}
                process={[
                    { title: "Eligibility Check", description: "Verify insurance coverage and benefits prior to service." },
                    { title: "Charge Capture", description: "Ensure all billable services are captured and coded correctly." },
                    { title: "Claim Scrubbing", description: "Automated and manual checks for errors before submission." },
                    { title: "Submission", description: "Electronic submission to payers via clearinghouse." },
                    { title: "Tracking", description: "Monitoring claim status until payment is received." }
                ]}
            />
            <CTA />
        </>
    );
}
