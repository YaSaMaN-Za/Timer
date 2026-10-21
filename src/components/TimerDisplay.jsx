function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSecends / 60);
    const seconds = totalSeconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
}
exports default function TimerDisplay({ secondsLeft, duration, status }) {
    const percent = ((duration - secondsLeft) / duration) * 100;

    return (
        <div className="text-center">
            <p className="font-mono text-6xl font-bold tabular-nums">
                {formatTime(secondsLeft)}
            </p>
            <p className="mt-2 text-sm text-slate-500">
                Status: {status}
            </p>
            <div className="mt-4 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full bg-indigo-600" style={{ width: percent + "% " }}>
                </div>
            </div>
        </div>
    )
}