import { Button } from "@/components/ui/button";

export function WorkBadge() {
  return (
    <Button asChild variant="badge" size="badge" className="group flex gap-3">
      <a
        href="https://www.linkedin.com/in/ethan-garrison/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex size-5 rounded-full bg-green-700 2xl:size-6">
          <div className="m-auto size-3 animate-ping rounded-full bg-green-600 2xl:size-4"></div>
        </div>
        <span className="leading-snug font-bold tracking-tight text-green-900 group-hover:text-black 2xl:text-base">
          Available for work!
        </span>
      </a>
    </Button>
  );
}
