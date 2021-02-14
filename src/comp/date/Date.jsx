import React, { useState, useEffect, useRef } from 'react'

import s from './Date.module.css'

const DateComponent = () => {

    const timer = useRef()
    var [date, setDate] = useState(new Date())

    const startTimer = () => {
        timer.current = setInterval(() => { setDate(new Date()) }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timer.current)
    }

    useEffect(() => {
        startTimer()
        return () => stopTimer()
    }, [timer])

    // useEffect(() => {
    //     document.title = date.toLocaleTimeString()
    // },[date])

    return (
        <div className={s.a}>
            {date.toLocaleTimeString()}
        </div>)

}

export default DateComponent