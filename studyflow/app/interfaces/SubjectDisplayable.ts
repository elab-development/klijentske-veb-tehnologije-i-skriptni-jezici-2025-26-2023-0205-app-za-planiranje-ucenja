export interface SubjectDisplayable {
  getDisplayName(): string;
  getCreditsLabel(): string;
  getExamLabel(): string;
  getGradeLabel(): string;
  isFailed(): boolean;
}
