"use client";
import { createContext, useContext, useState } from "react";

export interface Project {
  title: string;
  description: string;
  slug: string;
  img: string;
  challenge: string;
  lab: string;
  recruiting: string;
  skills: string;
  publicView: boolean;
  publicDownload: boolean;
}

export interface ProjectType {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const ProjectContext = createContext<ProjectType>({} as ProjectType);

export default function ProjectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "test title",
      description: "test description",
      slug: "test slug",
      img: "/logoNew.png",
      challenge: "test challenge",
      lab: "test lab",
      recruiting: "test recruiting",
      skills: "test skills",
      publicView: false,
      publicDownload: true,
    },
    {
      title: "test title2",
      description: "test description2",
      slug: "test slug2",
      img: "/logoNew.png",
      challenge: "test challenge2",
      lab: "test lab2",
      recruiting: "test recruiting2",
      skills: "test skills2",
      publicView: false,
      publicDownload: true,
    },
  ]);

  const value = {
    projects,
    setProjects,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { ProjectContext };

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProjects must be used within a ProjectProvider");
  return context;
}
