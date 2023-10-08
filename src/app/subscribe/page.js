import styles from '@/styles/subscribe.module.css'
import { addSubscriber } from '../actions'

export default async function Subscribe () {

    return(
        <div className={styles.container}>
            <p>Thank you!</p>
            <form 
                action={addSubscriber}
            >
                <input type='email' name="email"></input>
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}