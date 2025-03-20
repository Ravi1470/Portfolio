import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Project = () => {
  return (
    <div id="project" className="min-h-screen w-full pt-24 ">
      <span className="text-blue-400 text-3xl md:text-5xl font-bold block text-center mb-8">
        My Projects
      </span>

      <div className="h-full w-full flex flex-col gap-12 px-6">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 border-2 border-gray-400 items-center p-4 flex flex-col gap-2 rounded-lg hover:shadow-lg transition-shadow">
            <img
              src={project1}
              alt="Memory Game"
              className="rounded-md py-2  "
            />
            <a
              href="https://memory-game-eight-eosin.vercel.app/"
              className="p-2 bg-indigo-700 w-fit lg:w-1/4 text-center rounded-lg"
              target="_blank">
              Memory Game
            </a>
          </div>
          <div className="md:w-1/2 text-gray-300 flex flex-col gap-6">
            <h1 className="text-2xl text-blue-400 font-semibold">
              Memory Game
            </h1>
            <p className="text-xl text-justify">
              This interactive memory game challenges players to match pairs of
              cards with identical images. Built using React.js, it ensures a
              smooth and responsive gaming experience. CSS animations enhance
              visual appeal, making it engaging and fun.
            </p>

            <hr className="border-gray-500" />
            <div className="flex flex-col gap-2 items-center text-xl ">
              <span className="text-gray-400 self-start">TECH STACK:</span>
              <span className="text-white self-start">
                React.js, JavaScript, CSS
              </span>
            </div>
            <hr className="border-gray-500" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-700"></div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 border-2 border-gray-400 items-center p-4 flex flex-col gap-2 rounded-lg hover:shadow-lg transition-shadow">
            <img src={project2} alt="Alcognerd" className="rounded-md py-2" />
            <a
              href="https://alcognerd.site/"
              className="p-2 bg-indigo-700 w-fit lg:w-1/4 text-center rounded-lg"
              target="_blank">
              Alcognerd
            </a>
          </div>
          <div className="md:w-1/2 text-gray-300 flex flex-col gap-6">
            <p className="text-xl text-justify">
              Alcognerd is a powerful event management and planning application
              designed to streamline event coordination with real-time features.
              The platform enables seamless communication between attendees and
              organizers through an integrated real-time chat, fostering
              engagement and collaboration. With smart attendance tracking,
              powered by Redis, event hosts can monitor check-ins with accuracy
              and efficiency. Secure Razorpay payment integration allows users
              to register and pay for events effortlessly. The intuitive
              scheduling system ensures that event creation, updates, and
              management are smooth and hassle-free.
            </p>
            <hr className="border-gray-500" />
            <div className="flex flex-col gap-2 items-center">
              <span className="text-gray-400 self-start">TECH STACK:</span>
              <span className="text-white flex text-xl flex-col gap-2 self-start">
                <span>
                  <strong>Frontend :</strong> React.js , JavaScript, Tailwind
                  CSS,React Query
                </span>
                <span>
                  <strong>Backend:</strong> Node.js ,Express.js, MongoDB, Redis
                </span>
                <span>
                  <strong> Payments: </strong> Razorpay integration
                </span>
          
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
