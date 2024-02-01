'use client';

import NavigationLink from "./navigation-link";
import { LINKS, SOCIALS } from "@/lib/constants";
import { TypographySmall } from "./ui/typography/Typography";

const MenuContent = () => {
    return (
        <div className="flex w-full flex-col text-sm scrollable-area">
            <div className="flex flex-col gap-4">
                <a href="/" className="inline-flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg">
                    <img
                        src="/img/francesco-barbieri-pic.jpeg"
                        alt="Francesco Barbieri"
                        width={40}
                        height={40}
                        loading="lazy"
                        className="rounded-full border shadow-sm"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold tracking-tight">Francesco Barbieri</span>
                        <span className="text-gray-600">Software Engineer</span>
                    </div>
                </a>

                <div className="flex flex-col gap-1">
                    {
                        LINKS.map(( link ) => (
                            <NavigationLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                            />
                        ))
                    }
                </div>
                <hr />
                <span className="px-2 leading-relaxed text-gray-600">
                    <TypographySmall>
                        Links
                    </TypographySmall>
                </span>
                <div className="flex flex-col gap-1">
                    {
                        Object.values(SOCIALS).map( (link) => (
                            <NavigationLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default MenuContent;