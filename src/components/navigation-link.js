'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { LuExternalLink } from 'react-icons/lu';

const NavigationLink = ({ customKey, icon, label, href }) => {
    const pathname = usePathname();
    const iconWeight = "bold";
    const iconCmp = icon ?? <LuExternalLink size={16} />

    const isInternal = href.startsWith('/');
    if (!isInternal) {
        return (
            <a
                key={customKey}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
            >
                <span className="inline-flex items-center gap-2 font-medium capitalize">
                    {iconCmp} {label}
                </span>
                <IconContext.Provider value={{ color: "rgb(100 116 139)"}}>
                    <LuExternalLink size={16} />
                </IconContext.Provider>
            </a>
        )
    }

    let isActive = false;
    if(pathname?.length > 0) {
        const splittedPathname = pathname.split('/');
        const currentPathname = splittedPathname[1] ?? '';
        isActive = currentPathname === href.split('/')[1];
    }

    return (
        <Link
            key={customKey}
            href={href}
            className={
                cn('group flex items-center justify-between rounded-lg p-2',
                isActive ? 'bg-black text-white' : 'hover:bg-gray-200')
            }
        >
            <span className="flex items-center gap-2">
                {icon}
                <span className={cn('font-medium', isActive && 'text-white')}>{label}</span>
            </span>

        </Link>
    );
}
 
export default NavigationLink;