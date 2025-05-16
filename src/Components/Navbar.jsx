import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navcolor, setNavcolor] = useState("home");

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-2 md:p-4 bg-gray-800 fixed top-0 right-0 w-full z-50 shadow-md">
        <h5 className="text-xl text-white font-semibold pl-2">SIVARAJ</h5>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl p-2 cursor-pointer">
          ☰
        </button>

        <div className="hidden md:flex gap-6 text-white text-xl p-2 not-only:">
          <Link
            to="home"
            smooth={true}
            onClick={() => setNavcolor("home")}
            duration={500}
            className={`cursor-pointer ${
              navcolor === "home" ? "text-blue-400" : ""
            }`}>
            Home
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            onClick={() => setNavcolor("project")}
            className={`cursor-pointer ${
              navcolor === "project" ? "text-blue-400" : ""
            }`}>
            Projects
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setNavcolor("about")}
            className={`cursor-pointer ${
              navcolor === "about" ? "text-blue-400 " : ""
            }`}>
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setNavcolor("contact")}
            className={`cursor-pointer ${
              navcolor === "contact" ? "text-blue-400" : ""
            }`}>
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 h-full w-[75%] bg-zinc-900 text-white p-5 transition-transform duration-300 transform flex flex-col text-xl gap-5
          ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={() => setOpen(false)}>
          ✕
        </button>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
          className="cursor-pointer p-2 hover:text-blue-400">
          Home
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
          className="cursor-pointer p-2 hover:text-blue-400">
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
          className="cursor-pointer p-2 hover:text-blue-400">
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
          className="cursor-pointer p-2 hover:text-blue-400">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
