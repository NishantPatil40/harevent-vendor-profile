import { useEffect, useState } from "react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Heart,
  Share2,
  ArrowRight,
  Camera,
  Utensils,
  Music,
  Flower2,
  X,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
  IMPORTANT:
  VendorCard is already created inside PopularVendors.jsx.
  We reuse the exact same component here.
*/
import { VendorCard } from "../components/PopularVendors";

import { getVendorById } from "../data/vendors";

import "./VendorProfile.css";


const tabs = [
  "About Us",
  "Services",
  "Reviews",
];


function QuoteForm({ vendorName, onSubmit }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    budget: "",
    guests: "",
    rooms: "",
    functionType: "Wedding",
    time: "Evening",
    details: "",
  });

  const [errors, setErrors] = useState({});


  const change = (key, value) => {
    setData((old) => ({
      ...old,
      [key]: value,
    }));
  };


  const submit = (e) => {
    e.preventDefault();

    const next = {};

    if (!data.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        data.email
      )
    ) {
      next.email =
        "Enter a valid email address.";
    }

    if (
      !/^[6-9]\d{9}$/.test(
        data.phone
      )
    ) {
      next.phone =
        "Enter a valid 10-digit mobile number.";
    }

    if (!data.date) {
      next.date =
        "Select your event date.";
    }

    if (!data.location.trim()) {
      next.location =
        "Enter your event location.";
    }

    setErrors(next);

    if (!Object.keys(next).length) {
      onSubmit(data);
    }
  };


  return (
    <form
      className="crystal-quote-form"
      onSubmit={submit}
      noValidate
    >

      <h3>
        Get Free Quote
      </h3>

      <p className="crystal-quote-vendor">
        Request pricing from{" "}
        <b>{vendorName}</b>
      </p>


      <div className="crystal-form-fields">

        <label>
          Name

          <input
            value={data.name}
            onChange={(e) =>
              change(
                "name",
                e.target.value
              )
            }
            placeholder="Name"
          />

          {errors.name && (
            <small>
              {errors.name}
            </small>
          )}
        </label>


        <label>
          Email

          <input
            type="email"
            value={data.email}
            onChange={(e) =>
              change(
                "email",
                e.target.value
              )
            }
            placeholder="Email"
          />

          {errors.email && (
            <small>
              {errors.email}
            </small>
          )}
        </label>


        <label>
          Mobile Number

          <input
            inputMode="numeric"
            value={data.phone}
            onChange={(e) =>
              change(
                "phone",
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            placeholder="Mobile Number"
          />

          {errors.phone && (
            <small>
              {errors.phone}
            </small>
          )}
        </label>


        <label>
          Event Date

          <span className="crystal-input-icon">

            <CalendarDays size={17} />

            <input
              type="date"
              min={
                new Date()
                  .toISOString()
                  .slice(0, 10)
              }
              value={data.date}
              onChange={(e) =>
                change(
                  "date",
                  e.target.value
                )
              }
            />

          </span>

          {errors.date && (
            <small>
              {errors.date}
            </small>
          )}
        </label>


        <label>
          Location

          <input
            value={data.location}
            onChange={(e) =>
              change(
                "location",
                e.target.value
              )
            }
            placeholder="Location"
          />

          {errors.location && (
            <small>
              {errors.location}
            </small>
          )}
        </label>


        <label>
          Budget

          <select
            value={data.budget}
            onChange={(e) =>
              change(
                "budget",
                e.target.value
              )
            }
          >
            <option value="">
              Select Budget
            </option>

            <option>
              Below ₹2,00,000
            </option>

            <option>
              ₹2,00,000 – ₹5,00,000
            </option>

            <option>
              ₹5,00,000 – ₹10,00,000
            </option>

            <option>
              Above ₹10,00,000
            </option>
          </select>

        </label>


        <label>
          Number of Guests

          <input
            type="number"
            min="1"
            value={data.guests}
            onChange={(e) =>
              change(
                "guests",
                e.target.value
              )
            }
            placeholder="Number of Guests"
          />
        </label>


        <label>
          No. of Rooms

          <input
            type="number"
            min="0"
            value={data.rooms}
            onChange={(e) =>
              change(
                "rooms",
                e.target.value
              )
            }
            placeholder="No. of rooms"
          />
        </label>

      </div>


      <fieldset>

        <legend>
          Function Type
        </legend>

        <div className="crystal-radio-row">

          {[
            "Pre-Wedding",
            "Wedding",
            "Reception",
            "Other",
          ].map((x) => (

            <label key={x}>

              <input
                type="radio"
                name="functionType"
                checked={
                  data.functionType === x
                }
                onChange={() =>
                  change(
                    "functionType",
                    x
                  )
                }
              />

              {x}

            </label>

          ))}

        </div>

      </fieldset>


      <fieldset>

        <legend>
          Function Time
        </legend>

        <div className="crystal-radio-row">

          {[
            "Evening",
            "Day",
          ].map((x) => (

            <label key={x}>

              <input
                type="radio"
                name="time"
                checked={
                  data.time === x
                }
                onChange={() =>
                  change(
                    "time",
                    x
                  )
                }
              />

              {x}

            </label>

          ))}

        </div>

      </fieldset>


      <label>
        Details about your event

        <textarea
          rows="3"
          value={data.details}
          onChange={(e) =>
            change(
              "details",
              e.target.value
            )
          }
          placeholder="Tell us about your event"
        />

      </label>


      <button
        className="crystal-red-button"
        type="submit"
      >
        Submit
        <ArrowRight size={16} />
      </button>


      <p className="crystal-form-safe">
        Your details are shared securely
        with the vendor.
      </p>

    </form>
  );
}


export default function VendorProfile() {

  const { vendorId } = useParams();

  const navigate = useNavigate();

  const vendor =
    getVendorById(vendorId);


  const [activeTab, setActiveTab] =
    useState("About Us");

  const [saved, setSaved] =
    useState(false);

  const [notice, setNotice] =
    useState("");

  const [photo, setPhoto] =
    useState(null);


  useEffect(() => {

    if (!vendor) {

      navigate(
        "/vendor-categories",
        {
          replace: true,
        }
      );

      return;
    }


    document.title =
      `${vendor.fullName} | HarEvent`;

  }, [vendor, navigate]);


  if (!vendor) {
    return null;
  }


  const requireLogin = (label) => {

    setNotice(
      `${label} requires login. Please sign in to continue.`
    );

    window.setTimeout(
      () => navigate("/login"),
      1100
    );

  };


  const share = async () => {

    try {

      await navigator.clipboard.writeText(
        window.location.href
      );

      setNotice(
        "Vendor profile link copied."
      );

    } catch {

      setNotice(
        "Copy the profile URL from your browser."
      );

    }

  };


  const submit = () =>
    requireLogin(
      "Sending a quote request"
    );


  return (

    <div className="crystal-page">

      <Navbar />


      <main className="crystal-wrap">

        {/* =========================
            BREADCRUMB
        ========================== */}

        <nav className="crystal-breadcrumb">

          <Link to="/">
            Home
          </Link>

          <ChevronRight />

          <Link to="/vendor-categories">
            Vendor Category
          </Link>

          <ChevronRight />

          <Link to="/vendor-categories">
            {vendor.category}
          </Link>

          <ChevronRight />

          <span>
            {vendor.fullName}
          </span>

        </nav>


        {/* =========================
            TOP PROFILE
        ========================== */}

        <section className="vendor-profile-intro">

          {/* SAME HOMEPAGE CARD */}

          <div className="vendor-profile-card-wrap">

            <VendorCard
              vendor={{
                ...vendor,

                inquiryUrl:
                  `/enquiry?vendor=${encodeURIComponent(
                    vendor.businessName
                  )}&category=${encodeURIComponent(
                    vendor.category
                  )}`,

                profileUrl:
                  `/vendor-profile/${vendor.id}`,
              }}

              index={0}

              profileMode
            />

          </div>


          {/* VENDOR INFORMATION */}

          <div className="vendor-profile-overview">

            <div className="vendor-profile-kicker">

              <span className="vendor-profile-line" />

              VERIFIED PROFESSIONAL

            </div>


            <div className="vendor-profile-title-row">

              <div>

                <h1>
                  {vendor.fullName}
                </h1>

                <p>
                  {vendor.category}
                  {" · "}
                  {vendor.location}
                </p>

              </div>


              <span className="crystal-verified">

                <BadgeCheck size={15} />

                Verified

              </span>

            </div>


            <p className="vendor-profile-description">
              {vendor.description}
            </p>


            <div className="vendor-profile-stats">

              <div>
                <span>
                  Starting Price
                </span>

                <b>
                  {vendor.startingPrice}
                </b>
              </div>


              <div>
                <span>
                  Primary Market
                </span>

                <b>
                  {vendor.primaryMarket}
                </b>
              </div>


              <div>
                <span>
                  Reviews
                </span>

                <b>
                  {vendor.rating} / 5
                </b>
              </div>

            </div>


            <div className="vendor-profile-actions">

              <button
                className="vendor-profile-primary"
                onClick={() =>
                  document
                    .querySelector(
                      ".crystal-quote-form"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                }
              >

                Request Pricing

                <ArrowRight size={16} />

              </button>


              <button
                className="vendor-profile-secondary"
                onClick={() =>
                  requireLogin(
                    "Hiring this vendor"
                  )
                }
              >

                <CheckCircle2 size={16} />

                Hire Vendor

              </button>

            </div>


            <div className="vendor-profile-meta">

              <span>

                <Heart
                  size={16}
                  fill={
                    saved
                      ? "#D4145A"
                      : "none"
                  }
                />

                <button
                  onClick={() => {

                    setSaved(!saved);

                    if (!saved) {
                      requireLogin(
                        "Shortlisting this vendor"
                      );
                    }

                  }}
                >
                  {saved
                    ? "Shortlisted"
                    : "Shortlist"}
                </button>

              </span>


              <span>

                <Share2 size={16} />

                <button
                  onClick={share}
                >
                  Share Profile
                </button>

              </span>

            </div>

          </div>

        </section>


        {/* =========================
            LOWER PROFILE CONTENT
        ========================== */}

        <div className="crystal-columns">

          <div className="crystal-left">


            {/* FEATURE IMAGE */}

            <section className="crystal-main-photo">

              <img
                src={vendor.portfolioImage}
                alt={vendor.imageAlt}
              />

              <span className="crystal-featured">
                ✦ HarEvent Featured
              </span>

            </section>


            {/* DETAILS */}

            <section className="crystal-details-card">

              <div className="crystal-tabs">

                {tabs.map((tab) => (

                  <button
                    key={tab}
                    className={
                      activeTab === tab
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveTab(tab)
                    }
                  >
                    {tab}
                  </button>

                ))}

              </div>


              {/* ABOUT */}

              {activeTab === "About Us" && (

                <div className="crystal-tab-content">

                  <h2>
                    About{" "}
                    {vendor.fullName}
                  </h2>

                  <p>
                    {vendor.about}
                  </p>


                  <h3>
                    Location
                  </h3>

                  <p>
                    <b>
                      {vendor.fullName}
                    </b>{" "}
                    is available in{" "}
                    {vendor.location}.
                  </p>


                  <h3>
                    Starting Price
                  </h3>

                  <p>
                    Packages start from{" "}
                    <b>
                      {vendor.priceFrom}
                    </b>{" "}
                    {vendor.priceNote}.
                  </p>

                </div>

              )}


              {/* SERVICES */}

              {activeTab === "Services" && (

                <div className="crystal-tab-content">

                  <h2>
                    Services
                  </h2>

                  <div className="crystal-services">

                    {vendor.services.map(
                      (service, index) => {

                        const icons = [
                          <Camera />,
                          <Flower2 />,
                          <Music />,
                          <Utensils />,
                        ];

                        return (

                          <div
                            key={service}
                          >

                            <span>
                              {
                                icons[
                                  index %
                                  icons.length
                                ]
                              }
                            </span>

                            <b>
                              {service}
                            </b>

                            <p>
                              Professional service
                              packages are available.
                              Contact the vendor for
                              package details.
                            </p>

                          </div>

                        );

                      }
                    )}

                  </div>

                </div>

              )}


              {/* REVIEWS */}

              {activeTab === "Reviews" && (

                <div className="crystal-tab-content">

                  <h2>
                    Customer Reviews
                  </h2>


                  <div className="crystal-review-score">

                    <strong>
                      {vendor.rating}
                    </strong>

                    <span>
                      ★★★★★
                    </span>

                    <small>
                      Based on{" "}
                      {vendor.reviewCount} reviews
                    </small>

                  </div>


                  {[
                    [
                      "Priya Sharma",
                      "Wedding celebration",
                      "Excellent service and beautiful work. The team was professional throughout our event.",
                    ],

                    [
                      "Rahul Mehta",
                      "Reception",
                      "Very good experience. The team understood our requirements and delivered nicely.",
                    ],

                    [
                      "Ananya Verma",
                      "Engagement",
                      "A lovely experience for our family celebration. Highly recommended.",
                    ],

                  ].map((review) => (

                    <article
                      className="crystal-review"
                      key={review[0]}
                    >

                      <b>
                        {review[0]}
                      </b>

                      <span>
                        ★★★★★ ·{" "}
                        {review[1]}
                      </span>

                      <p>
                        {review[2]}
                      </p>

                      <small>

                        <BadgeCheck
                          size={13}
                        />

                        Verified booking

                      </small>

                    </article>

                  ))}

                </div>

              )}

            </section>


            {/* =========================
                GALLERY
            ========================== */}

            <section className="crystal-gallery">

              <h2>
                Portfolio Gallery
              </h2>

              <div>

                {vendor.gallery.map(
                  (src, index) => (

                    <button
                      type="button"
                      key={`${src}-${index}`}
                      onClick={() =>
                        setPhoto(src)
                      }
                    >

                      <img
                        src={src}
                        alt={
                          `${vendor.fullName} portfolio ${index + 1}`
                        }
                        loading="lazy"
                      />

                    </button>

                  )
                )}

              </div>

            </section>

          </div>


          {/* QUOTE */}

          <aside className="crystal-right">

            <div className="crystal-quote-sticky">

              <QuoteForm
                vendorName={
                  vendor.fullName
                }
                onSubmit={submit}
              />


              <div className="crystal-assist">

                <h3>
                  Need help planning?
                </h3>

                <p>
                  Get expert assistance to
                  find the right vendor for
                  your celebration.
                </p>

                <Link to="/contact">

                  Talk to HarEvent

                  <ArrowRight
                    size={14}
                  />

                </Link>

              </div>

            </div>

          </aside>

        </div>

      </main>


      <Footer />


      {/* LIGHTBOX */}

      {photo && (

        <div
          className="crystal-lightbox"
          onClick={() =>
            setPhoto(null)
          }
        >

          <button
            type="button"
            onClick={() =>
              setPhoto(null)
            }
            aria-label="Close"
          >

            <X />

          </button>


          <img
            src={photo}
            alt="Gallery preview"
          />

        </div>

      )}


      {/* NOTICE */}

      {notice && (

        <div
          className="crystal-notice"
          role="status"
        >

          {notice}

          <button
            type="button"
            onClick={() =>
              setNotice("")
            }
          >

            <X size={14} />

          </button>

        </div>

      )}

    </div>
  );
}