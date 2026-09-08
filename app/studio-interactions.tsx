"use client";

import { useEffect } from "react";

export default function StudioInteractions() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const mobileMenu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const mobileMenuSummary = mobileMenu?.querySelector<HTMLElement>("summary");
    const mobileLinks = mobileMenu?.querySelectorAll("a") ?? [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileViewport = window.matchMedia("(max-width: 980px)");
    let lastScrollY = window.scrollY;
    let frameRequested = false;
    let frameId: number | undefined;

    const updateScrollEffects = () => {
      const scrollY = window.scrollY;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0
        ? Math.max(0, Math.min((scrollY / scrollRange) * 100, 100))
        : 0;

      header?.style.setProperty("--scroll-progress", `${progress / 100}`);
      header?.classList.toggle("is-scrolled", scrollY > 40);

      if (mobileViewport.matches && !mobileMenu?.open) {
        const delta = scrollY - lastScrollY;
        if (delta > 5 && scrollY > 140) header?.classList.add("is-hidden");
        if (delta < -5 || scrollY < 80) header?.classList.remove("is-hidden");
      } else {
        header?.classList.remove("is-hidden");
      }

      lastScrollY = scrollY;
      frameRequested = false;
      frameId = undefined;
    };

    const requestScrollFrame = () => {
      if (frameRequested) return;
      frameRequested = true;
      frameId = window.requestAnimationFrame(updateScrollEffects);
    };

    const closeMobileMenu = () => {
      mobileMenu?.removeAttribute("open");
      header?.classList.remove("is-menu-open");
    };

    const syncMobileMenu = () => {
      header?.classList.toggle("is-menu-open", Boolean(mobileMenu?.open));
      if (mobileMenu?.open) header?.classList.remove("is-hidden");
    };

    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (mobileMenu?.open && event.target instanceof Node && !mobileMenu.contains(event.target)) {
        closeMobileMenu();
      }
    };

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !mobileMenu?.open) return;
      closeMobileMenu();
      mobileMenuSummary?.focus();
    };

    const revealSelectors = [
      ".services-head .section-rail",
      ".services-head h2",
      ".services-head > p",
      ".service-card",
      ".vision-title-block",
      ".vision-portrait",
      ".vision-copy",
      ".act",
      ".featured-story > .section-rail",
      ".story-heading > *",
      ".story-player",
      ".story-bottom > *",
      ".content-title > *",
      ".deliverables article",
      ".about > .section-rail",
      ".about-statement > *",
      ".about-composition > *",
      ".manifesto > .kicker",
      ".manifesto-copy p",
      ".manifesto-note",
      ".process > .section-rail",
      ".process-heading > *",
      ".process-list article",
      ".founder > *",
      ".contact > *",
      ".footer-top > *",
      ".footer-nav > *",
      ".footer-bottom > *",
    ];
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );
    const staggerGroups = [
      ".service-grid",
      ".acts-list",
      ".story-bottom",
      ".deliverables",
      ".about-composition",
      ".manifesto-copy",
      ".process-list",
      ".contact-bottom",
      ".footer-nav",
    ];

    revealItems.forEach((item) => item.classList.add("motion-item"));
    staggerGroups.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement) || !child.classList.contains("motion-item")) return;
          child.style.setProperty("--reveal-delay", `${Math.min(index * 70, 240)}ms`);
        });
      });
    });

    let revealObserver: IntersectionObserver | undefined;
    const setupReveals = () => {
      revealObserver?.disconnect();

      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        root.classList.remove("motion-ready");
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      revealItems.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.94) {
          item.classList.add("is-visible");
        }
      });
      root.classList.add("motion-ready");

      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
      );

      revealItems.forEach((item) => {
        if (!item.classList.contains("is-visible")) revealObserver?.observe(item);
      });
    };

    const handleMotionPreference = () => setupReveals();
    const handleViewportChange = () => {
      header?.classList.remove("is-hidden");
      if (!mobileViewport.matches) closeMobileMenu();
    };

    updateScrollEffects();
    setupReveals();
    window.addEventListener("scroll", requestScrollFrame, { passive: true });
    mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
    mobileMenu?.addEventListener("toggle", syncMobileMenu);
    document.addEventListener("click", closeMenuOnOutsideClick);
    document.addEventListener("keydown", closeMenuOnEscape);
    reducedMotion.addEventListener("change", handleMotionPreference);
    mobileViewport.addEventListener("change", handleViewportChange);

    return () => {
      revealObserver?.disconnect();
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      root.classList.remove("motion-ready");
      header?.style.removeProperty("--scroll-progress");
      window.removeEventListener("scroll", requestScrollFrame);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMobileMenu));
      mobileMenu?.removeEventListener("toggle", syncMobileMenu);
      document.removeEventListener("click", closeMenuOnOutsideClick);
      document.removeEventListener("keydown", closeMenuOnEscape);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      mobileViewport.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return null;
}
