export type CourseListItem = {
  id: string;
  name: string;
  description: string;
};

export type CreateCourseListItemPayload = {
  name: string;
  description: string;
};

export type DeleteCourseListItemPayload = {
  id: string;
};
