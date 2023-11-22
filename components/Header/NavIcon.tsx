export default function NavIcon({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="p-2 hover:text-gray-500 text-gray-600 dark:hover:text-gray-300 dark:text-gray-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
