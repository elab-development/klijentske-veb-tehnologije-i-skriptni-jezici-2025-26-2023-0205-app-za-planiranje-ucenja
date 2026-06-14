import { useEffect, useState } from "react";
import { Subject } from "./Subject";
import { SubjectModal } from "./components/SubjectModal";
import { SubjectTable } from "./components/SubjectTable";
import { getSubjects } from "~/api/subjects";

export function Subjects(){
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const limit = 5;

    const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<Subject | undefined>();
    const statuses = ["All", "Passed", "Planned", "Failed"];
    
    const closeModal = () => {
        setModalMode(null);
        setSelectedSubject(undefined);
    };

    async function loadSubjects() {
            try {
            setLoading(true);
            setError("");

            const response = await getSubjects(page, limit);

            setSubjects(response.data);
            setTotalItems(response.pagination.totalItems);
            } catch {
            setError("Could not load subjects.");
            } finally {
            setLoading(false);
            }
        }

    useEffect(() => {
        loadSubjects();
    }, [page]);

    return(
        <main className="workPageMain">
            {modalMode && (
                <SubjectModal
                    mode={modalMode}
                    subject={selectedSubject}
                    onClose={closeModal}
                    onCreated={loadSubjects}
                />
            )}
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

                        <button
                            className="subjectNewButton"
                            type="button"
                            aria-label="Add new subject"
                            onClick={() => setModalMode("add")}
                        >
                            <span aria-hidden="true">+</span>
                        </button>
                    </div>
                </div>

                {error && (
                    <p className="text-red-500 text-sm font-medium">
                        {error}
                    </p>
                    )}

                    {loading ? (
                    <p>Loading subjects...</p>
                    ) : (
                    <SubjectTable
                        subjects={subjects}
                        showing={subjects.length}
                        total={totalItems}
                        onEdit={(subject) => {
                        setSelectedSubject(subject);
                        setModalMode("edit");
                        }}
                    />
                    )}
            </div>
        </main>
    )
}
