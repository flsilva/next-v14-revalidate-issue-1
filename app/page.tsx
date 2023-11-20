import Link from "next/link";
import { MyForm } from "./MyForm";

export default function Home() {
  return (
    <div>
      <p className="text-2xl">/src/app/page.tsx</p>
      <MyForm />
      <Link
        href="/foo"
        className="p-2 border-solid border-2 border-sky-600 text-sky-600"
      >
        Nav to /foo
      </Link>
    </div>
  );
}
