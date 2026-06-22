import { art, math, terminal, threeDots } from "~/constants";
import type { Subject } from "../../models/Subject";

type SubjectTableRowProps = {
    subject: Subject;
    onEdit?: (subject: Subject) => void;
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

export function SubjectTableRow({ subject, onEdit }: SubjectTableRowProps){
    return(
        <tr className="subjectTableRow">
            <td>
                <div className="subjectNameCell">
                    <div className="subjectIconBox">
                        <SubjectRowIcon icon={subject.icon} />
                    </div>
                    <div>
                        <strong>{subject.getDisplayName()}</strong>
                        <span>{subject.getCreditsLabel()}</span>
                    </div>
                </div>
            </td>
            <td>{subject.getExamLabel()}</td>
            <td>
                <span className={`subjectTableStatus subjectTableStatus${subject.status}`}>
                    {subject.status}
                </span>
            </td>
            <td>
                <strong className={subject.isFailed() ? "subjectGradeFailed" : ""}>
                    {subject.getGradeLabel()}
                </strong>
            </td>
            <td>
                <button
                    className="subjectTableActionsButton"
                    type="button"
                    aria-label={`Edit ${subject.getDisplayName()}`}
                    onClick={() => onEdit?.(subject)}
                >
                    {threeDots}
                </button>
            </td>
        </tr>
    );
}
