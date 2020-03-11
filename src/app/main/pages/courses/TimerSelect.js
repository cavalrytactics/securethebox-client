import React, { useState } from "react";
import Button from '@material-ui/core/Button';
// https://github.com/peterdurham/timers-demo/blob/master/src/components/ChallengeLength.js


export default function TimerSelect(props) {
    const [  timerTime, setTime ] = useState(0);
    function adjustTimer(input) {
        if (input === "incHours" && timerTime + 3600000 < 216000000) {
            setTime(timerTime + 3600000)
            console.log(input, timerTime)
        } else if (input === "decHours" && timerTime - 3600000 >= 0) {
            setTime(timerTime - 3600000)
            console.log(input, timerTime)
        } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
            setTime(timerTime + 300000)
            console.log(input, timerTime)
        } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
            setTime(timerTime - 300000)
            console.log(input, timerTime)
        } else {
            console.log(input, timerTime)
        }
    }

    var minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2)
    var hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2)

    return (
        <div className="ChallengeLength">
            <div className="ChallengeLength-header">Challenge Length</div>
            <div className="ChallengeLength-label">Hours : Minutes</div>
            <div className="ChallengeLength-display">
                <Button onClick={() => adjustTimer("incHours")}>&#8679;</Button>
                <Button onClick={() => adjustTimer("incMinutes")}>&#8679;</Button>
                <div className="ChallengeLength-time">
                    {hours} : {minutes}
                </div>
                <Button onClick={() => adjustTimer("decHours")}>&#8681;</Button>
                <Button onClick={() => adjustTimer("decMinutes")}>&#8681;</Button>
            </div>
        </div>
    );
}