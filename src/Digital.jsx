import React, { useEffect, useState } from 'react'
import "./Digital.css"
const Digital = () => {

    const [currenttime, setcurrenttime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setcurrenttime(new Date());
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    const formet = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
            ;
    }

    const formettime = (num) => {
        return num < 10 ? `0 ${num}` : num;
    }

    const formetdate =(date)=>{
        const options ={weekday: "long", year :"numeric", month: "long" }
return date.toLocaleDateString(undefined,options)
    }

    return (
        <>
            <div className="digital-clock">
                <h1>DIGITAL-CLOCK</h1>
                <div className="time">{
                    formettime(formet(currenttime.getHours()))
                }:
                    {
                        formettime(currenttime.getMinutes())
                    }:
                    {
                        formettime(currenttime.getSeconds())
                    }


                </div>
                <div className="date">{formetdate(currenttime)}</div>
            </div>

        </>
    )
}

export default Digital
