import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CourseItem } from "./course-item";

describe("course item", () => {
  it("should call delete callback", async () => {
    const handleDelete = jest.fn();
    render(
      <CourseItem
        course={{ id: "id", description: "description", name: "name" }}
        deleteCourseAction={handleDelete}
      />,
    );
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
  });
});
