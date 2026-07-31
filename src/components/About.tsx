import { animate, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import type { AvatarItem } from "../types/portfolio";

// Senior-level hero: polished two-column layout with staggered entrances,
// animated feature bullets, strong CTAs, and a floating avatar emblem.
export const About: React.FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const name = personal.name ?? "Your Name";
  const avatar = personal.avatar;
  const resumeHref = PORTFOLIO_INFO.meta?.pdf || `${import.meta.env.BASE_URL}CV- Daffa Rachel P.pdf`;

  const features = useMemo(() => PORTFOLIO_INFO.highlights ?? [], []);
  const heroSummary =
    personal.hero?.summary ??
    personal.summary ??
    "I design and build production-grade frontends and APIs, focusing on performance, accessibility, and delightful UX.";

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  // Coverflow carousel items
  // Support avatar being:
  // - a single string URL
  // - a single object { url, label }
  // - an array of the above
  // Normalize AvatarItem (string | {url,label}) into a consistent object shape
  const normalizeAvatar = (a: AvatarItem) =>
    typeof a === "string" ? { url: a } : { url: a.url, label: a.label };

  let avatarItems: { url: string; label?: string }[] = [];
  if (Array.isArray(avatar)) {
    avatarItems = avatar.map((a) => normalizeAvatar(a));
  } else if (avatar) {
    avatarItems = [normalizeAvatar(avatar)];
  }

  const carouselItems =
    avatarItems.length > 0
      ? avatarItems.map((it, idx) => ({
        id: idx,
        image: it.url || "/placeholder-1.jpg",
        label: it.label ?? `Image ${idx + 1}`,
      }))
      : [{ id: 1, image: "/placeholder-1.jpg", label: "Profile" }];

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const navigateTo = (href: string) => {
    if (!href.startsWith("#")) {
      // external or file link — use location assign
      globalThis.location.href = href;
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const headerEl = document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // allow default for external links
    e.preventDefault();
    navigateTo(href);
  };

  const handleKeyActivation = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // support Enter and Space activating the anchor for keyboard users
    if (e.key === "Enter") {
      // for internal anchors, prevent default and animate scroll
      if (href.startsWith("#")) {
        e.preventDefault();
        navigateTo(href);
      }
      // else allow default (Enter will follow the link)
    } else if (e.key === " " || e.key === "Spacebar") {
      // Space should activate links like a button; prevent page scroll
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto"
        >
          {/* Left: Headline + features + CTAs */}
          <motion.div variants={item} className="md:col-span-7">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex items-center gap-3">
                {name}
              </h1>

              {personal.title && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {personal.title}
                </div>
              )}

              <motion.p
                variants={item}
                className="mt-6 text-lg text-muted-foreground max-w-2xl"
              >
                {heroSummary}
              </motion.p>

              <motion.ul
                variants={item}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="mt-1 w-5 h-5 text-foreground/80"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12l4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Right: Redesigned Profile Photo Stack & CTAs */}
          <motion.div
            variants={item}
            className="md:col-span-5 flex flex-col items-center justify-center gap-10 mt-8 md:mt-0"
          >
            {/* Glowing Photo Card Stack */}
            <div className="relative group w-72 h-96">
              {/* Animated Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-indigo-600 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" />

              <div className="relative w-full h-full bg-background/50 backdrop-blur-xl rounded-[2rem] p-3 shadow-2xl border border-white/10">
                {/* Images Stack */}
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                  {carouselItems.map((item, index) => {
                    const isFirst = index === 0;
                    return (
                      <motion.div
                        key={item.id}
                        className={`absolute inset-0 transition-all duration-700 ${isFirst ? (activeIndex === 0 ? "opacity-100 z-20 scale-100" : "opacity-0 z-10 scale-95") : (activeIndex !== 0 ? "opacity-100 z-20 scale-100" : "opacity-0 z-10 scale-95")
                          }`}
                      >
                        {item.image && !item.image.includes("/placeholder") ? (
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-full object-cover rounded-[1.5rem]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-[1.5rem]">
                            <div className="text-6xl font-bold mb-4">
                              {name?.[0] ?? "S"}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* Image toggle button if multiple images */}
                  {carouselItems.length > 1 && (
                    <button
                      className="absolute bottom-4 right-4 z-30 p-3 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all shadow-lg"
                      onClick={() => setActiveIndex((prev) => (prev + 1) % carouselItems.length)}
                      aria-label="Toggle image"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* CTAs moved below the profile photo */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-indigo-500/30 hover:scale-105 hover:shadow-indigo-500/50 transition-all duration-300"
                onClick={(e) => onNavClick(e, "#projects")}
                onKeyDown={(e) => handleKeyActivation(e, "#projects")}
              >
                See my work
              </a>

              <a
                href={resumeHref}
                download="CV- Daffa Rachel P.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                onKeyDown={(e) => handleKeyActivation(e, resumeHref)}
              >
                Download resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
