import { useState } from "react";
import { ArrowRight, ChevronDown, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./MainAnimation";

const EASE_OUT = [0.22, 1, 0.36, 1];

const questions = [
  {
    question: "What is HarEvent?",
    answer:
      "HarEvent helps you discover event professionals and services for weddings, birthdays, corporate events, and other celebrations.",
  },
  {
    question: "How do I find the right vendor for my event?",
    answer:
      "Choose an event or vendor category, explore the available service information, and contact professionals who match your requirements.",
  },
  {
    question: "Can I compare vendors before contacting them?",
    answer:
      "You can review the business details, services, portfolio, location, and other information provided on vendor profiles before reaching out.",
  },
  {
    question: "Are vendor ratings and verification badges shown?",
    answer:
      "Ratings and verification badges are shown only when the relevant verified information is available. HarEvent does not display fabricated ratings or verification claims.",
  },
  {
    question: "How can I list my event business on HarEvent?",
    answer:
      "Event professionals can use the Join as a Vendor link to get started with the vendor registration process.",
  },
];

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="bg-[#FFFAFC] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-9 text-center" y={20}>
          <span className="animate-float-soft mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D4145A] shadow-sm ring-1 ring-[#F5DCE6]">
            <CircleHelp size={23} />
          </span>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
            Need a Little Help?
          </p>
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight text-[#30232B]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[16px] leading-6 text-[#8A7580]">
            Helpful answers for planning your event and discovering the right professionals.
          </p>
        </Reveal>

        <div className="space-y-3">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: EASE_OUT,
                }}
                className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ${
                  isOpen
                    ? "border-[#F0B7CC] shadow-[0_8px_24px_rgba(212,20,90,0.08)]"
                    : "border-[#F1DDE5] hover:border-[#E9B4C7]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-[#382832] sm:px-6"
                >
                  <span className="flex items-center gap-4">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white"
                        : "bg-[#FFF0F5] text-[#D4145A]"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {question}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    isOpen ? "bg-[#FFF0F5] text-[#D4145A]" : "bg-[#F8F3F5] text-[#8A7580]"
                  }`}>
                    <ChevronDown
                      size={17}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.36, ease: EASE_OUT }}
                      className="overflow-hidden"
                    >
                      <div
                        id={answerId}
                        className="ml-[4.25rem] mr-5 border-t border-[#F7E8EE] py-4 text-sm leading-6 text-[#8A7580] sm:mr-6"
                      >
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <Reveal className="mt-7" delay={0.15} y={18}>
          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#F5DCE6] bg-white px-5 py-4 text-center transition-shadow duration-300 hover:shadow-[0_10px_26px_rgba(212,20,90,0.08)] sm:flex-row sm:text-left">
            <p className="text-sm text-[#78646E]">
              Still have questions? We&apos;re happy to help.
            </p>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#D4145A] transition hover:text-[#A80F46]"
            >
              Contact Us
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
