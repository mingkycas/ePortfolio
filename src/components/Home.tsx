import profile from "../assets/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0D1117] to-black text-white">
      {/* Text Section */}
      <div className="text-left mr-12 animate-fadeUpFromBottom">
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
      <div className="relative animate-slideFromRight">
        <div className="w-64 h-64 rounded-full border-4 border-[#E3B341] shadow-[0_0_20px_5px_rgba(227,179,65,0.7)]">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* CSS Keyframes for wave animation */}
      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default Home;
