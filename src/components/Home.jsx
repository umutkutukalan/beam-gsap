import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container1 from "./Features/Container1";
import { useEffect, useRef } from "react";
import Container2 from "./Features/Container2";
import Container3 from "./Features/Container3";
import { logo } from "../utils";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const boxRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        width: "100px",
        height: "100px",
        top: "20%",
        border: "1px solid white",
        borderRadius: "30px",
        zIndex: 150,
        clipPath: "inset(0 0 0 0)",
      },
      {
        width: "100%",
        height: "100vh",
        top: "0",
        borderRadius: "0px",
        border: "none",
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
    gsap.fromTo(
      ".absolute-logo",
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
        <div className="absolute inset-0 flex items-center justify-center z-100 absolute-logo">
          <img src={logo} alt="" width={50} />
        </div>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source
            src="/public/videos/Poppin_Background_Video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Icerik */}
      </div>
      {/* bottom div */}
      <div className="bottom-div fixed inset-0 flex items-center justify-center flex-col gap-10">
        <h1 className="text-7xl text-white mb-4 mt-10">Meet the bright web</h1>
        <div className="flex flex-col items-center gap-4">
          <button className="poppin-color text-black px-6 py-2 rounded-lg text-3xl px-10 py-5">
            <a href="https://chromewebstore.google.com/detail/poppin-the-social-layer-o/chhcknncbbmnmhkaacbkfdmkahaemdkk">
              Download Poppin
            </a>
          </button>
          <span className="text-sm text-gray-500">for macOS 11.3+</span>
        </div>
      </div>
      <div className="content z-200 relative ">
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
};

export default Home;
