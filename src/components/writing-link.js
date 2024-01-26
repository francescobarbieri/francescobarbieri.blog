import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypographyLarge, TypographySmall, TypographyP } from "./ui/typography/Typography";

const WritingLink = () => {

    return (
        <Link
            href={"/writing"}
            className={ cn("flex flex-col gap-1 transition-colors duration-300 rounded-lg p-3 border border-slate-200 hover:bg-gray-100")}
        >   
            <TypographyP>
                <span>Titolozzo</span>
            </TypographyP>
            <span className={cn('transition-colors duration-300 text-gray-400')}>
                <TypographySmall>
                    <span>December 12</span>{' · '}
                    <span>40.200 views</span>
                </TypographySmall>
            </span>
        </Link>
    );
}
 
export default WritingLink;