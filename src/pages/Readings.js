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
                    Ciao!
                </blockquote>

                <div className={styles.book}>
                    <div className={clsx(styles.bookTitle, robotoSlab.className)}>
                        The Filter Bubble
                    </div>
                    <a href="#" target="_blank">
                        <img src="/bookCovers/so-good-they-cant-ignore-you.png" className={styles.bookImage}/>
                    </a>
                    <div className={styles.text}>
                        Steve McConnell's Code Complete 2 is the Joy of Cooking for software developers. Reading it means that you enjoy your work, you're serious about what you do, and you want to keep improving. In Code Complete, Steve notes that the average programmer reads less than one technical book per year. The very act of reading this book already sets you apart from probably ninety percent of your fellow developers. In a good way.

                        I like this book so much that the title of this very website is derived from it – the examples of what not to do are tagged with the "Coding Horror" icon. There's nothing funnier than a Coding Horror – until you have to deal with one yourself. Then it's suddenly not so funny any more. Do yourself a favor. Make this the first book you read, and the first book you recommend to your fellow developers.
                    </div>
                </div>

                <hr className={styles.bookDivider}></hr>

                <div className={styles.book}>
                    <div className={clsx(styles.bookTitle, robotoSlab.className)}>
                        The Filter Bubble
                    </div>
                    <a href="https://www.amazon.com/dp/0143121235?ref_=cm_sw_r_cp_ud_dp_VE0XFCFV80RMCVKSXVSQ" target="_blank">
                        <img src="/bookCovers/the-filter-bubble.png" className={styles.bookImage}/>
                    </a>
                    <div className={styles.text}>
                        Steve McConnell's Code Complete 2 is the Joy of Cooking for software developers. Reading it means that you enjoy your work, you're serious about what you do, and you want to keep improving. In Code Complete, Steve notes that the average programmer reads less than one technical book per year. The very act of reading this book already sets you apart from probably ninety percent of your fellow developers. In a good way.

                        I like this book so much that the title of this very website is derived from it – the examples of what not to do are tagged with the "Coding Horror" icon. There's nothing funnier than a Coding Horror – until you have to deal with one yourself. Then it's suddenly not so funny any more. Do yourself a favor. Make this the first book you read, and the first book you recommend to your fellow developers.
                    </div>
                </div>

            </div>
        </div>
    )
}