import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button";
import { words } from "../../constants";
import { achievementsSection } from "../../constants";
import InfiniteScroll from "../../components/InfiniteScroll";
import TextType from "../../components/TextType";
import CodeTypingAnimation from "../../components/CodeTypingAnimation";

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });


  // Core programming philosophies
  const corePhilosophies = [
    {
      title: "ELEGANT SIMPLICITY",
      description: "Complexity is the enemy of maintenance. I architect systems where each component serves a clear, singular purpose, eliminating technical debt before it accumulates.",
      icon: "/images/icons/circuit.svg",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "PRAGMATIC INNOVATION",
      description: "Technology should serve real human needs. I balance cutting-edge solutions with practical implementation, ensuring each advancement delivers tangible value.",
      icon: "/images/icons/neural.svg",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "PERPETUAL ITERATION",
      description: "Systems evolve, and so should their architecture. I build with adaptability in mind, creating foundations that can grow and transform as requirements change.",
      icon: "/images/icons/network.svg",
      color: "from-green-400 to-emerald-500"
    }
  ];

  // Development rituals
  const developmentRituals = [
    { 
      phase: "SYSTEM INITIALIZATION", 
      activities: ["Neural network priming", "Memory cache optimization", "Focus protocol activation"],
      time: "06:00 UTC"
    },
    { 
      phase: "DEEP CODING CYCLE", 
      activities: ["Algorithm optimization", "Architecture refinement", "Quantum debugging sessions"],
      time: "09:00 UTC"
    },
    { 
      phase: "COGNITIVE EXPANSION", 
      activities: ["New framework assimilation", "Pattern recognition training", "Technical debt analysis"],
      time: "14:00 UTC"
    },
    { 
      phase: "CREATIVE SYNTHESIS", 
      activities: ["Experimental prototyping", "System visualization", "Future architecture planning"],
      time: "18:00 UTC"
    },
  ];

  // Tech DNA (innate tendencies)
  const techDNA = [
    { trait: "MODULAR THINKING", intensity: 92 },
    { trait: "PATTERN RECOGNITION", intensity: 88 },
    { trait: "ABSTRACTION CAPACITY", intensity: 95 },
    { trait: "SYSTEM VISUALIZATION", intensity: 85 },
    { trait: "LOGICAL DEDUCTION", intensity: 90 },
    { trait: "CREATIVE SYNTHESIS", intensity: 87 },
  ];

  return (
<section id="hero" className="relative overflow-hidden pt-16 md:pt-48">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

  {/* Add padding-top to push content below navbar */}
  
<div className="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="" />
  </div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
  {/* LEFT: Hero Content */}
  <header className="flex flex-col justify-center">
    <div className="flex flex-col gap-6">
      <div className="hero-text">
        <h1>
          Shaping
          <span className="slide">
            <span className="wrapper">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="flex items-center md:gap-3 gap-1 pb-2"
                >
                  <img
                    src={word.imgPath}
                    alt="person"
                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                  />
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <TextType 
          text={["into real projects!", "that deliver results!", "create new future!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      <p className="text-white-50 md:text-lg relative z-10 pointer-events-none">
        Hi, I'm Micheal, a developer based in Wellington with a passion for
        code.
      </p>

      <Button text="See My Work" to="/project" className="md:w-72 md:h-14 w-60 h-12" />
    </div>
  </header>

  {/* RIGHT: Code Editor Workspace */}
  <figure className="w-full">
    <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-lg">
      {/* Editor Header */}
      <div className="bg-gray-900 px-3 py-2.5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">skills.js</div>
        </div>
      </div>

      {/* Editor Content with Typing Animation */}
      <div className="p-3 md:p-4 min-h-[240px]">
        <CodeTypingAnimation />
      </div>

      {/* Editor Footer */}
      <div className="bg-gray-900 px-3 py-1.5 border-t border-gray-800 text-[10px] text-gray-500 flex justify-between">
        <div className="flex items-center gap-3">
          <div>UTF-8</div>
          <div>JavaScript</div>
        </div>
        <div>Ln 18, Col 1</div>
      </div>
    </div>
  </figure>
</div>
      {/* COGNITIVE ARCHITECTURE SECTION */}
      <section className="py-20 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-4">
              COGNITIVE PROFILE v2.4
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Neural Processing Patterns
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How I think, solve, and create—mapped to computational paradigms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techDNA.map((trait, index) => (
              <div 
                key={index}
                className="group relative p-6 border border-gray-800 rounded-xl 
                          hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mono text-sm text-gray-400">{trait.trait}</h3>
                  <span className="text-cyan-400 font-bold">{trait.intensity}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${trait.intensity}%` }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PHILOSOPHY - Futuristic */}
      <section className="py-20 px-5 md:px-20 bg-gradient-to-b from-black to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 text-purple-400 text-sm mb-4">
              CORE PROGRAMMING MANIFESTO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Architectural Principles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {corePhilosophies.map((philosophy, index) => (
              <div 
                key={index}
                className="group relative p-8 border border-gray-800 rounded-xl 
                          hover:border-cyan-500/30 transition-all duration-500"
              >
                {/* Holographic background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${philosophy.color} opacity-5 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-sm"></div>
                    </div>
                    <h3 className="text-xl font-bold tracking-wider">{philosophy.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {philosophy.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">PRINCIPLE {index + 1}</span>
                      <span className="text-cyan-400 font-mono">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* DEVELOPMENT CYCLE */}
      <section className="py-20 px-5 md:px-20 bg-gradient-to-t from-black to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-4">
              OPTIMAL DEVELOPMENT CYCLE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Daily Computational Rituals
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {developmentRituals.map((ritual, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Timeline node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-cyan-500 rounded-full z-10"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-cyan-500/30 rounded-full animate-ping"></div>
                  
                  <div className="pt-12 text-center">
                    <div className="inline-block px-4 py-2 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg mb-4">
                      <div className="text-cyan-400 font-mono text-sm">{ritual.time}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{ritual.phase}</h3>
                    
                    <div className="space-y-2">
                      {ritual.activities.map((activity, i) => (
                        <div 
                          key={i}
                          className="text-sm text-gray-400 p-2 border border-gray-800 rounded hover:border-cyan-500/30 transition-colors"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-800 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm">
              <div className="bg-gray-900/80 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400 font-mono">micheal@portfolio:~</div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400">$ cat profile.txt</div>
                <div className="text-gray-300 mt-2 ml-4">
                  <div>NAME: Micheal Tran</div>
                  <div>ROLE: Full-Stack Developer</div>
                  <div>LOCATION: Wellington, NZ</div>
                  <div>STATUS: Building</div>
                </div>
                
                <div className="text-green-400 mt-6">$ npm run dev</div>
                <div className="text-gray-300 mt-2">
                  <div className="animate-pulse">Starting development server...</div>
                  <div className="ml-4">✓ Environment loaded</div>
                  <div className="ml-4">✓ Dependencies resolved</div>
                  <div className="ml-4">✓ Server running on port 3000</div>
                </div>
                
                <div className="mt-6">
                  <div className="text-cyan-400">Ready for next command:</div>
                  <div className="flex items-center mt-2">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 text-gray-300 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    <section className="py-32 text-center">      
        <h2 className=" bg-black text-center text-3xl md:text-4xl font-bold mb-4 text-white">
            The Path That Shaped Me as a Developer
        </h2>
        <div className="py-16" style={{height: '500px', position: 'relative'}}>
          <InfiniteScroll
            items={achievementsSection}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
    </section>

      {/* PERSONAL MANIFESTO */}
      <section className="py-20 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 border border-cyan-500/30 rounded-xl mb-8">
            <div className="text-cyan-400 font-mono">PERSONAL MANIFESTO v3.0</div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            I believe in building systems that 
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 ml-2">
              think for themselves
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            My approach combines architectural rigor with creative intuition. 
            Every line of code is a statement of intent, every system a reflection 
            of deliberate design. In a world of rapid technological evolution, 
            I build foundations that adapt, learn, and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              text="Access Neural Network" 
              to="/about" 
              className="px-12 py-4 text-lg"
            />
            <Button 
              text="Download Technical Profile" 
              variant="outline"
              onClick={() => window.open('/profile.pdf', '_blank')}
              className="px-12 py-4 text-lg"
            />
          </div>
        </div>
      </section>

    </section>
  );
};

export default Hero;
