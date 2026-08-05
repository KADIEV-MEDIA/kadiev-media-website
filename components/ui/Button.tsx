interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-yellow-500 text-black hover:scale-105",
    secondary:
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}