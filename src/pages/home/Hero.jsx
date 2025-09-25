import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { words } from "../../constants";
import HeroExperience from "../../components/models/hero_models/HeroExperience";
import AnimatedCounter from "../../components/AnimatedCounter";
import { achievementsSection } from "../../constants";
import InfiniteScroll from "../../components/InfiniteScroll";
import TextType from "../../components/TextType";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
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

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Micheal, a developer based in Wellington with a passion for
              code.
            </p>

            <Button text="See My Work" to="/project" className="md:w-80 md:h-16 w-60 h-12" />

          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />

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

    </section>
    
    
  );
};

export default Hero;
