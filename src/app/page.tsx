import CoursesList from "@/features/courses-list/pub/courses-list";
import CreateCourseForm from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex flex-col  min-h-screen p-24">
      <CreateCourseForm revalidatePagePath="/" className="mb-5 max-w-[300px]" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
