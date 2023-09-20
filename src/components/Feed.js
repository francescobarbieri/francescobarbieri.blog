'use client'

import styles from "@/styles/feed.module.css";
import Article from "./Article";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchInitialPosts, fetchPosts, getNextPost, getPaginatedPosts, initCache } from "@/app/actions";
import Congratulations from "./Contratulations";

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
                setData(data => [...data, 
                    <Article 
                        title={res.title}
                        tag={res.tag}
                        date={res.date}
                        content={res.fileContents}
                    />
                ])
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
                eof ? <Congratulations /> : ''
            }

            <div ref={ref} className={styles.loading}></div>
        </div>
    )
}