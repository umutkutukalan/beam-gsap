import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
      }, 
      {
        width: "100%",
        height: "100vh",
        top: "0",
        borderRadius: "20px",
        backgroundColor: "black",
        zIndex: 100,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".box",
          start: "top 20%",
          end: "top 0%",
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
  }, []);

  return (
    <div className="page h-[115vh] w-full">
      {/* Kutu */}
      <div className="box fixed top-20 left-1/2 transform -translate-x-1/2 bg-[#201bcb] rounded-lg overflow-hidden w-full"></div>
    </div>
  );
};

export default Home;
