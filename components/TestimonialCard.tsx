import Image from "next/image";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    description: string;
    image: string;
    alt: string;
    client: string;
    position: string;
  };
}) {
  return (
    <div className="dark:bg-foreground/10 mt-4 rounded-lg bg-white p-2 shadow-md transition-shadow hover:shadow-lg lg:rounded-xl lg:p-4">
      <blockquote className="mb-4 text-sm leading-relaxed font-semibold lg:text-base">
        {testimonial.description}
      </blockquote>
      <div className="flex items-center">
        <div className="bg-muted mr-4 rounded-full p-1">
          <Image
            src={testimonial.image}
            alt={testimonial.alt}
            width={48}
            height={48}
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-base font-semibold">{testimonial.client}</p>
          <p className="text-muted-foreground">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
