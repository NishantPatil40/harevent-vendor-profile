import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

/**
 * MainAnimation
 * ---------------------------------------------------------------------------
 * The HarEvent brand intro: it renders before everything else on every full
 * load / reload, plays the logo + wordmark, then lifts away to reveal the site.
 *
 * Design notes (why it is built this way):
 * - The overlay is a sibling of the app, not a gate: the page mounts behind it
 *   at the same time, so the intro never delays real content or LCP.
 * - The panel leaves with a transform (`y`), never `clip-path`/`opacity`
 *   tricks, so it cannot get stuck covering the site.
 * - Two hard timers act as a failsafe: even if an animation event never
 *   fires, the overlay is unmounted and body scroll is restored.
 * - `prefers-reduced-motion` skips the intro entirely (renders nothing).
 * - Click anywhere or press Escape to skip.
 */

const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_IN_OUT = [0.76, 0, 0.24, 1];

/* How long the fully-assembled lockup stays on screen, and how long the
   panel takes to lift away. Together they cap the intro at ~2.9s. */
const HOLD_MS = 2050;
const EXIT_MS = 850;

export default function MainAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  /* Timeline + failsafe timers */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const skip = () => setLeaving(true);
    const exitTimer = setTimeout(skip, HOLD_MS);
    const doneTimer = setTimeout(() => setGone(true), HOLD_MS + EXIT_MS + 150);

    window.addEventListener("keydown", skip);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", skip);
    };
  }, [prefersReducedMotion]);

  /* Lock scrolling only while the intro is actually on screen */
  useEffect(() => {
    if (prefersReducedMotion || gone) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion, gone]);

  if (prefersReducedMotion || gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading HarEvent"
      onClick={() => setLeaving(true)}
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: leaving ? "-101%" : 0 }}
        transition={{ duration: EXIT_MS / 1000, ease: EASE_IN_OUT }}
        className="absolute inset-0 bg-[#fef0e1] shadow-[0_26px_60px_rgba(42,18,32,0.26)]"
      >
        {/* Ambient brand glows: slow counter-drift so the panel never feels flat */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [0, 26, 0], y: [0, -18, 0] }}
          transition={{
            opacity: { duration: 0.9, ease: EASE_OUT },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="pointer-events-none absolute -left-24 top-[22%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,20,90,0.16),rgba(212,20,90,0)_70%)]"
        />
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [0, -22, 0], y: [0, 20, 0] }}
          transition={{
            opacity: { duration: 1.1, ease: EASE_OUT },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="pointer-events-none absolute -right-20 bottom-[14%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,118,40,0.18),rgba(255,118,40,0)_70%)]"
        />

        {/* The lockup breathes out and lifts just before the panel leaves */}
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{
            opacity: leaving ? 0 : 1,
            y: leaving ? -22 : 0,
            scale: leaving ? 0.97 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.4, 0, 1, 1] }}
          className="relative flex h-full w-full flex-col items-center justify-center px-6"
        >
          {/* Logo medallion: self-drawing ring, completion ripple, breathing glow */}
          <div className="relative flex h-[118px] w-[118px] items-center justify-center sm:h-[134px] sm:w-[134px]">
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full -rotate-90"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="url(#introRingGradient)"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.15,
                  delay: 0.15,
                  ease: EASE_OUT,
                }}
              />
              <defs>
                <linearGradient id="introRingGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4145A" />
                  <stop offset="100%" stopColor="#FF7628" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Ripple that leaves the ring the moment it finishes drawing */}
            <motion.span
              aria-hidden="true"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: [0.92, 1.42], opacity: [0.55, 0] }}
              transition={{ duration: 0.85, delay: 1.2, ease: EASE_OUT }}
              className="absolute inset-0 rounded-full border border-[#D4145A]/50"
            />

            {/* Soft halo under the medallion, breathing on a loop */}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{
                duration: 3.2,
                delay: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(255,118,40,0.35),rgba(212,20,90,0)_72%)] blur-md"
            />

            {/* Entrance and idle float live on separate layers so the blur-in
                one-shot never fights the looping breathe */}
            <motion.span
              initial={{ scale: 0.62, opacity: 0, filter: "blur(9px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.95, delay: 0.1, ease: EASE_OUT }}
              className="flex h-[88px] w-[88px] items-center justify-center sm:h-[100px] sm:w-[100px]"
            >
              <motion.span
                animate={{ scale: [1, 1.035, 1], rotate: [0, 1.6, 0] }}
                transition={{
                  duration: 4.2,
                  delay: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_12px_34px_rgba(212,20,90,0.18)] ring-1 ring-[#F5DCE6]"
              >
                <img
                  src="/logoForm.jpeg"
                  alt=""
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </motion.span>
            </motion.span>
          </div>

          {/* Wordmark: line-mask reveal, then a light sheen sweeping the gradient.
              The sweep is CSS-keyframed because background-position is not a
              transform, so it stays cheap next to the motion layers. */}
          <style>{`
            .intro-wordmark {
              background-image: linear-gradient(
                100deg,
                #D4145A 0%,
                #FF7628 28%,
                #ffcf94 46%,
                #FF7628 64%,
                #D4145A 100%
              );
              background-size: 220% 100%;
              animation: intro-sheen 2.6s cubic-bezier(0.45, 0, 0.55, 1) 0.9s infinite;
            }
            @keyframes intro-sheen {
              0% {
                background-position: 130% 50%;
              }
              100% {
                background-position: -130% 50%;
              }
            }
            .intro-tagline {
              animation: intro-tracking 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
            }
            @keyframes intro-tracking {
              from {
                opacity: 0;
                letter-spacing: 6px;
              }
              to {
                opacity: 1;
                letter-spacing: 2.2px;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .intro-wordmark,
              .intro-tagline {
                animation: none;
              }
            }
          `}</style>

          <span className="mt-6 block overflow-hidden pb-1">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT }}
              className="intro-wordmark block bg-clip-text font-playfair text-[40px] font-bold leading-[1.15] text-transparent sm:text-[52px]"
            >
              HarEvent
            </motion.span>
          </span>

          {/* Tagline settles as its tracking tightens into place */}
          <p className="intro-tagline mt-2 text-center font-poppins text-[9.5px] font-semibold uppercase text-[#8A7580] sm:text-[11px]">
            India&apos;s Event &amp; Vendor Discovery Platform
          </p>

          {/* Progress hairline */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0.4 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.25, ease: EASE_OUT }}
            className="mt-7 h-[2px] w-[190px] origin-left rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] sm:w-[230px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * Reveal — shared scroll entrance used across the site so every section eases
 * in with the same curve and rhythm. Renders a plain div when the visitor asks
 * for reduced motion.
 */
export function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  y = 26,
  duration = 0.6,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * PageTransition — soft cross-fade whenever the route changes.
 *
 * Deliberately opacity-only: a `transform` here would create a containing
 * block for the `position: fixed` elements living inside pages (modals,
 * dropdown backdrops) and silently break their positioning.
 */
export function PageTransition({ children }) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      key={location.pathname}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
