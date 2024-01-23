import Link from "next/link";
import { cn } from "@/lib/utils";

const WritingLink = () => {

    let isActive = false;

    return (
        <Link
            href={"/writing"}
            className={ cn("flex flex-col gap-1 transition-colors duration-300 rounded-lg p-3 border border-slate-200", isActive ? "bg-black text-white" : "hover:bg-gray-200")}
        >
            <span className="font-medium">Titolozzo</span>
            <span className={cn('transition-colors duration-300', isActive ? 'text-slate-400' : 'text-slate-500')}>
                <span>December 12, 2023</span>{' · '}
                <span>40.200 views</span>
            </span>
        </Link>
    );
}
 
export default WritingLink;