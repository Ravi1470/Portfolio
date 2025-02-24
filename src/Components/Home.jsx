import React from "react";
import { Link } from "react-scroll";
import myresume from "../assets/myresume.pdf";
const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full pt-20 text-gray-200 flex flex-col justify-around items-center">
      <div className=" h-3/4 px-6 md:w-full flex flex-col gap-16 items-center">
        <div className="text-center flex gap-2 flex-col">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Hi, I'm <span className="">Ravikumar</span>,
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold text-blue-400">
            a Frontend Developer
          </h2>
        </div>
        <p className="max-w-3xl text-xl  text-center text-gray-300 text-justify">
          A passionate frontend developer skilled in building interactive and
          scalable web applications.
        </p>
        <a
          href={myresume}
          download="Ravikumar.pdf"
          className="w-5/6 md:w-1/4 py-3 px-2 mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg text-center shadow-lg">
          Download Resume
        </a>
      </div>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
        Let's Work Together
      </Link>
    </div>
  );
};

export default Home;
