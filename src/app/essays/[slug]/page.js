import { getAllPostsSlugs, getPost, getPostSeo } from "@/lib/contentful";
import FloatingHeader from "@/components/floating-header";
import { RichText } from "@/components/rich-text";
import Footer from "@/components/footer";
import { TypographyP } from "@/components/ui/typography/Typography";
import supabase from "@/lib/supabase";

export async function generateStaticParams() {
    const routes = await getAllPostsSlugs();

    return routes.map( route => ({
        slug: route.fields.slug
    }))
}

export default async function essaySlug ({ params }) {
    const { slug } = params;
    const data = await getPost(slug);

    return(
        <>
            <FloatingHeader scrollTitle={"Essays"}/>
            <div className="pt-12">
                <RichText
                    content={data[0].fields.body}
                />
            </div>
            <br /> <hr />
            <TypographyP>
                <span className="italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </span>
            </TypographyP>
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