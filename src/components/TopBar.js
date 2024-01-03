'use client'

import styles from "@/styles/topbar.module.css";
import Link from "next/link";
import Icon from "./Icon";
import { useState, useEffect } from "react";

const Topbar = () => {

    const [status, setStatus] = useState(false);

    useEffect(() => {
        if(status) {
            // Background of main section
            document.getElementById('mainWrapper').style.backgroundColor = "rgba(0, 0, 0, 0.33)"

            // Show or hide header section
            document.getElementById("header").classList.remove("hideHeader")
            document.getElementById("header").classList.add("showHeader")

            // Lock scrolling
            document.getElementById('body').style.height = "100vh"
            document.getElementById('body').style.overflow = "hidden"
        }
        else
        {
            // Background of main section
            document.getElementById('mainWrapper').style.backgroundColor = "transparent"

            // Show or hide header section
            document.getElementById("header").classList.remove("showHeader")
            document.getElementById("header").classList.add("hideHeader")

            // Lock scrolling
            document.getElementById('body').style.overflow = "visible"
        } 
    }, [status])

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Link
                    href="/">
                    <div className={styles.logo}></div>
                </Link>

                <div
                    className={styles.menuButton}
                    onClick={() => setStatus(!status)}
                >
                    <Icon
                        name="menu"
                        fill="#000"
                        height="65%"
                        className={styles.icon}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Topbar;