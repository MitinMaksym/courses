import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";
import { deleteCourseAction } from "../actions";

type Props = {
  revalidatePagePath: string;
};

export async function CoursesList({ revalidatePagePath }: Props) {
  const courses = await coursesRepository.getCoursesList();

  return (
    <div className="flex flex-col gap-3">
      {courses.map((course) => (
        <CourseItem
          key={course.id}
          deleteCourseAction={async () => {
            "use server";
            return deleteCourseAction(revalidatePagePath, course.id);
          }}
          course={course}
        />
      ))}
    </div>
  );
}
