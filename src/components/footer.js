"use client";

import { TypographySmall } from "@/components/ui/typography/Typography";
import { LuExternalLink, LuHeartHandshake } from "react-icons/lu";
import { Toaster, toast } from "sonner";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className="pt-12 pb-12">
            <hr/>
            <div className="flex justify-between align content-center mt-5 text-gray-400">
                <a 
                    href="https://twitter.com/intent/user?screen_name=frabarbieri_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100"
                >
                    <TypographySmall>
                        <span className="underline">Follow me</span>
                    </TypographySmall>
                    <LuExternalLink size={16} />
                </a>
                <a
                    onClick={() => 
                        toast(
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://onur.dev"
                                        className="underline"
                                    >
                                        Onur Şuyalçınkaya · Styling
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://shadcn.com/"
                                        className="underline"
                                    >
                                        shadncn · UI Components
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://emilkowal.ski/"
                                        className="underline"
                                    >
                                        Emil Kowalski · UI Components
                                    </a>
                                </li>
                            </ul>
                        , {
                            duration: 5000,
                            icon: <LuHeartHandshake />
                        })
                    }
                    className="rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
                >
                    <TypographySmall>
                        Credits
                    </TypographySmall>
                </a>
            </div>
            <Toaster
                position="bottom-center"
                closeButton="true"
            />
        </footer>
    );
}
 
export default Footer;