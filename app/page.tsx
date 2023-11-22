"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between p-24",
        { dark: dark }
      )}
    >
      <button onClick={() => setDark(!dark)}>dark mode</button>
      <div className="text-pink-500 dark:text-pink-200">tests {dark}</div>
    </main>
  );
}
