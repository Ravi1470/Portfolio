import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-screen w-full pt-24 ">
      <span className="text-blue-400 text-3xl md:text-6xl font-bold block text-center mb-8">
        My Projects
      </span>

      <div className="h-full w-full flex flex-col gap-12 px-6 justify-center items-center">
        {/* Project 1 */}
        <div className=" w-[90%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row items-center gap-8">
          <div className="text-gray-300 flex flex-col gap-6">
            <h1 className="text-3xl text-blue-400 font-semibold">Portfolio</h1>
            <p className="text-lg lg:text-2xl text-justify">
              Hi, I’m Sivaraj — a passionate Frontend Developer focused on
              creating clean, responsive, and user-centric web applications.
              With a strong foundation in HTML, Tailwind CSS, JavaScript, and
              React.js, I bring digital ideas to life through elegant interfaces
              and seamless user experiences. I enjoy building intuitive web
              solutions that not only look good but also perform efficiently
              across devices. Whether it's crafting a landing page, building a
              full-fledged dashboard, or contributing to team projects, I always
              aim for quality, clarity, and creativity in my work. I'm
              constantly learning and pushing my skills to deliver web
              experiences that make an impact. If you're looking for someone who
              loves clean code, modern UI, and meaningful design — let's connect
              and build something great!
            </p>

            <hr className="border-gray-500" />
            <div className="flex flex-col gap-2 items-center text-xl ">
              <span className="text-gray-400 self-start">TECH STACK:</span>
              <span className="text-white self-start">Html, CSS</span>
            </div>
            <hr className="border-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
