import { calendar, threeDots } from "~/constants";

type Priority = "high" | "medium" | "low";

type TestCardProps = {
    priority: Priority;
    title: string;
    date: string;
    time: string;
    readiness: number;
};

const priorityLabels: Record<Priority, string> = {
    high: "High Priority",
    medium: "Medium Priority",
    low: "Low Priority",
};

export function TestCard({ priority, title, date, time, readiness }: TestCardProps){
    const safeReadiness = Math.min(Math.max(readiness, 0), 100);

    return(
        <article className="testCard">
            <div className="testCardTop">
                <span className={`testPriority testPriority${priority[0].toUpperCase()}${priority.slice(1)}`}>
                    {priorityLabels[priority]}
                </span>
                <button className="testMenuButton" type="button" aria-label="Open test options">
                    {threeDots}
                </button>
            </div>

            <h3>{title}</h3>

            <div className="testMeta">
                {calendar}
                <span>{date} {"\u2022"} {time}</span>
            </div>

            <div className="testReadinessHeader">
                <span>Readiness</span>
                <strong>{safeReadiness}%</strong>
            </div>

            <div className="testProgressTrack" aria-label={`${safeReadiness}% readiness`}>
                <div
                    className="testProgressValue"
                    style={{ width: `${safeReadiness}%` }}
                />
            </div>
        </article>
    );
}
