import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container1 from "./Features/Container1";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
        clipPath: "inset(0 0 0 0)", // Başlangıçta tamamen görünür
      },
      {
        width: "100%",
        height: "100vh",
        top: "0",
        borderRadius: "20px",
        backgroundColor: "black",
        zIndex: 100,
        ease: "power1.inOut",
        clipPath: "inset(0 0 0 0)", // Başlangıçta tamamen görünür
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
        },
      }
    );

    gsap.fromTo(
      ".content",
      { opacity: 0, y: 700, scale: 0.5, zIndex: 10 }, // Başlangıçta görünmez ve aşağıda
      {
        scale: 1,
        zIndex: 200, // Z-index değerini artır
        opacity: 1, // Görünür hale gel
        y: 0, // Yukarıya gel
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
      { opacity: 1, y: 0, zIndex: 190, scale: 1 }, // Başlangıçta görünür
      {
        opacity: 0, // Kaybol
        duration: 3, // 3 saniyede kaybol
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

  return (
    <div className="page h-full w-full">
      {/* Kutu */}
      <div className="box fixed left-1/2 transform -translate-x-1/2 bg-[#201bcb] rounded-lg w-full overflow-hidden">
        <div className="content z-200 relative ">
          <Container1 />
        </div>
      </div>
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
