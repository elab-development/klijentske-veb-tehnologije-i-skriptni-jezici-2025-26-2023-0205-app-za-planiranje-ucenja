import { arrowRightBlack } from "~/constants";
import type { Subject } from "../../models/Subject";
import { SubjectTableRow } from "./SubjectTableRow";

type SubjectTableProps = {
    subjects: Subject[];
    showing: number;
    total: number;
    loading?: boolean;
    page: number;
    totalPages: number;
    onPreviousPage: () => void;
    onNextPage: () => void;
    onEdit?: (subject: Subject) => void;
};

export function SubjectTable({ subjects, showing, total, loading = false,page,totalPages, onPreviousPage, onNextPage, onEdit }: SubjectTableProps){
    return(
        <div className="subjectTableCard">
            <table className="subjectTable">
                <thead>
                    <tr>
                        <th>SUBJECT NAME</th>
                        <th>EXAM PERIOD</th>
                        <th>STATUS</th>
                        <th>GRADE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={5} className="text-center py-6">
                                Loading subjects...
                            </td>
                        </tr>
                    ) : subjects.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center py-6">
                                No subjects found.
                            </td>
                        </tr>
                    ) : (
                        subjects.map((subject) => (
                            <SubjectTableRow
                                subject={subject}
                                key={subject.id}
                                onEdit={onEdit}
                            />
                        ))
                    )}
                </tbody>
            </table>

            <div className="subjectTableFooter">
                <p>Page {page} of {totalPages}</p>
                <div className="subjectTablePagination">
                    <button className="subjectTablePageButton subjectTablePageButtonPrev" type="button" aria-label="Previous page" onClick={onPreviousPage} disabled={loading || page <= 1}>
                        {arrowRightBlack}
                    </button>
                    <button className="subjectTablePageButton" type="button" aria-label="Next page" onClick={onNextPage} disabled={loading || page >= totalPages}>
                        {arrowRightBlack}
                    </button>
                </div>
            </div>
        </div>
    );
}
