import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-2xl font-semibold">Page not found!</h1>
      <Button
        asChild
        className="w-fit rounded-lg border-2 bg-blue-500 px-8 shadow-lg"
      >
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
