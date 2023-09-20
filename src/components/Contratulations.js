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
                    You've devoured all my current content - bravo! But the adventure doesn't have to end here. Join the newsletter and embark on a journey of continuous discovery. Stay in the loop, stay updated. Join today!
                </div>
            </div>
        </div>
    )
}