"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="my-4 text-2xl font-semibold">Something went wrong!</h1>
      <Button
        onClick={reset}
        className="rounded-lg border-2 bg-blue-500 px-8 py-2 text-white shadow-lg"
      >
        Refresh
      </Button>
    </div>
  );
}
