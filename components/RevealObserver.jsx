"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => {
            if (e.isIntersecting) {
              e.target.classList.add("active");
              obs.unobserve(e.target);
            }
          }
        ),
      { rootMargin: "0px 0px 240px 0px", threshold: 0.01 }
    );

    const observeRevealElements = () => {
      const els = document.querySelectorAll(".reveal");
      els.forEach((el) => {
        if (!el.classList.contains("active")) {
          obs.observe(el);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      obs.disconnect();
    };
  }, [pathname]);

  return null;
}
