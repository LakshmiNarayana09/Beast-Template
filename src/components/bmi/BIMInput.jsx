function BMIInput({ label, unit }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-300 pb-2">
      <label
        className="text-[14px] uppercase text-black/40 lg:text-[15px]"
        style={{ fontFamily: "Oswald" }}
      >
        {label}
      </label>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="w-16 text-right outline-none sm:w-20 lg:w-24"
        />

        {unit && (
          <span
            className="text-[14px] lg:text-[15px]"
            style={{ fontFamily: "Oswald" }}
          >
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

export default BMIInput;