'use client'

import FloatingHeader from "@/components/floating-header";
import Footer from "@/components/footer";
import { TypographyH3, TypographyP, TypographySmall } from "@/components/ui/typography/Typography";
import { BOOKS } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

const ReadingList = () => {

    return (
        <>
            <FloatingHeader scrollTitle={"Reading List"}/>
            <div className="pt-12">
                <TypographyH3>
                    recommended readings
                </TypographyH3>

                <TypographyP>
                    A curated collection of books I've read spanning technology, personal improvement, career development, and finance. These are inspiring reads that have left a lsating impact on me, offering valuable insights.
                </TypographyP>
                <br />
                <hr />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 gap-y-6 my-8">
                    {
                        BOOKS.map( (book) => (
                            <a 
                                href={book.href}
                                target="_blank"
                                className="hover:underline"
                            >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div
                                                className="w-full h-60 bg-center rounded-lg bg-contain bg-no-repeat bg-[#f7f7f7] hover:border-gray-300 border border-[#f7f7f7]" 
                                                style={{ backgroundImage: `url(img/books/${book.cover})`}}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <TypographySmall>
                                                {book.title}
                                            </TypographySmall>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default ReadingList;