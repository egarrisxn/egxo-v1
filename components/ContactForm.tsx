"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { sendEmail } from "@/lib/nodemailer/sendEmail";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, formState } = form;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    sendEmail(data);
    toast.success("Your message has been sent! Ill get back to you soon.");
  };

  return (
    <Card className="flex flex-col sm:rounded-lg sm:border sm:border-foreground sm:bg-card sm:shadow-[1px_3px_4px_0px_#01091c] dark:shadow-xs sm:dark:border-border">
      <CardHeader>
        <CardTitle className="text-2xl">Have any questions?</CardTitle>
        <CardDescription className="pb-4 sm:pb-0">
          Shoot me a message and I&apos;ll get back to you as soon as possible!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hit me with your best shot!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={formState.isSubmitting}
            >
              Send
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex w-full flex-col gap-4 pt-2 text-center md:gap-6">
        <p>
          If forms aren&apos;t your thing, go ahead and email me at{" "}
          <a
            href="mailto:egarrisxn@gmail.com"
            className="text-slate-400 underline underline-offset-4 hover:text-slate-600"
          >
            egarrisxn@gmail.com
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
