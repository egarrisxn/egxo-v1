import { SocialList } from "./SocialList";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7">
      <p className="shadow-foreground bg-linear-to-tl from-zinc-400 via-zinc-600 to-zinc-900 bg-clip-text text-transparent drop-shadow-2xl sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-700">
        <span className="text-foreground">EG</span>|{date}
      </p>
      <section className="shadow-foreground flex gap-1 text-sm drop-shadow-2xl md:text-base lg:text-lg xl:text-xl 2xl:gap-2 2xl:text-2xl">
        <SocialList />
      </section>
    </footer>
  );
}
