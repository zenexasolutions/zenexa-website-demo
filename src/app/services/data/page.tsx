import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Healthcare Data Management | Zenexa',
    description: 'Secure and accurate data entry, indexing, and management services.',
};

export default function DataPage() {
    return (
        <>
            <PageHero
                headline="Healthcare Data Management"
                subheadline="Organize and secure your patient data with our comprehensive management solutions."
                tagline="Data Integrity"
            />
            <ServiceDetail
                title="Accurate Data Solutions"
                description="From demographic entry to document indexing, we ensure your healthcare data is accurate, accessible, and secure. We support various EHR platforms and document management systems."
                features={[
                    "99.5% Data Accuracy",
                    "Demographic Entry & Verification",
                    "Document Indexing & Scanning",
                    "EHR Data Migration Support",
                    "24/7 Data Processing"
                ]}
                process={[
                    { title: "Data Receipt", description: "Secure receipt of data via SFTP or VPN." },
                    { title: "Entry/Indexing", description: "Manual or automated entry and indexing of documents." },
                    { title: "Verification", description: "Double-key entry or quality checks for accuracy." },
                    { title: "Upload", description: "Uploading processed data into your EHR/DMS." },
                    { title: "Archival", description: "Secure archival of original documents if required." }
                ]}
            />
            <CTA />
        </>
    );
}
