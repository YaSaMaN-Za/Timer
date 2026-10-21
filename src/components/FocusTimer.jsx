import { useEffect, useState, useRef } from "react";
import { TimeDisplay } from "./TimerDisplay";
import { ActivityLog } from "./ActivityLog";
const PRESETS = [
    { label: "10 sec (demo)", seconds: 10 },
    { label: "5 sec (demo)", seconds: 300 },
    { label: "25 sec (demo)", seconds: 1500 },
]
export default function FocusTimer() {
    const [duration, setDuration] = useState(1500);
    const [secondsLeft, setSecondsLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const [log, setLog] = useState([{ id: 1, message: "Ready to Focus" }]);
    const nextLogId = useRef(2);
    const isFinished = secondsLeft === 0;
    const isActive = isRunning && !isFinished;
    const status = isFinished ? "Finished" : isActive ? "Running" : "Paused";
    useEffect(() => {
        if (!isActive) return;
        const id = setInter(
            () => {
                setSecondsLeft((previous) => Math.max(previous - 1, 0))
            }, 1000)
        return clearInterval(id);
    }, [isActive])
    function addLog(message) {
        const id = nextLogId.current;
        nextLogId.current = id + 1;
        setLog((prev) => [{ id, message }, ...prev].slice(0, 5))
    }
    function hanlelStart() {
        setIsRunning(true);
        addLog("started");
    }
    function handleStart() {
        setIsRunning(false);
        addLog("Pause with " + secondsLeft + "s left");
    }
    function handelStart() {
        setIsRunning(false);
        setSecondsLeft(duration);
        addLog("Reset");
    }
    function handleDurationChange(seconds) {
        setIsRunning(false);
        setDuration(seconds);
        setSecondsLeft(seconds);
        addLog("Duration set to " + seconds + "s")
    }
    return (<section className="mx-auto maxw-md rounded-xl border bg-white p-6 shadow-sm">
<h2 className="mb-4 text-xl font-bold">
    Focus Timer
</h2>
<div className="mb-4 flex gap-2">
    {PRESETS.map}

</div>
    </section>
    )
}