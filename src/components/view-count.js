'use client'

import usePostViews from "@/hooks/usePostViews";
import { Skeleton } from "./ui/skeleton";

const ViewCount = ({ slug }) => {
    
    const {views, isLoading, error } = usePostViews(slug);

    if(isLoading) {
        return <Skeleton className="h-3 w-[60px]"/>
    }

    if(error) {
        return <>Data unavailable</>
    }

    return (
        <>
            { views } views
        </>
    )
}
 
export default ViewCount;