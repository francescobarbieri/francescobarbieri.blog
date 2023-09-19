'use client'

import styles from "@/styles/feed.module.css";
import Article from "./Article";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchPosts } from "@/app/actions";

export default function Feed() {

    const [ref, inView] = useInView();
    const [data, setData] = useState([<Article/>, <Article/>, <Article/>])

    function fetchMoreData() {
        let fetchedArticle = fetchPosts();
        setData(data => [...data, fetchedArticle])
    }

    useEffect(() => {
        if(inView) {
            fetchMoreData()
            console.log("ci siamo")
        }
    }, [inView])


    return(
        <div className={styles.feed}>
            {
                data.map((i, index) => (
                    i
                ))
            }

            <div ref={ref} className={styles.loading}></div>
        </div>
    )
}