import React, {useState, useEffect} from "react"

function Clock () {

    const [time, setTime] = useState(new Date())

    useEffect (() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
    }, []);

    function displayTime () {
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    return `${hours}:${minutes}:${seconds}`
    }

    return(
    <body>
    <div className="text-right">
        <div className="invisible absolute top-0 right-0 bg-blue-500 p-2 text-4xl font-mono font-bold rounded-bl-lg">
            <span>{displayTime()}</span>
        </div>
    </div>
    </body>);
}

export default Clock