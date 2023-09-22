'use client'

import styles from "@/styles/button.module.css"
import Icon from "./Icon"
import Link from "next/link"
import clsx from "clsx";

export default function Button({ text, iconType, href, active }) {

    // Setting default href
    if(href == null) href = "/";

    // Setting default active
    if(active == null) active = false;

    return (
        <Link className={clsx(styles.container, active && styles.selected)} href={href}>
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