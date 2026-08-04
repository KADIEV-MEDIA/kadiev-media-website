interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
      {children}
    </div>
  );
}