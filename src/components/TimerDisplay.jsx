export function TimerDisplay({ secondsLeft, duration, status }) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const progress = duration > 0 ? ((duration - secondsLeft) / duration) * 100 : 0;

    
    return (
        <div className="text-center">
            <div className="text-5xl font-mono font-bold">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
            <div className="mt-2 text-sm text-gray-500">{status}</div>
            <div className="mt-4 h-2 w-full rounded bg-gray-200">
                <div className="h-2 rounded bg-indigo-600 transition-all" style={{ width: progress + "% "}} />
            </div>
        </div>
    );
}