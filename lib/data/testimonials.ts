type Testimonial = {
  client: string;
  position: string;
  image: string;
  alt: string;
  description: string;
};

export const clientTestimonials: Testimonial[] = [
  {
    client: "Sway Bae",
    position: "Content Creator",
    image: "/other/sway-avatar.png",
    alt: "Sway Bae Avatar",
    description:
      "Communication, urgency, and attenion to detail are just a few things I could praise Ethan for. Working with him was such a breeze!",
  },
  {
    client: "Jeff Drake",
    position: "Mechanical Engineer",
    image: "/other/jeff-avatar.png",
    alt: "Jeff Drake Avatar",
    description:
      "I gave Ethan a blank canvas for a project and he knocked it out of the park! I will be working with him again.",
  },
];
