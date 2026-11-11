
import { ArrowRight, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./MainAnimation";

function VendorRegistrationBanner({
  onVendorLoginClick,
  onVendorRegisterClick,
}) {
  return (
    <section className="px-5 py-6 sm:px-8 lg:px-12">
      <Reveal
        className="mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12"
        style={{
          backgroundImage: `
            linear-gradient(
              112deg,
              rgba(140, 23, 72, 0.72) 35%,
              rgba(212, 20, 90, 0.66) 65%,
              rgba(243, 107, 50, 0.62) 100%
            ),
            url('/party.png')
          `,
        }}
        y={30}
      >
        <Reveal
          className="relative max-w-2xl"
          delay={0.12}
          y={18}
          duration={0.55}
        >
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[1.5px] text-white/80">
            Grow Your Event Business
          </p>

          <h2 className="text-[36px] font-semibold leading-tight tracking-tight">
            Are You an Event Professional?
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/90">
            Showcase your services, connect with potential customers, and grow
            your business with HarEvent.
          </p>

          <p className="mt-2 max-w-xl text-[14px] leading-6 text-white/80">
            Make your work discoverable to people looking for event
            professionals and services.
          </p>
        </Reveal>

        <Reveal
          className="relative mt-7 flex shrink-0 flex-col items-start gap-4 lg:mt-0 lg:items-end"
          delay={0.22}
          y={18}
          duration={0.55}
        >
          {onVendorRegisterClick ? (
            <button
              type="button"
              onClick={onVendorRegisterClick}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#B20F4B] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Store
                size={16}
                className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
              Join as a Vendor
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          ) : (
            <Link
              to="/join-as-vendor"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#B20F4B] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Store
                size={16}
                className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
              Join as a Vendor
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}

          {onVendorLoginClick ? (
            <button
              type="button"
              onClick={onVendorLoginClick}
              className="text-xs font-medium text-white/90 underline decoration-white/50 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
            >
              Already a vendor? Log in
            </button>
          ) : (
            <Link
              to="/vendor-login"
              className="text-xs font-medium text-white/90 underline decoration-white/50 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
            >
              Already a vendor? Log in
            </Link>
          )}
        </Reveal>
      </Reveal>
    </section>
  );
}

export default VendorRegistrationBanner;
