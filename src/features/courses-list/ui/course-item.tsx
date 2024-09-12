"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { CourseListItem } from "../model/types";
import { Button } from "@/shared/ui/button";
import { useTransition } from "react";

type Props = {
  course: CourseListItem;
  deleteCourseAction: () => Promise<void>;
};

export const CourseItem = ({ course, deleteCourseAction }: Props) => {
  const { name, description } = course;
  const [isLoadingDelete, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await deleteCourseAction();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
