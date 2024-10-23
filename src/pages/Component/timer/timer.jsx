import { useEffect, useState } from 'react'
import './timer.css'
function Timer() {
    const [running,setRunning] = useState(false)
    const [seconds,setSeconds] = useState(0)

    useEffect(() =>{
        let interval = null
        if(running){
            interval = setInterval(() =>{
                setSeconds(seconds => seconds + 1)
            },1000)
        }else if(!running && seconds !== 0){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    })

    function runClick(){
        setRunning(!running)
    }

    function secondsToString(seconds){
        const MINUTE_SECONDS = 60
        const HOUR_SECONDS = MINUTE_SECONDS * 60
        const DAY_SECONDS = 24 * HOUR_SECONDS

        const days = Math.floor(seconds /DAY_SECONDS)
        const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS)
        const minute = Math.floor((seconds % HOUR_SECONDS) /MINUTE_SECONDS)
        const secs = Math.floor(seconds % MINUTE_SECONDS)

        if(days > 0){
            return `${days}d ${hours}h ${minute}m ${secs}s`
        }
        if(hours > 0){
            return `${hours}h ${minute}m ${secs}s`
        }
        if(minute > 0){
            return `${minute}m ${secs}s`
        }
        return `${secs}s`
    }

    function resetClick(){
        setRunning(false)
        setSeconds(0)
    }

    return ( 
        <div className='timer-contrainer'>
            <h3 className='timer-title'>Timer</h3>
            <p><input className='timer-display' type="text" value={secondsToString(seconds)} readOnly={true}/></p>
            <div className='timer-buttons'>
                <button className='btn btn-danger bi bi-arrow-clockwise' onClick={resetClick}>Reset</button>
                <button className={'bi bi-play btn '+(running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? 'Pause' : 'Start'}</button>
            </div>
        </div> 
    );
}

export default Timer;