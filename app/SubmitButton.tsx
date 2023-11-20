"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="p-2 border-solid border-2 border-black disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
