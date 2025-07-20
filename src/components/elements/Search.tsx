interface InputComponentProps {
  value: string;
  onChange: (newValue: string) => void;
}

const Search = ({ value, onChange }: InputComponentProps) => {
  return (
    <div className="relative z-50">
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-slate-950 border border-sky-500 rounded-2xl p-4 w-60 ">
        <div className="w-full flex items-center mb-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search Pokemon"
            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900 text-white border border-sky-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-sky-400 hover:text-amber-400 text-lg font-bold px-2 py-1 rounded transition"
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
