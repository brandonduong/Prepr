export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 shadow-lg rounded-lg p-4 h-full">{children}</div>
  );
}
