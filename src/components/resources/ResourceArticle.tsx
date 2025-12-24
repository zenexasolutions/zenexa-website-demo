'use client';

import React from 'react';
import styles from './ResourceArticle.module.css';
import Link from 'next/link';
import { Resource, getRelatedResources, getCategoryColor, getCategoryIcon } from '@/data/resourcesData';
import { CTA } from '@/components/home/CTA';
import {
    ArrowLeft,
    Clock,
    Calendar,
    User,
    Download,
    CheckCircle2,
    ArrowRight,
    Linkedin,
    Twitter
} from 'lucide-react';

interface ResourceArticleProps {
    resource: Resource;
}

export const ResourceArticle: React.FC<ResourceArticleProps> = ({ resource }) => {
    const relatedResources = getRelatedResources(resource.relatedSlugs);
    const categoryColor = getCategoryColor(resource.category);
    const CategoryIcon = getCategoryIcon(resource.category) as any;

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

    const [readingProgress, setReadingProgress] = React.useState(0);

    React.useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setReadingProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <main className={styles.mainWrapper}>
            {/* Reading Progress Bar */}
            <div
                className={styles.progressBar}
                style={{ width: `${readingProgress}%`, background: categoryColor }}
            />

            {/* Immersive Hero Section */}
            <section className={styles.hero} style={{ background: resource.heroGradient }}>
                <div className={styles.heroPattern} />
                <div className={styles.heroGlow} />

                <div className={styles.heroContainer}>
                    <Link href="/resources" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        Back to Resources
                    </Link>

                    <div
                        className={styles.categoryBadge}
                        style={{ color: categoryColor, borderColor: categoryColor }}
                    >
                        <CategoryIcon size={14} />
                        {resource.category}
                    </div>

                    <h1 className={styles.heroTitle}>{resource.title}</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                            <User size={14} className={styles.metaIcon} />
                            <span>{resource.author}</span>
                        </div>
                        <div className={styles.metaSeparator}>•</div>
                        <div className={styles.metaItem}>
                            <Calendar size={14} className={styles.metaIcon} />
                            <span>{resource.date}</span>
                        </div>
                        <div className={styles.metaSeparator}>•</div>
                        <div className={styles.metaItem}>
                            <Clock size={14} className={styles.metaIcon} />
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
                                <span>Download PDF</span>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Layout */}
            <div className={styles.contentLayout}>
                {/* Table of Contents Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.tableOfContents}>
                        <h4 className={styles.tocTitle}>Table of Contents</h4>
                        <ul className={styles.tocList}>
                            <li>
                                <a href="#introduction" className={styles.tocLink}>Introduction</a>
                            </li>
                            {resource.sections.map((section, index) => (
                                <li key={index}>
                                    <a href={`#section-${index}`} className={styles.tocLink}>
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

                {/* Main Article Content */}
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

                    <section id="introduction" className={styles.introduction}>
                        <p>{resource.introduction}</p>
                    </section>

                    {resource.sections.map((section, index) => (
                        <section key={index} id={`section-${index}`} className={styles.section}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className={styles.paragraph}>{paragraph}</p>
                            ))}
                        </section>
                    ))}

                    <section id="key-takeaways" className={styles.takeawaysSection}>
                        <div className={styles.takeawaysCard}>
                            <h3 className={styles.takeawaysTitle}>
                                <CheckCircle2 size={24} />
                                Key Takeaways
                            </h3>
                            <ul className={styles.takeawaysList}>
                                {resource.keyTakeaways.map((takeaway, index) => (
                                    <li key={index} className={styles.takeawayItem}>
                                        <span className={styles.takeawayBullet} />
                                        {takeaway}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {isDownloadable && (
                        <div className={styles.downloadCta}>
                            <div className={styles.downloadCtaContent}>
                                <Download size={32} color={categoryColor} />
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
                                Download Now
                            </button>
                        </div>
                    )}
                </article>
            </div>

            {/* Related Resources */}
            <section className={styles.relatedSection}>
                <div className={styles.relatedHeader}>
                    <h2 className={styles.relatedTitle}>Related Resources</h2>
                    <p className={styles.relatedSubtitle}>
                        Continue reading about similar topics in revenue cycle management
                    </p>
                </div>

                <div className={styles.relatedGrid}>
                    {relatedResources.map((related) => {
                        const RelatedIcon = getCategoryIcon(related.category) as any;
                        const relatedColor = getCategoryColor(related.category);
                        return (
                            <Link
                                key={related.slug}
                                href={`/resources/${related.slug}`}
                                className={styles.relatedCard}
                            >
                                <div className={styles.relatedBadge} style={{ color: relatedColor }}>
                                    <RelatedIcon size={14} />
                                    {related.category}
                                </div>
                                <h3 className={styles.relatedCardTitle}>{related.title}</h3>
                                <p className={styles.relatedCardExcerpt}>{related.excerpt}</p>
                                <div className={styles.relatedCardLink} style={{ color: relatedColor }}>
                                    Read Article <ArrowRight size={16} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <CTA />
        </main>
    );
};
