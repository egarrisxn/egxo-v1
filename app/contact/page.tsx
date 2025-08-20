import { clientTestimonials } from "@/lib/data/testimonials";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function ContactPage() {
  return (
    <main className="min-h-full border-2 border-red-400 pb-16 dark:border-red-300">
      <Banner title="contact" />
      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl">
        <Header
          className="text-red-400 dark:text-red-300"
          title="Let's Chat!"
        />
        <div className="shadow-foreground mx-auto flex flex-col gap-8 pt-4 drop-shadow-2xl md:mx-12 lg:mx-16 lg:flex-row xl:mx-auto">
          <section className="lg:w-2/3">
            <ContactForm />
          </section>
          <section className="mt-4 flex flex-col gap-5 border-t border-red-500 pt-4 lg:mt-0 lg:w-1/3 lg:justify-center lg:gap-2 lg:border-none lg:pt-0 dark:border-red-300">
            <p className="2xl: font-semibold sm:text-base lg:pl-2 xl:text-xl 2xl:text-2xl 2xl:tracking-tighter">
              <span className="font-bold text-red-500 dark:text-red-300">
                Positive
              </span>{" "}
              words spoken about me:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {clientTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
