import { Project } from "@/contexts/Projects";
import Image from "next/image";

export default function Project({ project }: { project: Project }) {
  return (
    <div className="py-2 border-b-2">
      <button className="text-green-500 font-bold">{project.title}</button>
      <h6 className="text-green-500 font-bold text-xs py-2">
        {project.challenge}
      </h6>
      <div className="flex">
        <Image src={project.img} alt="project img" width={100} height={30} />
        <h6 className="text-xs">{project.description}</h6>
      </div>
    </div>
  );
}
