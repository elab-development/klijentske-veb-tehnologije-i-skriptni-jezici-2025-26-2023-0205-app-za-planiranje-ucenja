
import { Subject } from "./Subject";
import { SubjectModal } from "./components/SubjectModal";
import { SubjectTable } from "./components/SubjectTable";

export function Subjects(){
    const statuses = ["All", "Passed", "Planned", "Failed"];
    const subjects = [
        new Subject({
            id: "1",
            user_id: "1",
            name: "Matematika 2",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 0,
            espb: 6,
            status: "Planned",
            icon: "math",
        }),
        new Subject({
            id: "2",
            user_id: "1",
            name: "KETH",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 10,
            espb: 5,
            status: "Passed",
            icon: "tool",
        }),
        new Subject({
            id: "3",
            user_id: "1",
            name: "KETH",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 10,
            espb: 5,
            status: "Passed",
            icon: "tool",
        }),
        new Subject({
            id: "4",
            user_id: "1",
            name: "KETH",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 10,
            espb: 5,
            status: "Passed",
            icon: "tool",
        }),
        new Subject({
            id: "6",
            user_id: "1",
            name: "SPA",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 5,
            espb: 5,
            status: "Failed",
            icon: "screen",
        }),
        new Subject({
            id: "5",
            user_id: "1",
            name: "SPA",
            exam_period: "Summer",
            exam_year: 2026,
            grade: 5,
            espb: 5,
            status: "Failed",
            icon: "screen",
        }),
    ];

    return(
        <main className="workPageMain">
            <SubjectModal></SubjectModal>
            <div className="contentHolder">
                <div className="workPageTitleHolder">
                    <p>Subject Status Tracker</p>
                    <p>Monitor your academic progress and track performance across all examination periods.</p>
                </div>

                <div className="subjectFilterBar">
                    <div className="subjectStatusFilters">
                        <p>FILTER BY STATUS</p>
                        <div>
                            {statuses.map((status) => (
                                <button
                                    className={`subjectStatusButton ${status === "All" ? "active" : ""}`}
                                    type="button"
                                    key={status}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="subjectFilterControls">
                        <label className="subjectField">
                            <span>EXAM PERIOD</span>
                            <select defaultValue="Summer">
                                <option>Summer</option>
                                <option>Winter</option>
                            </select>
                        </label>

                        <label className="subjectField">
                            <span>YEAR</span>
                            <input type="number" defaultValue="2026" />
                        </label>

                        <button className="subjectNewButton" type="button" aria-label="Add new subject">
                            <span aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>

                <SubjectTable subjects={subjects} showing={5} total={44} />
            </div>
        </main>
    )
}
