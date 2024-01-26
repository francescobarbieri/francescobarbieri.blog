import FloatingHeader from "@/components/floating-header";
import Footer from "@/components/footer";
import { TypographyH3, TypographyP, TypographySmall } from "@/components/ui/typography/Typography";

const ReadingList = () => {

    // IMAGE SIZE: 350px x 530px

    return (
        <>
            <FloatingHeader scrollTitle={"Reading List"}/>
            <div className="pt-12">
                <TypographyH3>
                    recommended readings
                </TypographyH3>

                <TypographyP>
                    At that time I couldn't know it was the start of a career. Over the course of personal and university projects, as well as through my professional experiences, I have acquired valuable expertise in Java, JavaScript and web technologies. Currently, I am learning Machine Learning in my spare time.
                </TypographyP>
                <br />
                <hr />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
                    <a 
                        href="https://books.apple.com/it/book/so-good-they-cant-ignore-you/id721497019"
                        target="_blank"
                        className="hover:underline"
                    >
                        <div className="w-full h-60 bg-[url('/img/books/so-good-they-cant-ignore-you.png')] bg-center rounded-lg bg-contain bg-no-repeat bg-[#f7f7f7]"></div>
                        <TypographySmall>
                            So good they can't ignore you
                        </TypographySmall>
                    </a>
                    <a 
                        href="https://books.apple.com/ie/book/persuasive-technology/id491708975"
                        target="_blank"
                        className="hover:underline"
                    >
                        <div className="w-full h-60 bg-[url('/img/books/persuasive-tech.png')] bg-center rounded-lg bg-contain bg-no-repeat bg-[#f7f7f7]"></div>
                        <TypographySmall>
                            Persuasive technology
                        </TypographySmall>
                    </a>
                    <a 
                        href="https://books.apple.com/us/book/the-filter-bubble/id414403876"
                        target="_blank"
                        className="hover:underline"
                    >
                        <div className="w-full h-60 bg-[url('/img/books/the-filter-bubble.png')] bg-center rounded-lg bg-contain bg-no-repeat bg-[#f7f7f7]"></div>
                        <TypographySmall>
                            The Filter Bubble
                        </TypographySmall>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default ReadingList;