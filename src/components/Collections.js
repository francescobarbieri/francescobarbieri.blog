import styles from "@/styles/collections.module.css";
import Icon from "./Icon";

export default function Collections () {
    return(
        <div className={styles.collectionsWrapper}>
            <div className={styles.collections}>
                <div className={styles.collectionsHeader}>
                    Post Collections
                </div>
                <div className={styles.collection}>
                    <Icon
                        name="circle"
                        heigth="26"
                        width="26"
                        fill="#00"
                    />
                    Personal Finance
                </div>
                <div className={styles.collection}>
                    <Icon
                        name="circle"
                        heigth="26"
                        width="26"
                        fill="#00"
                    />
                    Personal Finance
                </div>
                <div className={styles.collection}>
                    <Icon
                        name="circle"
                        heigth="26"
                        width="26"
                        fill="#00"
                    />
                    Personal Finance
                </div>
                <div className={styles.collection}>
                    <Icon
                        name="circle"
                        heigth="26"
                        width="26"
                        fill="#00"
                    />
                    Personal Finance
                </div>
            </div>
        </div>
    )
}