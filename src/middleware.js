import { NextResponse } from "next/server";

export default function middleware (request, event) {
    const { pathname } = request.nextUrl
    const slug = pathname.match(/\/essays\/(.*)/)?.[1]
    
    async function pageViews() {
        if (!slug) return

        const URL = 
            process.env.NODE_ENV === 'production'
            ? 'https://francescobarbieri.blog/api/increment-views'
            : 'http://localhost:3000/api/increment-views';

        try {
            const res = await fetch(`${URL}?slug=${slug}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(res.status !== 200) console.error('Failed to send page views', res)
        } catch (error) {
            console.error('Error sending page views', error)
        }
    }

    if(slug) event.waitUntil(pageViews());
    return NextResponse.next()
}