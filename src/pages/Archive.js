import Icon from "@/components/Icon";
import styles from "@/styles/pages.module.css"
import clsx from "clsx";
import Link from "next/link";
import { robotoSlab } from "@/lib/fonts";

export default function Archive({ allPosts }) {

    return(
        <div>
            <div className={styles.container}>
                <div className={styles.icon}>
                    <Icon 
                        name="tech"
                        fill="#000"
                    />
                </div>
                <div className={clsx(styles.title, robotoSlab.className)}>
                    Tech Insights
                </div>
                <div className={styles.body}>
                    <ul className={styles.archiveList}>
                        {
                            allPosts ? allPosts.map((i) => {
                                if(i.tag === "tech")
                                    return (
                                        <li>
                                            <Link
                                                href={"/archive/" + i.link}
                                                className={styles.articleItem}
                                            >
                                                {i.title} ( {i.date} ) 
                                            </Link>
                                        </li>
                                    )
                            }) : ''
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.icon}>
                    <Icon
                        name="thoughts"
                        fill="#000"
                    />
                </div>
                <div className={clsx(styles.title, robotoSlab.className)}>
                    Thoughts
                </div>
                <div className={styles.body}>
                    <ul className={styles.archiveList}>
                        {
                            allPosts ? allPosts.map((i) => {
                                if(i.tag === "thoughts")
                                    return (
                                        <li>
                                            <Link
                                                href={"/archive/" + i.link}
                                                className={styles.articleItem}
                                            >
                                                {i.title} ( {i.date} ) 
                                            </Link>
                                        </li>
                                    )
                            }) : ''
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}