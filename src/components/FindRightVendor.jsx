import {
  ArrowRight,
  Building2,
  Camera,
  Gift,
  Hand,
  Music2,
  PartyPopper,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useMediaQuery from "../hooks/useMediaQuery";

const categories = [
  {
    name: "Venues",
    description:
      "Discover banquet halls, wedding lawns, resorts, heritage venues, and beautiful celebration spaces.",
    image: "/Luxurious Ivory Floral Wedding Stage.png",
    icon: Building2,
  },
  {
    name: "Event Planners",
    description:
      "Find experienced professionals to plan, organize, and coordinate your special occasion.",
    image: "/Elegant Banquet Table Inspection.png",
    icon: PartyPopper,
  },
  {
    name: "Photographers & Videographers",
    description:
      "Capture every special moment with candid photography and cinematic wedding films.",
    image: "/Golden Meadow Wedding Photoshoot.png",
    icon: Camera,
    featured: false,
  },
  {
    name: "Decorators",
    description:
      "Explore floral arrangements, stunning mandaps, stage designs, and themed decorations.",
    image: "/Lavish Nighttime Wedding Canopy.png",
    icon: Sparkles,
  },
  {
    name: "Caterers",
    description:
      "Find catering professionals offering delicious menus for every kind of celebration.",
    image: "/Golden Wedding Buffet Under Crystal Lights.png",
    icon: Utensils,
  },
  {
    name: "Makeup & Mehendi Artists",
    description:
      "Discover bridal makeup, occasion styling, and intricate mehendi artistry.",
    image: "/Circle of Henna Hands.png",
    icon: Hand,
  },
  {
    name: "Entertainment",
    description:
      "Make your celebration memorable with DJs, live bands, performers, and music.",
    image: "/Glittering Indian Wedding Dance Stage.png",
    icon: Music2,
  },
  {
    name: "Invitations & Gifts",
    description:
      "Discover elegant invitations, personalized gifts, stationery, and event favors.",
    image: "/Elegant Botanical Wedding Invitation Suite.png",
    icon: Gift,
    featured: false,
  },
];

/* Photographers and Invitations & Gifts stay in the data but are held back
   from the home grid for now — drop their `featured: false` to bring a
   card back. */
const featuredCategories = categories.filter(
  ({ featured }) => featured !== false,
);

const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_OUT_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Shared image stack: slow Ken Burns drift at rest, zoom + warm bloom on
   hover. The zoom lives on the wrapper and the drift on the img, so a CSS
   animation never fights the hover transform. */
function VendorVisual({ category, index }) {
  const { name, image } = category;

  return (
    <>
      <div
        className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-[1.07]"
        style={{ transitionTimingFunction: EASE_OUT_CSS }}
      >
        <img
          src={image}
          alt={`${name} portfolio`}
          loading="lazy"
          className="vendor-card-image h-full w-full object-cover object-center"
          /* A negative delay starts every card mid-cycle instead of in lockstep */
          style={{ animationDelay: `${index * -3.4}s` }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(24,11,17,0.94),rgba(24,11,17,0.55)_26%,rgba(24,11,17,0.1)_60%,transparent)]" />

      {/* Opacity only: a gradient itself cannot be cross-faded */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_95%_at_50%_112%,rgba(212,20,90,0.55),rgba(255,118,40,0.18)_44%,transparent_70%)] opacity-0 transition-opacity duration-[550ms] group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[left,opacity] duration-[900ms] ease-out group-hover:left-full group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] border border-white/0 transition-colors duration-500 group-hover:border-white/30" />
    </>
  );
}

