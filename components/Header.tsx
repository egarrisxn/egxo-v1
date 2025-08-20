export function Header({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const defaultClassName = "text-foreground";
  const headerClassName = className ?? defaultClassName;

  return (
    <header className="flex flex-row items-center justify-between md:px-2 md:text-lg lg:text-2xl 2xl:text-4xl">
      <h2 className={`${headerClassName} font-bold tracking-tight uppercase`}>
        {title}
      </h2>
    </header>
  );
}
