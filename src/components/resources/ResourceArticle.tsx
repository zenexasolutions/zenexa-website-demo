'use client';

import React from 'react';
import styles from './ResourceArticle.module.css';
import Link from 'next/link';
import { Resource, getRelatedResources, getCategoryColor } from '@/data/resourcesData';
import { Section } from '@/components/ui/Section';
import { CTA } from '@/components/home/CTA';
import {
    ArrowLeft,
    Clock,
    Calendar,
    User,
    Download,
    BookOpen,
    FileText,
    Newspaper,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Linkedin,
    Twitter
} from 'lucide-react';

interface ResourceArticleProps {
    resource: Resource;
}

const CategoryIcon = ({ category }: { category: Resource['category'] }) => {
    const props = { size: 16 };
    switch (category) {
        case 'Guide': return <BookOpen {...props} />;
        case 'Whitepaper': return <FileText {...props} />;
        case 'Article': return <Newspaper {...props} />;
        case 'Case Study': return <BarChart3 {...props} />;
    }
};

export const ResourceArticle: React.FC<ResourceArticleProps> = ({ resource }) => {
    const relatedResources = getRelatedResources(resource.relatedSlugs);
    const categoryColor = getCategoryColor(resource.category);

    const handleShare = (platform: 'linkedin' | 'twitter') => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(resource.title);

        if (platform === 'linkedin') {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        } else {
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        }
    };

    const isDownloadable = resource.category === 'Guide' || resource.category === 'Whitepaper';

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero} style={{ background: resource.heroGradient }}>
                <div className={styles.heroPattern} />
                <div className={styles.heroGlow} />

                <div className={styles.heroContainer}>
                    <Link href="/resources" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Back to Resources
                    </Link>

                    <div
                        className={styles.categoryBadge}
                        style={{
                            borderColor: categoryColor,
                            color: categoryColor,
                            backgroundColor: `${categoryColor}15`
                        }}
                    >
                        <CategoryIcon category={resource.category} />
                        {resource.category}
                    </div>

                    <h1 className={styles.heroTitle}>{resource.title}</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                            <User size={16} />
                            <span>{resource.author}</span>
                        </div>
                        <div className={styles.metaSeparator}>•</div>
                        <div className={styles.metaItem}>
                            <Calendar size={16} />
                            <span>{resource.date}</span>
                        </div>
                        <div className={styles.metaSeparator}>•</div>
                        <div className={styles.metaItem}>
                            <Clock size={16} />
                            <span>{resource.readingTime}</span>
                        </div>
                    </div>

                    <div className={styles.heroActions}>
                        <button
                            className={styles.shareButton}
                            onClick={() => handleShare('linkedin')}
                            aria-label="Share on LinkedIn"
                        >
                            <Linkedin size={18} />
                        </button>
                        <button
                            className={styles.shareButton}
                            onClick={() => handleShare('twitter')}
                            aria-label="Share on Twitter"
                        >
                            <Twitter size={18} />
                        </button>
                        {isDownloadable && (
                            <button className={styles.downloadButton}>
                                <Download size={18} />
                                Download PDF
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <Section>
                <div className={styles.contentLayout}>
                    {/* Table of Contents - Desktop */}
                    <aside className={styles.sidebar}>
                        <nav className={styles.tableOfContents}>
                            <h4 className={styles.tocTitle}>Table of Contents</h4>
                            <ul className={styles.tocList}>
                                <li>
                                    <a href="#introduction" className={styles.tocLink}>Introduction</a>
                                </li>
                                {resource.sections.map((section, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#section-${index}`}
                                            className={styles.tocLink}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a href="#key-takeaways" className={styles.tocLink}>Key Takeaways</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Article Body */}
                    <article className={styles.article}>
                        {/* Author Card */}
                        <div className={styles.authorCard}>
                            <div className={styles.authorAvatar}>
                                {resource.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className={styles.authorInfo}>
                                <span className={styles.authorName}>{resource.author}</span>
                                <span className={styles.authorRole}>{resource.authorRole}</span>
                            </div>
                        </div>

                        {/* Introduction */}
                        <section id="introduction" className={styles.section}>
                            <p className={styles.introduction}>{resource.introduction}</p>
                        </section>

                        {/* Content Sections */}
                        {resource.sections.map((section, index) => (
                            <section
                                key={index}
                                id={`section-${index}`}
                                className={styles.section}
                            >
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={styles.paragraph}>{paragraph}</p>
                                ))}
                            </section>
                        ))}

                        {/* Key Takeaways */}
                        <section id="key-takeaways" className={styles.takeawaysSection}>
                            <div className={styles.takeawaysCard}>
                                <h3 className={styles.takeawaysTitle}>
                                    <CheckCircle2 size={24} />
                                    Key Takeaways
                                </h3>
                                <ul className={styles.takeawaysList}>
                                    {resource.keyTakeaways.map((takeaway, index) => (
                                        <li key={index} className={styles.takeawayItem}>
                                            <span className={styles.takeawayBullet} style={{ backgroundColor: categoryColor }} />
                                            {takeaway}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Download CTA for Guides/Whitepapers */}
                        {isDownloadable && (
                            <div className={styles.downloadCta}>
                                <div className={styles.downloadCtaContent}>
                                    <Download size={32} className={styles.downloadCtaIcon} />
                                    <div>
                                        <h4 className={styles.downloadCtaTitle}>
                                            Download the Full {resource.category}
                                        </h4>
                                        <p className={styles.downloadCtaText}>
                                            Get the complete {resource.category.toLowerCase()} as a PDF for offline reading and easy sharing.
                                        </p>
                                    </div>
                                </div>
                                <button className={styles.downloadCtaButton}>
                                    <Download size={18} />
                                    Download PDF
                                </button>
                            </div>
                        )}
                    </article>
                </div>
            </Section>

            {/* Related Resources */}
            <Section>
                <div className={styles.relatedSection}>
                    <h2 className={styles.relatedTitle}>Related Resources</h2>
                    <p className={styles.relatedSubtitle}>
                        Continue exploring our knowledge hub with these related articles
                    </p>

                    <div className={styles.relatedGrid}>
                        {relatedResources.map((related) => (
                            <Link
                                key={related.slug}
                                href={`/resources/${related.slug}`}
                                className={styles.relatedCard}
                            >
                                <div
                                    className={styles.relatedCategory}
                                    style={{
                                        color: getCategoryColor(related.category),
                                        borderColor: getCategoryColor(related.category)
                                    }}
                                >
                                    {related.category}
                                </div>
                                <h3 className={styles.relatedCardTitle}>{related.title}</h3>
                                <p className={styles.relatedCardExcerpt}>{related.excerpt}</p>
                                <span className={styles.relatedCardLink}>
                                    Read More <ArrowRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <CTA />
        </>
    );
};
