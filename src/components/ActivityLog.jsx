export function ActivityLog({ entries }) {
    return (
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
            {entries.map((entry) => (
                <li key={entry.id} className="rounded bg-gray-50 px-2 py-1">
                    {entry.message}
                </li>
            ))}
        </ul>
    );
}