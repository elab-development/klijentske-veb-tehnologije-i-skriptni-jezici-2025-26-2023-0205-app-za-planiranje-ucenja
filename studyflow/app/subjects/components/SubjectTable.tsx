import { arrowRightBlack } from "~/constants";
import type { Subject } from "../Subject";
import { SubjectTableRow } from "./SubjectTableRow";

type SubjectTableProps = {
    subjects: Subject[];
    showing: number;
    total: number;
};

export function SubjectTable({ subjects, showing, total }: SubjectTableProps){
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
                    {subjects.map((subject) => (
                        <SubjectTableRow
                            subject={subject}
                            key={subject.id}
                        />
                    ))}
                </tbody>
            </table>

            <div className="subjectTableFooter">
                <p>Showing {showing} of {total} examinations</p>
                <div className="subjectTablePagination">
                    <button className="subjectTablePageButton subjectTablePageButtonPrev" type="button" aria-label="Previous page">
                        {arrowRightBlack}
                    </button>
                    <button className="subjectTablePageButton" type="button" aria-label="Next page">
                        {arrowRightBlack}
                    </button>
                </div>
            </div>
        </div>
    );
}
