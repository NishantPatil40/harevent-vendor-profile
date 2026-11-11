
import {
  Search,
  Scale,
  MessagesSquare,
  CalendarCheck,
  PartyPopper,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "SEARCH",
    description:
      "Find top-rated event professionals filtered by occasion, services, and location.",
    icon: Search,
  },
  {
    number: "02",
    title: "COMPARE",
    description:
      "Explore real portfolios, verified customer reviews, and clear transparent pricing.",
    icon: Scale,
  },
  {
    number: "03",
    title: "CONNECT",
    description:
      "Directly communicate with vendors to discuss your creative ideas and vision.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "BOOK",
    description:
      "Confirm your dates, select customized service packages, and book with ease.",
    icon: CalendarCheck,
  },
  {
    number: "05",
    title: "CELEBRATE",
    description:
      "Relax and experience a flawlessly executed celebration to cherish forever.",
    icon: PartyPopper,
    isFinal: true,
  },
];

export default function HowItWorks() {

  return (
    <section className="relative w-full pt-6 overflow-hidden bg-[#fef0e1] px-4 pt-0 pb-12 font-poppins sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      {/* Soft ambient background orbs */}
      <div className="pointer-events-none absolute -left-28 top-10 -z-10 h-72 w-72 rounded-full bg-pink-200/40 blur-[90px]" />
      <div className="pointer-events-none absolute -right-28 bottom-20 -z-10 h-80 w-80 rounded-full bg-orange-200/40 blur-[90px]" />

      <div className="mx-auto w-full max-w-[1360px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-playfair text-[36px] font-bold leading-tight tracking-tight text-[#24151B]">
            How HarEvent Works
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-[16px] leading-relaxed text-[#776c74]">
            Planning your dream celebration starts with the right connections.
            Discover, compare, and book trusted professionals in 5 simple
            steps.
          </p>
        </motion.div>

        {/* 5 Process Cards Grid */}
        <div className="relative mx-auto mt-12 w-full max-w-[1280px]">
          {/* Subtle horizontal track that draws itself behind the cards */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-[10%] right-[10%] top-[4.5rem] hidden h-[2px] origin-left bg-gradient-to-r from-[#D4145A]/20 to-[#FF7628]/25 lg:block"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/90 bg-white/85 p-6 text-center shadow-[0_10px_28px_rgba(212,20,90,0.06)] backdrop-blur-md transition-[border-color,background-color,box-shadow,translate] duration-300 hover:-translate-y-2 hover:border-[#D4145A]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(212,20,90,0.15)]"
                >
                  {/* Step Pill */}
                  <span className="mb-4 inline-flex items-center gap-1 rounded-full border border-[#D4145A]/15 bg-gradient-to-r from-[#D4145A]/8 to-[#FF7628]/8 px-3 py-0.5 text-[11px] font-bold tracking-wider text-[#D4145A] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-from-[#D4145A] group-to-[#FF7628] group-hover:text-black">
                    STEP {step.number}
                  </span>

                  {/* Icon Container with glowing micro-interaction */}
                  <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
                    {/* Radial hover glow */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4145A] to-[#FF7628] opacity-0 blur-lg transition-all duration-300 group-hover:scale-125 group-hover:opacity-40" />

                    {/* Gradient icon box */}
                    <span
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                        step.isFinal
                          ? "bg-gradient-to-br from-[#D4145A] to-[#FF7628] shadow-[#D4145A]/30"
                          : "bg-gradient-to-br from-[#D4145A] to-[#FF7628] shadow-[#D4145A]/30"
                      }`}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-poppins text-[15px] font-bold tracking-wider text-[#24151B] transition-colors duration-200 group-hover:text-[#D4145A] sm:text-[16px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[13px] font-normal leading-[1.6] text-[#776c74]">
                    {step.description}
                  </p>

                  {/* Next Step Arrow Connector for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute -right-3.5 top-[4.5rem] z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white shadow-md transition-transform duration-300 group-hover:translate-x-1 lg:flex">
                      <ChevronRight size={15} strokeWidth={2.5} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}