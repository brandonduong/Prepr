"use client";

import Card from "@/components/Dashboard/Card";
import Project from "@/components/Dashboard/Project";
import Header from "@/components/Header";
import { useProjects } from "@/contexts/Projects";
import clsx from "clsx";
import { useState } from "react";

export default function Dashboard() {
  const [dark, setDark] = useState(false);
  const { projects } = useProjects();

  return (
    <main className={clsx({ dark: dark })}>
      <Header dark={dark} setDark={setDark} />

      <section
        className={"px-8 py-4 bg-gray-100 dark:bg-gray-400 min-h-screen"}
      >
        <span className="text-xl font-bold">Good afternoon, Brandon. </span>
        <button className="text-md text-green-500 underline">
          Complete profile
        </button>

        <div className="bg-white my-6 px-16 py-4 shadow-lg">
          <div className="flex">
            <div className="basis-1/3">
              <Card>
                <h3 className="font-bold text-xl">My Progress</h3>
                <h5 className="text-sm py-6">
                  You joined Preprlabs on Nov 13, 2023, here is your challenge
                  journey.
                </h5>
                <ul>
                  <li className="flex justify-between">
                    <h6>Project Submitted:</h6> 0
                  </li>
                  <li className="flex justify-between">
                    <h6>Project Created:</h6> {projects.length}
                  </li>
                  <li className="flex justify-between">
                    <h6>Invited:</h6> 0
                  </li>
                  <li className="flex justify-between">
                    <h6>Followed:</h6> 0
                  </li>
                </ul>
              </Card>
            </div>
            <div className="basis-1/3 ml-2">
              <Card>
                <h3 className="font-bold text-xl">
                  Continue Where You Left Off
                </h3>
                <h5 className="text-sm my-6">
                  Start your PreprLabs journey now!
                </h5>
                <div className="text-center">
                  <button className="text-white bg-green-500 rounded p-2">
                    Explore more
                  </button>
                </div>
              </Card>
            </div>
            <div className="basis-1/3 ml-2">
              <Card>
                <div className="flex justify-between">
                  <h3 className="font-bold text-xl">Projects</h3>
                  <button className="text-white bg-green-500 rounded px-2">
                    Create
                  </button>
                </div>

                {projects.map((p) => (
                  <Project key={p.title} project={p} />
                ))}
              </Card>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="basis-2/3">
              <Card>
                <h3 className="font-bold text-xl">Leaderboard</h3>
                <ol className="list-decimal ml-4">
                  {Array.from([1, 2, 3, 4, 5]).map((n) => (
                    <li key={n} className="border-t-2">
                      test{n}
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
            <div className="basis-1/3 ml-2">
              <Card>
                <div>
                  <h3 className="font-bold text-xl">
                    Upcoming Challenge Deadlines
                  </h3>
                </div>

                {Array.from([1, 2, 3, 4, 5]).map((n) => (
                  <div key={n} className="border-b-2">
                    <b>test challenge {n}</b>
                    <h6 className="text-gray-500 text-sm">
                      Due November 30 at 12:10PM
                    </h6>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
