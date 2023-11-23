import clsx from "clsx";
import { useState } from "react";

export default function Filter({
  filter,
  checks,
}: {
  filter: string;
  checks: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="bg-blue-400 mb-2 px-2 text-white">
        <button className="capitalize" onClick={() => setExpanded(!expanded)}>
          {filter}
        </button>
      </div>
      <div className={clsx({ hidden: !expanded }, "mb-2")}>
        {checks.map((c) => (
          <div className="flex items-center" key={c}>
            <input type="checkbox" name={c} id={c} className="mx-2" />
            <label className="mx-2">{c}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
