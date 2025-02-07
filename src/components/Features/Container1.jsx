import { video } from "../../utils";

const Container1 = () => {
  return (
    <div className="content h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center gap-5">
          <div className="relative rounded-3xl overflow-hidden cursor-pointer">
            <video
              controls
              className="w-200 border border-white overflow-hidden rounded-3xl"
            >
              <source src={video} className="w-full h-full" />
            </video>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-4xl">A browser new type of software</p>
            <p className="text-4xl">
              for searching healthy thinking on the internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
