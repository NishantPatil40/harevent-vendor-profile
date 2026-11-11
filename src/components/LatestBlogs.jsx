import {
  ArrowRight,
  Camera,
  Clock,
  Landmark,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SectionImage from "./SectionImage";

const MotionLink = motion(Link);

const articles = [
  {
    category: "Photography",
    title: "How to Choose the Right Wedding Photographer",
    description:
      "Learn how to evaluate photography styles, portfolios, experience, and packages to find the right fit for your big day.",
    image: "/Golden Meadow Wedding Photoshoot.png",
    icon: Camera,
    readTime: "5 min read",
  },
  {
    category: "Venue Guide",
    title: "10 Things to Check Before Booking an Event Venue",
    description:
      "From location and capacity to amenities and catering, here's what you should know before finalizing your event venue.",
    image: "/Lavish Red and Gold Wedding Stage.png",
    icon: Landmark,
    readTime: "6 min read",
  },
  {
    category: "Planning Tips",
    title: "How to Plan a Beautiful Event on a Budget",
    description:
      "Discover smart planning ideas, cost-saving tips, and creative ways to make your event special without overspending.",
    image: "/Joyful Indian Wedding Procession.png",
    icon: Lightbulb,
    readTime: "4 min read",
  },
  {
    category: "Mehndi & Rituals",
    title: "Designing a Memorable Mehndi and Haldi Stage",
    description:
      "From floral backdrops and seating to lighting and props, plan the most Instagram-worthy ritual moments of your wedding.",
    image: "/Circle of Henna Hands.png",
    icon: Sparkles,
    readTime: "5 min read",
  },
];

function BlogCard({ article, index }) {
  const { category, title, description, image, icon: Icon, readTime } = article;

  return (
    <MotionLink
      to="/blogs"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group flex min-h-[430px] flex-col overflow-hidden rounded-[15px] bg-white no-underline shadow-[0_2px_10px_rgba(71,34,52,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(212,20,90,0.15)]"
    >
      {/* Cover image */}
      <div className="relative h-[205px] shrink-0 overflow-hidden">
        <SectionImage
          src={image}
          alt={title}
          icon={Icon}
          className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.08] motion-reduce:transition-none"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a1220]/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex min-h-0 grow flex-col p-5">
        <span className="inline-flex w-fit items-center gap-[7px] rounded-full bg-[#FFF0F5] px-[11px] py-[5px] font-poppins text-[10.5px] font-bold uppercase tracking-[0.13em] text-[#D4145A] transition-colors duration-300 group-hover:bg-[#FFE3EC]">
          <Icon size={12} strokeWidth={2.4} />
          {category}
        </span>

        <h3 className="mt-[13px] font-playfair text-[19.5px] font-bold leading-[1.32] tracking-[-0.2px] text-[#26233c]">
          {title}
        </h3>

        <span className="mt-[10px] block h-[2px] w-[34px] rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] transition-all duration-500 ease-out group-hover:w-[62px]" />

        <p className="mt-[11px] line-clamp-3 font-poppins text-[13px] leading-[1.62] text-[#897A81]">
          {description}
        </p>

        {/* Meta footer */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#F5E9EE] pt-[13px]">
          <span className="flex items-center gap-[6px] font-poppins text-[12px] font-medium whitespace-nowrap text-[#9A8A91]">
            <Clock size={12.5} strokeWidth={2.2} />
            {readTime}
          </span>

          <span className="flex items-center gap-[5px] font-poppins text-[12.5px] font-bold whitespace-nowrap text-[#D4145A] transition-colors duration-300 group-hover:text-[#D4145A]">
            Read Article
            <ArrowRight
              size={13}
              strokeWidth={2.6}
              className="transition-transform duration-300 ease-out group-hover:translate-x-[4px] motion-reduce:transition-none"
            />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}

function LatestBlogs() {
  return (
    <section className="bg-[#fef0e1] px-5 py-8 sm:px-8 lg:px-[30px] lg:py-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="min-w-0">
            <p className="mb-1 text-[13px] font-bold uppercase tracking-[0.5px] text-[#D4145A]">
              Guides & Inspiration
            </p>
            <h2 className="!font-playfair !text-[36px] !font-bold !leading-[1.2] !tracking-[-0.5px] !text-[#292329]">
              Latest From HarEvent
            </h2>
            <p className="mt-1 !text-[16px] !leading-6 !text-[#75656C] xl:whitespace-nowrap">
              Get inspired with practical planning tips, creative ideas, and
              helpful insights for your next celebration.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-4 !text-[12px] !font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105"
          >
            Explore All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {articles.map((article, index) => (
            <BlogCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
