import "@style/globals.css";
import NavBar from "@comp/UI/NavBar/NavBar";
import React, { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-8 bg-accents-0">
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
