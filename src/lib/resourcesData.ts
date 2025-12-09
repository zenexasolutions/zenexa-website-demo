export interface Resource {
    slug: string;
    title: string;
    excerpt: string;
    category: "Guide" | "Whitepaper" | "Article" | "Case Study";
    date: string;
    imagePlaceholder: string;
    readTime: string;
    author: {
        name: string;
        role: string;
        image?: string;
    };
    content: {
        type: 'paragraph' | 'heading' | 'list' | 'quote';
        text?: string;
        items?: string[];
    }[];
}

export const resources: Resource[] = [
    {
        slug: "2025-icd-10-coding-updates",
        title: "2025 ICD-10 Coding Updates: What You Need to Know",
        excerpt: "A comprehensive guide to the latest ICD-10 coding changes effective October 1, 2024. Ensure your practice is prepared.",
        category: "Guide",
        date: "October 15, 2024",
        readTime: "8 min read",
        imagePlaceholder: "ICD-10 Updates Image",
        author: {
            name: "Dr. Sarah Mitchell",
            role: "Chief Medical Officer"
        },
        content: [
            {
                type: 'heading',
                text: 'Understanding the 2025 Updates'
            },
            {
                type: 'paragraph',
                text: 'The 2025 ICD-10-CM code set updates bring significant changes that healthcare providers must be aware of to ensure compliance and proper reimbursement. With over 250 new codes added, the focus this year is heavily on social determinants of health (SDOH), external causes of morbidity, and more granular specificity for certain chronic conditions.'
            },
            {
                type: 'quote',
                text: 'Accuracy in coding is not just about compliance; it is about painting a precise picture of patient health.'
            },
            {
                type: 'heading',
                text: 'Key Areas of Change'
            },
            {
                type: 'list',
                items: [
                    'Social Determinants of Health (Z55-Z65): Expanded codes to capture housing instability and education levels.',
                    'Musculoskeletal System: New specificity for intervertebral disc disorders.',
                    'External Causes: Enhanced tracking for e-bike and e-scooter injuries.'
                ]
            },
            {
                type: 'paragraph',
                text: 'Reviewing these changes early allows your coding team to update templates and EHR macros, reducing the risk of claim denials due to unspecified codes.'
            }
        ]
    },
    {
        slug: "reducing-claim-denials-strategies",
        title: "Reducing Claim Denials: Top 5 Strategies",
        excerpt: "Learn the most effective strategies to minimize claim denials and improve your first-pass acceptance rate.",
        category: "Whitepaper",
        date: "September 28, 2024",
        readTime: "12 min read",
        imagePlaceholder: "Claim Denials Image",
        author: {
            name: "James Carter",
            role: "VP of Revenue Cycle"
        },
        content: [
            {
                type: 'paragraph',
                text: 'Claim denials are the silent killer of healthcare revenue. Industry averages suggest that 5-10% of claims are denied, but top-performing organizations keep this under 4%. This whitepaper outlines five proven strategies to join the ranks of high performers.'
            },
            {
                type: 'heading',
                text: '1. Automated Eligibility Verification'
            },
            {
                type: 'paragraph',
                text: 'The leading cause of denials is eligibility issues. Implementing real-time automated verification prior to service can eliminate up to 25% of denials instantly.'
            },
            {
                type: 'heading',
                text: '2. Predictive Denial Analytics'
            },
            {
                type: 'paragraph',
                text: 'Using AI to analyze historical data allows you to predict which claims are likely to be denied before they are submitted. This "pre-submission audit" is a game changer.'
            }
        ]
    },
    {
        slug: "impact-of-ai-on-rcm",
        title: "The Impact of AI on Revenue Cycle Management",
        excerpt: "Explore how Artificial Intelligence and Machine Learning are revolutionizing healthcare RCM and billing processes.",
        category: "Article",
        date: "September 10, 2024",
        readTime: "6 min read",
        imagePlaceholder: "AI in RCM Image",
        author: {
            name: "Elena Rodriguez",
            role: "CTO, Zenexa"
        },
        content: [
            {
                type: 'paragraph',
                text: 'Artificial Intelligence is no longer a buzzword; it is a functional reality in modern RCM. From autonomous coding to predictive payer behavior modeling, AI is reshaping the efficiency landscape.'
            },
            {
                type: 'heading',
                text: 'Autonomous Coding'
            },
            {
                type: 'paragraph',
                text: 'AI algorithms can now accurately code simple encounters (like radiology and pathology) with 98% accuracy, freeing up human coders to handle complex surgical cases.'
            }
        ]
    },
    {
        slug: "outsourcing-vs-inhouse-rcm",
        title: "Outsourcing vs. In-House RCM: A Cost-Benefit Analysis",
        excerpt: "A detailed comparison of the costs and benefits of outsourcing your revenue cycle management versus keeping it in-house.",
        category: "Case Study",
        date: "August 22, 2024",
        readTime: "15 min read",
        imagePlaceholder: "Outsourcing Analysis Image",
        author: {
            name: "Analytic Team",
            role: "Zenexa Research"
        },
        content: [
            {
                type: 'heading',
                text: 'The Dilemma'
            },
            {
                type: 'paragraph',
                text: 'Many healthcare organizations struggle with the decision to build vs. buy when it comes to RCM. This case study looks at a 200-bed hospital system that transitioned to an outsourced model.'
            }
        ]
    },
    {
        slug: "hipaa-compliance-2025",
        title: "HIPAA Compliance in 2025: Best Practices",
        excerpt: "Stay compliant with the latest HIPAA regulations and protect your patient data with these essential best practices.",
        category: "Guide",
        date: "August 05, 2024",
        readTime: "10 min read",
        imagePlaceholder: "HIPAA Compliance Image",
        author: {
            name: "Legal Dept",
            role: "Compliance Officers"
        },
        content: [
            {
                type: 'paragraph',
                text: 'With cyberattacks on healthcare rising by 45% year-over-year, HIPAA compliance has evolved from a regulatory checkmark to a critical security framework.'
            }
        ]
    },
    {
        slug: "improving-patient-collections",
        title: "Improving Patient Collections in a High-Deductible Era",
        excerpt: "Tips and techniques for improving patient collections and financial counseling in an era of high-deductible health plans.",
        category: "Article",
        date: "July 18, 2024",
        readTime: "7 min read",
        imagePlaceholder: "Patient Collections Image",
        author: {
            name: "Financial Advisory",
            role: "Zenexa Consultants"
        },
        content: [
            {
                type: 'paragraph',
                text: 'As high-deductible health plans become the norm, providers are becoming the new bill collectors. Compassionate yet effective financial counseling is key.'
            }
        ]
    }
];
