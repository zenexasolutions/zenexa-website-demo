import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'HEDIS Services | Zenexa',
    description: 'Improve your Star Ratings with our HEDIS abstraction and retrieval services.',
};

export default function HedisPage() {
    return (
        <>
            <PageHero
                headline="HEDIS & Quality Measures"
                subheadline="Boost your Star Ratings and quality scores with expert HEDIS support."
                tagline="Quality Assurance"
            />
            <ServiceDetail
                title="HEDIS Abstraction & Retrieval"
                description="We help health plans and provider groups improve their HEDIS scores through accurate medical record retrieval and abstraction. Our team is trained on the latest NCQA technical specifications."
                features={[
                    "Experienced HEDIS Nurses & Coders",
                    "High Retrieval Success Rates",
                    "Over-read & Quality Assurance",
                    "Star Rating Improvement Strategies",
                    "Year-Round Hybrid Support"
                ]}
                process={[
                    { title: "Project Planning", description: "Define scope, timeline, and target measures." },
                    { title: "Record Retrieval", description: "Efficient retrieval of medical records from provider offices." },
                    { title: "Abstraction", description: "Clinical data abstraction by experienced nurses/coders." },
                    { title: "Over-read", description: "Quality control checks to ensure data accuracy." },
                    { title: "Reporting", description: "Detailed reporting on measure compliance and gaps." }
                ]}
            />
            <CTA />
        </>
    );
}
