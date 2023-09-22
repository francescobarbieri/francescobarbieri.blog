'use client'

import styles from "@/styles/feed.module.css";
import Article from "./Article";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getNextPost} from "@/app/actions";
import Congratulations from "./Contratulations";
import { usePathname } from "next/navigation";

export default function Feed({ initialPosts }) {

    const [ref, inView] = useInView();
    const [data, setData] = useState(initialPosts);
    const [currentPostNumber, setCurrentPostNumber] = useState(initialPosts[initialPosts.length - 1].id);
    const [eof, setEof] = useState(false);
    
    let filter = undefined;
    const pathName = usePathname();
    switch (pathName) {
        case '/finance':
            filter = 'finance';
            break;
        case '/thoughts':
            filter = 'thoughts';
            break;
        default:
            filter = undefined;
            break;
    }

    function fetchMoreData() {
        getNextPost(currentPostNumber, filter).then(res => {
            if(res === undefined) {
                setEof(true)
            } else {
                setData(data => [...data, 
                    {
                        id: res.id,
                        title: res.title,
                        tag: res.tag,
                        date: res.date,
                        content: res.content
                    } 
                ])
                setCurrentPostNumber(res.id);
            }
        })
    }

    useEffect(() => {
        if(inView) {
            fetchMoreData()
        }
    }, [inView])

    return(
        <div className={styles.feed}>
            {
                data ? data.map((i, index) => (
                    <Article 
                        key={index}
                        title={i.title}
                        tag={i.tag}
                        date={i.date}
                        content={i.content}
                    />
                )) : ''
            }
            {
                eof ? <Congratulations /> : ''
            }
            <div ref={ref} className={styles.loading}></div>
        </div>
    )
}