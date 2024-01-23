import { TypographyH3, TypographyP } from "@/components/ui/typography/Typography";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Mosaic from "@/components/mosaic";
import Footer from "@/components/footer";
import WritingLink from "@/components/writingLink";

const Home = () => {
    return (
        <main className="pt-12 w-full max-w-[672px] pl-4 pr-4 mx-auto">
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

            { /*
            <Card>
                <CardHeader>
                    <CardTitle>Blog post title</CardTitle>
                    <CardDescription>We waglù</CardDescription>
                </CardHeader>
            </Card>
            */ }

            <div className="flex flex-col gap-3">
                <WritingLink></WritingLink>
                <WritingLink></WritingLink>
                <WritingLink></WritingLink>
            </div>

            <Footer />
        </main>
    );
}
 
export default Home;