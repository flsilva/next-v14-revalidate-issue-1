import Link from "next/link";
import { MyForm } from "../MyForm";

export default function FooPage() {
  return (
    <div>
      <p className="text-2xl">/src/app/foo/page.tsx</p>
      <br />
      <MyForm />
      <br />
      <br />
      <Link
        href="/"
        className="p-2 border-solid border-2 border-sky-600 text-sky-600"
      >
        Nav to Landing
      </Link>
    </div>
  );
}
