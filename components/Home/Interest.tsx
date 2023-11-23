export default function Interest({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full bg-gray-100 px-2 m-2 border-2 border-gray-300">
      {children}
    </button>
  );
}
