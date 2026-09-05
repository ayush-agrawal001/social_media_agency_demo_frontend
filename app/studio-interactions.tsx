"use client";

import { useEffect } from "react";

export default function StudioInteractions() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const mobileMenu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const mobileLinks = mobileMenu?.querySelectorAll("a") ?? [];

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 40);
    const closeMobileMenu = () => mobileMenu?.removeAttribute("open");

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

    return () => {
      window.removeEventListener("scroll", updateHeader);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMobileMenu));
    };
  }, []);

  return null;
}
