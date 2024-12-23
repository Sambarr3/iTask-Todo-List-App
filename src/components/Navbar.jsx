const Navbar = () => {
  return (
    <nav className="md:flex justify-between bg-violet-950 text-white py-4 nav">
      <div className="log">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-semibold transition-all">
          Home
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all ">
          Your Tasks
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all">
          About
        </li>
        <li className="cursor-pointer hover:font-semibold transition-all">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
