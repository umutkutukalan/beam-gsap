import { useGSAP } from "@gsap/react";
import { slider_video } from "../../utils";
import gsap from "gsap";
import { useRef } from "react";

const Container1 = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".video-settings",
      { opacity: 0, y: 700, scale: 0.5, zIndex: 10 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 20%",
          // onEnter: () => {
          //   if (videoRef.current) {
          //     videoRef.current.play();
          //   }
          // },
          // onLeave: () => {
          //   if (videoRef.current) {
          //     videoRef.current.pause();
          //   }
          // },
        },
      }
    );
  }, []);
  return (
    <div className="first-section-page w-full h-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center gap-5">
          <div className="relative rounded-3xl overflow-hidden cursor-pointer">
            <video
              controls
              ref={videoRef}
              className="video-settings"
              autoPlay
              loop
            >
              <source src={slider_video} className="w-full h-full" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
