import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-slate-950 flex items-center justify-between px-26 border-b-2 border-sky-600">
      <img src={logo} alt="" className="w-44" />
      <p>Search/Filter</p>
    </header>
  );
};

export default Header;
