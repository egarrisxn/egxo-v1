import Image from "next/image";

export function PastProjectCard({
  project,
}: {
  project: {
    image: string;
    alt: string;
    title: string;
    repositoryLink: string;
  };
}) {
  return (
    <a
      href={project.repositoryLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title} website`}
      className="group block transition-all duration-300 ease-in-out"
    >
      <h3 className="mb-0.5 line-clamp-1 text-center leading-tight font-semibold tracking-tight group-hover:text-blue-400 group-focus:text-blue-600 md:text-base xl:text-lg 2xl:text-xl dark:group-hover:text-blue-600 dark:group-focus:text-blue-400">
        {project.title}
      </h3>
      <div className="relative rounded-lg border border-foreground bg-card dark:border-border">
        <Image
          src={project.image}
          alt={`Photo of the ${project.alt} project`}
          width={760}
          height={430}
          className="rounded-lg border-2 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-lg bg-black opacity-0 group-hover:opacity-20 group-focus:opacity-20" />
      </div>
    </a>
  );
}
