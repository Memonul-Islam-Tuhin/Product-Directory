const NeoInput = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  icon: Icon,
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
          <Icon className="w-5 h-5 stroke-3" />
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 ${Icon ? "pl-12" : "pl-4"}
          bg-white text-black font-sans font-semibold placeholder:text-gray-500
          border-4 border-black rounded-none shadow-neo-sm
          focus:outline-none focus:bg-neo-yellow focus:shadow-neo
          transition-all duration-100`}
        {...props}
      />
    </div>
  );
};

export default NeoInput;
