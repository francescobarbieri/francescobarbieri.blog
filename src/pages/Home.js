import { TypographyH3, TypographyInlineCode, TypographyP } from "@/components/ui/typography/Typography";
import Mosaic from "@/components/mosaic";
import Footer from "@/components/footer";
import FloatingHeader from "@/components/floating-header";
import { SOCIALS } from "@/lib/constants";
import WritingLinkList from "@/components/writing-link-list";

const Home = async () => {
    const list = {
        slug1: 'test-post',
        slug2: 'main-post',
        slug3: 'terzo-post',
    }

    return (
        <>
            <FloatingHeader scrollTitle={"Francesco Barbieri"}/>
            <div className="pt-12">
                <TypographyH3>
                    hey, I'm Francesco 👋
                </TypographyH3>
                <TypographyP>
                    Currently working as a Freelance Developer while studying, I'm prioritizing valuable work experience over traditional student jobs. Committed to continuous growth. My aim is to seek new experiences, meet exceptional individuals, and push beyond the ordinary context. Learn more about me 
                    <a  
                        href={SOCIALS.linkedin.href} 
                        target="_blank"
                        rel="noopener">
                        <TypographyInlineCode>here</TypographyInlineCode>
                    </a>
                </TypographyP>
                <Mosaic />
                <TypographyP>
                    I write about events and topics that strike me. In my essays, you'll find reflections on the subjects that make me reflect the most. These often include technologies I'm currently interested in or insights into how I'm learning and growing in my career.
                </TypographyP>
                <br></br>

                <WritingLinkList
                    slugList={list}
                />

                <TypographyP>
                    Over the past decade, I've written content on my blog and newsletter. I try to keep things simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way.
                </TypographyP>

                <Footer />
            </div>
        </>
    );
}
 
export default Home;