import { ArrowUpRight } from "lucide-react";


const Main = () => {
  return (
    <div className="px-4 md:px-12 pt-3 mt-20 md:mt-40 h-full">
      <div className="flex flex-row justify-between items-end py-4 md:py-7 inter-font">
        <h1 className="text-3xl md:text-8xl">
          Eclypse<sup className="relative md:-top-10 text-xl md:text-4xl">&reg;</sup>
        </h1>
        <div className="text-sm md:text-md">&copy; 2025</div>
      </div>
      <div className="video relative">
        <video
          className="rounded-sm md:rounded-lg h-[40vh] md:h-[90vh] w-screen object-cover mx-auto"
          src="https://res.cloudinary.com/dhrkajjwf/video/upload/v1748109375/8386975-hd_1366_720_25fps_y5sdnt.mp4"
          autoPlay
          muted
          loop
          controls={false}
        />
        <span className="lg:text-3xl md:text-2xl text-[12px] inter-font-400 tracking-widest absolute bottom-2 right-2 md:bottom-7 md:right-10">
          A silhoutte worth remembering
        </span>
      </div>
      <div className="mt-20 md:mt-60">
        <div className="w-[90vw] md:w-[65vw]">
          <h2 className="lg:text-5xl md:text-4xl text-md inter-font">
            Rooted in a Philosophy of quiet luxury, our garments are designed to
            speak softly in cut, movement, in presence.
          </h2>
        </div>
        <div className=" my-5 md:my-20 flex flex-col w-48 md:w-78">
          <a
            className="group flex text-center items-center gap-1 transition-all duration-500 text-gray-200 text-sm md:text-2xl py-2 hover:text-gray-900 hover:bg-white"
            href="/"
          >
            <span className="transform group-hover:translate-x-5 ">
              Learn more About Eclypse
            </span>{" "}
            <span className="group-hover:hidden">
              <ArrowUpRight />
            </span>
          </a>
          <span className="w-full h-[1px] bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Main;
