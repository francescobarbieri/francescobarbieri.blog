import { robotoSlab } from "@/app/layout";
import Icon from "@/components/Icon";
import styles from "@/styles/archive.module.css"
import clsx from "clsx";
import Link from "next/link";

export default function Archive({ allPosts }) {

    return(
        <div className={styles.container}>
            <div className={styles.collectiontitle}>
                <Icon
                    name="finance"
                    heigth="54"
                    width="54"
                    fill="#000"
                />
                <div className={ clsx(styles.collectiontitleText, robotoSlab.className)}>Finance</div>
            </div>
            {
                allPosts ? allPosts.map((i) => {
                    if(i.tag === "finance")
                        return <p className={styles.linkItem}><Link href={"/archive/" + i.link}> • {i.title} ( {i.date} ) </Link> <br /></p>
                }) : ''
            }
            <div className={styles.collectiontitle}>
                <Icon
                    name="thoughts"
                    heigth="54"
                    width="54"
                    fill="#000"
                />
                <div className={ clsx(styles.collectiontitleText, robotoSlab.className)}>Thoughts</div>
            </div>
            {
                allPosts ? allPosts.map((i) => {
                    if(i.tag === "thoughts")
                        return <p className={styles.linkItem}><Link href={"/archive/" + i.link} > • {i.title} </Link> <br /></p>
                }) : ''
            }
        </div>
    )
}