'use client'

import { useEffect, useState } from "react";
import supabase from '@/lib/supabase';

const ViewCount = ({ slug }) => {
    const [views, setViews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showViews, setShowViews] = useState(false);

    useEffect(() => {
        const fetchPostViews = async() => {
            try {
                const { data, error } = await supabase
                .from('Posts')
                .select('slug, views');

                const postViews = data.find( item => item.slug === slug)?.views ?? null;
                setViews(postViews);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if(slug) {
            fetchPostViews();
        }
    }, [slug]);

    useEffect( () => {
        if(!isLoading) {
            setShowViews(true);
        }
    }, [isLoading])

    return (
        <>
            {!isLoading && error && <>Data unavailable</>}

            {!isLoading && !error && (
                <div style={{ opacity: showViews ? 1 : 0, transition: 'opacity 200ms ease-in-out'}}>
                    {views} views
                </div>
            )}
        </>
    )
}
 
export default ViewCount;