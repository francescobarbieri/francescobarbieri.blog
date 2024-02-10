import FloatingHeader from "@/components/floating-header";
import Footer from "@/components/footer";
import { TypographyH3, TypographyH4, TypographyP } from "@/components/ui/typography/Typography";
import WritingLinkList from "@/components/writing-link-list";

const Essays = () => {

    return (
        <>
            <FloatingHeader scrollTitle={"Essays"}/>
            <div className="pt-12">
                <TypographyH3>
                    free toughts  
                </TypographyH3>
                <TypographyP>
                    I write about events and topics that strike me. In my essays, you'll find reflections on the subjects that make me reflect the most. These often include technologies I'm currently interested in or insights into how I'm learning and growing in my career.
                </TypographyP>
                <br /> <hr /> <br />
                <WritingLinkList />
            </div>
            <Footer />
        </>
    );
}
 
export default Essays;