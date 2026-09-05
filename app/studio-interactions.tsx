"use client";

import { useEffect } from "react";

export default function StudioInteractions() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const cursor = document.querySelector<HTMLElement>(".project-cursor");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMenu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const mobileLinks = mobileMenu?.querySelectorAll("a") ?? [];
    let frame = 0;
    let x = -100;
    let y = -100;

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 40);
    const drawCursor = () => {
      frame = 0;
      if (cursor) cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const moveCursor = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(drawCursor);
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (!cursor) return;
      cursor.textContent = target?.dataset.cursor ?? "VIEW";
      cursor.classList.toggle("is-visible", Boolean(target));
    };
    const closeMobileMenu = () => mobileMenu?.removeAttribute("open");

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

    if (finePointer.matches && !reducedMotion.matches) {
      document.documentElement.classList.add("custom-cursor-ready");
      window.addEventListener("pointermove", moveCursor, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("pointermove", moveCursor);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMobileMenu));
      document.documentElement.classList.remove("custom-cursor-ready");
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
