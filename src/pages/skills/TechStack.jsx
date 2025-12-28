import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from '../../components/TitleHeader';
import FeatureCards from './FeatureCards';
import TechLogo from './TechLogo';

// Constants defined within the component file
const skillCategories = [
  {
    id: 1,
    category: 'frontend',
    title: 'Frontend Development',
    description: 'Modern UI/UX development with focus on performance and accessibility',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand'],
    icon: '🎨'
  },
  {
    id: 2,
    category: 'backend',
    title: 'Backend Systems',
    description: 'Scalable server-side solutions and API development',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication', 'PostgreSQL', 'MongoDB'],
    icon: '⚙️'
  },
  {
    id: 3,
    category: 'devops',
    title: 'DevOps & Deployment',
    description: 'Infrastructure, CI/CD, and cloud platform management',
    skills: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Monitoring', 'Nginx', 'Linux'],
    icon: '🚀'
  },
  {
    id: 4,
    category: 'tools',
    title: 'Development Tools',
    description: 'Productivity tools and development workflow optimization',
    skills: ['Git', 'VS Code', 'ESLint', 'Prettier', 'Jest', 'Cypress', 'Webpack'],
    icon: '🛠️'
  },
  {
    id: 5,
    category: 'soft',
    title: 'Collaboration & Leadership',
    description: 'Team collaboration, communication, and project leadership',
    skills: ['Team Leadership', 'Agile Methodology', 'Code Review', 'Mentoring', 'Technical Writing'],
    icon: '🤝'
  },
  {
    id: 6,
    category: 'emerging',
    title: 'Emerging Technologies',
    description: 'Continuous learning in cutting-edge technologies',
    skills: ['AI Integration', 'Edge Computing', 'WebAssembly', 'Micro Frontends', 'PWA'],
    icon: '🔮'
  }
];

