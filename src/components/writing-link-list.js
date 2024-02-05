'use client'

import { useEffect, useState } from "react";
import WritingLink from "./writing-link";
import { Skeleton } from "./ui/skeleton";
import { TypographyH4 } from "./ui/typography/Typography";

const LoadingSkeleton = () => {
    return (
        <>
            <div className="w-full h-[90px] rounded-lg p-4 pr-16 border border-slate-200 flex flex-col justify-between">
                <Skeleton className="w-2/3 h-4 mt-1" />
                <Skeleton className="w-1/4 h-4" />
            </div>
            <div className="w-full h-[90px] rounded-lg p-4 pr-16 border border-slate-200 flex flex-col justify-between">
                <Skeleton className="w-2/3 h-4 mt-1" />
                <Skeleton className="w-1/4 h-4" />
            </div>
            <div className="w-full h-[90px] rounded-lg p-4 pr-16 border border-slate-200 flex flex-col justify-between">
                <Skeleton className="w-2/3 h-4 mt-1" />
                <Skeleton className="w-1/4 h-4" />
            </div>
        </>
    )
};

const WritingLinkList = ({ slugList }) => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);

    const URL =
    process.env.NODE_ENV === "production"
        ? "https://francescobarbieri.blog/api/get-posts"
        : "http://localhost:3000/api/get-posts";

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const query = slugList ? `${URL}?slugList=${JSON.stringify(slugList)}` : URL;
                    const response = await fetch(query);
                    const data = await response.json();
                    setPosts(data.posts);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                } finally {
                    setLoading(false);
                }
            };
        fetchData();
    }, [slugList]);

    return (
        <div className="flex flex-col gap-3">
            {loading ? (
                <LoadingSkeleton />
            ) : slugList ? (
                posts && posts.length > 0 ? (
                posts.map((item) => (
                    <WritingLink
                    key={item.slug}
                    slug={item.slug}
                    date={item.date}
                    title={item.title}
                    />
                ))
                ) : (
                        <div>No posts available</div>
                )
            ) : (
                <>
                    {Object.entries(posts).map(([year, items]) => (
                        <div key={year}>
                            <TypographyH4>{year}</TypographyH4>
                            <br />
                            <div className="flex flex-col gap-3">
                                {items.map((item) => (
                                <WritingLink
                                    key={item.slug}
                                    title={item.title}
                                    slug={item.slug}
                                    date={item.date}
                                />
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
    
}
 
export default WritingLinkList;