import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");

  // Fill in the form and submit
  await page.getByPlaceholder("Name...").fill("Test");
  await page.getByPlaceholder("Description...").fill("Test Description");
  await page.getByRole("button", { name: "Submit" }).click();

  // Assert that the element is visible after submission
  const courseElement = page.getByText("TestTest Description");
  await expect(courseElement).toBeVisible();

  // Delete the element
  await page.getByRole("button", { name: "Delete" }).click();

  // Assert that the element is no longer attached to the DOM (deleted)
  await expect(courseElement).not.toBeAttached();
});
