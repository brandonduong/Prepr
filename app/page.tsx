"use client";

import Header from "@/components/Header";
import Search from "@/components/Header/Search";
import Interest from "@/components/Home/Interest";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  const interests = [
    "gitlab",
    "codebases",
    "business strategy",
    "food cost management",
    "video editing",
    "career development",
    "corporate identity",
    "video production",
    "system testing",
    "digital",
  ];

  return (
    <main className={clsx({ dark: dark })}>
      <Header dark={dark} setDark={setDark} />
      <section
        className={
          "flex flex-col items-center justify-between py-24 px-64 bg-gradient-to-r from-green-100 to-cyan-300 dark:from-green-500 dark:to-cyan-500"
        }
      >
        <div className="dark:text-gray-200 text-center">
          <h1 className="text-4xl font-black pb-3">Explore Your Interests</h1>
          <h6>
            We&apos;ll recommend content based on your interests we&apos;ve
            listed here.
          </h6>
          <h6>
            Feel free to add or remove topics to customize your experience!
          </h6>
        </div>
        <div className="py-8">
          <Search />
        </div>
        <div className="dark:text-gray-200 text-center">
          <h1 className="text-4xl font-black pb-3">
            Click an interest to narrow your recommendations.
          </h1>
          <h6>
            We&apos;ll recommend content based on your interests we&apos;ve
            listed here.
          </h6>
          <h6>
            Feel free to add or remove topics to customize your experience!
          </h6>
        </div>
        <div className="flex pt-3 flex-wrap justify-center">
          {interests.map((i) => (
            <Interest key={i}>{i}</Interest>
          ))}
        </div>
      </section>
      <section>test</section>
    </main>
  );
}
