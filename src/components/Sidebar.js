'use client'

import { usePathname } from "next/navigation";
import styles from "@/styles/sidebar.module.css"
import Button from "./Button"
import NewsletterButton from "./NewsletterButton"
import Heading from "./Heading"

export default function Sidebar() {

    const pathName = usePathname();

    return (
        <div className={styles.container}>
            <nav className={styles.buttonContainer}>
                <Heading />

                <Button
                    text="everything"
                    iconType="circle"
                />
                <Button
                    text="finance"
                    iconType="circle"
                />
                <Button
                    text="AI / ML"
                    iconType="circle"
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
  