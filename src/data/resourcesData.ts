import { BookOpen, FileText, Newspaper, BarChart3 } from 'lucide-react';

export interface ResourceSection {
    title: string;
    content: string[];
}

export interface Resource {
    slug: string;
    title: string;
    excerpt: string;
    category: 'Guide' | 'Whitepaper' | 'Article' | 'Case Study';
    date: string;
    author: string;
    authorRole: string;
    readingTime: string;
    heroGradient: string;
    introduction: string;
    sections: ResourceSection[];
    keyTakeaways: string[];
    relatedSlugs: string[];
}

export const getCategoryIcon = (category: Resource['category']) => {
    switch (category) {
        case 'Guide': return BookOpen;
        case 'Whitepaper': return FileText;
        case 'Article': return Newspaper;
        case 'Case Study': return BarChart3;
    }
};

export const getCategoryColor = (category: Resource['category']) => {
    switch (category) {
        case 'Guide': return '#4db8a8';
        case 'Whitepaper': return '#00f0ff';
        case 'Article': return '#a78bfa';
        case 'Case Study': return '#f59e0b';
    }
};

export const resources: Resource[] = [
    {
        slug: 'icd-10-coding-updates-2025',
        title: '2025 ICD-10 Coding Updates: What You Need to Know',
        excerpt: 'A comprehensive guide to the latest ICD-10 coding changes effective October 1, 2024. Ensure your practice is prepared.',
        category: 'Guide',
        date: 'October 15, 2024',
        author: 'Dr. Sarah Mitchell',
        authorRole: 'Chief Medical Coding Officer',
        readingTime: '12 min read',
        heroGradient: 'linear-gradient(135deg, #112228 0%, #0a3d3d 50%, #050509 100%)',
        introduction: 'The Centers for Medicare & Medicaid Services (CMS) has released the 2025 ICD-10-CM code updates, bringing significant changes that will impact healthcare organizations across the country. With over 395 new codes, 25 revised codes, and 10 deleted codes, staying ahead of these changes is crucial for maintaining revenue integrity and compliance.',
        sections: [
            {
                title: 'Key Changes Overview',
                content: [
                    'The 2025 update introduces substantial modifications across multiple chapters of the ICD-10-CM classification system. Notable areas of change include mental health disorders, maternal care, and social determinants of health (SDOH) codes.',
                    'New codes for Long COVID and post-acute sequelae of SARS-CoV-2 infection (PASC) have been expanded to provide more specific documentation options. This reflects the ongoing need to accurately capture the long-term effects of COVID-19 on patient populations.',
                    'Social determinants of health codes (Z55-Z65) have been significantly expanded, allowing for more precise documentation of factors affecting patient health outcomes, including housing instability, food insecurity, and transportation barriers.'
                ]
            },
            {
                title: 'Mental Health & Behavioral Codes',
                content: [
                    'Chapter 5 (Mental, Behavioral and Neurodevelopmental disorders) sees major additions including new codes for gaming disorder, social media addiction, and expanded anxiety spectrum disorders.',
                    'New pediatric mental health codes address the growing needs for documenting childhood anxiety, depression, and developmental conditions with greater specificity.',
                    'Substance use disorder codes have been restructured to align with DSM-5-TR criteria, providing a more accurate clinical picture and supporting appropriate treatment planning.'
                ]
            },
            {
                title: 'Maternal & Obstetric Updates',
                content: [
                    'Maternal care codes have expanded to include new conditions related to gestational diabetes variants, pre-eclampsia subtypes, and maternal mental health during pregnancy.',
                    'New codes for multiple gestation complications provide greater specificity for high-risk pregnancy documentation.',
                    'Postpartum care codes now include options for extended monitoring periods, reflecting updated clinical guidelines for maternal recovery.'
                ]
            },
            {
                title: 'Implementation Best Practices',
                content: [
                    'Begin reviewing new codes immediately with your coding team. Schedule training sessions at least 60 days before the October 1 effective date.',
                    'Update your EHR system\'s code tables and ensure all dropdown menus reflect the new options. Work with your IT department to test code validation rules.',
                    'Communicate changes to clinical staff, particularly those in specialties most affected by the updates. Create quick-reference guides for high-volume code changes.',
                    'Audit a sample of claims in the first month post-implementation to identify any coding gaps or training needs.'
                ]
            },
            {
                title: 'Revenue Cycle Impact',
                content: [
                    'Failure to adopt new codes can result in claim denials, delayed payments, and potential compliance risks. CMS estimates improper coding costs the healthcare system billions annually.',
                    'Proper code specificity improves clinical documentation, supports medical necessity, and can positively impact quality measure reporting.',
                    'Organizations that proactively adopt code updates typically see 15-20% fewer coding-related denials in the first quarter post-implementation.'
                ]
            }
        ],
        keyTakeaways: [
            '395+ new ICD-10-CM codes effective October 1, 2024',
            'Major expansions in mental health, maternal care, and SDOH categories',
            'Begin training and system updates 60+ days before effective date',
            'Proactive adoption reduces coding-related denials by 15-20%',
            'Post-implementation auditing is essential for compliance'
        ],
        relatedSlugs: ['hipaa-compliance-2025', 'reducing-claim-denials', 'ai-impact-on-rcm']
    },
    {
        slug: 'reducing-claim-denials',
        title: 'Reducing Claim Denials: Top 5 Strategies',
        excerpt: 'Learn the most effective strategies to minimize claim denials and improve your first-pass acceptance rate.',
        category: 'Whitepaper',
        date: 'September 28, 2024',
        author: 'Michael Chen, MBA',
        authorRole: 'VP of Revenue Cycle Operations',
        readingTime: '15 min read',
        heroGradient: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #050509 100%)',
        introduction: 'Claim denials cost U.S. healthcare organizations an estimated $262 billion annually in administrative costs alone. With an average denial rate of 10-15% across the industry, reducing denials represents one of the highest-impact opportunities for revenue cycle optimization. This whitepaper presents five proven strategies that leading healthcare organizations use to achieve first-pass acceptance rates exceeding 95%.',
        sections: [
            {
                title: 'Strategy 1: Real-Time Eligibility Verification',
                content: [
                    'Eligibility-related denials account for nearly 25% of all claim rejections. Implementing real-time eligibility verification at multiple touchpoints—scheduling, check-in, and pre-service—can dramatically reduce these preventable denials.',
                    'Best practice involves automated eligibility checks that run 72 hours before scheduled appointments, again at patient arrival, and immediately before claim submission. This multi-layered approach catches coverage changes and prevents surprise denials.',
                    'Leading organizations integrate eligibility data directly into their practice management systems, automatically flagging patients with coverage issues for proactive outreach.'
                ]
            },
            {
                title: 'Strategy 2: Front-End Data Integrity',
                content: [
                    'Data entry errors at registration cause 40% of claim denials. Implementing address verification, insurance card scanning with OCR technology, and demographic validation can eliminate these errors at the source.',
                    'Staff training on proper data collection protocols, including secondary insurance capture and responsible party identification, pays dividends throughout the revenue cycle.',
                    'Consider implementing a registration accuracy scorecard that tracks error rates by staff member and provides targeted coaching opportunities.'
                ]
            },
            {
                title: 'Strategy 3: Prior Authorization Automation',
                content: [
                    'Prior authorization requirements continue to expand, with payors adding new procedures and services annually. Manual prior auth processes create bottlenecks and are prone to human error.',
                    'Automated prior authorization platforms can reduce auth turnaround time from days to minutes for routine procedures, while flagging complex cases for human review.',
                    'Integration with clinical decision support systems ensures that clinicians are aware of prior auth requirements at the point of care, preventing denials before services are rendered.'
                ]
            },
            {
                title: 'Strategy 4: AI-Powered Claim Scrubbing',
                content: [
                    'Traditional rules-based claim scrubbers catch 60-70% of errors. AI-powered systems that learn from denial patterns can increase catch rates to 90% or higher.',
                    'Machine learning algorithms analyze historical denial data to identify emerging patterns, payor-specific rules, and high-risk claim characteristics before submission.',
                    'Leading organizations deploy predictive denial models that score each claim\'s likelihood of denial, allowing staff to focus remediation efforts on high-risk submissions.'
                ]
            },
            {
                title: 'Strategy 5: Denial Management Workflow Optimization',
                content: [
                    'Even with perfect front-end processes, some denials are inevitable. The key is to resolve them quickly and learn from each denial to prevent recurrence.',
                    'Implement a tiered denial workflow that routes denials to specialists based on type and complexity. Simple registration errors go to patient access; complex clinical denials route to certified coders.',
                    'Track denials by root cause, payor, and service line. Monthly denial trending meetings should drive process improvements and training initiatives.',
                    'Set denial appeal deadlines at 50% of the payor deadline to ensure adequate time for gathering documentation and submitting comprehensive appeals.'
                ]
            }
        ],
        keyTakeaways: [
            'Claim denials cost U.S. healthcare $262 billion annually',
            'Real-time eligibility verification prevents 25% of denials',
            'Front-end data integrity eliminates 40% of rejection causes',
            'AI-powered claim scrubbing achieves 90%+ error catch rates',
            'Optimized denial workflows reduce resolution time by 50%'
        ],
        relatedSlugs: ['ai-impact-on-rcm', 'icd-10-coding-updates-2025', 'outsourcing-vs-inhouse-rcm']
    },
    {
        slug: 'ai-impact-on-rcm',
        title: 'The Impact of AI on Revenue Cycle Management',
        excerpt: 'Explore how Artificial Intelligence and Machine Learning are revolutionizing healthcare RCM and billing processes.',
        category: 'Article',
        date: 'September 10, 2024',
        author: 'Jennifer Rodriguez',
        authorRole: 'Healthcare Technology Analyst',
        readingTime: '10 min read',
        heroGradient: 'linear-gradient(135deg, #1a0a28 0%, #2d1a4a 50%, #050509 100%)',
        introduction: 'Artificial Intelligence is no longer a futuristic concept in healthcare revenue cycle management—it\'s a present reality transforming how organizations capture, process, and collect revenue. From automated coding to predictive denial management, AI applications are delivering measurable ROI and freeing staff to focus on complex, high-value work.',
        sections: [
            {
                title: 'The Current State of AI in RCM',
                content: [
                    'A 2024 HFMA survey found that 67% of healthcare organizations are either using or piloting AI in their revenue cycle operations. The most common applications include automated coding assistance, claim status prediction, and patient payment propensity modeling.',
                    'Early adopters report 25-40% reductions in manual coding time, 15-20% improvements in first-pass claim acceptance, and 30% faster denials resolution through AI-powered prioritization.',
                    'The technology has matured significantly, with AI systems now achieving coding accuracy rates comparable to experienced human coders for routine cases.'
                ]
            },
            {
                title: 'Automated Medical Coding',
                content: [
                    'Computer-assisted coding (CAC) powered by natural language processing (NLP) can analyze clinical documentation and suggest appropriate diagnosis and procedure codes in real-time.',
                    'Modern AI coding systems learn from coder feedback, continuously improving accuracy and adapting to organization-specific documentation patterns.',
                    'While AI excels at routine coding scenarios, expert human coders remain essential for complex cases, denial appeals, and audit responses. The optimal model combines AI efficiency with human expertise.'
                ]
            },
            {
                title: 'Predictive Denial Prevention',
                content: [
                    'Machine learning models analyze thousands of claim variables—payor, procedure, diagnosis combinations, provider, facility, and more—to predict denial probability before submission.',
                    'High-risk claims can be routed for additional review or documentation enhancement, converting potential denials into clean claims.',
                    'Predictive models also identify payor behavior changes, detecting when a payor begins denying previously accepted claim patterns.'
                ]
            },
            {
                title: 'Intelligent Workflow Automation',
                content: [
                    'Robotic Process Automation (RPA) combined with AI handles routine tasks like eligibility verification, claim status checking, and payment posting without human intervention.',
                    'Intelligent document processing extracts data from EOBs, remittance advices, and correspondence, reducing manual data entry by 80% or more.',
                    'AI-powered chatbots handle patient billing inquiries, payment plan setup, and financial assistance screening 24/7.'
                ]
            },
            {
                title: 'Implementation Considerations',
                content: [
                    'Successful AI implementation requires clean, structured data. Organizations should assess and remediate data quality issues before deploying AI solutions.',
                    'Change management is critical—staff must understand that AI augments rather than replaces their work, enabling them to focus on more meaningful tasks.',
                    'Start with high-impact, lower-complexity use cases like claim status automation before progressing to sophisticated applications like autonomous coding.',
                    'Evaluate vendors carefully, looking for healthcare-specific expertise, transparent AI models, and strong implementation support.'
                ]
            }
        ],
        keyTakeaways: [
            '67% of healthcare organizations are using or piloting AI in RCM',
            'AI reduces manual coding time by 25-40%',
            'Predictive models prevent denials before claim submission',
            'RPA handles routine tasks, freeing staff for complex work',
            'Data quality is essential for AI implementation success'
        ],
        relatedSlugs: ['reducing-claim-denials', 'outsourcing-vs-inhouse-rcm', 'icd-10-coding-updates-2025']
    },
    {
        slug: 'outsourcing-vs-inhouse-rcm',
        title: 'Outsourcing vs. In-House RCM: A Cost-Benefit Analysis',
        excerpt: 'A detailed comparison of the costs and benefits of outsourcing your revenue cycle management versus keeping it in-house.',
        category: 'Case Study',
        date: 'August 22, 2024',
        author: 'David Thompson, CPA',
        authorRole: 'Healthcare Financial Consultant',
        readingTime: '14 min read',
        heroGradient: 'linear-gradient(135deg, #1a1a0a 0%, #3d3d1a 50%, #050509 100%)',
        introduction: 'The decision to outsource revenue cycle management or maintain in-house operations is one of the most significant strategic choices a healthcare organization can make. This case study examines three healthcare organizations—a 50-physician multi-specialty group, a 200-bed community hospital, and a 15-location urgent care chain—analyzing their approaches and outcomes.',
        sections: [
            {
                title: 'Case 1: Regional Multi-Specialty Group',
                content: [
                    'Organization Profile: 50 physicians, 12 specialties, $75M annual net revenue, previously in-house billing with 18 FTEs dedicated to revenue cycle.',
                    'Challenge: Declining collections, 14% denial rate, 52 days in AR, difficulty recruiting and retaining certified coders. Leadership spent significant time managing billing operations rather than clinical growth.',
                    'Decision: Full outsource to end-to-end RCM partner after extensive RFP process evaluating 6 vendors.',
                    'Results at 18 months: Denial rate dropped to 6.2%, days in AR decreased to 38, net collections improved by $2.1M annually. Freed 3 physician leaders to focus on practice development.'
                ]
            },
            {
                title: 'Case 2: Community Hospital',
                content: [
                    'Organization Profile: 200-bed community hospital, $180M annual net revenue, in-house revenue cycle team of 65 FTEs.',
                    'Challenge: Considering outsourcing due to technology upgrade costs, but concerned about losing control and institutional knowledge.',
                    'Decision: Hybrid model—outsourced coding and denial management while retaining patient access, charge capture, and strategic functions in-house. Partnered with technology vendor for automated claim scrubbing.',
                    'Results at 24 months: Coding accuracy improved to 97.5%, denial overturn rate increased from 45% to 72%. Avoided $1.2M technology investment while improving performance metrics across the board.'
                ]
            },
            {
                title: 'Case 3: Urgent Care Chain',
                content: [
                    'Organization Profile: 15 urgent care locations, $28M annual revenue, previously outsourced to low-cost billing vendor.',
                    'Challenge: Outsourced vendor delivering poor results—high denial rates, limited transparency, declining collections despite growing volume.',
                    'Decision: Brought billing in-house, invested in cloud-based PM/billing system, hired experienced billing manager and 4 billing specialists.',
                    'Results at 12 months: Net collection rate improved from 89% to 96.5%, denial rate dropped from 18% to 7%, gained real-time visibility into financial performance. Initial investment paid back within 9 months.'
                ]
            },
            {
                title: 'Cost Comparison Framework',
                content: [
                    'In-house costs include: salaries and benefits (typically 60-70% of RCM operating cost), technology licenses, training and continuing education, management overhead, and opportunity costs of leadership attention.',
                    'Outsourcing costs typically range from 4-8% of net collections for end-to-end services, with lower percentages for higher-volume organizations. Hidden costs may include transition expenses, integration challenges, and contract management.',
                    'The true comparison must account for performance differences. If outsourcing improves net collections by 3-5%, the percentage fee may be offset by improved revenue capture.',
                    'Consider risk factors: in-house operations carry staffing risk and technology obsolescence risk; outsourcing carries vendor dependency and potential quality variation.'
                ]
            },
            {
                title: 'Decision Framework',
                content: [
                    'Outsourcing tends to favor organizations with: limited internal expertise, high staff turnover, technology that needs significant investment, or leadership seeking to focus on clinical growth.',
                    'In-house tends to favor organizations with: strong existing teams, unique specialties requiring deep expertise, excellent technology infrastructure, or strategic reasons to maintain direct control.',
                    'Hybrid models offer flexibility, allowing organizations to outsource specific functions (coding, denial management, extended business office) while retaining strategic control.',
                    'Regardless of model, establish clear KPIs, regular performance reviews, and maintain institutional knowledge of revenue cycle operations.'
                ]
            }
        ],
        keyTakeaways: [
            'No single model is universally "best"—context matters',
            'Outsourcing can reduce denial rates by 50%+ with the right partner',
            'In-house operations can outperform outsourcing when properly resourced',
            'Hybrid models offer flexibility for specialized needs',
            'True cost comparison must account for performance differences'
        ],
        relatedSlugs: ['reducing-claim-denials', 'ai-impact-on-rcm', 'improving-patient-collections']
    },
    {
        slug: 'hipaa-compliance-2025',
        title: 'HIPAA Compliance in 2025: Best Practices',
        excerpt: 'Stay compliant with the latest HIPAA regulations and protect your patient data with these essential best practices.',
        category: 'Guide',
        date: 'August 05, 2024',
        author: 'Lisa Chen, JD, CHC',
        authorRole: 'Healthcare Compliance Director',
        readingTime: '11 min read',
        heroGradient: 'linear-gradient(135deg, #0a1a1a 0%, #1a3d3d 50%, #050509 100%)',
        introduction: 'HIPAA compliance remains a critical priority for healthcare organizations, with OCR enforcement actions and penalties reaching record levels. The regulatory landscape continues to evolve, with new guidance on telehealth, AI applications, and third-party risk management. This guide provides actionable best practices for maintaining robust HIPAA compliance in 2025.',
        sections: [
            {
                title: 'Recent Regulatory Developments',
                content: [
                    'OCR issued updated guidance on recognized security practices (RSPs) under the HITECH Act amendment, creating potential penalty reductions for organizations with mature security programs.',
                    'Telehealth flexibility provisions that were temporarily relaxed during COVID-19 are being formalized, with new permanent rules taking effect for HIPAA covered telehealth platforms.',
                    'AI and machine learning applications are receiving increased scrutiny, with OCR emphasizing that organizations remain responsible for AI systems processing PHI.'
                ]
            },
            {
                title: 'Risk Assessment Best Practices',
                content: [
                    'Conduct comprehensive risk assessments annually at minimum, with targeted assessments following any significant change to systems, processes, or workforce.',
                    'Document risk assessment methodology, findings, and remediation plans thoroughly. OCR investigations consistently cite insufficient risk assessment documentation.',
                    'Include all PHI repositories in scope—EHRs, billing systems, email, mobile devices, cloud storage, and third-party applications.',
                    'Quantify risks where possible using established frameworks like FAIR (Factor Analysis of Information Risk) to prioritize remediation investments.'
                ]
            },
            {
                title: 'Workforce Training & Awareness',
                content: [
                    'Move beyond annual checkbox training to continuous awareness programs. Phishing simulations, security tips, and real-world case studies reinforce learning throughout the year.',
                    'Tailor training content to specific roles—clinical staff, billing personnel, IT teams, and executives each face different privacy and security risks.',
                    'Document training completion and assessment scores. Maintain records for at least 6 years per HIPAA requirements.',
                    'Address insider threat awareness, including how to recognize and report suspicious activity by colleagues.'
                ]
            },
            {
                title: 'Third-Party Risk Management',
                content: [
                    'Business associate agreements (BAAs) must be executed before any PHI sharing—no exceptions. Maintain a centralized BAA inventory and tracking system.',
                    'Implement vendor risk assessments evaluating security practices, compliance certifications, and incident response capabilities.',
                    'Establish ongoing monitoring of critical vendors through security questionnaires, SOC 2 report reviews, and performance tracking.',
                    'Include right-to-audit clauses in BAAs for high-risk vendors and exercise those rights periodically.'
                ]
            },
            {
                title: 'Incident Response Preparedness',
                content: [
                    'Develop and regularly test incident response procedures. Tabletop exercises should simulate realistic breach scenarios at least annually.',
                    'Maintain current contact information for key response team members, legal counsel, breach notification vendors, and regulators.',
                    'Understand breach notification timelines—60 days to affected individuals and OCR for breaches affecting 500+ individuals; annual notification for smaller breaches.',
                    'Document all incidents, including those determined not to be reportable breaches, to demonstrate due diligence in the event of an OCR investigation.'
                ]
            }
        ],
        keyTakeaways: [
            'Recognized security practices may reduce OCR penalties',
            'Annual comprehensive risk assessments are mandatory',
            'Continuous awareness programs outperform annual training',
            'Third-party risk is a leading cause of healthcare breaches',
            'Incident response plans must be tested regularly'
        ],
        relatedSlugs: ['icd-10-coding-updates-2025', 'reducing-claim-denials', 'ai-impact-on-rcm']
    },
    {
        slug: 'improving-patient-collections',
        title: 'Improving Patient Collections in a High-Deductible Era',
        excerpt: 'Tips and techniques for improving patient collections and financial counseling in an era of high-deductible health plans.',
        category: 'Article',
        date: 'July 18, 2024',
        author: 'Amanda Foster',
        authorRole: 'Patient Financial Services Director',
        readingTime: '9 min read',
        heroGradient: 'linear-gradient(135deg, #1a0a1a 0%, #3d1a3d 50%, #050509 100%)',
        introduction: 'Patient responsibility now represents over 35% of healthcare revenue for many organizations, up from just 10% a decade ago. With average deductibles exceeding $1,500 for individual coverage and $3,000 for family coverage, healthcare providers must adapt their collection strategies to this new reality.',
        sections: [
            {
                title: 'Understanding the HDHP Landscape',
                content: [
                    '55% of employer-sponsored health plans are now high-deductible health plans (HDHPs). This shift fundamentally changes the revenue cycle, making patient collections as important as insurance reimbursement.',
                    'Patients with HDHPs often delay or avoid care due to cost concerns. Proactive financial communication can improve both collections and patient access to needed services.',
                    'HSA (Health Savings Account) usage varies widely—some patients have significant funds available, while others have empty accounts. Checking HSA balances where possible informs collection strategies.'
                ]
            },
            {
                title: 'Price Transparency & Estimates',
                content: [
                    'Federal price transparency rules require good faith estimates for uninsured/self-pay patients. Best practice extends this to all patients, providing estimates before scheduled services.',
                    'Accurate estimates build trust and set expectations. Patients who understand their financial responsibility upfront are more likely to pay and less likely to dispute bills.',
                    'Invest in estimation tools that account for insurance verification, benefit accumulation, and historical procedure costs. Estimates within 10% of actual cost should be the target.'
                ]
            },
            {
                title: 'Point-of-Service Collections',
                content: [
                    'Collect copays, coinsurance, and known deductible amounts before or at the time of service. Point-of-service collections have an 80%+ success rate compared to 30% for post-service billing.',
                    'Train front desk staff on financial conversations—empathy combined with clear expectations. Scripts and role-playing can build confidence.',
                    'Offer multiple payment options: cash, credit/debit, HSA/FSA cards, and contactless payment (Apple Pay, Google Pay). Reduce friction wherever possible.'
                ]
            },
            {
                title: 'Payment Plan Strategies',
                content: [
                    'Offer payment plans proactively, not just as a last resort. Patients appreciate options and are more likely to engage when given flexibility.',
                    'Consider interest-free payment plans for balances under a threshold (e.g., $1,000) while requiring longer-term financing for larger amounts.',
                    'Automate payment plan enrollment and recurring payment collection. Manual processes create administrative burden and increase default rates.',
                    'Set realistic term lengths—12-month plans typically perform better than 24-month plans, with lower default rates and faster cash realization.'
                ]
            },
            {
                title: 'Financial Counseling & Assistance',
                content: [
                    'Train dedicated financial counselors to screen patients for charity care, Medicaid eligibility, and manufacturer patient assistance programs.',
                    'Connect patients with resources before balance issues become bad debt. Early intervention preserves the patient relationship and recovers more revenue.',
                    'Use data to identify patients at risk of non-payment—demographic factors, past payment history, and account balance can predict collection challenges.',
                    'Document financial counseling conversations to support charity care decisions and demonstrate community benefit.'
                ]
            }
        ],
        keyTakeaways: [
            'Patient responsibility now exceeds 35% of healthcare revenue',
            '55% of employer plans are high-deductible (HDHP)',
            'Accurate estimates improve patient trust and payment rates',
            'Point-of-service collections achieve 80%+ success rates',
            'Payment plans and financial counseling reduce bad debt'
        ],
        relatedSlugs: ['reducing-claim-denials', 'outsourcing-vs-inhouse-rcm', 'hipaa-compliance-2025']
    }
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
    return resources.find(r => r.slug === slug);
};

export const getRelatedResources = (slugs: string[]): Resource[] => {
    return resources.filter(r => slugs.includes(r.slug));
};
