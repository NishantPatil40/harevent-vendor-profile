import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  Search,
  Compass,
  BadgeCheck,
  SlidersHorizontal,
  MessageCircle,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const features = [
  {
    title: "More Choices, One Platform",
    description:
      "Explore a wide range of event professionals and services across multiple categories.",
    Icon: Search,
  },
  {
    title: "Convenient Discovery",
    description:
      "Find relevant vendors without having to search across multiple platforms.",
    Icon: Compass,
  },
  {
    title: "Compare with Confidence",
    description:
      "Review available portfolios, services, pricing information, and genuine customer feedback.",
    Icon: BadgeCheck,
  },
  {
    title: "Your Event, Your Preferences",
    description:
      "Discover professionals according to your occasion, location, style, and budget.",
    Icon: SlidersHorizontal,
  },
  {
    title: "Direct Vendor Connections",
    description:
      "Communicate with the professionals you choose to discuss your requirements.",
    Icon: MessageCircle,
  },
];

const AUTOPLAY_MS = 5200;
const EASE_OUT = [0.22, 1, 0.36, 1];

const panelVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.28, ease: "easeIn" } },
};

function usePrefersReducedMotion() {
  const subscribe = useCallback((onStoreChange) => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    query.addEventListener("change", onStoreChange);
    return () => query.removeEventListener("change", onStoreChange);
  }, []);

  const getSnapshot = useCallback(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export default function WhyChooseHarEvent() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  const progress = useMotionValue(0);
  const barWidth = useTransform(progress, (value) => `${value * 100}%`);

  /* Pointer tilt - springs keep it smooth instead of snapping to the cursor */
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const spring = { stiffness: 170, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5.5, -5.5]), spring);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7.5, 7.5]), spring);
  const glareX = useTransform(pointerX, (value) => `${value * 100}%`);
  const glareY = useTransform(pointerY, (value) => `${value * 100}%`);

  /* Autoplay: restart the progress tween whenever the slide changes */
  useEffect(() => {
    progress.set(0);
  }, [active, progress]);

  useEffect(() => {
    if (reduced || paused) return;

    const remaining = (1 - progress.get()) * AUTOPLAY_MS;
    const controls = animate(progress, 1, {
      duration: remaining / 1000,
      ease: "linear",
      onComplete: () => setActive((index) => (index + 1) % features.length),
    });

    return () => controls.stop();
  }, [active, paused, reduced, progress]);

  /* Cached rect: measured on the untilted wrapper, never per mouse move.
     Reading a transformed element's box while it tilts feeds back into the
     pointer fractions and makes the panel wobble. */
  const tiltRect = useRef(null);

  const captureRect = (event) => {
    tiltRect.current = event.currentTarget.getBoundingClientRect();
  };

  const handlePointerMove = (event) => {
    if (reduced) return;

    let bounds = tiltRect.current;
    if (!bounds) return;

    let fx = (event.clientX - bounds.left) / bounds.width;
    let fy = (event.clientY - bounds.top) / bounds.height;

    /* Pointer landed outside the cached box: the layout scrolled or reflowed,
       so re-measure once instead of reading a rect on every mouse move. */
    if (fx < -0.02 || fx > 1.02 || fy < -0.02 || fy > 1.02) {
      bounds = event.currentTarget.getBoundingClientRect();
      tiltRect.current = bounds;
      fx = (event.clientX - bounds.left) / bounds.width;
      fy = (event.clientY - bounds.top) / bounds.height;
    }

    pointerX.set(fx);
    pointerY.set(fy);
  };

  const resetPointer = () => {
    tiltRect.current = null;
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const moveFocus = (step) =>
    setActive((index) => (index + step + features.length) % features.length);

  const handleKeys = (event) => {
    if (["ArrowDown", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      moveFocus(1);
    } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
      event.preventDefault();
      moveFocus(-1);
    }
  };

  const { title, description, Icon } = features[active];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fef0e1] px-5 py-14 font-poppins sm:px-8 sm:py-16 lg:px-10 motion-reduce:[&_*]:transition-none">
      <style>{`
        @property --why-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        /* Rotating conic gradient drawn as a 2px ring using a mask,
           so no blur filter is needed (blurs mis-clip inside transformed layers). */
        .why-aurora {
          padding: 2px;
          background: conic-gradient(
            from var(--why-angle),
            rgba(212,20,90, 0) 0deg,
            rgba(212,20,90, 0.95) 45deg,
            rgba(255,118,40, 0.95) 130deg,
            rgba(255, 200, 140, 0.4) 200deg,
            rgba(212,20,90, 0) 290deg,
            rgba(212,20,90, 0) 360deg
          );
          -webkit-mask:
            linear-gradient(#000, #000) content-box,
            linear-gradient(#000, #000);
          mask:
            linear-gradient(#000, #000) content-box,
            linear-gradient(#000, #000);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: why-angle-turn 7s linear infinite;
        }

        @keyframes why-angle-turn {
          to {
            --why-angle: 360deg;
          }
        }

        .why-grid-lines {
          background-image:
            linear-gradient(to right, rgba(212,20,90, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,20,90, 0.055) 1px, transparent 1px);
          background-size: 46px 46px;
          -webkit-mask-image: radial-gradient(80% 60% at 50% 45%, #000, transparent 75%);
          mask-image: radial-gradient(80% 60% at 50% 45%, #000, transparent 75%);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-aurora {
            animation: none;
          }
        }
      `}</style>

      {/* Ambient backdrop */}
      <div className="why-grid-lines pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,20,90,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,118,40,0.16),transparent_70%)]" />

      {/* Section heading */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="mx-auto mb-10 max-w-[1100px] text-center sm:mb-12"
      >
        <div className="mb-3 flex items-center justify-center gap-3">
          <motion.span
            initial={reduced ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="h-[2px] w-[30px] origin-left rounded-full bg-[#D4145A]"
          />

          <p className="text-[13px] font-bold uppercase tracking-[2px] text-[#D4145A]">
            Your Event, Your Way
          </p>

          <motion.span
            initial={reduced ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="h-[2px] w-[30px] origin-right rounded-full bg-[#D4145A]"
          />
        </div>

        <h2 className="font-playfair text-[36px] font-bold leading-tight text-[#35121e]">
          Why Choose HarEvent?
        </h2>

        <p className="mx-auto mt-2 max-w-[1000px] text-[16px] leading-[1.6] text-[#69534d]">
          Finding the right event professionals shouldn't be complicated.
          HarEvent brings event discovery and vendor connections together in
          one convenient place.
        </p>
      </motion.div>

      {/* Widget */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mx-auto grid w-full max-w-[1350px] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.8fr)] lg:gap-12"
      >
        {/* Selector list */}
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Why Choose HarEvent"
          className="flex flex-col gap-2.5"
          onKeyDown={handleKeys}
        >
          {features.map((feature, index) => {
            const selected = active === index;

            return (
              <motion.button
                key={feature.title}
                type="button"
                role="tab"
                id={`why-tab-${index}`}
                aria-selected={selected}
                aria-controls="why-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                initial={reduced ? false : { opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: EASE_OUT,
                }}
                whileHover={{ x: 5, transition: { duration: 0.25, ease: "easeOut" } }}
                whileTap={{ scale: 0.985, transition: { duration: 0.12 } }}
                className="group relative isolate flex w-full cursor-pointer items-center gap-4 rounded-[18px] px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#D4145A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fef0e1] sm:px-5"
              >
                {/* Sliding glass background - shared layout animation */}
                {selected && (
                  <motion.span
                    layoutId="why-active-row"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-[18px] bg-white shadow-[0_14px_34px_rgba(212,20,90,0.13)] ring-1 ring-[#FFD9C6]"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-[18px] bg-gradient-to-b from-[#D4145A] to-[#FF7628]" />
                  </motion.span>
                )}

                <span
                  className={`font-playfair text-[26px] leading-none transition-colors duration-300 ${
                    selected ? "text-[#D4145A]" : "text-[#eaa9a2]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-[16px] font-semibold leading-snug transition-colors duration-300 ${
                      selected ? "text-[#35121e]" : "text-[#6f554e]"
                    }`}
                  >
                    {feature.title}
                  </span>

                  {/* Autoplay progress on the active row only */}
                  <span className="mt-2.5 block h-[3px] w-full overflow-hidden rounded-full bg-[#f7ddcd]">
                    {selected &&
                      (reduced ? (
                        <span className="block h-full w-full rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628]" />
                      ) : (
                        <motion.span
                          style={{ width: barWidth }}
                          className="block h-full rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628]"
                        />
                      ))}
                  </span>
                </span>

                <ArrowRight
                  size={17}
                  strokeWidth={2.3}
                  className={`shrink-0 transition-all duration-300 ease-out ${
                    selected
                      ? "translate-x-0 text-[#D4145A] opacity-100"
                      : "-translate-x-2 text-[#c9a79c] opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Showcase panel */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 34, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
          style={{ perspective: 1300 }}
          onMouseEnter={captureRect}
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
          className="relative"
        >
          {/* Rotating gradient ring */}
          <span
            aria-hidden="true"
            className="why-aurora pointer-events-none absolute -inset-[2px] rounded-[30px]"
          />

          <motion.div
            role="tabpanel"
            id="why-panel"
            aria-labelledby={`why-tab-${active}`}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative flex min-h-[300px] flex-col justify-center rounded-[28px] border border-[#FFD5BC] bg-white/75 px-6 py-7 shadow-[0_28px_64px_-28px_rgba(150,60,35,0.35)] sm:min-h-[330px] sm:px-9 sm:py-9 lg:min-h-[360px]"
          >
            {/* Clipped decorations live in their own layer: overflow-hidden on a
                preserve-3d element would flatten the 3D children above it */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
              {/* Soft warm wash */}
              <span className="absolute inset-0 bg-gradient-to-br from-[#FFF6EF] via-white/0 to-[#FFEFF2]" />

              {/* Cursor glare */}
              <motion.span
                aria-hidden="true"
                style={{ left: glareX, top: glareY }}
                className="absolute -ml-[150px] -mt-[150px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0)_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Giant index watermark */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`mark-${active}`}
                  aria-hidden="true"
                  initial={reduced ? false : { opacity: 0, scale: 0.85, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="absolute -right-3 -top-6 font-playfair text-[130px] font-bold leading-none text-[#D4145A]/[0.07] sm:text-[160px]"
                >
                  {String(active + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Static 3D lift - kept off the animated node so motion's own
                transform (y / opacity) is not overwritten */}
            <div className="relative" style={{ transform: "translateZ(45px)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={panelVariants}
                  initial={reduced ? "show" : "hidden"}
                  animate="show"
                  exit={reduced ? undefined : "exit"}
                  className="relative"
                >
                  <motion.span
                    variants={lineVariants}
                    className="flex h-[64px] w-[64px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white shadow-[0_16px_32px_rgba(212,20,90,0.3)]"
                  >
                    <Icon size={30} strokeWidth={1.7} />
                  </motion.span>

                  <motion.h3
                    variants={lineVariants}
                    className="mt-6 max-w-[720px] font-playfair text-[36px] font-bold leading-[1.15] text-[#35121e]"
                  >
                    {title}
                  </motion.h3>

                  <motion.span
                    variants={lineVariants}
                    className="mt-4 block h-[3px] w-[64px] rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628]"
                  />

                  <motion.p
                    variants={lineVariants}
                    className="mt-4 max-w-[740px] text-[16px] leading-[1.75] text-[#69534d]"
                  >
                    {description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="relative mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {features.map((feature, index) => (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${feature.title}`}
                    className={`h-[7px] rounded-full transition-all duration-500 ease-out ${
                      active === index
                        ? "w-9 bg-gradient-to-r from-[#D4145A] to-[#FF7628]"
                        : "w-[7px] bg-[#e9c6b4] hover:w-4 hover:bg-[#d99f88]"
                    }`}
                  />
                ))}
              </div>

              <span className="font-playfair text-[13px] tracking-[1px] text-[#b98d7c]">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-1 text-[#dcb9a9]">/</span>
                {String(features.length).padStart(2, "0")}
              </span>

              {!reduced && (
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Resume auto play" : "Pause auto play"}
                  className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4145A]"
                >
                  {paused ? (
                    <Play size={14} strokeWidth={2.4} className="translate-x-[1px]" />
                  ) : (
                    <Pause size={14} strokeWidth={2.4} />
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
