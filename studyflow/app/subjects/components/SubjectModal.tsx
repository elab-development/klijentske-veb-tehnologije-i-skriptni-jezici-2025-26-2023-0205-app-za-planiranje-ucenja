import { art, math, terminal } from "~/constants";
import type { Subject, SubjectStatus } from "../Subject";
import { useState } from "react";
import { createSubject, updateSubject } from "~/api/subjects";

type SubjectModalMode = "add" | "edit";

type SubjectModalProps = {
    mode: SubjectModalMode;
    subject?: Subject;
    onClose: () => void;
    onCreated?: () => void;
};

const statuses: SubjectStatus[] = ["Planned", "Passed", "Failed"];
const iconOptions = [
    { label: "Math", value: "math", icon: math },
    { label: "Terminal", value: "screen", icon: terminal },
    { label: "Art", value: "tool", icon: art },
];

export function SubjectModal({ mode, subject, onClose, onCreated }: SubjectModalProps) {
    const isEditMode = mode === "edit";
    const title = isEditMode ? "Subject Editor" : "Add New Subject";
    const primaryLabel = isEditMode ? "Save" : "Add Subject";
    const currentStatus = subject?.status ?? "Planned";
    const currentIcon = subject?.icon ?? "math";

    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("subjectName"));
        const examPeriod = String(formData.get("examPeriod")) as "Summer" | "Winter";
        const examYear = Number(formData.get("examYear"));
        const espb = Number(formData.get("espb"));
        const status = String(formData.get("status")) as "Planned" | "Passed" | "Failed";
        const icon = String(formData.get("icon"));
        const gradeValue = String(formData.get("grade"));

        const grade = gradeValue ? Number(gradeValue) : null;

        if (!name || !examPeriod || !examYear || !espb || !status || !icon) {
            setError("Please fill in all required fields.");
            return;
        }

        if (status !== "Planned" && grade === null) {
            setError("Grade is required for passed or failed subjects.");
            return;
        }

        if (grade !== null && (grade < 5 || grade > 10)) {
            setError("Grade must be between 5 and 10.");
            return;
        }

        try {
            const payload = {
                name,
                examPeriod,
                examYear,
                grade,
                espb,
                status,
                icon,
            };

            if (mode === "add") {
                await createSubject(payload);
            }

            if (mode === "edit" && subject) {
                await updateSubject(subject.id, payload);
            }

            onCreated?.();
            onClose();
        } catch {
            setError(
                mode === "edit"
                    ? "Could not update subject."
                    : "Could not create subject."
            );
        }
    }

    return (
        <div className="modalHolder" role="presentation">
            <div className="subjectModal" role="dialog" aria-modal="true" aria-labelledby="subjectModalTitle">
                <div className="subjectModalHeader">
                    <h2 id="subjectModalTitle">{title}</h2>
                    <button className="subjectModalCloseButton" type="button" aria-label="Close subject modal" onClick={onClose}>
                        <span aria-hidden="true" />
                    </button>
                </div>

                <form className="subjectModalForm" onSubmit={handleSubmit}>
                    <div className="subjectModalGrid">
                        <label className="subjectModalField">
                            <span>SUBJECT NAME</span>
                            <input
                                type="text"
                                name="subjectName"
                                placeholder="npr. Matematika 1"
                                defaultValue={subject?.name ?? ""}
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>ESPB</span>
                            <input
                                type="number"
                                name="espb"
                                defaultValue={subject?.espb ?? 6}
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>EXAM PERIOD</span>
                            <select name="examPeriod" defaultValue={subject?.exam_period ?? "Summer"}>
                                <option>Summer</option>
                                <option>Winter</option>
                            </select>
                        </label>

                        <label className="subjectModalField">
                            <span>EXAM YEAR</span>
                            <input
                                type="number"
                                name="examYear"
                                defaultValue={subject?.exam_year ?? new Date().getFullYear()}
                            />
                        </label>

                        <label className="subjectModalField">
                            <span>GRADE</span>
                            <input
                                type="text"
                                name="grade"
                                placeholder="/"
                                defaultValue={isEditMode ? subject?.grade == null ? "/" : subject.grade : ""}
                            />
                        </label>

                        <fieldset className="subjectModalIconField">
                            <legend>ICON</legend>
                            <div>
                                {iconOptions.map((option) => (
                                    <label className="subjectModalIconOption" key={option.value}>
                                        <input
                                            type="radio"
                                            name="icon"
                                            value={option.value}
                                            defaultChecked={option.value === currentIcon}
                                        />
                                        <span className="subjectModalIconPreview">
                                            {option.icon}
                                        </span>
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    <fieldset className="subjectModalStatus">
                        <legend>STATUS</legend>
                        <div>
                            {statuses.map((status) => (
                                <label className="subjectModalRadio" key={status}>
                                    <input
                                        type="radio"
                                        name="status"
                                        value={status}
                                        defaultChecked={status === currentStatus}
                                    />
                                    <span>{status}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    {error && (
                        <p className="text-red-500 text-sm font-medium">
                            {error}
                        </p>
                    )}

                    <div className="subjectModalFooter">
                        <button className="subjectModalCancelButton" type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="subjectModalPrimaryButton" type="submit">
                            {primaryLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
