import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { TechList } from "@/components/TechList";
import { GitHubDisplay } from "@/components/GitHubDisplay";

export default function AboutPage() {
  return (
    <main className="min-h-full border-2 border-green-400 pb-16 dark:border-green-300">
      <Banner title="about" />
      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl">
        <Header
          className="text-green-400 dark:text-green-300"
          title="Who Am I?"
        />
        <article className="mx-auto grid grid-cols-1 justify-center pt-4 md:mx-12 lg:mx-16 xl:mx-auto">
          <h3 className="text-2xl leading-12 font-bold shadow-foreground drop-shadow-2xl md:text-3xl lg:text-4xl lg:tracking-wide xl:text-5xl 2xl:text-6xl">
            Hello, World! I&apos;m{" "}
            <span className="text-green-400 dark:text-green-300">Ethan</span>, a
            passionate Full Stack Developer & Digital Product Designer based in
            Orlando, Florida, USA.
          </h3>

          <section className="mt-5 flex flex-col gap-5 lg:mt-8 lg:text-lg xl:text-xl 2xl:text-3xl">
            <p>
              After a fulfilling career run in the worlds of hospitality,
              management, marketing, and sales, I decided to embarked on a NEW
              and exciting journey into the world of tech! My foundation was
              built through a rigorous Full Stack Coding Boot Camp at the
              University of Central Florida, and I continually expand my skills
              through self-teaching and coursework, including Harvard&apos;s
              CS50x. I thrive on leveraging JavaScript libraries and frameworks
              to bring creative visions to life, ensuring each project is both
              technically robust and visually captivating.
            </p>
            <p>
              Beyond coding, I draw inspiration from exploring new music,
              enjoying quality time with family and friends, and adventuring in
              the great outdoors. These interests shape my approach, enhancing
              my ability to create solutions that truly resonate.
            </p>
            <p>
              Let&apos;s collaborate and work together to transform your ideas
              into impactful digital experiences.
            </p>
            <p className="font-bold lg:pt-4">
              Together, I bet we could build something pretty extraordinary! -EG
            </p>
          </section>

          <section className="mt-10 flex flex-col gap-5 border-t border-green-500 pt-2 shadow-foreground drop-shadow-2xl sm:flex-row sm:gap-3 sm:pt-4 md:gap-4 lg:pt-8 xl:mb-12 dark:border-green-300">
            <p className="h-fit sm:w-1/4 sm:border-r sm:border-green-500 sm:pr-1">
              <span className="font-bold text-green-500 dark:text-green-300">
                Technologies
              </span>{" "}
              &{" "}
              <span className="font-bold text-green-500 dark:text-green-300">
                tools
              </span>{" "}
              I know:
            </p>
            <div className="flex w-[65%] flex-wrap items-center gap-4 lg:max-w-2xl xl:max-w-3xl xl:gap-10">
              <TechList />
            </div>
          </section>

          <section className="mt-10 flex flex-col gap-5 border-t border-green-500 pt-2 shadow-foreground drop-shadow-2xl sm:flex-row sm:gap-3 sm:pt-4 md:gap-4 lg:pt-8 xl:mb-12 dark:border-green-300">
            <p className="h-fit sm:w-1/4 sm:border-r sm:border-green-500 sm:pr-1">
              <span className="font-bold text-green-500 dark:text-green-300">
                Contributions
              </span>{" "}
              &{" "}
              <span className="font-bold text-green-500 dark:text-green-300">
                time
              </span>{" "}
              on GitHub:
            </p>
            <div className="sm:w-3/4">
              <GitHubDisplay />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
