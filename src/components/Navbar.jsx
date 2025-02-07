const Navbar = () => {
  return (
    <header className="top-0 left-0 w-full bg-black shadow-md">
      <nav className="mx-auto px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#201bcb]"></div>
          <h1 className="text-3xl">beam</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-blue-500 text-gray-300">
            About
          </a>
          <button className="bg-[#201bcb] text-white px-3 py-1 rounded-lg hover:bg-blue-600">
            Download Beam
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
