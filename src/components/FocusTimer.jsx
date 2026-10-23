import { useEffect, useState, useRef } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { ActivityLog } from "./ActivityLog";

const PRESETS = [
    { label: "10 sec (demo)", seconds: 10 },
    { label: "5 min (demo)", seconds: 300 },
    { label: "25 min", seconds: 1500 },
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
        const id = setInterval(() => {
            setSecondsLeft((prev) => Math.max(prev - 1, 0))
        }, 1000)
        return () => clearInterval(id);
    }, [isActive])

    function addLog(message) {
        const id = nextLogId.current;
        nextLogId.current = id + 1;
        setLog((prev) => [{ id, message }, ...prev].slice(0, 5))
    }

    function handleStart() { setIsRunning(true); addLog("started"); }
    function handlePause() { setIsRunning(false); addLog("Pause with " + secondsLeft + "s left"); }
    function handleReset() { setIsRunning(false); setSecondsLeft(duration); addLog("Reset"); }
    function handleDurationChange(seconds) {
        setIsRunning(false);
        setDuration(seconds);
        setSecondsLeft(seconds);
        addLog("Duration set to " + seconds + "s")
    }

    return (
        <section className="mx-auto max-w-md rounded-xl border bg-slate-200 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold ">Focus Timer</h2>
            <div className="mb-4 flex gap-2">
                {PRESETS.map((preset) => (
                    <button key={preset.seconds} className="rounded border px-4 py-3" onClick={() => handleDurationChange(preset.seconds)} >
                        {preset.label}
                    </button>
                ))}
            </div>
            <TimerDisplay secondsLeft={secondsLeft} duration={duration} status={status} />
            <div className="mt-4 flex justify-center gap-2">
                <button onClick={handleStart} disabled={isActive || isFinished} className="rounded border px-4 py-3 bg-indigo-400 text-white disabled:opacity-50">Start</button>
                <button onClick={handlePause} disabled={!isActive} className="rounded border px-4 py-3 disabled:opacity-50">Pause</button>
                <button onClick={handleReset} className="rounded border px-4 py-3">Reset</button>
            </div>
            <ActivityLog entries={log} />
        </section>
    )
}