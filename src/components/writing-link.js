'use client'

import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypographySmall, TypographyP } from "./ui/typography/Typography";
import ViewCount from "./view-count";

const WritingLink = ({title, slug, date }) => {

    return (
        <Link
            href={"/essays/" + slug}
            className={ cn("flex flex-col gap-1 transition-colors duration-300 rounded-lg p-3 border border-slate-200 hover:bg-gray-100")}
        >   
            <TypographyP>
                <span>{ title }</span>
            </TypographyP>

            <div className="flex text-gray-400 items-center">
                <TypographySmall>
                    { date }
                </TypographySmall>
                <span className="pl-2 pr-2"> · </span>
                <ViewCount
                    slug={slug}
                />
            </div>
        </Link>
    );
}
 
export default WritingLink;