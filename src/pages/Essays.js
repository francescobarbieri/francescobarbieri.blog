import FloatingHeader from "@/components/floating-header";
import Footer from "@/components/footer";
import { TypographyH3, TypographyH4, TypographyP } from "@/components/ui/typography/Typography";
import WritingLink from "@/components/writing-link";

const Essays = () => {
    return (
        <>
            <FloatingHeader scrollTitle={"Essays"}/>
            <div className="pt-12">
                <TypographyH3>
                    free toughts  
                </TypographyH3>
                <TypographyP>
                    At that time I couldn't know it was the start of a career. Over the course of personal and university projects, as well as through my professional experiences, I have acquired valuable expertise in Java, JavaScript and web technologies. Currently, I am learning Machine Learning in my spare time.
                </TypographyP>
                <br/>
                <hr/>
                <br/>
                <TypographyH4>
                    2024
                </TypographyH4>
                <br />
                <div className="flex flex-col gap-3">
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                </div>
                <br/>
                <hr/>
                <br/>
                <TypographyH4>
                    2023
                </TypographyH4>
                <br />
                <div className="flex flex-col gap-3">
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Essays;