import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Denial Management | Zenexa',
    description: 'Recover lost revenue with our aggressive denial management services.',
};

export default function DenialPage() {
    return (
        <>
            <PageHero
                headline="Denial Management"
                subheadline="Turn denials into dollars with our proactive appeal and recovery strategies."
                tagline="Revenue Recovery"
            />
            <ServiceDetail
                title="Proactive Denial Resolution"
                description="Don't let denied claims eat into your profits. Our denial management team analyzes root causes, appeals unjust denials, and implements process improvements to prevent future rejections."
                features={[
                    "Root Cause Analysis",
                    "Aggressive Appeals Process",
                    "Prevention Strategies",
                    "Detailed Denial Reporting",
                    "High Recovery Rate"
                ]}
                process={[
                    { title: "Identification", description: "Categorize denials by reason code and payer." },
                    { title: "Analysis", description: "Determine the root cause (coding error, eligibility, etc.)." },
                    { title: "Correction", description: "Fix the error or gather necessary documentation." },
                    { title: "Appeal", description: "Submit corrected claim or formal appeal letter." },
                    { title: "Prevention", description: "Update workflows to prevent recurrence." }
                ]}
            />
            <CTA />
        </>
    );
}
