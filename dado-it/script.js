(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ---------- hero panel parallax ---------- */
  const stage = document.getElementById("panelStage");

  if (stage && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const panels = stage.querySelectorAll(".panel");

    stage.addEventListener("mousemove", (e) => {
      const rect = stage.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      panels.forEach((panel, i) => {
        const depth = (i + 1) * 6;
        panel.style.transform =
          `translate3d(${relX * depth}px, ${relY * depth}px, 0) rotateX(${relY * -3}deg) rotateY(${relX * 3}deg)`;
      });
    });

    stage.addEventListener("mouseleave", () => {
      panels.forEach((panel) => {
        panel.style.transform = "translate3d(0,0,0) rotateX(0) rotateY(0)";
      });
    });
  }

  /* ---------- contact form (client-side only) ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      note.textContent = name
        ? `Thanks, ${name.split(" ")[0]} — this demo form doesn't send yet. Wire it up to your backend or a form service before going live.`
        : "This demo form doesn't send yet. Wire it up to your backend or a form service before going live.";
      form.reset();
    });
  }

  /* ---------- reveal-on-scroll ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealables = document.querySelectorAll(
      ".service-card, .process-step, .testimonial-card, .why-copy, .cta-card"
    );

    revealables.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealables.forEach((el) => io.observe(el));
  }
})();
