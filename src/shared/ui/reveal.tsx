"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState<Element | null>(null);

  const setRef = useCallback((element: Element | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node]);

  const style = useMemo(
    () => ({
      transitionDelay: `${delay}ms`,
    }),
    [delay],
  );

  return (
    <div
      ref={setRef}
      style={style}
      className={cn(
        "translate-y-10 opacity-0 transition-all duration-700 ease-out will-change-transform",
        visible && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
