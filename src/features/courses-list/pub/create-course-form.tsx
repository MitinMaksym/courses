"use client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCourseAction } from "../actions";
import { cn } from "@/shared/ui/utils";

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

type Props = {
  revalidatePagePath: string;
  className?: string;
};
export const CreateCourseForm = ({ revalidatePagePath, className }: Props) => {
  const [isLoadingCreate, startCreateTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startCreateTransition(async () => {
      await createCourseAction(revalidatePagePath, values);
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form
        className={cn("space-y-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid || isLoadingCreate}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
