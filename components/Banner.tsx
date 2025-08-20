import Image from "next/image";
import { bannerInfo } from "@/lib/data/banners";

export function Banner({ title }: { title: keyof typeof bannerInfo }) {
  const banner = bannerInfo[title];

  if (!banner) {
    return null;
  }

  return (
    <div
      className={`${banner.className} flex w-full justify-center border-b py-8 shadow-md shadow-muted-foreground/80`}
      role="banner"
    >
      <Image
        src={banner.src}
        width={2560}
        height={200}
        alt={`Banner for the ${banner.alt} page`}
        priority
      />
    </div>
  );
}
