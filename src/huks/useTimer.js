import {useState} from "react";

export const useTimer = () => {
    const [timer, setTimer] = useState()

    function getTime(){
        let date = new Date()
        return date.toLocaleString()
    }

    setInterval(() => {
        setTimer(getTime())
    },1000)
    return timer
}