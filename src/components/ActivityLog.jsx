export defaut function ActivityLog({ entries }) {
    return (
        <ul className="mt-4 space-y-1 text-slate-600">
            {entries.map((entry) => (<li key={entry.id}>{entry.message}
            </li>)
            )}
        </ul>
    )
}