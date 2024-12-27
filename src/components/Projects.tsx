import buddleImage from '../assets/Buddle.png';
import p2pChatImage from '../assets/Bubble.png'; 
import pdaSimulatorImage from '../assets/PDA.png'; 

const projects = [
  {
    title: "Buddle",
    description: "A mobile application that helps you find and book a tutor instantly. Aimed at making education more accessible and convenient.",
    technologies: "TypeScript, React, Android Studio",
    image: buddleImage, 
    link: "https://github.com/jezberiana/scitcbuddle"
  },
  {
    title: "P2P Chat App",
    description: "A real-time chat website built on a peer-to-peer (P2P) model, allowing users to chat directly without relying on a central server.",
    technologies: "JavaScript, CSS, HTML",
    image: p2pChatImage, 
    link: "https://github.com/mingkycas/P2P-Chat-App" 
  },
  {
    title: "PDA Simulator",
    description: "This application simulates a Pushdown Automaton (PDA) and checks if the given string is accepted by the PDA. It also visualizes the PDA's state diagram.",
    technologies: "Python",
    image: pdaSimulatorImage, 
    link: "https://github.com/mingkycas/pda-automata" 
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto animate-slideInUp">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#E3B341]">Past Project Experience</h2>
        <p className="text-center text-[#AAAAAA] mb-12">Explore the projects I've worked on so far!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_3px_rgba(227,179,65,0.7)] animate-cardSlideIn"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#AAAAAA] text-sm mb-4">{project.description}</p>
              <p className="text-[#E3B341] font-medium text-sm">{project.technologies}</p>
            </a>
          ))}
        </div>
      </div>

      {/* CSS Keyframes for animations */}
      <style>{`
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardSlideIn {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }

        .animate-cardSlideIn {
          animation: cardSlideIn 0.6s ease-out forwards;
        }

        .animate-cardSlideIn:nth-child(even) {
          animation: cardSlideIn 0.6s ease-out forwards 0.3s;
        }

        .animate-cardSlideIn:nth-child(odd) {
          animation: cardSlideIn 0.6s ease-out forwards 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Projects;
