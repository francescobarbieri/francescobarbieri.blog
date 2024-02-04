import { getAllPostsSlugs, getPost, getPostSeo } from "@/lib/contentful";
import FloatingHeader from "@/components/floating-header";
import { RichText } from "@/components/rich-text";
import Footer from "@/components/footer";
import { TypographyH3, TypographyMuted, TypographyP } from "@/components/ui/typography/Typography";

export async function generateStaticParams() {
    const routes = await getAllPostsSlugs();

    return routes.map( route => ({
        slug: route.fields.slug
    }))
}

export default async function essaySlug ({ params }) {
    const { slug } = params;
    const data = await getPost(slug);

    const title = data[0].fields.title;
    const date = new Date(data[0].sys.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })

    return(
        <>
            <FloatingHeader scrollTitle={"Essays"}/>
            <div className="pt-12">
                <div className="max-w-md mb-3">
                    <TypographyH3> { title } </TypographyH3>
                </div>
                <div className="max-w-md mb-6 text-gray-400">
                    <TypographyMuted> { date } </TypographyMuted>
                </div>
                <RichText
                    content={data[0].fields.body}
                />
            </div>
            <Footer />
        </>
    )
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const seoData = await getPostSeo(slug);
    if (!seoData) return null;

    const description = seoData[0].fields.seo.description;
    const title = seoData[0].fields.seo.ogTitle;
    const publishedTimestamp = new Date(seoData[0].sys.createdAt).toISOString();
    const siteUrl = '/essays/' + slug;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTimestamp,
            url: siteUrl
        },
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: siteUrl
        }
    }
}