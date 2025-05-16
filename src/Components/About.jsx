import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full pt-14 text-white flex items-center justify-center ">
      <div className="w-[85vw] flex flex-col gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400 text-center mb-8">
          About Me
        </h2>
        <p className="text-xl md:text-3xl text-justify mb-8">
          Hello! I'm Sivaraj, a passionate web developer with experience in
          building responsive and user-friendly websites and applications. I
          specialize in frontend development using modern frameworks like React,
          and I love to experiment with new technologies to improve my skills.
        </p>
        <div>
          <h3 className="text-2xl text-indigo-800 font-semibold mb-4">
            My Knowledge
          </h3>
          <div className="space-y-4 text-lg md:text-xl">
            <div className="flex  gap-2 ">
              <strong className="text-gray-400 underline decoration-cyan-700 decoration-4 ">
                Languages:
              </strong>
              <span className="text-gray-300">Java, Python,JS</span>
            </div>
            <div className="flex  gap-2 ">
              <strong className="text-gray-400 underline  decoration-cyan-700 decoration-4 ">
                Frontend:
              </strong>
              <span className="text-gray-300">Html, Tailwind CSS</span>
            </div>
            <div className="flex  gap-2 ">
              <strong className="text-gray-400 underline  decoration-cyan-700 decoration-4">
                Tools:
              </strong>
              <span className="text-gray-300">Git, GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
