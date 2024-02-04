'use client'

import { TypographySmall, TypographyP } from "./ui/typography/Typography";
import ViewCount from "./view-count";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

const WritingLink = ({title, slug, date }) => {

    return (
        <a
            href={"/essays/" + slug}
            className="flex flex-col gap-1 transition-colors duration-150 rounded-lg p-4 pr-16 border border-slate-200 hover:bg-gray-100"
        >   
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <TypographyP className="text-left truncate overflow-hidden">
                            <span>{ title }</span>
                        </TypographyP>
                    </TooltipTrigger>
                    <TooltipContent>
                        <TypographyP className="text-left max-w-sm">
                            <span>{ title }</span>
                        </TypographyP>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>


            <div className="flex text-gray-400 items-center">
                <TypographySmall>
                    { date }
                </TypographySmall>
                <span className="pl-2 pr-2"> · </span>
                <ViewCount
                    slug={slug}
                />
            </div>
        </a>
    );
}
 
export default WritingLink;