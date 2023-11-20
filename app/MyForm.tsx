"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmitButton";
import { action } from "./action";

export const MyForm = () => {
  const [result, formAction] = useFormState(action, undefined);

  return (
    <form action={formAction} className="my-8">
      <input type="text" name="name" placeholder="Name" autoComplete="off" />
      <br />
      <br />
      <SubmitButton />
      <br />
      <br />
      <p>Response: {result}</p>
    </form>
  );
};
