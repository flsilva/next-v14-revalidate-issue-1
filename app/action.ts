"use server";

import { revalidatePath } from "next/cache";

export const action = async (
  previousState: string | undefined,
  formData: FormData
) => {
  const name = formData.get("name");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  revalidatePath("/");
  return `name: ${name} | Math.random(): ${(Math.random() * 100).toFixed(2)}`;
};
