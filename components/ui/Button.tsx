interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "border border-[#C9A45C] bg-[#C9A45C] text-[#050505] hover:-translate-y-0.5 hover:bg-[#DFC17D] hover:border-[#DFC17D] hover:shadow-[0_10px_40px_rgba(201,164,92,0.22)]",

    secondary:
      "border border-[#C9A45C]/50 bg-transparent text-[#C9A45C] hover:-translate-y-0.5 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}