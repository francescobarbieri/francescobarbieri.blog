import styles from "@/styles/article.module.css";
import Icon from "./Icon";
import clsx from "clsx";
import { robotoSlab } from "@/app/layout";

export default function Article () {
    return (
        <article className={styles.article}>

            <div className={styles.header}>
                <div className={styles.tag}>
                    Finance
                </div>
                <div className={styles.date}>
                    DECEMBER 14, 2022
                </div>
            </div>

            <div className={styles.icon}>
                <Icon 
                    name="circle"
                    fill="#000"
                />
            </div>
            <div className={clsx(styles.title, robotoSlab.className)}>
                Hat’s out of the bag! Join us for Winter/Summer Bash 2022!
            </div>


            <div className={styles.body}>
                <p>
                Tech enthusiast. Passionate learner. Future's explorer and innovator: embracing a continuous learning journey to adopt technology to bring positive changes in society.<br></br><br></br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor.<br></br><br></br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor <br></br><br></br>

                Tech enthusiast. Passionate learner. Future's explorer and innovator: embracing a continuous learning journey to adopt technology to bring positive changes in society.<br></br><br></br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor.<br></br><br></br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor 
                </p>
            </div>

        </article>
    )
}