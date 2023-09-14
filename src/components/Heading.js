import styles from "@/styles/heading.module.css";
import { robotoSlab } from "@/app/layout";
import clsx from "clsx";

export default function Heading () {
    return(
        <div className={styles.headingContainer}>
            <a href="#" className={styles.homeLink}>
                <h1 className={ clsx(robotoSlab.className, styles.logoTxt) }>Francesco Barbieri</h1>
            </a>
            <h5 className={styles.slogan}>Finance, tech and current events</h5>
        </div>
    )
}