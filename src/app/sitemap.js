import { fetchPosts } from "./actions";

export default async function sitemap() {

    const sitemapArray = [
        {
            url: 'https://francescobarbieri.me',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://francescobarbieri.me/tech',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://francescobarbieri.me/thoughts',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://francescobarbieri.me/archive',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://francescobarbieri.me/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://francescobarbieri.me/readings',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    const res = await fetchPosts();
    
    res.map((i, index) => {
        sitemapArray.push(
            {
                url: 'https://francescobarbieri.me/archive/' + i.link,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            }
        )
    })

    return sitemapArray;
}