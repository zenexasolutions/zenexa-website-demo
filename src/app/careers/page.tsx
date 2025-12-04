import React from 'react';
import styles from './page.module.css';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'Careers | Zenexa',
    description: 'Join our growing team of healthcare BPO professionals.',
};

const jobs = [
    {
        title: "Medical Coder (Inpatient)",
        location: "Bangalore, India (Hybrid)",
        type: "Full-time",
        experience: "3-5 Years"
    },
    {
        title: "AR Analyst",
        location: "Bangalore, India (On-site)",
        type: "Full-time",
        experience: "2-4 Years"
    },
    {
        title: "Team Lead - RCM",
        location: "Bangalore, India (On-site)",
        type: "Full-time",
        experience: "5+ Years"
    },
    {
        title: "Quality Assurance Specialist",
        location: "Remote",
        type: "Full-time",
        experience: "4+ Years"
    }
];

export default function CareersPage() {
    return (
        <>
            <PageHero
                headline="Join Our Team"
                subheadline="Build your career with a global leader in healthcare BPO services."
                tagline="Careers at Zenexa"
            />

            <Section>
                <h2 className={styles.sectionTitle}>
                    Current Openings
                </h2>

                <div className={styles.jobList}>
                    {jobs.map((job, index) => (
                        <div key={index} className={styles.jobCard}>
                            <div>
                                <h3 className={styles.jobTitle}>{job.title}</h3>
                                <div className={styles.jobMeta}>
                                    <span className={styles.metaItem}><MapPin size={16} className={styles.metaIcon} /> {job.location}</span>
                                    <span className={styles.metaItem}><Briefcase size={16} className={styles.metaIcon} /> {job.type}</span>
                                    <span className={styles.metaItem}><Clock size={16} className={styles.metaIcon} /> {job.experience}</span>
                                </div>
                            </div>
                            <Button variant="secondary">Apply Now</Button>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
