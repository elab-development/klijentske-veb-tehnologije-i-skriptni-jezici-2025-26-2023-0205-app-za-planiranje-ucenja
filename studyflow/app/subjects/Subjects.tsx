import { useEffect, useState } from "react";
import { Subject, type ExamPeriod, type SubjectStatus } from "../models/Subject";
import { SubjectModal } from "./components/SubjectModal";
import { SubjectTable } from "./components/SubjectTable";
import { getSubjects } from "~/api/subjects";

export function Subjects(){
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 5;

    const [statusFilter, setStatusFilter] = useState<SubjectStatus | "All">("All");
    const [examPeriodFilter, setExamPeriodFilter] = useState<ExamPeriod>("Summer");
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

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

            const response = await getSubjects(page, limit,
                {
                    status: statusFilter === "All" ? undefined : statusFilter,
                    examPeriod: examPeriodFilter,
                    year: yearFilter,
                }
            );

            setSubjects(response.data);
            setTotalItems(response.pagination.totalItems);
            setTotalPages(response.pagination.totalPages);
            } catch {
            setError("Could not load subjects.");
            } finally {
            setLoading(false);
            }
        }

    useEffect(() => {
        loadSubjects();
    }, [page, statusFilter, examPeriodFilter, yearFilter]);

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
                                    className={`subjectStatusButton ${status === statusFilter ? "active" : ""}`}
                                    type="button"
                                    key={status}
                                    onClick={() => {
                                        setStatusFilter(status as SubjectStatus | "All");
                                        setPage(1);
                                    }}
                                    >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="subjectFilterControls">
                        <label className="subjectField">
                            <span>EXAM PERIOD</span>
                            <select 
                                value={examPeriodFilter}
                                onChange={(event) => {
                                    setExamPeriodFilter(event.target.value as ExamPeriod);
                                    setPage(1);
                                }}
                            >
                                <option>Summer</option>
                                <option>Winter</option>
                            </select>
                        </label>

                        <label className="subjectField">
                            <span>YEAR</span>
                            <input
                                type="number"
                                value={yearFilter}
                                onChange={(event) => {
                                    setYearFilter(Number(event.target.value));
                                    setPage(1);
                                }}
                                />
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


                    <SubjectTable
                        subjects={subjects}
                        showing={subjects.length}
                        total={totalItems}
                        loading={loading}
                        page={page}
                        totalPages={totalPages}
                        onPreviousPage={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
                        onNextPage={() => setPage((currentPage) => Math.min(currentPage + 1, totalPages))}
                        onEdit={(subject) => {
                            setSelectedSubject(subject);
                            setModalMode("edit");
                        }}
                    />
            </div>
        </main>
    )
}
