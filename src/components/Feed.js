import styles from "@/styles/feed.module.css";
import Article from "./Article";

export default function Feed() {
    return(
        <div className={styles.feed}>
            <Article />
            <Article />
        </div>
    )
}