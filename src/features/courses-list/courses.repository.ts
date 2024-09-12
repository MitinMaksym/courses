import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListItem,
  CreateCourseListItemPayload,
  DeleteCourseListItemPayload,
} from "./model/types";

export class CoursesRepository {
  getCoursesList = cache((): Promise<CourseListItem[]> => {
    return dbClient.course.findMany();
  });

  createCourse = cache(
    (payload: CreateCourseListItemPayload): Promise<CourseListItem> =>
      dbClient.course.create({ data: payload }),
  );

  deleteCourse = cache((payload: DeleteCourseListItemPayload) =>
    dbClient.course.delete({ where: { id: payload.id } }),
  );
}

export const coursesRepository = new CoursesRepository();
