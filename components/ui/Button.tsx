import { ButtonProps } from "@/types";

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]",

    secondary:
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
