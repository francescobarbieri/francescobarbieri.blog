import { getPostList, getAllPostsList } from '@/lib/contentful';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const slugList = searchParams.has('slugList') ? JSON.parse(searchParams.get('slugList')) : null;

    try {
        if(slugList != null) {
            const data = await getPostList(slugList);

            const posts = data.map( item => ({
                title: item.fields.title,
                slug: item.fields.slug,
                date: new Date(item.sys.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
                year: new Date(item.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric' })
            }));

            return NextResponse.json({posts}, {status: 200})
        }
        else
        {
            const data = await getAllPostsList();

            const posts = data.map( item => ({
                title: item.fields.title,
                slug: item.fields.slug,
                date: new Date(item.sys.createdAt).toLocaleDateString(
                        'en-US', { month: 'long', day: 'numeric' }
                    ),
                year: new Date(item.sys.createdAt).toLocaleDateString(
                        'en-US', { year: 'numeric' }
                    )
            })).reduce( (acc, post) => {
                if(!acc[post.year]) {
                    acc[post.year] = [];
                }
                acc[post.year].push(post);
                return acc;
            }, {});

            return NextResponse.json({posts}, {status: 200})
        }
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}