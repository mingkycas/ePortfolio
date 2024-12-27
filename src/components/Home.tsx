import profile from "../assets/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-[#0D1117] to-black text-white px-8 py-16">
      {/* Text Section */}
      <div className="text-left mr-12 animate-fadeUpFromBottom mb-8 md:mb-0">
        <p className="text-lg text-[#AAAAAA]">Hello World, I'm</p>
        <h1 className="text-3xl font-bold animate-fadeIn">{`Casey Jan D. Saguing`}</h1>
        <p className="text-xl font-semibold text-[#E3B341] mt-2 animate-typewriter">
          <Typewriter
            words={["Aspiring Front-End Developer ", "Web Designer", "Tech Enthusiast"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className="text-[#AAAAAA] mt-4">
          Welcome to my personal website.{" "}
          <span className="wave-emoji">👋</span> {/* Animated wave emoji */}
        </p>
      </div>

      {/* Profile Image Section */}
      <div className="relative mb-8 md:mb-0 animate-slideFromRight">
        <div className="w-64 h-64 rounded-full border-4 border-[#E3B341] shadow-[0_0_20px_5px_rgba(227,179,65,0.7)] overflow-hidden mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* CSS Keyframes for wave animation */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-15deg); }
          100% { transform: rotate(0deg); }
        }

        .wave-emoji {
          display: inline-block;
          animation: wave 1s ease-in-out infinite;
          transform-origin: 70% 70%;
        }

        /* Fade-in and Slide-in animations */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fadeUpFromBottom {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeUpFromBottom {
          animation: fadeUpFromBottom 1s ease-out;
        }

        .animate-slideFromRight {
          animation: slideFromRight 1s ease-out;
        }

        /* Typewriter effect */
        @keyframes typewriter {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .animate-typewriter {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: typewriter 3s steps(40) 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
