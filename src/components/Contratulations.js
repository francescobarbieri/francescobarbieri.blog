import styles from "@/styles/congratulations.module.css"
import IconComponent from "./Icon"

export default function Congratulations() {
    return(
        <div className={styles.container}>
            <IconComponent
                height="170"
                width="170"
                fill="#0071E3"
                name="trophy" />
            <div className={styles.textWrapper}>
                <h1 className={styles.h1}>Congratulations!</h1>
                <div className={styles.text}>
                    You've reached the end of all my current content - congratulations! But it doesn't have to end here: join the newsletter! Stay in the loop, stay updated. Join today!
                </div>
            </div>
        </div>
    )
}