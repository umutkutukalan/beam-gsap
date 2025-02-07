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
  }, []);

  return (
    <div className="page h-full w-full">
      {/* Kutu */}
      <div className="box fixed left-1/2 transform -translate-x-1/2 bg-[#201bcb] rounded-lg w-full overflow-hidden">
        <div className="content z-200 relative ">
          <Container1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
