'use client'

import styles from "@/styles/feed.module.css";
import Article from "./Article";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchInitialPosts, fetchPosts, getNextPost, getPaginatedPosts, initCache } from "@/app/actions";

export default function Feed({ initialPosts}) {

    const [ref, inView] = useInView();
    const [data, setData] = useState(initialPosts);
    const [currentPostNumber, setCurrentPostNumber] = useState(initialPosts.length - 1);
    const [eof, setEof] = useState(false);

    function fetchMoreData() {
        getNextPost(currentPostNumber).then(res => {
            if(res === undefined) {
                setEof(true)            
            } else {
                const fetchedArticle = <Article />

                setData(data => [...data, fetchedArticle])
            }
        })
    }

    useEffect(() => {
        if(inView) {
            fetchMoreData()
            setCurrentPostNumber(currentPostNumber + 1);
        }
    }, [inView])

    return(
        <div className={styles.feed}>
            {
                data ? data.map((i, index) => (
                    i
                )) : ''
            }
            {
                eof ? <h1>STOP</h1> : ''
            }

            <div ref={ref} className={styles.loading}></div>
        </div>
    )
}