export type ExamPeriod = "Winter" | "Summer";
export type SubjectStatus = "Planned" | "Passed" | "Failed";

type SubjectData = {
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

export class Subject {
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
}
