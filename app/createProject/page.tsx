"use client";

import Card from "@/components/Dashboard/Card";
import Header from "@/components/Header";
import { useProjects } from "@/contexts/Projects";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function CreateProject() {
  const [dark, setDark] = useState(false);
  const { projects, setProjects } = useProjects();
  const [form, setForm] = useState({
    title: "",
    description: "",
    challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  function handleCreate() {
    setProjects([
      ...projects,
      {
        ...form,
        slug: "test slug2",
        img: "/logoNew.png",
        lab: "test lab2",
        recruiting: "test recruiting2",
        skills: "test skills2",
        publicView: false,
        publicDownload: true,
      },
    ]);
  }

  return (
    <main className={clsx({ dark: dark })}>
      <Header dark={dark} setDark={setDark} />

      <section className={"px-8 py-4 bg-gray-100 dark:bg-gray-400"}>
        <div className="bg-white my-6 p-4 shadow-lg">
          <h2 className="text-gray-500 font-bold text-xl pb-4 border-b-2">
            CREATE PROJECT
          </h2>

          <h3 className="text-lg my-6">
            <b>Challenge</b>: <span>No active challenge</span>
          </h3>

          <div className="mb-6">
            <Card>
              <div className="px-32">
                <h3 className="text-lg mb-6">
                  <b>Project overview</b>
                </h3>
                <div className="flex justify-between mb-6">
                  <div className="basis-1/2 mr-8">
                    <h3>
                      Title<span className="text-red-600">*</span>
                    </h3>
                    <input
                      className="px-2 py-1 border-2 focus:outline-none rounded w-full"
                      name="title"
                      placeholder="Max. 150 Characters"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="basis-1/2">
                    <h3>
                      Project slug<span className="text-red-600">*</span>
                    </h3>
                    <input
                      className="px-2 py-1 border-2 focus:outline-none rounded w-full"
                      placeholder="Project slug"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="basis-1/2 mr-8">
                    <h3>
                      Description<span className="text-red-600">*</span>
                    </h3>
                    <textarea
                      className="px-2 pt-1 pb-10 border-2 focus:outline-none rounded w-full"
                      placeholder="Max. 300 Characters"
                      name="description"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="basis-1/2">
                    <h3>
                      Active Challenge<span className="text-red-600">*</span>
                    </h3>
                    <input
                      className="px-2 py-1 border-2 focus:outline-none rounded w-full"
                      placeholder="Select Challenge"
                      name="challenge"
                      onChange={(e) => handleChange(e)}
                    />
                    <h3>
                      Associated Lab<span className="text-red-600">*</span>
                    </h3>
                    <input
                      className="px-2 py-1 border-2 focus:outline-none rounded w-full"
                      placeholder="Select Lab"
                    />
                  </div>
                </div>
                <div>
                  <input type="checkbox" />{" "}
                  <span>
                    Allow users outside your team to view your project
                  </span>
                </div>
                <div>
                  <input type="checkbox" />{" "}
                  <span>
                    Allow users outside your team to download your project files
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-6">
            <Card>
              <div className="px-32">
                <h3 className="text-lg mb-6">
                  <b>Upload Project Banner</b>
                </h3>
                <input type="file" accept="image/*" />
              </div>
            </Card>
          </div>
          <div className="flex justify-evenly">
            <button className="rounded bg-white border-2 border-green-500 text-green-500 px-8 py-2">
              Cancel
            </button>
            <Link href={"/user/home"}>
              <button
                className="rounded bg-green-500 border-2 border-green-500 text-white px-8 py-2"
                onClick={handleCreate}
              >
                Create Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
