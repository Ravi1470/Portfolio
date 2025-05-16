import github from "../assets/logo/github-logo.jpg";
import emailIcon from "../assets/logo/emailIcon.png";
import linkedin from "../assets/logo/linked-in.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full pt-20 text-white  flex flex-col  items-center px-6">
      <div className=" md:p-6 lg:p-10 flex flex-col  gap-6 items-center text-center">
        <p className="text-2xl md:text-3xl text-gray-300">
          Do you want to work together?
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-7  justify-around ">
        <div className="flex flex-col flex-wrap justify-center md:w-[60%] gap-7 mt-6">
          <a
            className="flex items-center gap-4 py-6 px-2 border border-gray-600 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            href="mailto:sivaraj@example.com" // Replace with the actual email
          >
            <img
              className="w-14 h-14 rounded-full border-2 border-gray-500 hover:border-white transition-all duration-300"
              src={emailIcon} // Replace this with your email icon import
              alt="email"
            />
            <span className="text-gray-300 text-lg font-semibold">Sivaraj</span>
          </a>
          {/* GitHub */}
          <a
            className="flex items-center gap-4 py-6 px-2  border border-gray-600 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            target="_blank"
            href="https://github.com/R-SIVARAJ/">
            <img
              className="w-14 h-14 rounded-full border-2 border-gray-500 hover:border-white transition-all duration-300"
              alt="Github"
              src={github}
            />
            <span className="text-gray-300 text-lg font-semibold">Sivaraj</span>
          </a>

          {/* LinkedIn */}
          <a
            className="flex items-center gap-4  py-6 px-2 border border-gray-600  rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/vkravi/">
            <img
              className="w-14 h-14 rounded-full border-2 border-gray-500 hover:border-white transition-all duration-300"
              src={linkedin}
              alt="LinkedIn"
            />
            <span className="text-gray-300 text-lg font-semibold">Sivaraj</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
