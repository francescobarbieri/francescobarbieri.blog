'use client'

import { MobileDrawer } from "./drawer";
import { TypographySmall } from "./ui/typography/Typography";

const FloatingHeader = ({ scrollTitle }) => {

    return (
        <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
            <div className="flex h-full w-full items-center">
                <div className="flex w-full items-center justify-between gap-2">
                    <div className="flex flex-1 items-center gap-1">
                        <MobileDrawer />
                        <div className="flex flex-1 items-center justify-between pl-2">
                            <TypographySmall>
                                { scrollTitle }
                            </TypographySmall>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default FloatingHeader;