import { art, math, terminal, threeDots } from "~/constants";
import type { Subject } from "../Subject";

type SubjectTableRowProps = {
    subject: Subject;
};

function SubjectRowIcon({ icon }: { icon: string }){
    if (icon === "math") {
        return math;
    }

    if (icon === "screen") {
        return(
            terminal
        );
    }

    return(
        art
    );
}

export function SubjectTableRow({ subject }: SubjectTableRowProps){
    const gradeContent = subject.status === "Planned" ? "/" : subject.grade;

    return(
        <tr className="subjectTableRow">
            <td>
                <div className="subjectNameCell">
                    <div className="subjectIconBox">
                        <SubjectRowIcon icon={subject.icon} />
                    </div>
                    <div>
                        <strong>{subject.name}</strong>
                        <span>{subject.espb} ESPB</span>
                    </div>
                </div>
            </td>
            <td>{subject.exam_period} Semester {subject.exam_year}</td>
            <td>
                <span className={`subjectTableStatus subjectTableStatus${subject.status}`}>
                    {subject.status}
                </span>
            </td>
            <td>
                <strong className={subject.status === "Failed" ? "subjectGradeFailed" : ""}>
                    {gradeContent}
                </strong>
            </td>
            <td>
                <button className="subjectTableActionsButton" type="button" aria-label={`Open actions for ${subject.name}`}>
                    {threeDots}
                </button>
            </td>
        </tr>
    );
}
