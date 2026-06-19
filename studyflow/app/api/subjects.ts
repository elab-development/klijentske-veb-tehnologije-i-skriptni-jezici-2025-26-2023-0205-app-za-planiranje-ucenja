import { apiRequest } from "./client";
import type { ExamPeriod, Subject, SubjectStatus } from "~/models/Subject";

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

export type SubjectFilters = {
  status?: SubjectStatus;
  examPeriod?: ExamPeriod;
  year?: number;
};

export function getSubjects(page = 1, limit = 10, filters: SubjectFilters = {}) {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (filters.status) {
    params.set("status", filters.status);
  }

  if (filters.examPeriod) {
    params.set("examPeriod", filters.examPeriod);
  }

  if (filters.year) {
    params.set("year", String(filters.year));
  }

  return apiRequest<SubjectsResponse>(`/subjects?${params.toString()}`);
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

export function deleteSubject(subjectId: string) {
  return apiRequest<void>(`/subjects/${subjectId}`, {
    method: "DELETE",
  });
}