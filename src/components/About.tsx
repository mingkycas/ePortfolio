import profile from "../assets/Profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center bg-[#1C1C1C] rounded-lg p-8 shadow-md">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-full border-4 border-[#E3B341] shadow-[0_0_20px_5px_rgba(227,179,65,0.7)] overflow-hidden flex-shrink-0 animate-slideFromCenter">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* About Text */}
          <div className="md:ml-8 animate-fadeInFromLeft">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-[#AAAAAA]">
              Hi everyone! My name is Casey Saguing. I'm a third-year Computer Science student at the University of Science and Technology of Southeastern Philippines, with a passion for web development.
              As an aspiring front-end developer, I focus on crafting seamless, responsive, and visually appealing websites that offer an outstanding user experience.
            </p>
            <p className="text-[#AAAAAA] mt-4">
              My goal is to bring your ideas to life and deliver solutions that meet your needs with clean, efficient code. Let’s connect!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill Cards */}
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-html5 text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">HTML</p>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-css3-alt text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">CSS</p>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-react text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">ReactJS</p>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-js-square text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">JavaScript</p>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-bootstrap text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">Tailwind</p>
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(227,179,65,0.7)] transition duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-android text-[#E3B341] text-xl"></i>
                <p className="text-[#E3B341] font-bold">Android Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Animations */}
      <style>
        {`
          /* Slide from the center for the profile image */
          @keyframes slideFromCenter {
            0% { transform: translateX(0); opacity: 0; }
            100% { transform: translateX(-50px); opacity: 1; }
          }

          /* Fade in from left for the text */
          @keyframes fadeInFromLeft {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          /* Animation classes */
          .animate-slideFromCenter {
            animation: slideFromCenter 1s ease-out forwards;
          }

          .animate-fadeInFromLeft {
            animation: fadeInFromLeft 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default About;
