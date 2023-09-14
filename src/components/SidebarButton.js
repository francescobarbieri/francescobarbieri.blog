'use client'

import styles from "@/styles/sidebarbutton.module.css"
import IconComponent from "./Icon"
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function SidebarButton () {

    const [status, setStatus] = useState(false);
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

    useEffect(() => {
        if(status) {
            // Background of main section
            document.getElementById('mainWrapper').style.backgroundColor = "rgba(0, 0, 0, 0.33)"

            // Show or hide header section
            document.getElementById("header").classList.remove("hideHeader")
            document.getElementById("header").classList.add("showHeader")

            // Lock scrolling
            document.getElementById('body').style.overflow = "hidden"

            // Icon rotation
            document.getElementById("sidebarButtonIcon").classList.add(styles.rotateIcon)
        }
        else
        {
            // Background of main section
            document.getElementById('mainWrapper').style.backgroundColor = "#fff"

            // Show or hide header section
            document.getElementById("header").classList.remove("showHeader")
            document.getElementById("header").classList.add("hideHeader")

            // Lock scrolling
            document.getElementById('body').style.overflow = "show"

            // Icon rotation
            document.getElementById("sidebarButtonIcon").classList.remove(styles.rotateIcon)
        } 
    }, [status])
        
    return(
        <div className={
            clsx(styles.button, 
                scrollDirection && styles.slideIn,
                !scrollDirection && styles.slideOut)}
            id="sidebar-btn"
            onClick={() => setStatus(!status)}
            >
                
            <IconComponent
                name="arrowBarRight"
                fill="#fff"
                id="sidebarButtonIcon"
                className={styles.icon}
            />
        </div>
    )
}