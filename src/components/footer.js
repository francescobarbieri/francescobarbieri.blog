"use client";

import { TypographyMuted } from "@/components/ui/typography/Typography";

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <footer className="pt-12">
            <hr/>
            <div className="flex justify-between align content-center mt-5">
                <TypographyMuted>
                    Thank you for visiting my blog!
                </TypographyMuted>
                <TypographyMuted>
                    © {year} Francesco Barbieri
                </TypographyMuted>
            </div>
        </footer>
    );
}
 
export default Footer;