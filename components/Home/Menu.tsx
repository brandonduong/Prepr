import clsx from "clsx";
import { useState } from "react";

export default function Menu({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex flex-col rounded-lg border-2 border-gray-400 dark:border-gray-300 bg-gray-200">
      {tabs.map((t) => (
        <button
          className={clsx("p-4 capitalize font-black text-md lg:text-xl", {
            "bg-blue-400": selected === t,
          })}
          onClick={() => setSelected(t)}
          key={t}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
