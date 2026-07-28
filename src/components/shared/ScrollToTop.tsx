import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const SHOW_AFTER = 300;
const FLY_MS = 900;

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
  flying: (distance: number) => ({
    opacity: 0,
    y: -distance,
    scale: 0.7,
    transition: { duration: FLY_MS / 1000, ease: "easeIn" },
  }),
};

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [flying, setFlying] = useState(false);
  const [distance, setDistance] = useState(0);
  const prefersReducedMotion = useRef(false);

  let animationState: "flying" | "visible" | "hidden";
  if (flying) {
    animationState = "flying";
  } else if (visible) {
    animationState = "visible";
  } else {
    animationState = "hidden";
  }

  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }

    const onScroll = () => {
      if (!flying) {
        setVisible(window.scrollY > SHOW_AFTER);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [flying]);

  const onActivate = () => {
    if (prefersReducedMotion.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const d = window.innerHeight + 220;
    setDistance(d);
    setFlying(true);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setFlying(false);
      setVisible(false);
    }, FLY_MS + 150);
  };

  return (
    <motion.button
      aria-label="Scroll to top"
      type="button"
      className="fixed bottom-6 right-6 z-50 focus:outline-none cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border)] shadow-lg hover:shadow-xl hover:border-[var(--brand)]/50 transition-colors text-[var(--muted)] hover:text-[var(--brand)]"
      onClick={onActivate}
      initial="hidden"
      animate={animationState}
      variants={containerVariants}
      custom={distance}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={
          visible && !flying && !prefersReducedMotion.current
            ? { y: [0, -3, 0] }
            : undefined
        }
        transition={
          visible && !flying && !prefersReducedMotion.current
            ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <FaArrowUp size={20} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollToTop;
