'use client'

import { usePathname, useSearchParams } from "next/navigation";
import styles from "@/styles/sidebar.module.css"
import Button from "./Button"
import NewsletterButton from "./NewsletterButton"
import Heading from "./Heading"
import clsx from "clsx";

export default function Sidebar() {

    const pathName = usePathname(); 

    return (
        <div className={clsx(styles.container)} >
            <nav className={styles.buttonContainer}>
                <Heading />

                <Button
                    text="everything"
                    iconType="circle"
                    href="/"
                    active={pathName === "/"}
                />
                <Button
                    text="finance"
                    iconType="finance"
                    href="finance"
                    active={pathName === "/finance"}
                />
                <Button
                    text="thoughts"
                    iconType="thoughts"
                    href="thoughts"
                    active={pathName === "/thoughts"}
                />
                <hr className={styles.hline} />
                <Button
                    text="about me"
                    iconType="person"
                    href="about"
                    active={pathName === "/about"}
                />
                <Button
                    text="archive"
                    iconType="archive"
                    href="archive"
                    active={pathName === "/archive"}
                />
                <Button
                    text="reading list"
                    iconType="book"
                    href="readings"
                    active={pathName === "/readings"}
                />
                <Button 
                    text="email me"
                    iconType="at"
                    href="mailto:info@francescobarbieri.blog"
                />
                <hr className={styles.hline} />

                <NewsletterButton />
            </nav>
            <div className={styles.info}>
                    Thank you for visiting my blog!
                    <br/><br/>
                    © 2023 Francesco Barbieri<br/>
                    Proudly published with Next.js
            </div>
        </div>
    )
}
  