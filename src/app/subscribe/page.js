'use client'

import styles from '@/styles/subscribe.module.css'
import { robotoSlab, sourceSans3 } from '@/lib/fonts'
import clsx from 'clsx'
import { useState } from 'react'
import { addSubscriber } from '../actions'
import Link from 'next/link'

export default function Subscribe () {

    const [formDone, setFormDone] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setFormDone(true);
    }

    return(
        <div className={styles.container}>
            <img src='/icons/faviconLight.ico' />
            {
                formDone ?
                (
                    <>
                        <p className={clsx(styles.header, robotoSlab.className)}>Done!</p>
                        <p className={styles.text}>Check your inbox.</p>
                        <Link href="/"
                            className={styles.button}
                        >← Back to reading</Link>
                    </>
                )
                :
                (
                    <>
                        <p className={clsx(styles.header, robotoSlab.className)}>Newsletter</p>
                        <p className={styles.text}>
                            Apart new publications, you will receive a list of stimulating articles from the web based on the topics of my blog
                        </p>
                        <form
                            action={addSubscriber}
                            onSubmit={(event) => handleSubmit(event)}
                            className={styles.form}
                        >
                            <input
                                type='email'
                                name="email"
                                placeholder='Your email'
                                className={clsx(styles.input, sourceSans3.className)}
                            ></input><br/>
                            <button
                                type='submit'
                                className={styles.button}
                            >Subscribe</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}