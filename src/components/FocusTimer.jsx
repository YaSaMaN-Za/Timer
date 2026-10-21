import { useEffect, useState, useRef } from "react";
import { TimeDisplay } from "./TimerDisplay";
import { ActivityLog } from "./ActivityLog";
const PRESETS = [
    {label: "10 sec (demo)", seconds: 10},
        {label: "5 sec (demo)", seconds: 300},
    {label: "25 sec (demo)", seconds: 1500},
]
export default function FocusTimer(){
    const [duration, setDuration ] = useState(1500);
    const [ secondsLeft, setSecondsLeft] =useState(1500);
    const [isRunning, setIsRunning] =useState(false);
    const [log, setLog] = useState
}