'use client'

import styles from "@/styles/sidebarbutton.module.css"
import IconComponent from "./Icon"
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function SidebarButton () {

    const [scrollDirection, setScrollDirection] = useState(true); // Initialize scroll direction

    useEffect( () => {
        var lastScrollTop = window.scrollY;
        window.addEventListener("scroll", function() {
            var st = window.scrollY || document.documentElement.scrollTop;

            if (st > lastScrollTop) {
                // downscroll code
                setScrollDirection(false)
             } else if (st < lastScrollTop) {
                // upscroll code
                setScrollDirection(true)
             } // else was horizontal scroll
             lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        }, false);
    }, [])
        
    return(
        <div className={
            clsx(styles.button, 
                scrollDirection && styles.slideIn,
                !scrollDirection && styles.slideOut)}
            id="sidebar-btn"
            >
            <IconComponent
                name="arrowBarRight"
                fill="#fff"
                className={styles.icon}
            />
        </div>
    )
}