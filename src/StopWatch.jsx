import { useState } from "react"
export const StopWatch = () => {
    const [time, setTime] = useState({
        hours: 0, 
        minutes: 0, 
        seconds: 0
    })

    const startTimer = () => {
        setTime({
            ...time, 
            seconds: time.seconds++
        })
        if(time.seconds === 60){
            setTime({
                ...time, 
                minutes: time.minutes++
            })
        }else if (time.minutes == 60){
            setTime({
                ...time, 
                hours: time.hours++
            })
        }

        console.log("hello")
        console.log(time.hours, time.minutes, time.seconds)
    }
    

    return <div>
        <h2>{time.hours}:{time.minutes}:{time.seconds}</h2>
        <div>
            <button onClick={startTimer}>start</button>
            <button>stop</button>
        </div>
    </div>
}