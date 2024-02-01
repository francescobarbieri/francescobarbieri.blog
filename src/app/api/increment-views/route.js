import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

// TODO: do a private and public supabase client

export async function POST(request) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug');
    if(!slug) return NextResponse.json({error: 'Missing slug paramenter'}, {status: 400});

    try {
        await supabase.rpc('increment_views', {page_slug: slug})
        return NextResponse.json({message: 'View count incremented successfully'}, {status: 200})
    } catch (error) {
        //console.log('Error incrementing the views for slug:', slug, error);
        return NextResponse.json({message: error.message}, {status: 500})
    }
}