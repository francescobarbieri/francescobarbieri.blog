import { useEffect, useState } from 'react';
import supabase from '@/lib/supabase';

export const usePostViews = (slug) => {
    const [views, setViews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
    
    return { views, isLoading, error };
};

export default usePostViews;