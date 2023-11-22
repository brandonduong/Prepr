export default function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-2 hover:text-green-500 font-bold text-gray-400">
      {children}
    </button>
  );
}
