import { useEffect, useState } from 'react'
// import { useDebounce } from './utils'
export default function useDebounce(fn: Function, delay: number): void {
    const [timer, setTimer] = useState<NodeJS.Timeout>(null!)
    useEffect(() => {
        if (!timer) {
            setTimer(setTimeout(() => {
                fn.apply(null);
                clearTimeout(timer)
            }, delay))
        }
        return () => {
            clearTimeout(timer)
        }
    }, [fn, delay])
}

// setInterval(()=>{

// },200)
