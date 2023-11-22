"use client";

import Header from "@/components/Header";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <main className={clsx({ dark: dark })}>
      <Header dark={dark} setDark={setDark} />
      <section
        className={
          "flex min-h-screen flex-col items-center justify-between p-24"
        }
      >
        <div className="text-pink-500 dark:text-pink-200">tests {dark}</div>
      </section>
    </main>
  );
}
