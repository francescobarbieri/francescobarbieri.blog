import styles from "@/styles/heading.module.css";
import clsx from "clsx";
import { robotoSlab } from '@/styles/fonts';

export default function Heading () {
    return(
        <div className={styles.headingContainer}>
            <a href="https://francescobarbieri.blog" className={styles.homeLink}>
                <div className={styles.logo}></div>
                <h1 className={ clsx(robotoSlab.className, styles.logoTxt) }>Francesco Barbieri</h1>
            </a>
            <h5 className={styles.slogan}>Tech, thoughts and current events</h5>
        </div>
    )
}
