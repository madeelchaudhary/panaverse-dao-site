import path from "path";
import fs from "fs/promises";
import { CourseStructure } from "@/types/courses";

export const getAllCourses = async (): Promise<CourseStructure[]> => {
  const filePath = path.join(process.cwd(), "data", "courses-data.json");
  const jsonData = await fs.readFile(filePath);
  const courses = JSON.parse(jsonData as unknown as string);
  return courses;
};

export const getFeaturedCourses = async () => {
  const allCourses = await getAllCourses();
  const featuredCourses = allCourses.filter((item) => item.isFeatured);
  return featuredCourses;
};

export const getCourseContentById = async (courseId: string) => {
  const filePath = path.join(process.cwd(), "data", "full-course.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);

  const course = data.find((item: any) => item.id === courseId);
  return course;
};
