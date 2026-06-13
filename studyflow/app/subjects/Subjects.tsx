
export function Subjects(){
    const statuses = ["All", "Passed", "Planned", "Failed"];

    return(
        <main className="workPageMain">
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
            </div>
        </main>
    )
}