// Component for Skill Category Card
const SkillCategoryCard = ({ title, description, skills, icon, category }) => {
  return (
    <div 
      className="skill-category group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
      data-category={category}
    >
      <div className="flex items-start mb-4">
        <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card, .skill-category, .timeline-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".skill-bar-fill",
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skill-progress-section",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".timeline-dot",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top center",
        },
      }
    );
  });

  const filteredCategories = skillCategories.filter(
    cat => activeCategory === 'all' || cat.category === activeCategory
  );

  return (
    <div id="skills" className="min-h-screen bg-black overflow-hidden">
      {/* Skills Overview */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-screen-2xl">
          <TitleHeader
            title="Technical Mastery"
            sub="Proficient in Modern Development Ecosystem"
            align="center"
          />
          
          <div className="mb-16 text-center">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With expertise spanning the entire development stack, I specialize in building 
              performant, scalable applications that deliver exceptional user experiences 
              while maintaining robust backend systems.
            </p>
          </div>

          <TechLogo />
        </div>
      </section>

      {/* Dual Terminal Section - WIDE */}
      <section className="w-full px-2 md:px-4 py-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Terminal - Git Commands */}
            <div className="border border-gray-800 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm h-full">
              <div className="bg-gradient-to-r from-gray-900 to-black px-6 py-4 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-300 font-mono flex-1">dev@git:~</div>
                <div className="text-xs text-gray-500">Version Control</div>
              </div>
              
              <div className="p-8 font-mono text-sm h-[calc(100%-3.5rem)]">
                <div className="text-green-400">$ cat developer_profile.txt</div>
                <div className="text-gray-300 mt-3 ml-4">
                  <div className="flex"><span className="text-cyan-400 w-28">NAME:</span> Michael Tran</div>
                  <div className="flex"><span className="text-cyan-400 w-28">EXPERTISE:</span> Full-Stack Development</div>
                  <div className="flex"><span className="text-cyan-400 w-28">STACK:</span> MERN + Next.js</div>
                  <div className="flex"><span className="text-cyan-400 w-28">STATUS:</span> Available for hire</div>
                </div>
                
                <div className="text-green-400 mt-8">$ git status</div>
                <div className="text-gray-300 mt-3 ml-4">
                  <div>On branch: <span className="text-blue-400">main</span></div>
                  <div>Your branch is up to date with 'origin/main'</div>
                  <div className="mt-3">
                    <div>Changes not staged for commit:</div>
                    <div className="ml-6 text-yellow-400">➜ modified: src/components/Skills.jsx</div>
                    <div className="ml-6 text-green-400">➜ new file: src/projects/AI_Dashboard.jsx</div>
                  </div>
                </div>
                
                <div className="text-green-400 mt-8">$ git commit -m "Enhanced skills section with interactive components"</div>
                <div className="text-gray-300 mt-3 ml-4">
                  <div>[main 1a2b3c4] Enhanced skills section with interactive components</div>
                  <div> 2 files changed, 128 insertions(+), 12 deletions(-)</div>
                </div>
                
                <div className="mt-8">
                  <div className="text-cyan-400">$ git push origin main</div>
                  <div className="text-gray-300 mt-3 ml-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-lg">Pushing to remote repository...</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="text-blue-400">$ git log --oneline -3</div>
                  <div className="text-gray-400 mt-3 ml-6 text-sm">
                    <div>1a2b3c4 Enhanced skills section</div>
                    <div>5d6e7f8 Fixed responsive design issues</div>
                    <div>9a0b1c2 Added new project showcase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Terminal - DevOps Commands */}
            <div className="border border-gray-800 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm h-full">
              <div className="bg-gradient-to-r from-gray-900 to-black px-6 py-4 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-300 font-mono flex-1">root@devops:~</div>
                <div className="text-xs text-gray-500">Deployment & Infrastructure</div>
              </div>
              
              <div className="p-8 font-mono text-sm h-[calc(100%-3.5rem)]">
                <div className="text-green-400">$ docker --version</div>
                <div className="text-gray-300 mt-3 ml-4 text-lg">Docker version 24.0.0, build 1234567</div>
                
                <div className="text-green-400 mt-8">$ docker-compose up -d</div>
                <div className="text-gray-300 mt-3 ml-4 space-y-2">
                  <div>Creating network "portfolio_default"</div>
                  <div>Creating portfolio_frontend_1 ... <span className="text-green-500 font-bold">done</span></div>
                  <div>Creating portfolio_backend_1  ... <span className="text-green-500 font-bold">done</span></div>
                  <div>Creating portfolio_database_1 ... <span className="text-green-500 font-bold">done</span></div>
                </div>
                
                <div className="text-green-400 mt-8">$ kubectl get pods</div>
                <div className="text-gray-300 mt-3 ml-4 space-y-2">
                  <div className="flex">
                    <span className="w-40 font-bold">NAME</span>
                    <span className="w-16 font-bold">READY</span>
                    <span className="w-24 font-bold">STATUS</span>
                  </div>
                  <div className="flex">
                    <span className="w-40 text-cyan-300">frontend-deployment-abc123</span>
                    <span className="w-16 text-green-400">1/1</span>
                    <span className="w-24 text-green-400">Running</span>
                  </div>
                  <div className="flex">
                    <span className="w-40 text-cyan-300">backend-deployment-xyz789</span>
                    <span className="w-16 text-green-400">1/1</span>
                    <span className="w-24 text-green-400">Running</span>
                  </div>
                  <div className="flex">
                    <span className="w-40 text-cyan-300">redis-cache-456def</span>
                    <span className="w-16 text-green-400">1/1</span>
                    <span className="w-24 text-green-400">Running</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="text-green-400">$ curl -I https://michael-portfolio.com</div>
                  <div className="text-gray-300 mt-3 ml-4 space-y-2">
                    <div className="flex">
                      <span className="w-28 text-blue-400">HTTP/2</span>
                      <span className="text-green-500 font-bold">200</span>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-gray-500">server:</span>
                      <span>nginx</span>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-gray-500">cache-control:</span>
                      <span>public, max-age=3600</span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl text-green-500">✓</span>
                      <span className="text-lg">Site is live and responding (28ms)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="text-blue-400">$ uptime</div>
                  <div className="text-gray-400 mt-3 ml-4">
                    <div>22:45:30 up 45 days, 12:34,  1 user,  load average: 0.08, 0.03, 0.01</div>
                    <div className="text-sm mt-2">System uptime: 99.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Code Editor Workspace - FULL WIDTH */}
