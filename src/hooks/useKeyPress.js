import { useEffect } from "react";

export function useKeypress (callback, keyCodes) {
    useEffect( () => {
        const handler = (event) => {
            if (keyCodes.includes(event.code)) {
                callback(event)
            }
        }
    
        window.addEventListener('keydown', handler)
        return () => {
        window.removeEventListener('keydown', handler)
        }
    }, [callback, keyCodes])
}