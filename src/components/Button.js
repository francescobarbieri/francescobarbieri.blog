'use client'

import styles from "@/styles/button.module.css"
import Icon from "./Icon"
import Link from "next/link"
import clsx from "clsx";

export default function Button({ text, iconType, href, active, openInNewPage }) {

    // Setting default href
    if(href == null) href = "/";

    // Setting default href
    if(openInNewPage == null) openInNewPage = false;

    // Setting default active
    if(active == null) active = false;

    return (
        <Link className={clsx(styles.container, active && styles.selected)} href={href} target={openInNewPage ? "_blank" : "_self"}>
            <Icon
                name={iconType}
                fill="#000"
                width="26"
                height="26"
                className={styles.icon}
            />

            <div className={styles.text}>
                { text }
            </div>
        </Link>
    )
}