<section className="w-full px-4 md:px-8 lg:px-0 py-12 md:py-16 lg:py-20">
  <div className="mx-auto max-w-screen-2xl">
    <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 mx-0 lg:mx-4">
      {/* Editor Header */}
      <div className="bg-gray-900 px-4 md:px-6 py-3 md:py-4 border-b border-gray-800">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-700"></div>
            <div className="text-sm md:text-base lg:text-lg text-gray-400 font-mono">EXPLORER</div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
            <div className="text-sm md:text-base lg:text-lg text-gray-400 font-mono">SKILLS.md</div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-700"></div>
            <div className="text-sm md:text-base lg:text-lg text-gray-400 font-mono">PROJECTS</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - File Explorer */}
        <div className="w-full lg:w-64 xl:w-72 bg-gray-900/80 border-b lg:border-b-0 lg:border-r border-gray-800 p-4 md:p-6">
          <div className="text-gray-400 text-sm md:text-base font-mono mb-4 md:mb-6">PORTFOLIO</div>
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg">
              <div className="text-xl md:text-2xl text-yellow-400">📁</div>
              <div className="text-sm md:text-base">src/</div>
            </div>
            <div className="ml-4 md:ml-6 space-y-1 md:space-y-2">
              <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg">
                <div className="text-xl md:text-2xl text-blue-400">📄</div>
                <div className="text-sm md:text-base">Skills.jsx</div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg">
                <div className="text-xl md:text-2xl text-green-400">📄</div>
                <div className="text-sm md:text-base">Projects.jsx</div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg">
                <div className="text-xl md:text-2xl text-purple-400">📄</div>
                <div className="text-sm md:text-base">Experience.jsx</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg mt-4 md:mt-6">
              <div className="text-xl md:text-2xl text-yellow-400">📁</div>
              <div className="text-sm md:text-base">public/</div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 text-gray-300 hover:bg-gray-800/50 p-2 md:p-3 rounded-lg mt-4 md:mt-6">
              <div className="text-xl md:text-2xl text-blue-400">📄</div>
              <div className="text-sm md:text-base">package.json</div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="font-mono text-sm md:text-base">
            <div className="text-gray-500 mb-4 md:mb-6 text-sm md:text-lg">// My Tech Stack Configuration</div>
            
            <div className="space-y-6 md:space-y-8">
              <div className="overflow-x-auto">
                <div className="min-w-fit">
                  <div className="text-purple-400 text-sm md:text-lg">const</div>
                  <div className="text-yellow-400 ml-4 md:ml-6 text-base md:text-xl">techStack</div>
                  <div className="text-gray-300 ml-4 md:ml-6 text-sm md:text-lg">= {"{"}</div>
                  <div className="ml-6 md:ml-8 lg:ml-12 text-cyan-400 text-sm md:text-lg">frontend</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">: [</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"React"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Next.js"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"TypeScript"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Tailwind CSS"</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">],</div>
                  
                  <div className="ml-6 md:ml-8 lg:ml-12 text-cyan-400 text-sm md:text-lg mt-3 md:mt-4">backend</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">: [</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Node.js"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Express"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"MongoDB"</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">],</div>
                  
                  <div className="ml-6 md:ml-8 lg:ml-12 text-cyan-400 text-sm md:text-lg mt-3 md:mt-4">tools</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">: [</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Git"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"Docker"</div>
                  <div className="text-gray-300 ml-8 md:ml-12 lg:ml-16 text-sm md:text-lg">,</div>
                  <div className="ml-8 md:ml-12 lg:ml-16 text-green-400 text-sm md:text-lg">"VS Code"</div>
                  <div className="text-gray-300 ml-6 md:ml-8 lg:ml-12 text-sm md:text-lg">]</div>
                  
                  <div className="text-gray-300 ml-4 md:ml-6 text-sm md:text-lg">{"}"};</div>
                </div>
              </div>

              <div className="border-l-2 md:border-l-4 border-blue-500 pl-4 md:pl-6 bg-blue-500/10 py-3 md:py-4 rounded-r-lg">
                <div className="text-gray-400 text-sm md:text-lg">// Currently working on:</div>
                <div className="text-gray-300 text-sm md:text-lg mt-1 md:mt-2">"Real-time collaboration features"</div>
                <div className="text-gray-300 text-sm md:text-lg">"Advanced animations with Framer Motion"</div>
                <div className="text-gray-300 text-sm md:text-lg">"Microservices architecture"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Footer */}
      <div className="bg-gray-900 px-3 md:px-4 lg:px-6 py-2 md:py-3 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-gray-500 gap-2 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
          <div>main</div>
          <div>🌐</div>
          <div>UTF-8</div>
          <div className="hidden sm:block">JavaScript React</div>
        </div>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
          <div>Ln 24, Col 12</div>
          <div className="hidden xs:block">Spaces: 2</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skill Categories with Filter - FULL WIDTH */}
      <section className="w-full px-4 py-20 bg-black/30">
        <div className="mx-auto max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Specialized Skill Categories</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Explore my expertise across different domains. Each category represents a focused area of competence developed through practical experience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['all', 'frontend', 'backend', 'devops', 'tools', 'soft', 'emerging'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-110 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <SkillCategoryCard key={category.id} {...category} />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No skills match the selected filter. Try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Dual Stats Section - WIDE */}
      <section className="w-full px-2 md:px-4 py-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* GitHub Activity Graph */}
            <div>
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white mb-4">Coding Activity</h3>
                <p className="text-xl text-gray-400">My development journey visualized</p>
              </div>

              <div className="bg-gray-900/30 rounded-2xl p-10 border border-gray-800 h-full">
                {/* Contribution Graph */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-xl text-gray-300 font-mono">Last 6 months of coding</div>
                    <div className="text-base text-gray-500">More commits → More intense</div>
                  </div>
                  
                  <div className="grid grid-cols-15 gap-3">
                    {Array.from({ length: 180 }).map((_, i) => {
                      const intensity = Math.floor(Math.random() * 4);
                      const colors = [
                        'bg-gray-800', // No activity
                        'bg-green-900/50', // Low
                        'bg-green-700/70', // Medium
                        'bg-green-500', // High
                      ];
                      return (
                        <div 
                          key={i}
                          className={`aspect-square rounded-lg ${colors[intensity]} hover:scale-125 transition-transform cursor-help`}
                          title={`${intensity} commits on day ${i}`}
                        />
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-between mt-4 text-base text-gray-500">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                  </div>
                </div>

                {/* Language Stats */}
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-3">45%</div>
                    <div className="text-gray-400 text-lg">TypeScript</div>
                    <div className="w-full bg-gray-800 h-3 rounded-full mt-3 overflow-hidden">
                      <div className="bg-blue-500 h-full w-[45%]"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-3">30%</div>
                    <div className="text-gray-400 text-lg">JavaScript</div>
                    <div className="w-full bg-gray-800 h-3 rounded-full mt-3 overflow-hidden">
                      <div className="bg-yellow-500 h-full w-[30%]"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-3">15%</div>
                    <div className="text-gray-400 text-lg">Python</div>
                    <div className="w-full bg-gray-800 h-3 rounded-full mt-3 overflow-hidden">
                      <div className="bg-green-500 h-full w-[15%]"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-3">10%</div>
                    <div className="text-gray-400 text-lg">Other</div>
                    <div className="w-full bg-gray-800 h-3 rounded-full mt-3 overflow-hidden">
                      <div className="bg-purple-500 h-full w-[10%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package.json Inspired Section */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 border border-gray-800 h-full">
                <div className="flex items-center gap-6 mb-10">
                  <div className="text-5xl">📦</div>
                  <div>
                    <h3 className="text-4xl font-bold text-white">Development Dependencies</h3>
                    <p className="text-xl text-gray-400">The tools and libraries I work with daily</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Dependencies Card */}
                  <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                    <div className="text-blue-400 font-mono text-xl mb-6">"dependencies"</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">react</span>
                        </div>
                        <div className="text-green-400 font-mono">^18.2.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300">next</span>
                        </div>
                        <div className="text-green-400 font-mono">^14.0.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-300">typescript</span>
                        </div>
                        <div className="text-green-400 font-mono">^5.3.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-300">tailwindcss</span>
                        </div>
                        <div className="text-green-400 font-mono">^3.3.0</div>
                      </div>
                    </div>
                  </div>

                  {/* DevDependencies Card */}
                  <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                    <div className="text-purple-400 font-mono text-xl mb-6">"devDependencies"</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-300">eslint</span>
                        </div>
                        <div className="text-green-400 font-mono">^8.0.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-300">prettier</span>
                        </div>
                        <div className="text-green-400 font-mono">^3.0.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-gray-300">jest</span>
                        </div>
                        <div className="text-green-400 font-mono">^29.0.0</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 hover:bg-gray-800/30 rounded-xl text-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-300">@testing-library/react</span>
                        </div>
                        <div className="text-green-400 font-mono">^14.0.0</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scripts Section */}
                <div className="mt-10 bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                  <div className="text-green-400 font-mono text-xl mb-6">"scripts"</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer text-center">
                      <div className="text-gray-400 text-base mb-2">dev</div>
                      <div className="text-white font-mono text-lg">npm run dev</div>
                    </div>
                    
                    <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer text-center">
                      <div className="text-gray-400 text-base mb-2">build</div>
                      <div className="text-white font-mono text-lg">npm run build</div>
                    </div>
                    
                    <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer text-center">
                      <div className="text-gray-400 text-base mb-2">test</div>
                      <div className="text-white font-mono text-lg">npm test</div>
                    </div>
                    
                    <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer text-center">
                      <div className="text-gray-400 text-base mb-2">deploy</div>
                      <div className="text-white font-mono text-lg">npm run deploy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - FULL WIDTH */}
      <section className="w-full px-4 py-20 text-center">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-5xl font-bold text-white mb-8">
            Connect With Me
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's combine this technical expertise with your vision to build exceptional digital products.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="/project" 
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 inline-block text-xl"
            >
              Explore My Portfolio
            </a>
            <a 
              href="/contact" 
              className="px-12 py-6 bg-transparent border-3 border-blue-500 text-blue-400 font-bold rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 inline-block text-xl"
            >
              Schedule a Consultation
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-800">
            <p className="text-xl text-gray-500">
              Continuously expanding skillset • Currently exploring: Web3 & AI Integration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
