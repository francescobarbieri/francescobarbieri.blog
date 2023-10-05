"use client"

import styles from "@/styles/article.module.css";
import Icon from "./Icon";
import clsx from "clsx";
import { marked } from "marked";
import { robotoSlab } from '@/styles/fonts';

export default function Article ({title, tag, date, content}) {

    const main = marked(content)

    return (
        <article className={styles.article}>

            <div className={styles.header}>
                <div className={styles.tag}>
                    { tag }
                </div>
                <div className={styles.date}>
                    { date }
                </div>
            </div>

            <div className={styles.icon}>
                <Icon 
                    name={ tag }
                    fill="#000"
                />
            </div>
            <div className={clsx(styles.title, robotoSlab.className)}>
                { title }
            </div>


            <div className={styles.body} dangerouslySetInnerHTML={{ __html: main }}></div>

        </article>
    )
}