/* Desktop: six tall pillars. One opens, the rest step back. */
function VendorPillar({ category, index, reduced }) {
  const { name, description, icon: Icon } = category;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT }}
      className="flex-1 basis-0 transition-[flex-grow] duration-[650ms] ease-out hover:flex-grow-[3]"
    >
      <Link
        to="/vendor-categories"
        aria-label={`Browse ${name}`}
        className="vendor-card vendor-pillar group relative isolate block h-full overflow-hidden rounded-[22px] shadow-[0_2px_10px_rgba(71,34,52,0.08)] outline-none ring-offset-4 ring-offset-[#fef0e1] focus-visible:ring-2 focus-visible:ring-[#D4145A]"
      >
        <VendorVisual category={category} index={index} />

        {/* Resting label: the name runs up the pillar */}
        <div className="pointer-events-none absolute inset-x-0 top-6 bottom-[104px] z-10 flex items-center justify-center transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-2 group-hover:opacity-0">
          <span className="rotate-180 text-[12.5px] font-semibold uppercase tracking-[3px] text-white/90 [writing-mode:vertical-rl] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {name}
          </span>
        </div>

        {/* The chip stays put; everything it reveals grows upward from it */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 lg:p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white shadow-[0_8px_20px_rgba(212,20,90,0.45)] ring-1 ring-white/35 transition-transform duration-[450ms] ease-out group-hover:scale-105">
            <Icon size={17} strokeWidth={2.1} />
          </span>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[550ms] ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <h3 className="pt-4 text-[19px] font-bold leading-tight text-white">
                {name}
              </h3>

              <p className="line-clamp-3 pt-1.5 text-[12.5px] leading-[1.6] text-white/85">
                {description}
              </p>

              <span className="flex items-center gap-1.5 pt-3.5 text-[10.5px] font-bold uppercase tracking-[1.6px] text-white">
                Explore vendors
                <ArrowRight
                  size={13}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* Touch and narrow screens get no hover, so the tiles show their label up front */
function VendorTile({ category, index, reduced }) {
  const { name, icon: Icon } = category;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT }}
    >
      <Link
        to="/vendor-categories"
        aria-label={`Browse ${name}`}
        className="vendor-card group relative block aspect-[3/4] overflow-hidden rounded-[18px] shadow-[0_2px_8px_rgba(71,34,52,0.07)] outline-none transition-transform duration-200 ring-offset-4 ring-offset-[#fef0e1] focus-visible:ring-2 focus-visible:ring-[#D4145A] active:scale-[0.985]"
      >
        <VendorVisual category={category} index={index} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-3 sm:p-3.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white shadow-[0_6px_16px_rgba(212,20,90,0.4)] ring-1 ring-white/35">
            <Icon size={15} strokeWidth={2.1} />
          </span>

          <h3 className="line-clamp-2 pt-2.5 text-[13.5px] font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] sm:text-[14.5px]">
            {name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

function FindRightVendor() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <section className="relative isolate overflow-hidden bg-[#fef0e1] px-5 pb-14 pt-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 lg:pt-16">
      {/* Ambient brand washes, counter-drifting so the section never sits still */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={
          reduced ? { opacity: 1 } : { opacity: 1, x: [0, 30, 0], y: [0, 18, 0] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : {
                opacity: { duration: 1 },
                x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="pointer-events-none absolute -left-24 -top-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,20,90,0.1),transparent_70%)]"
      />
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={
          reduced
            ? { opacity: 1 }
            : { opacity: 1, x: [0, -26, 0], y: [0, -20, 0] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : {
                opacity: { duration: 1.2 },
                x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,118,40,0.16),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 flex items-center gap-2 font-poppins text-[13px] font-bold uppercase tracking-[1.2px] text-[#D4145A]">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#D4145A] to-[#FF7628]" />
              Curated Specialists
            </p>

            <h2 className="font-playfair text-[36px] font-bold leading-tight tracking-tight text-[#30232B]">
              Find the Right Vendor
            </h2>

            <p className="mt-1.5 text-[16px] leading-6 text-[#8A7580]">
              Discover professionals for every part of your event.
            </p>
          </div>

          <Link
            to="/vendor-categories"
            className="group inline-flex h-10 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 font-poppins text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
          >
            View All Vendors
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Desktop: expanding pillars */}
        <div className="vendor-accordion hidden h-[440px] gap-2.5 lg:flex">
          {featuredCategories.map((category, index) => (
            <VendorPillar
              key={category.name}
              category={category}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>

        {/* Narrow screens: equal tiles */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {featuredCategories.map((category, index) => (
            <VendorTile
              key={category.name}
              category={category}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>
      </div>

      <style>{`
        .vendor-card {
          -webkit-tap-highlight-color: transparent;
          isolation: isolate;
        }

        /* Slow breathing crop: keeps the section alive before any interaction */
        .vendor-card-image {
          animation: vendor-kenburns 18s ease-in-out infinite alternate;
        }

        /* Hand the motion budget to the hover zoom */
        .vendor-card:hover .vendor-card-image,
        .vendor-card:focus-visible .vendor-card-image {
          animation-play-state: paused;
        }

        @keyframes vendor-kenburns {
          from {
            transform: scale(1.05) translate3d(-1.2%, -1%, 0);
          }
          to {
            transform: scale(1.12) translate3d(1.2%, 1%, 0);
          }
        }

        /* The pillar you are not looking at steps back. :has() keeps this
           entirely declarative — no state, no re-renders on every hover. */
        @media (hover: hover) {
          .vendor-accordion:has(.vendor-pillar:hover) .vendor-pillar:not(:hover) {
            opacity: 0.68;
            filter: saturate(0.7);
          }

          .vendor-pillar {
            transition: opacity 0.45s ease, filter 0.45s ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vendor-card-image {
            animation: none;
            transform: scale(1.02);
          }

          .vendor-card,
          .vendor-card * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FindRightVendor;
