"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Observer logic
    const run = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );

      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => {
          el.classList.remove("visible");
          observer.observe(el);
        });

      return observer;
    };

    const t1 = setTimeout(() => {
      const obs = run();
      return () => obs.disconnect();
    }, 100);

    const t2 = setTimeout(() => run(), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
};
