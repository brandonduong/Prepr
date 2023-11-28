import clsx from "clsx";
import { useState } from "react";

export default function Option({ children }: { children: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={clsx("rounded p-2 bg-gray-200 border-2 border-gray-200", {
        "border-green-500 bg-green-500": clicked,
      })}
      onClick={() => setClicked(!clicked)}
    >
      {children}
    </div>
  );
}
