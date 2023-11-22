export default function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-2 hover:text-gray-500 text-gray-600">
      {children}
    </button>
  );
}
