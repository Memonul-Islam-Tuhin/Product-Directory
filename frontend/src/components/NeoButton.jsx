const NeoButton = ({
  children,
  onClick,
  varient = "yellow",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "font-display font-black uppercase text-black border-4 border-black transition-all duration-100 flex items-center justify-center gap-2 select-none";

  const variants = {
    yellow: "bg-neo-yellow hover:bg-[#FFE000]",
    teal: "bg-neo-teal hover:bg-[#00E5F0]",
    pink: "bg-neo-pink hover:bg-[#FF55B6]",
    white: "bg-white hover:bg-neo-gray",
    dark: "bg-neo-dark text-white hover:bg-[#333333] border-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo active:translate-x-0 active:translate-y-0 active:shadow-neo-sm",
    md: "px-6 py-3 text-base shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg active:translate-x-0 active:translate-y-0 active:shadow-neo",
    lg: "px-8 py-4 text-lg shadow-neo-lg hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-neo-xl active:translate-x-0 active:translate-y-0 active:shadow-neo-lg",
  };

  const disabledStyles =
    "opacity-65 cursor-not-allowed transform-none! shadow-neo-sm! translate-x-0! translate-y-0!";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[varient]} ${sizes[size]} ${disabled ? disabledStyles : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeoButton;
