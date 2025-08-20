export function AnimatedName() {
  return (
    <>
      <h3 className="bg-linear-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[8rem]">
        Ethan G.
      </h3>
      <div className="group relative ml-1.5 overflow-hidden">
        <div
          className="transition-transform duration-300 group-hover:-translate-y-16"
          aria-hidden="true"
        >
          <h4 className="flex cursor-default bg-linear-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent shadow-foreground drop-shadow-md delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[3rem] 2xl:leading-[3.5rem]">
            Full Stack Developer.
          </h4>
        </div>
        <div className="absolute top-0 left-0 translate-y-16 shadow-foreground drop-shadow-md transition-transform duration-300 group-hover:translate-y-0">
          <h4 className="flex cursor-default bg-linear-to-tl from-yellow-800 via-yellow-600 to-yellow-400 bg-clip-text text-transparent delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[3rem] 2xl:leading-[3.5rem]">
            Digital Product Designer.
          </h4>
        </div>
      </div>
    </>
  );
}
