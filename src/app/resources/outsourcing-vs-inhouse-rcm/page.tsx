import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResourceBySlug } from '@/data/resourcesData';
import { ResourceArticle } from '@/components/resources/ResourceArticle';

const slug = 'outsourcing-vs-inhouse-rcm';

export async function generateMetadata(): Promise<Metadata> {
    const resource = getResourceBySlug(slug);
    if (!resource) return { title: 'Resource Not Found' };

    return {
        title: `${resource.title} | Zenexa`,
        description: resource.excerpt,
    };
}

export default function ResourcePage() {
    const resource = getResourceBySlug(slug);

    if (!resource) {
        notFound();
    }

    return <ResourceArticle resource={resource} />;
}
