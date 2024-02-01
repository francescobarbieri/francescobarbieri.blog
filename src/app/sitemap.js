import { LINKS } from "@/lib/constants";
import { getAllPostsSlugs } from "@/lib/contentful";

export default async function sitemap() {
    const internalLinks = LINKS.map( item => (
        {
            url: "https://francescobarbieri.blog" + item.href,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        })
    )

    const postData = await getAllPostsSlugs();
    const post = postData.map( item => ({
        url: 'https://francescobarbieri.blog/essays/' + item.fields.slug,
        lastModified: new Date(item.sys.createdAt).toISOString().replace(/\.\d+Z$/, 'Z'),
        changeFrequency: 'monthly',
        priority: 0.5
    }));

    return [
        {
            url: 'https://francescobarbieri.blog',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        ...internalLinks,
        ...post
    ]
}