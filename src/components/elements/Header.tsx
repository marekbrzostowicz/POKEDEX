import logo from "../../assets/logo.webp";
import { useState, useRef, useEffect } from "react";
import Search from "./Search";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  isDetails?: boolean;
}

const Header = ({ searchQuery, onSearchChange, isDetails }: HeaderProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFilterOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.addEventListener("click", handleClickOutside);
    };
  }, [isFilterOpen]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-slate-950 flex flex-col md:flex-row py-4 md:py-0 items-center justify-between px-26 border-b-2 border-sky-600 ">
      <img src={logo} alt="" className="w-44" />
      {isDetails && (
        <div className="flex flex-col items-center">
          <button
            className="text-amber-200 hover:text-amber-400 hover:cursor-pointer transition duration-75"
            onClick={(e) => {
              e.stopPropagation();
              setIsFilterOpen((prev) => !prev);
            }}
          >
            Search
          </button>
          <div ref={filterRef}>
            {isFilterOpen && (
              <Search value={searchQuery ?? ""} onChange={onSearchChange!} />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
