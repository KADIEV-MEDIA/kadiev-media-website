interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50">
      {children}
    </div>
  );
}