"use client";

import { useCallback, type MouseEvent } from "react";

import { InteractiveHoverButton } from "@/shared/ui/interactive-hover-button";

type BookSessionButtonProps = {
  label: string;
};

export function BookSessionButton({ label }: BookSessionButtonProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const target = document.getElementById("contact");

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "#contact");
      }
    },
    [],
  );

  return (
    <InteractiveHoverButton
      type="button"
      onClick={handleClick}
      className="border border-white/60 bg-transparent text-white hover:border-white hover:bg-white hover:text-black"
    >
      {label}
    </InteractiveHoverButton>
  );
}
