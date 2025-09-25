import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { fullstack } from "../../constants";
import ChromaGrid from "../../components/ChromaGrid";

gsap.registerPlugin(ScrollTrigger);

const FullStackShowCase = () => {

  const frontend = [
    {
      image: "/images/brainwave.png",
      title: "Brainwave",
      subtitle: "Landing Page",
      handle: "@michael",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url : 'https://brainwave-nu-khaki.vercel.app/'
    },
    {
      image: "/images/metaverse.png",
      title: "Metaverse",
      subtitle: "Landing Page",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url : 'https://metaverse-4365cw86p-duong2s-projects.vercel.app/'
    },
    {
      image: "/images/nike.png",
      title: "Nike",
      subtitle: "Landing Page",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url : 'https://nike-delta-six.vercel.app/'
    },
    
  ];

  const fullstacks = [
    {
      image: "/images/CarePulse.png",
      title: "CarePulse",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url : 'https://carepulse-alpha.vercel.app/'
    },
    {
      image: "/images/PrepWise.png",
      title: "PrepWise",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url : 'https://prep-wise-eight-olive.vercel.app/sign-in'
    },
    {
      image: "/images/ClearATS.png",
      title: "ClearATS",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url : 'https://tech-haven-ashy.vercel.app/'
    },
  ];

    const online = [
    {
      image: "/images/logo.png",
      title: "Agua International",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: 'https://www.aguaedu.com/'
    },
    {
      image: "/images/Love.png",
      title: "LoveMatchUs",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: 'https://lovematchus.com/'
    },
    {
      image: "/images/iphone.png",
      title: "3D IPhone",
      subtitle: "Full-Stack",
      handle: "@michael",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url : 'https://3d-iphone-orcin.vercel.app/'
    },
    
  ];




  return (
    <div id="fullstack">
      <div className="hero-text w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center">
        <span className="slide">
          <span className="wrapper">
            {fullstack.map((word, index) => (
            <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
              <img src={word.imgPath} alt="person" className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
              <span>{word.text}</span>
            </span>))}
          </span>
        </span>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <ChromaGrid 
          items={online}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      < div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid 
            items={fullstacks}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
      </div>
      < div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid 
            items={frontend}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
      </div>
    </div>
  );
};

export default FullStackShowCase;
