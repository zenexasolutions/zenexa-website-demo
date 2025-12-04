import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ComplianceDetail } from '@/components/compliance/ComplianceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Compliance & Security | Zenexa',
    description: 'Our commitment to HIPAA compliance, data security, and regulatory standards.',
};

export default function CompliancePage() {
    return (
        <>
            <PageHero
                headline="Compliance & Security"
                subheadline="Military-grade security and 100% regulatory compliance for your peace of mind."
                tagline="Trust & Safety"
            />
            <ComplianceDetail />
            <CTA />
        </>
    );
}
