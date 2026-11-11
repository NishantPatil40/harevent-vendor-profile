import { useState } from "react";
import {
  ArrowRight,
  Image as ImageIcon,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";
import { vendors as vendorData } from "../data/vendors";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

const filters = [
  "All",
  "Photography",
  "Decor",
  "Venues",
  "Catering",
  "Entertainment",
];

const vendors = vendorData.map((vendor) => ({
  ...vendor,
  inquiryUrl: `/enquiry?vendor=${encodeURIComponent(vendor.businessName)}&category=${encodeURIComponent(vendor.category)}`,
  profileUrl: `/vendor-profile/${vendor.id}`,
}));

const EASE_OUT = [0.22, 1, 0.36, 1];

export function VendorCard({ vendor, index = 0, profileMode = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_OUT }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE_OUT } }}
      className="group relative flex flex-col overflow-hidden rounded-[15px] border border-[#F1DDE5] bg-white shadow-[0_3px_14px_rgba(71,34,52,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#E9A0BA] hover:shadow-[0_18px_38px_rgba(71,34,52,0.16)] sm:min-h-[408px]"
    >
      {/* Gradient hairline that runs across the top on hover */}
      <span className="pointer-events-none absolute left-0 top-0 z-30 h-[3px] w-0 bg-gradient-to-r from-[#D4145A] to-[#FF7628] transition-[width] duration-[700ms] ease-out group-hover:w-full" />

      <div className="relative h-[186px] shrink-0 overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] sm:h-[196px] lg:h-[206px]">
        <img
          src={vendor.portfolioImage}
          alt={vendor.imageAlt}
          loading="lazy"
          className="vendor-kb h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />

        {/* Light sweep across the photo */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute -left-full top-[-25%] h-[150%] w-[55%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-[left,opacity] duration-[1100ms] ease-out group-hover:left-[150%] group-hover:opacity-100" />
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 sm:px-5">
        {/* Price left, location right — plain text row under the photo */}
        <div className="mb-0 mt-3.5 flex items-center justify-between gap-3">
          <p className="flex items-baseline gap-1 text-[15px] font-bold leading-none text-[#382832]">
            {vendor.priceFrom}
            <span className="text-[11px] font-medium text-[#8A7580]">
              {vendor.priceNote}
            </span>
          </p>

          <p className="flex shrink-0 items-center gap-1 text-[12px] font-medium text-[#8A7580]">
            <MapPin size={13} className="shrink-0 text-[#D4145A]" />
            {vendor.location}
          </p>
        </div>

        <p className="mt-2.5 truncate text-[11px] font-bold uppercase tracking-[0.8px] text-[#D4145A]">
          {vendor.category}
        </p>

        <h3 className="mt-1 truncate text-[17px] font-bold leading-[1.3] text-[#2E2230] transition-colors duration-300 group-hover:text-[#B41049]">
          {vendor.businessName}
        </h3>

        {/* Two reserved lines keep every card's content block the same height */}
        <p className="mt-1.5 line-clamp-2 min-h-[39px] text-[13px] leading-[1.5] text-[#7C6A74]">
          {vendor.description}
        </p>

        <div className="mt-auto flex gap-2 pt-2.5">
          <Link
            to={vendor.inquiryUrl}
            className="inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-3 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
          >
            Send Inquiry
          </Link>

          <Link
            to={vendor.profileUrl}
            aria-current={profileMode ? "page" : undefined}
            className="inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-full border border-[#F3DFC8] bg-[#FFF4E4] px-3 text-[13px] font-semibold text-[#3A2B33] transition hover:border-[#E6C48F] hover:bg-[#FFEEDA] active:scale-[0.97]"
          >
            {profileMode ? "Current Profile" : "View Profile"}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyVendorCard({ category }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[15px] border border-[#F1DDE5] bg-white shadow-[0_3px_14px_rgba(71,34,52,0.04)] sm:min-h-[408px]">
      <div className="flex h-[186px] shrink-0 items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] text-[#D4145A]/50 sm:h-[196px] lg:h-[206px]">
        {category === "All" ? (
          <BriefcaseBusiness size={28} strokeWidth={1.5} />
        ) : (
          <ImageIcon size={28} strokeWidth={1.5} />
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4">
        {/* Same rhythm as a filled card: 14px above, 10px below the top row */}
        <p className="mb-2.5 mt-3.5 truncate text-[11px] font-bold uppercase tracking-[0.8px] text-[#D4145A]">
          {category === "All" ? "Vendor Portfolio" : category}
        </p>

        <h3 className="mt-1 truncate text-[15px] font-bold leading-[1.3] text-[#382832]">
          Vendor listing coming soon
        </h3>

        <p className="mt-1.5 line-clamp-2 min-h-[39px] text-[13px] leading-[1.5] text-[#8A7580]">
          Business details and portfolio will appear when available.
        </p>

        <div className="mt-auto">
          <div className="flex gap-2">
            <Link
              to="/enquiry"
              className="inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-3 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A] active:scale-[0.97]"
            >
              Send Inquiry
            </Link>

            <Link
              to="/vendor-categories"
              className="inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-full border border-[#F3DFC8] bg-[#FFF4E4] px-3 text-[13px] font-semibold text-[#3A2B33] transition hover:border-[#E6C48F] hover:bg-[#FFEEDA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A] active:scale-[0.97]"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PopularVendors() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleVendors = vendors.filter(
    (vendor) =>
      activeFilter === "All" ||
      (vendor.filterCategory || vendor.category)
        .toLowerCase()
        .includes(activeFilter.toLowerCase()),
  );

  return (
    /* reducedMotion="user" lets every motion prop below fall back to a
       transform-free state for visitors who ask for less animation */
    <MotionConfig reducedMotion="user">
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <style>{`
          /* Idle Ken Burns breathing: animates transform only, so the hover
             scale utility multiplies on top of it instead of fighting it */
          .vendor-kb {
            animation: vendor-kenburns 18s ease-in-out infinite alternate;
          }

          @keyframes vendor-kenburns {
            from {
              transform: scale(1) translate3d(0, 0, 0);
            }
            to {
              transform: scale(1.06) translate3d(-1.5%, -1.5%, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vendor-kb {
              animation: none;
            }
          }
        `}</style>

        <div className="mx-auto max-w-[1440px]">
          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
                <span className="h-[2px] w-6 bg-[#D4145A]" />
                Featured Professionals
              </p>

              <h2 className="font-playfair text-[36px] font-bold leading-tight tracking-tight text-[#30232B]">
                Popular Vendors
              </h2>

              <p className="mt-2 text-[16px] leading-6 text-[#8A7580]">
                Explore trusted event professionals near you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
                      activeFilter === filter
                        ? "border-transparent bg-gradient-to-r from-[#D4145A] to-[#FF7628] text-white"
                        : "border-[#F1DDE5] bg-white text-[#78646E] hover:border-[#D4145A] hover:text-[#D4145A]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <Link
                to="/vendor-categories"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 text-[12px] font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105"
              >
                View All Vendors <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Filtering cross-fades the grid instead of snapping to a new list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {visibleVendors.length > 0
                ? visibleVendors.map((vendor, index) => (
                    <VendorCard key={vendor.id} vendor={vendor} index={index} />
                  ))
                : [1, 2, 3, 4].map((slot) => (
                    <EmptyVendorCard key={slot} category={activeFilter} />
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}
