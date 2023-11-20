import { Inter } from "next/font/google";
import BugDescription from "./BugDescription";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  intercept,
}: {
  children: React.ReactNode;
  intercept: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={`${inter.className} m-4 bg-gray-200 text-black`}>
        <div className="max-w-[600px]">
          <BugDescription />
          <div className="p-4 mt-8 border-solid border-2 border-black">
            {children}
          </div>
          <div className="p-4 mt-4 border-solid border-2 border-black">
            <p className="mb-4">@intercept slot content:</p>
            <div>{intercept}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
