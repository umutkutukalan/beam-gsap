import { logo } from "../utils";

const Navbar = () => {
  return (
    <nav className="h-[80px] flex items-center justify-between text-white px-4 py-3 z-200">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="" width={40}/>
        <h1 className="text-2xl">Poppin</h1>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <a href="#" className="hover:text-blue-500 text-gray-300">
          About
        </a>
        <button className="poppin-color text-white px-3 py-1 rounded-lg cursor-pointer text-black">
          Download Poppin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
