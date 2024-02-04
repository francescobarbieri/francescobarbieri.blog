'use client'

import usePostViews from "@/hooks/usePostViews";
import { useEffect, useState } from "react";

const ViewCount = ({ slug }) => {
    const {views, isLoading, error } = usePostViews(slug);
    const [showViews, setShowViews] = useState(false);

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