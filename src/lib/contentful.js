const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getAllPostsSlugs() {
    const res = await client.getEntries({
        content_type: 'blogPost',
        select: 'sys.id, sys.createdAt, fields.slug'
    });

    return res.items;
}

export async function getAllPostsList() {
    const res = await client.getEntries({
        content_type: 'blogPost',
        select: 'sys.createdAt, fields.slug, fields.title'
    });

    return res.items;
}

export async function getPostList(list) {  
    const res = await client.getEntries({
        content_type: 'blogPost',
        select: 'sys.createdAt, fields.slug, fields.title',
        'fields.slug[in]': `${list.slug1},${list.slug2},${list.slug3}`
    });

    return res.items;
}

export async function getPost(slug) {
    const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug
    });

    return res.items;
}

export async function getPostSeo(slug) {
    const res = await client.getEntries({
        content_type: 'blogPost',
        select: 'fields.seo, sys.createdAt',
        'fields.slug': slug
    });

    return res.items;
}