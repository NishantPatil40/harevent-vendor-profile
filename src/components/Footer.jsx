import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaChevronRight,
  FaLink,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Reveal } from "./MainAnimation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Event Planner", href: "/event-planners" },
  { label: "Event Category", href: "/event-categories" },
  { label: "Vendor Category", href: "/vendor-categories" },
  { label: "Blogs", href: "/blogs" },
];

const companyLinks = [
  { label: "About HarEvent", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const vendorLinks = [
  { label: "Join as Vendor", href: "/join-as-vendor" },
  { label: "Vendor Login", href: "/vendor-login" },
  { label: "Vendor Registration", href: "/vendor-registration" },
  { label: "Partner Guidelines", href: "/partner-guidelines" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/harevent_20/?hl=en",
    Icon: FaInstagram,
  },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: FaYoutube },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harevent-company-20772a428/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593053192328",
    Icon: FaFacebookF,
  },
];

function FooterLinkColumn({ title, links, Icon }) {
  return (
    <div className="group min-w-0">
      {/* Icon sits inline, in front of the heading */}
      <div className="flex items-center gap-[9px]">
        <Icon className="block h-[19px] w-[19px] shrink-0 text-[#D4145A] transition-transform duration-300 group-hover:-translate-y-[2px]" />

        <h3 className="font-playfair text-[21px] font-bold leading-[1.3] text-[#26233c]">
          {title}
        </h3>
      </div>

      <span className="mt-[8px] block h-[2px] w-[44px] rounded-full bg-[#D4145A] transition-[width] duration-300 ease-out group-hover:w-[68px]" />

      <ul className="mt-[18px] flex list-none flex-col gap-[13px] p-0">
        {links.map((link) => (
          <li key={link.label} className="min-w-0">
            <Link
              to={link.href}
              className="group flex items-center justify-between gap-[10px] font-poppins text-[14.5px] font-normal leading-[1.4] text-[#5c5866] no-underline transition-colors duration-200 ease-in-out hover:text-[#D4145A]"
            >
              <span className="min-w-0 truncate">{link.label}</span>
              <FaChevronRight className="h-[11px] w-[11px] shrink-0 text-[#D4145A] transition-transform duration-200 ease-in-out group-hover:translate-x-[3px]" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full font-poppins motion-reduce:[&_*]:transition-none">
      <div className="border-t-[3px] border-[#f6a95f] bg-[#fef0e1]">
        <Reveal
          className="mx-auto grid w-full max-w-[1600px] grid-cols-[1.5fr_1fr_1fr_1fr] items-start gap-x-[52px] px-[5.3%] pb-[44px] pt-[12px] max-[1100px]:grid-cols-[1.4fr_1fr_1fr] max-[1100px]:gap-x-[30px] max-[1100px]:px-[5%] max-[860px]:grid-cols-[1fr_1fr] max-[860px]:gap-x-[26px] max-[860px]:gap-y-[34px] max-[860px]:px-[6%] max-[860px]:pb-[36px] max-[860px]:pt-[34px] max-[540px]:grid-cols-1 max-[540px]:gap-y-[30px]"
          y={24}
          duration={0.7}
        >
          {/* Brand column */}
          <div className="min-w-0 max-[1100px]:col-span-3 max-[540px]:col-span-1">
            <Link
              to="/"
              aria-label="HarEvent Home"
              className="mb-[4px] flex items-start max-w-full -ml-[15px] translate-y-[8px] max-[540px]:-ml-[9px]"
            >
              <img
                src="/logo.png"
                alt="HarEvent Logo"
                className="block h-[116px] w-[116px] shrink-0 object-contain mix-blend-multiply contrast-[1.25] max-[540px]:h-[66px] max-[540px]:w-[66px]"
              />
            </Link>

            <h2 className="max-w-[340px] font-playfair text-[23px] font-bold leading-[1.35] text-[#26233c] max-[540px]:text-[21px]">
              One Platform  Every Event
              <br />
              Every Vendor.
            </h2>

            <p className="mt-[12px] max-w-[345px] font-poppins text-[13.5px] leading-[1.6] text-[#5c5866]">
              HarEvent helps customers discover event professionals and
              services for weddings, celebrations, corporate functions, and
              special occasions.
            </p>

            <div
              className="mt-[18px] flex items-center gap-[10px]"
              aria-label="Social media links"
            >
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4145A] to-[#FF7628] text-white no-underline transition-[transform,box-shadow,filter] duration-200 ease-in-out hover:-translate-y-[3px] hover:brightness-110 hover:shadow-[0_5px_12px_rgba(120,10,60,0.25)]"
                >
                  <Icon className="block h-[15px] w-[15px]" />
                </a>
              ))}
            </div>

            <div className="mt-[20px] flex flex-wrap items-center gap-[10px]">
              <span className="inline-flex min-h-[30px] items-center justify-center gap-[7px] rounded-[30px] border border-[#e3c98b] bg-[#fdf6e9] px-[14px] py-[6px] font-poppins text-[11.5px] font-semibold leading-[1.2] whitespace-nowrap text-[#D4145A]">
                <FaShieldAlt className="h-[12px] w-[12px] shrink-0" />
                100% VERIFIED
              </span>

              <span className="inline-flex min-h-[30px] items-center justify-center gap-[7px] rounded-[30px] bg-[#fce3ea] px-[14px] py-[6px] font-poppins text-[11.5px] font-semibold leading-[1.2] whitespace-nowrap text-[#D4145A]">
                <FaMapMarkerAlt className="h-[12px] w-[12px] shrink-0" />
                PAN INDIA
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="min-w-0 border-l border-[#ecd9c6] pl-[38px] self-center max-[1100px]:col-start-2 max-[1100px]:row-start-2 max-[860px]:border-l-0 max-[860px]:pl-0">
            <FooterLinkColumn
              title="Quick Links"
              links={quickLinks}
              Icon={FaLink}
            />
          </div>

          <div className="min-w-0 border-l border-[#ecd9c6] pl-[38px] self-center min-[1100px]:-translate-y-[16px] max-[1100px]:border-l-0 max-[1100px]:pl-0 max-[860px]:border-l-0 max-[860px]:pl-0">
            <FooterLinkColumn
              title="Company"
              links={companyLinks}
              Icon={FaBuilding}
            />
          </div>

          <div className="min-w-0 border-l border-[#ecd9c6] pl-[38px] self-center min-[1100px]:-translate-y-[16px] max-[1100px]:col-start-1 max-[1100px]:row-start-3 max-[1100px]:col-span-3 max-[1100px]:border-l-0 max-[1100px]:pl-0 max-[860px]:col-start-2 max-[860px]:row-start-auto max-[860px]:col-span-1 max-[540px]:col-start-1 max-[540px]:col-span-1">
            <FooterLinkColumn
              title="For Vendors"
              links={vendorLinks}
              Icon={FaUsers}
            />
          </div>
        </Reveal>

        {/* Copyright bar */}
        <div className="bg-[#ffffff] px-[16px] py-[16px] text-center font-poppins text-[13.5px] font-medium leading-[1.5] text-black max-[540px]:text-[11.5px]">
          © 2026 HarEvent India Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
