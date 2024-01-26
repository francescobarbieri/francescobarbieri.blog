import { TypographyH3, TypographyP } from "@/components/ui/typography/Typography";
import Mosaic from "@/components/mosaic";
import Footer from "@/components/footer";
import WritingLink from "@/components/writing-link";
import FloatingHeader from "@/components/floating-header";

const Home = () => {
    return (
        <>
            <FloatingHeader scrollTitle={"Francesco Barbieri"}/>
            <div className="pt-12">
                <TypographyH3>
                    hey, I'm Francesco 👋
                </TypographyH3>
                <TypographyP>
                    At that time I couldn't know it was the start of a career. Over the course of personal and university projects, as well as through my professional experiences, I have acquired valuable expertise in Java, JavaScript and web technologies. Currently, I am learning Machine Learning in my spare time.
                </TypographyP>
                <Mosaic />
                <TypographyP>
                    Over the past decade, I've written content on my blog and newsletter. I try to keep things simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way.
                </TypographyP>
                <br></br>

                <div className="flex flex-col gap-3">
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                    <WritingLink></WritingLink>
                </div>

                <TypographyP>
                    Over the past decade, I've written content on my blog and newsletter. I try to keep things simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way.
                </TypographyP>

                <TypographyP>
                    Over the past decade, I've written content on my blog and newsletter. I try to keep things simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way.
                </TypographyP>

                <Footer />
            </div>
        </>
    );
}
 
export default Home;