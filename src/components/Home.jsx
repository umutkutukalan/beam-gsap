import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container1 from "./Features/Container1";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        width: "100px",
        height: "100px",
        top: "20%",
        borderRadius: "30px",
        backgroundColor: "#201bcb",
        zIndex: 150,
        clipPath: "inset(0 0 0 0)",
      },
      {
        width: "100%",
        height: "100vh",
        top: "0",
        borderRadius: "20px",
        backgroundColor: "black",
        zIndex: 100,
        ease: "power1.inOut",
        clipPath: "inset(0 0 0 0)",
        scrollTrigger: {
          trigger: ".box",
          start: "top 20%",
          end: "top 0",
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress === 1) {
              gsap.set(".box", { overflowY: "auto" });
            } else {
              gsap.set(".box", { overflowY: "hidden" });
            }
          },
          onLeaveBack: () => {
            const boxElement = boxRef.current;
            if (boxElement.scrollTop === 0) {
              gsap.set(".box", { overflowY: "hidden" });
            } else {
              self.scroll(self.start);
            }
          },
        },
      }
    );

    gsap.fromTo(
      ".content",
      { opacity: 0, y: 700, scale: 0.5, zIndex: 10 },
      {
        scale: 1,
        zIndex: 200,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".box",
          start: "top 20%",
          end: "top 0%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".bottom-div",
      { opacity: 1, y: 0, zIndex: 190, scale: 1 },
      {
        opacity: 0,
        duration: 3,
        scale: 0.5,
        ease: "power1.inOut",
        zIndex: 0,
        scrollTrigger: {
          trigger: ".box",
          start: "top 20%",
          end: "top 10%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="page h-full w-full">
      {/* Kutu */}
      <div className="box" ref={boxRef}>
        {/* Icerik */}
        <div className="content z-200 relative ">
          <Container1 />
          <Container1 />
          <Container1 />
        </div>
      </div>
      {/* bottom div */}
      <div className="bottom-div fixed inset-0 flex items-center justify-center flex-col gap-10">
        <h1 className="text-7xl text-white mb-4 mt-10">Meet the bright web</h1>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-[#201bcb] text-white px-6 py-2 rounded-lg text-4xl px-10 py-5">
            Download beam
          </button>
          <span className="text-sm text-gray-500">for macOS 11.3+</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
