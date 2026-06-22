import type { SubjectDisplayable } from "~/interfaces/SubjectDisplayable";

export type ExamPeriod = "Winter" | "Summer";
export type SubjectStatus = "Planned" | "Passed" | "Failed";

export type SubjectData = {
    id: string;
    user_id: string;
    name: string;
    exam_period: ExamPeriod;
    exam_year: number;
    grade: number | null;
    espb: number;
    status: SubjectStatus;
    icon: string;
};

export class Subject implements SubjectDisplayable {
    id: string;
    user_id: string;
    name: string;
    exam_period: ExamPeriod;
    exam_year: number;
    grade: number | null;
    espb: number;
    status: SubjectStatus;
    icon: string;

    constructor(data: SubjectData) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.name = data.name;
        this.exam_period = data.exam_period;
        this.exam_year = data.exam_year;
        this.grade = data.grade;
        this.espb = data.espb;
        this.status = data.status;
        this.icon = data.icon;
    }

    getDisplayName(): string {
        return this.name;
    }

    getCreditsLabel(): string {
        return `${this.espb} ESPB`;
    }

    getExamLabel(): string {
        return `${this.exam_period} Semester ${this.exam_year}`;
    }

    getGradeLabel(): string {
        return this.status === "Planned" ? "/" : String(this.grade);
    }

    isFailed(): boolean {
        return this.status === "Failed";
    }
}
