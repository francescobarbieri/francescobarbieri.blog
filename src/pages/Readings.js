import styles from "@/styles/pages.module.css"
import Icon from "@/components/Icon"
import clsx from "clsx"
import { robotoSlab } from "@/lib/fonts"

export default function Readings() {
    return(
        <div className={styles.container}>
            <div className={styles.icon}>
                <Icon 
                    name="book"
                    fill="#000"
                    height="48"
                    width="48"
                />
            </div>

            <div className={clsx(styles.title, robotoSlab.className)}>
                Recommended Readings
            </div>
            
            <div className={styles.body}>

                <blockquote className={styles.blockquote}>
                    This list was last updated in October 2023.
                </blockquote>

                <div className={styles.book}>
                    <div className={clsx(styles.bookTitle, robotoSlab.className)}>
                        So Good They Can't Ignore You
                    </div>
                    <a href="https://books.apple.com/it/book/so-good-they-cant-ignore-you/id721497019" target="_blank">
                        <img src="/bookCovers/so-good-they-cant-ignore-you.png" className={styles.bookImage}/>
                    </a>
                    <div className={styles.text}>
                        In this book you are presented with compelling scientific and contemporary case study evidence that the key to one's career success is not to 'follow your passion'. Indeed that's a bad career advice. You should try to find out what you do well, build 'career capital' and focus all your efforts into that direction. It changed how I think about my career, my long term goals, how to achieve them and how to craft a remarkable life.
                    </div>
                </div>

                <hr className={styles.bookDivider}></hr>

                <div className={styles.book}>
                    <div className={clsx(styles.bookTitle, robotoSlab.className)}>
                        The Filter Bubble
                    </div>
                    <a href="https://books.apple.com/us/book/the-filter-bubble/id414403876" target="_blank">
                        <img src="/bookCovers/the-filter-bubble.png" className={styles.bookImage}/>
                    </a>
                    <div className={styles.text}>
                        An eye-opening book of how the hidden rise of personalization on the Internet is controlling and limiting the information we consume. This trends undermines the Internet's original purpose as an open platform for the spread of ideas and could live us all in an isoleted echoing world. I like this book because it makes us aware how insidious customization of the web is limiting our access to information, and narrowing rather than expanding our horizons.
                    </div>
                </div>

            </div>
        </div>
    )
}