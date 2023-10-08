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
                    {
                        allPosts ? allPosts.map((i) => {
                            if(i.tag === "tech")
                                return <p className={styles.linkItem}><Link href={"/archive/" + i.link}> • {i.title} ( {i.date} ) </Link> <br /></p>
                        }) : ''
                    }
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
                    {
                        allPosts ? allPosts.map((i) => {
                            if(i.tag === "thoughts")
                                return <p className={styles.linkItem}><Link href={"/archive/" + i.link} > • {i.title} </Link> <br /></p>
                        }) : ''
                    }
                </div>
            </div>
        </div>
    )
}