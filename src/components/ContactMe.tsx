import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-16 flex items-center justify-center">
      {/* Main Section */}
      <main className="max-w-4xl w-full bg-[#1C1C1C] p-8 rounded-lg shadow-lg animate-slideInUp">
        {/* Left Section */}
        <section className="contact-content">
          <div className="contact-box mb-8 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-[#E3B341] mb-4">Let's Get in Touch!</h2>
            <p className="text-[#AAAAAA] mb-4">
              Have a question or just want to say hi? Fill out the form below, or email me at{" "}
              <a href="mailto:youremail@example.com" className="text-[#E3B341]">saguing.casey0121@gmail.com</a>.
            </p>
          </div>

          <div className="contact-box mb-8 animate-fadeInUp delay-200">
            <h2 className="text-2xl font-semibold text-[#E3B341] mb-4">Contact Form</h2>
            {/* Formspree Form Handling */}
            <form
              className="contact-form space-y-4"
              action="https://formspree.io/f/xwppladw" // Your Formspree URL here
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input w-full px-4 py-2 bg-[#2D2D2D] rounded-md text-white border-2 border-transparent focus:border-[#E3B341] focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input w-full px-4 py-2 bg-[#2D2D2D] rounded-md text-white border-2 border-transparent focus:border-[#E3B341] focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea w-full px-4 py-2 bg-[#2D2D2D] rounded-md text-white border-2 border-transparent focus:border-[#E3B341] focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="button bg-[#E3B341] text-black py-2 px-6 rounded-md mt-4 hover:bg-[#D4A03A] transition-colors duration-300 animate-scaleOnHover"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 animate-fadeInUp delay-400">
            <h2 className="text-2xl font-semibold text-[#E3B341] mb-4">Follow Me</h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com/mingkycas"
                className="text-[#E3B341] hover:text-[#D4A03A] transition-colors duration-300 animate-iconHover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://instagram.com/cee.__.ji"
                className="text-[#E3B341] hover:text-[#D4A03A] transition-colors duration-300 animate-iconHover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://facebook.com/casey.saguing.3"
                className="text-[#E3B341] hover:text-[#D4A03A] transition-colors duration-300 animate-iconHover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* CSS Keyframes for animations */}
      <style>{`
        /* Slide-in animation for main section */
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Fade-in animation for contact box */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Scale-up effect on hover for button */
        @keyframes scaleOnHover {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        /* Icon hover effect */
        @keyframes iconHover {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }

        /* Apply animations to sections */
        .animate-slideInUp {
          animation: slideInUp 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fadeInUp.delay-400 {
          animation-delay: 0.4s;
        }

        .animate-scaleOnHover:hover {
          animation: scaleOnHover 0.3s ease-out forwards;
        }

        .animate-iconHover:hover {
          animation: iconHover 0.3s ease-out forwards;
        }

        /* Responsiveness for smaller screens */
        @media (max-width: 768px) {
          .max-w-4xl {
            max-width: 100%;
          }
          .contact-content {
            padding: 4px;
          }
          .contact-box h2 {
            font-size: 1.5rem;
          }
          .contact-box p,
          .contact-form input,
          .contact-form textarea {
            font-size: 0.875rem;
          }
          .flex {
            flex-direction: column;
            align-items: center;
          }
          .space-x-6 {
            margin-top: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMe;
