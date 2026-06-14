import { apiRequest } from "./client";
import type { ExamPeriod, Subject, SubjectStatus } from "~/subjects/Subject";

export type SubjectsResponse = {
  data: Subject[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
};

export type CreateSubjectPayload = {
  name: string;
  examPeriod: ExamPeriod;
  examYear: number;
  grade: number | null;
  espb: number;
  status: SubjectStatus;
  icon: string;
};

export function getSubjects(page = 1, limit = 10) {
  return apiRequest<SubjectsResponse>(`/subjects?page=${page}&limit=${limit}`);
}

export function createSubject(data: CreateSubjectPayload) {
  return apiRequest<Subject>("/subjects", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateSubject(subjectId: string, data: CreateSubjectPayload) {
  return apiRequest<Subject>(`/subjects/${subjectId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}