interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        rounded-2xl
        border border-white/[0.08]
        bg-[#0D0D0D]
        p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#C9A45C]/30
        hover:bg-[#111111]
        hover:shadow-[0_20px_70px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}