import React from "react"




const App = () => {
    const [curDate, setCurDate] = React.useState(new Date(Date.now()))
    const [newYears, setNewYears] = React.useState(new Date(curDate.getFullYear()+1, 0, 1, 0, 0, 0))
    //const [newYears, setNewYears] = React.useState(new Date(Date.now()))
    const [deltaDate, setDeltaDate] = React.useState(new Date(newYears - curDate))
    
    
    const tick = () => {
        //update the delta times
        curDate.setTime(Date.now())
        
        setDeltaDate(new Date(newYears - curDate))

        if(curDate.toDateString() === newYears.toDateString()){
            const el = document.querySelector('.greeting')
            el.style.display="block"
        }


        
    }
    setInterval(tick, 1000)
    
    
    return (
        <div className="countdown">
            <div className="header-container">
                <h1>COUNTDOWN TO {newYears.getFullYear()}</h1>
            </div>
            <div className="main-content">
                <div className="greeting" style={{display:"none"}}>
                    <h1>🎆HAPPY NEW YEAR!!!🎆</h1>
                </div>
                <p>Countdown timer for New Years {newYears.getFullYear()}.</p>
                <p>There is exactly</p>
                <div className="timer-container">
                    <div className="item-container">
                        <div className="timer-card">
                            <h1 className="timer-item">{deltaDate.getMonth()}</h1>
                            <p>Months</p>
                        </div>
                        <div className="timer-card">
                            <h1 className="timer-item">{deltaDate.getDay()}</h1>
                            <p>Days</p>
                        </div>
                        <div className="timer-card">
                            <h1 className="timer-item">{deltaDate.getHours()}</h1>
                            <p>Hours</p>
                        </div>
                        <div className="timer-card">
                            <h1 className="timer-item">{deltaDate.getMinutes()}</h1>
                            <p>Minutes</p>
                        </div>
                        <div className="timer-card">
                            <h1 className="timer-item">{deltaDate.getSeconds()}</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <p>left until {newYears.toLocaleDateString()}.</p>
            </div>
            <p>Photo by <a href="https://unsplash.com/photos/8aN395JMCV0">Maggie Hung </a>from <a href="https://unsplash.com">Unsplash</a></p>
        </div>
        
    )
    
}




export default App