"use client";

import Accessibility from "@/components/Accessibility";
import Header from "@/components/Header";
import Search from "@/components/Header/Search";
import Card from "@/components/Home/Card";
import Filters from "@/components/Home/Filters";
import Interest from "@/components/Home/Interest";
import Menu from "@/components/Home/Menu";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("labs");

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

  const tabs = ["labs", "challenges", "resources", "projects"];
  const menus = {
    labs: ["labs", "lab programs"],
    challenges: ["challenges", "challenge paths"],
    resources: ["resource modules", "resource collections", "resource groups"],
    projects: [],
  };

  return (
    <main className={clsx({ dark: dark })}>
      <Header dark={dark} setDark={setDark} />
      <Accessibility />

      <section
        className={
          "flex flex-col items-center justify-between py-24 px-8 md:px-64 bg-gradient-to-r from-green-100 to-cyan-300 dark:from-green-500 dark:to-cyan-500"
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

      <section className="px-8 py-6 bg-gray-100 dark:bg-gray-400">
        <div className="flex rounded-lg border-2 border-gray-400 dark:border-gray-300 bg-gray-200">
          {tabs.map((t) => (
            <button
              className={clsx(
                "w-1/4 p-4 capitalize font-black text-xl lg:text-4xl",
                {
                  "bg-blue-400 text-white": tab === t,
                }
              )}
              onClick={() => setTab(t)}
              key={t}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="px-8 py-6 bg-gray-100 dark:bg-gray-400">
        <div className="flex flex-col md:flex-row gap-2">
          <div>
            <Menu tabs={menus[tab as keyof typeof menus]} />
            <div>
              <Filters />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center rounded-lg border-2 border-gray-400 dark:border-gray-300 bg-gray-200 p-2">
              <div>
                <Search />
                <button className="ml-2 px-2 py-1 bg-blue-400 rounded text-white">
                  Search
                </button>
              </div>
              <div>
                <span className="mr-2">Sort by</span>
                <select>
                  <option value="Recently added">Recently added</option>
                  <option value="Most popular">Most popular</option>
                </select>
              </div>
            </div>
            <div>
              <Card tab={tab} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
