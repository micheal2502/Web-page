import { socialImgs } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 8px 1px rgba(34, 211, 238, 0.5)'
            }}
          ></div>
        ))}
      </div>

      <div className="footer-container relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
          
          {/* Left section - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              MICHEAL TRAN
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Crafting the future through innovative design and cutting-edge technology
            </p>
          </div>

          {/* Center section - Social icons */}
          <div className="flex justify-center">
            <div className="socials flex gap-6">
              {socialImgs.map((socialImg, index) => (
                <div
                  key={index}
                  className="icon group relative"
                >
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
                  
                  {/* Icon container */}
                  <a
                    href={socialImg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-black/50 backdrop-blur-sm rounded-full p-4 border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110"
                  >
                    <img
                      src={socialImg.imgPath}
                      alt="social icon"
                      className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </a>
                  
                  {/* Hover line effect */}
                  <div className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-4 group-hover:-left-2 transition-all duration-300"></div>
                  <div className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-4 group-hover:-right-2 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right section - Copyright and links */}
          <div className="text-right space-y-4">
            <div className="flex flex-col md:items-end">
              <p className="text-sm text-gray-400 mb-2">
                © {currentYear} All systems operational
              </p>
              <p className="text-xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
                {currentYear}
              </p>
            </div>
            
            {/* Additional futuristic elements */}
            <div className="flex justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 group">
                <span className="relative">
                  Privacy Protocol
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 group">
                <span className="relative">
                  Terms Interface
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tech stats */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
            <div className="text-center">
              <span className="text-cyan-400 font-mono">v2.4.1</span>
              <span className="block">SYSTEM VERSION</span>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-mono">100%</span>
              <span className="block">UPTIME</span>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-mono">∞</span>
              <span className="block">POSSIBILITIES</span>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-mono">24/7</span>
              <span className="block">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Scan line animation */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scanline"></div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            top: 0%;
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0.5;
          }
        }
        .animate-scanline {
          position: absolute;
          animation: scanline 3s linear infinite;
          box-shadow: 0 0 10px 2px rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
