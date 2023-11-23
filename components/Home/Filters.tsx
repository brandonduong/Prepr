import Filter from "./Filter";

export default function Filters() {
  const filters = {
    duration: [
      "less than 2 hours",
      "2 - 4 hours",
      "4 - 8 hours",
      "1 - 2 days",
      "3 - 5 days",
      "5 + days",
    ],
    level: ["beginner", "intermediate", "advanced", "mixed"],
    organizations: [
      "prepr",
      "linux foundation",
      "magnet",
      "certNexus",
      "ontario chamber of commerce",
      "youth boost",
    ],
  };
  return (
    <div className="flex flex-col rounded-lg border-2 border-gray-400 dark:border-gray-300 bg-gray-200">
      <h1 className="text-xl font-black m-2">Filters</h1>
      {Object.entries(filters).map(([key, value]) => (
        <Filter filter={key} checks={value} key={key} />
      ))}
    </div>
  );
}
