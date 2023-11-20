export default function BugDescription() {
  return (
    <div>
      <p className="mt-4">
        This bug reproduction is using{" "}
        <span className="font-mono font-semibold">
          Next.js v14.0.4-canary.9
        </span>
      </p>
      <p className="mt-4">
        <span className="text-2xl">Short description</span>
        <br />
        <br />
        Calling{" "}
        <span className="font-mono font-semibold">
          revalidatePath()
        </span> or{" "}
        <span className="font-mono font-semibold">revalidateTag()</span> in
        Server Actions that are triggered from Intercepting Routes breaks{" "}
        <span className="font-mono font-semibold">useFormStatus()</span> and{" "}
        <span className="font-mono font-semibold">useFormState()</span>.
      </p>
      <p className="mt-8">
        <span className="text-2xl">This app has 2 routes and 3 pages</span>
        <br />
        <br />
        1. Route <span className="font-mono font-semibold">/</span> renders the
        file at{" "}
        <span className="font-mono font-semibold">src/app/page.tsx</span>.
        <br />
        <br />
        2. Route <span className="font-mono font-semibold">/foo</span> renders
        the file at{" "}
        <span className="font-mono font-semibold">
          /src/app/@intercept/(.)foo/page.tsx
        </span>{" "}
        when you navigate to it using the{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to /foo
        </span>{" "}
        <span className="font-mono font-semibold">{"<Link>"}</span> below, and
        it renders the file at{" "}
        <span className="font-mono font-semibold">/src/app/foo/page.tsx</span>{" "}
        if you refresh the browser while visiting it.
      </p>
      <p className="mt-8">
        <span className="text-2xl">Steps to reproduce</span>
        <br />
        <br />
        1. Make sure you&apos;re at the root route{" "}
        <span className="font-mono font-semibold">/</span>.
        <br />
        <br />
        2. Fill in the <span className="font-mono font-semibold">
          name
        </span>{" "}
        input text.
        <br />
        <br />
        3. Click the <span className="font-mono font-semibold">
          Submit
        </span>{" "}
        button in the{" "}
        <span className="font-mono font-semibold">/src/app/page.tsx</span> box
        below.
        <br />
        <br />
        4. It works as expected. The{" "}
        <span className="font-mono font-semibold">Submit</span> button changes
        to <span className="font-mono font-semibold">Submitting...</span> and
        after 3 seconds it changes back to{" "}
        <span className="font-mono font-semibold">Submit</span>, and we can see
        the Server Action&apos;s response.
        <br />
        <br />
        5. Click{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to /foo
        </span>{" "}
        to visit the Intercepting Route{" "}
        <span className="font-mono font-semibold">/foo</span>.
        <br />
        <br />
        6. Fill in the <span className="font-mono font-semibold">
          name
        </span>{" "}
        input text in either form.
        <br />
        <br />
        7. Click the <span className="font-mono font-semibold">
          Submit
        </span>{" "}
        button in either form.
        <br />
        <br />
        8. It doesn&apos;t work as expected. The{" "}
        <span className="font-mono font-semibold">Submit</span> button changes
        to <span className="font-mono font-semibold">Submitting...</span> but
        never changes back to{" "}
        <span className="font-mono font-semibold">Submit</span>, and we never
        get the Server Action's response.
        <br />
        <br />
      </p>
      <p className="mt-8">
        <span className="text-2xl">What&apos;s expected to happen</span>
        <br />
        <br />
        1. The button should change to{" "}
        <span className="font-mono font-semibold">Submitting...</span> based on{" "}
        <span className="font-mono font-semibold">pending</span> from{" "}
        <span className="font-mono font-semibold">useFormStatus()</span>.
        <br />
        <br />
        2. After 3 seconds the button should change back to{" "}
        <span className="font-mono font-semibold">Submit</span> based on{" "}
        <span className="font-mono font-semibold">pending</span> from{" "}
        <span className="font-mono font-semibold">useFormStatus()</span>, and we
        should see the Server Action&apos;s response based on{" "}
        <span className="font-mono font-semibold">useFormState()</span>.
      </p>
      <p className="mt-8">
        <span className="text-2xl">What happens</span>
        <br />
        <br />
        A. If you&apos;re visiting the root route{" "}
        <span className="font-mono font-semibold">/</span> it works as expected.
        <br />
        <br />
        B. If you&apos;re visiting the Intercepting Route{" "}
        <span className="font-mono font-semibold">/foo</span> it doesn&apos;t
        work as expected, the button never changes back to{" "}
        <span className="font-mono font-semibold">Submit</span> (
        <span className="font-mono font-semibold">pending</span> is always{" "}
        <span className="font-mono font-semibold">true</span>), and we never get
        the Server Action response via{" "}
        <span className="font-mono font-semibold">useFormState()</span>. Client
        Components never re-render. It doesn&lsquo;t matter which button you
        click, none of them work on the Intercepting Route{" "}
        <span className="font-mono font-semibold">/foo</span>.
        <br />
        <br />
        C. The <span className="font-mono font-semibold">{"<Link>"}</span>{" "}
        component stops working once the app gets stuck in the{" "}
        <span className="font-mono font-semibold">Submitting...</span> state,
        but <b>only</b> when rendering the file at{" "}
        <span className="font-mono font-semibold">
          /src/app/@intercept/(.)foo/page.tsx
        </span>{" "}
        and <b>only on localhost</b>. If you Click{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to Landing
        </span>{" "}
        it doesn&apos;t work anymore.
      </p>
      <p className="mt-8">
        <span className="text-2xl">
          Code changes that results in the same behavior
        </span>
        <br />
        <br />
        1. Changing{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        to{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/', 'page'"})
        </span>
        .
        <br />
        <br />
        2. Changing{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        to{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/', 'layout'"})
        </span>
        .
        <br />
        <br />
        3. Changing{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        to{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/foo'"})
        </span>
        .
        <br />
        <br />
        4. Changing{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        to{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/foo', 'page'"})
        </span>
        .
        <br />
        <br />
        5. Changing{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        to{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/foo', 'layout'"})
        </span>
        .
        <br />
        <br />
        6. Replacing{" "}
        <span className="font-mono font-semibold">
          revalidatePath()
        </span> with{" "}
        <span className="font-mono font-semibold">
          revalidateTag({"'anything'"})
        </span>
        .
      </p>
      <p className="mt-8">
        <span className="text-2xl">
          Code changes that results in the expected behavior
        </span>
        <br />
        <br />
        1. If we comment out the{" "}
        <span className="font-mono font-semibold">
          revalidatePath({"'/'"})
        </span>{" "}
        line of code in{" "}
        <span className="font-mono font-semibold">action.ts</span> everything
        works as expected because we&apos;re not relying on cached data in this
        app.
      </p>
    </div>
  );
}
