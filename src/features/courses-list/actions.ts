"use server";

import { CreateCourseListItemPayload } from "./model/types";
import { coursesRepository } from "./courses.repository";
import { revalidatePath } from "next/cache";

export const createCourseAction = async (
  revalidatePagePath: string,
  payload: CreateCourseListItemPayload,
) => {
  await coursesRepository.createCourse(payload);
  revalidatePath(revalidatePagePath);
};

export const deleteCourseAction = async (
  revalidatePagePath: string,
  id: string,
) => {
  await coursesRepository.deleteCourse({ id });
  revalidatePath(revalidatePagePath);
};
