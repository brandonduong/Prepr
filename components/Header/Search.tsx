"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="border-2 border-gray-200 rounded px-2 py-1 text-gray-500"
      placeholder="Search..."
    />
  );
}
