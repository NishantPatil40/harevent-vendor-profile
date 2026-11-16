import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  Phone,
  Share2,
  Star,
  Users,
  Utensils,
  Wifi,
  Car,
  ShieldCheck,
  Sparkles,
  X,
  Building2,
  Camera,
  Music,
  Flower2,
  CircleParking,
  BedDouble,
  MoreHorizontal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getVendorById, vendors } from "../data/vendors";
import "./VendorProfile.css";

const tabs = [
  "Overview",
  "Pricing & Packages",
  "Services",
  "Amenities",
  "Photos",
  "Reviews",
];

const defaultAmenities = [
  { label: "Professional Service", icon: CheckCircle2 },
  { label: "Verified Vendor", icon: ShieldCheck },
  { label: "Flexible Packages", icon: Sparkles },
  { label: "Event Support", icon: Users },
  { label: "Parking Available", icon: Car },
  { label: "Wi-Fi", icon: Wifi },
  { label: "On-site Assistance", icon: Building2 },
  { label: "More", icon: MoreHorizontal },
];

function QuoteForm({ vendor, onSubmit }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "Wedding",
    guests: "",
    budget: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setData((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    const next = {};

    if (!data.name.trim()) {
      next.name = "Enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email.";
    }

    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!data.date) {
      next.date = "Select event date.";
    }

    if (!data.guests) {
      next.guests = "Select guests.";
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      onSubmit(data);
    }
  };

  return (
    <form className="he-quote-card" onSubmit={submit} noValidate>
      <div className="he-quote-header">
        <h3>Get Free Quote</h3>

        <p>
          Request pricing from{" "}
          <strong>{vendor.fullName}</strong>
        </p>
      </div>

      <div className="he-quote-body">
        <div className="he-form-grid">
          <label>
            Name
            <input
              type="text"
              placeholder="Your name"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
            />
            {errors.name && (
              <small className="he-error">{errors.name}</small>
            )}
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
            />
            {errors.email && (
              <small className="he-error">{errors.email}</small>
            )}
          </label>

          <label>
            Mobile Number
            <input
              type="tel"
              inputMode="numeric"
              maxLength="10"
              placeholder="10-digit mobile number"
              value={data.phone}
              onChange={(e) =>
                update(
                  "phone",
                  e.target.value.replace(/\D/g, "").slice(0, 10)
                )
              }
            />
            {errors.phone && (
              <small className="he-error">{errors.phone}</small>
            )}
          </label>

          <label>
            Event Date
            <div className="he-input-icon">
              <CalendarDays size={16} />
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </div>

            {errors.date && (
              <small className="he-error">{errors.date}</small>
            )}
          </label>

          <label>
            Event Type
            <select
              value={data.eventType}
              onChange={(e) => update("eventType", e.target.value)}
            >
              <option>Wedding</option>
              <option>Reception</option>
              <option>Engagement</option>
              <option>Pre-Wedding</option>
              <option>Birthday</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Number of Guests
            <select
              value={data.guests}
              onChange={(e) => update("guests", e.target.value)}
            >
              <option value="">Select Guests</option>
              <option>Below 50</option>
              <option>50 - 100</option>
              <option>100 - 250</option>
              <option>250 - 500</option>
              <option>500 - 1000</option>
              <option>1000+</option>
            </select>

            {errors.guests && (
              <small className="he-error">{errors.guests}</small>
            )}
          </label>
        </div>

        <label className="he-full-field">
          Your Budget
          <select
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Select Budget</option>
            <option>Below ₹50,000</option>
            <option>₹50,000 - ₹1 Lakh</option>
            <option>₹1 Lakh - ₹3 Lakh</option>
            <option>₹3 Lakh - ₹5 Lakh</option>
            <option>Above ₹5 Lakh</option>
          </select>
        </label>

        <label className="he-full-field">
          Tell us about your event
          <textarea
            rows="3"
            placeholder="Tell us about your event..."
            value={data.details}
            onChange={(e) => update("details", e.target.value)}
          />
        </label>

        <button className="he-main-gradient-button" type="submit">
          Check Availability
          <ArrowRight size={17} />
        </button>

        <p className="he-secure-note">
          <Check size={13} />
          Your details are shared securely with the vendor.
        </p>
      </div>
    </form>
  );
}

export default function VendorProfile() {
  const { vendorId } = useParams();
  const navigate = useNavigate();

  const vendor = getVendorById(vendorId);

  const [activeTab, setActiveTab] = useState("Overview");
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);
  const [notice, setNotice] = useState("");
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (vendor) {
      document.title = `${vendor.fullName} | HarEvent`;
    }
  }, [vendor]);

  const gallery = useMemo(() => {
    if (!vendor) return [];

    const images = [
      vendor.portfolioImage,
      ...(vendor.gallery || []),
    ];

    return [...new Set(images.filter(Boolean))];
  }, [vendor]);

  const similarVendors = useMemo(() => {
    if (!vendor) return [];

    return vendors
      .filter(
        (item) =>
          item.id !== vendor.id &&
          item.filterCategory === vendor.filterCategory
      )
      .slice(0, 3);
  }, [vendor]);

  const showNotice = (message) => {
    setNotice(message);

    window.setTimeout(() => {
      setNotice("");
    }, 2800);
  };

  const requireLogin = (action) => {
    showNotice(`${action} requires login. Redirecting...`);

    window.setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: vendor.fullName,
          text: `Check out ${vendor.fullName} on HarEvent.`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showNotice("Profile link copied.");
      }
    } catch {
      showNotice("Profile link is ready to share.");
    }
  };

  const scrollToQuote = () => {
    document
      .getElementById("quote-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleQuoteSubmit = () => {
    requireLogin("Submitting your quote request");
  };

  const handleCall = () => {
    window.location.href = "tel:+917448181396";
  };

  if (!vendor) {
    return (
      <>
        <Navbar />

        <div className="he-not-found">
          <h1>Vendor Not Found</h1>

          <p>
            The vendor you are looking for does not exist.
          </p>

          <Link to="/" className="he-main-gradient-button">
            Back to Home
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  const priceRows =
    vendor.filterCategory === "Photography"
      ? [
          ["Candid Photography", "Included"],
          ["Cinematic Wedding Films", "Custom"],
          ["Pre-Wedding Shoot", "Custom"],
          ["Traditional Photography", "Custom"],
          ["Full Event Package", vendor.startingPrice],
        ]
      : [
          ["Basic Package", vendor.startingPrice],
          ["Standard Package", "Custom"],
          ["Premium Package", "Custom"],
          ["Custom Package", "Contact Vendor"],
        ];

  return (
    <div className="he-profile-page">
      <Navbar />

      <main className="he-profile-container">
        {/* Breadcrumb */}
        <nav className="he-breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={15} />

          <Link to="/vendor-categories">
            Vendor Category
          </Link>

          <ChevronRight size={15} />

          <Link to="/vendor-categories">
            {vendor.category}
          </Link>

          <ChevronRight size={15} />

          <span>{vendor.fullName}</span>
        </nav>

        {/* =========================================
            HERO PROFILE SECTION
        ========================================= */}
        <section className="he-profile-hero">
          {/* LEFT - IMAGE GALLERY */}
          <div className="he-gallery-area">
            <div className="he-main-gallery">
              <img
                src={gallery[activeImage]}
                alt={vendor.imageAlt}
                onError={(e) => {
                  e.currentTarget.src = "/preview.png";
                }}
              />

              <div className="he-verified-badge">
                <BadgeCheck size={17} />
                HarEvent Verified
              </div>

              {gallery.length > 1 && (
                <>
                  <button
                    className="he-gallery-arrow he-gallery-left"
                    onClick={() =>
                      setActiveImage(
                        (activeImage - 1 + gallery.length) %
                          gallery.length
                      )
                    }
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    className="he-gallery-arrow he-gallery-right"
                    onClick={() =>
                      setActiveImage(
                        (activeImage + 1) % gallery.length
                      )
                    }
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            <div className="he-thumbnail-row">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  className={`he-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${vendor.fullName} ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/preview.png";
                    }}
                  />
                </button>
              ))}

              <button
                className="he-view-all-photos"
                onClick={() => {
                  setActiveTab("Photos");
                  document
                    .getElementById("details-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                <Camera size={18} />
                <span>View All</span>
              </button>
            </div>
          </div>

          {/* RIGHT - VENDOR SUMMARY */}
          <div className="he-vendor-summary">
            <div className="he-summary-top">
              <div>
                <div className="he-small-label">
                  <span />
                  VERIFIED PROFESSIONAL
                </div>

                <h1>{vendor.fullName}</h1>

                <div className="he-rating-line">
                  <span className="he-stars">
                    <Star size={16} fill="currentColor" />
                  </span>

                  <strong>{vendor.rating}</strong>

                  <span>
                    ({vendor.reviewCount} Reviews)
                  </span>
                </div>
              </div>

              <button
                className={`he-heart-button ${
                  saved ? "saved" : ""
                }`}
                onClick={() => {
                  if (!saved) {
                    requireLogin("Shortlisting this vendor");
                  }

                  setSaved(!saved);
                }}
                aria-label="Shortlist vendor"
              >
                <Heart
                  size={22}
                  fill={saved ? "currentColor" : "none"}
                />
              </button>
            </div>

            <div className="he-location-line">
              <MapPin size={18} />

              <span>{vendor.location}</span>

              <button
                onClick={() =>
                  showNotice("Map location feature opened.")
                }
              >
                View on Map
              </button>
            </div>

            <div className="he-tag-row">
              <span>{vendor.category}</span>
              <span>Verified Vendor</span>
              <span>Professional</span>
            </div>

            <div className="he-feature-list">
              <div>
                <Users size={18} />
                <span>Professional event service</span>
              </div>

              <div>
                <Camera size={18} />
                <span>Portfolio available</span>
              </div>

              <div>
                <Clock3 size={18} />
                <span>Flexible event packages</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Verified on HarEvent</span>
              </div>
            </div>

            <div className="he-summary-actions">
              <button
                className="he-primary-action"
                onClick={scrollToQuote}
              >
                Request Pricing
                <ArrowRight size={17} />
              </button>

              <button
                className="he-secondary-action"
                onClick={() =>
                  requireLogin("Hiring this vendor")
                }
              >
                <CheckCircle2 size={17} />
                Hire Vendor
              </button>
            </div>

            <div className="he-small-actions">
              <button
                onClick={() => {
                  if (!saved) {
                    requireLogin("Shortlisting this vendor");
                  }

                  setSaved(!saved);
                }}
              >
                <Heart
                  size={17}
                  fill={saved ? "currentColor" : "none"}
                />
                {saved ? "Shortlisted" : "Shortlist"}
              </button>

              <button onClick={handleShare}>
                <Share2 size={17} />
                Share Profile
              </button>
            </div>
          </div>
        </section>

        {/* =========================================
            QUICK INFORMATION STRIP
        ========================================= */}
        <section className="he-quick-stats">
          <div>
            <Users />
            <div>
              <strong>500+</strong>
              <span>Happy Clients</span>
            </div>
          </div>

          <div>
            <Star />
            <div>
              <strong>{vendor.rating}</strong>
              <span>Average Rating</span>
            </div>
          </div>

          <div>
            <Camera />
            <div>
              <strong>100+</strong>
              <span>Events Covered</span>
            </div>
          </div>

          <div>
            <MapPin />
            <div>
              <strong>{vendor.primaryMarket}</strong>
              <span>Primary Market</span>
            </div>
          </div>

          <div>
            <CheckCircle2 />
            <div>
              <strong>Verified</strong>
              <span>HarEvent Vendor</span>
            </div>
          </div>
        </section>

        {/* =========================================
            MAIN CONTENT + SIDEBAR
        ========================================= */}
        <div className="he-content-layout">
          <div className="he-main-content" id="details-section">
            {/* TABS */}
            <div className="he-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={
                    activeTab === tab ? "active" : ""
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* OVERVIEW */}
            {activeTab === "Overview" && (
              <section className="he-section-card">
                <div className="he-about-grid">
                  <div>
                    <h2>About {vendor.fullName}</h2>

                    <p>{vendor.about}</p>

                    <p>
                      {vendor.fullName} provides professional{" "}
                      {vendor.category.toLowerCase()} services
                      for weddings and celebrations. The team
                      focuses on quality, communication and
                      creating memorable experiences for every
                      event.
                    </p>

                    <button
                      className="he-text-button"
                      onClick={() =>
                        showNotice("Full vendor information is shown on this profile.")
                      }
                    >
                      Read More
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <div className="he-verification-card">
                    <div className="he-verification-title">
                      <BadgeCheck size={19} />
                      HarEvent Verified
                    </div>

                    <div>
                      <CheckCircle2 size={16} />
                      Business Verified
                    </div>

                    <div>
                      <CheckCircle2 size={16} />
                      Contact Verified
                    </div>

                    <div>
                      <CheckCircle2 size={16} />
                      Photos Verified
                    </div>

                    <div>
                      <CheckCircle2 size={16} />
                      Pricing Updated
                    </div>

                    <div>
                      <CheckCircle2 size={16} />
                      Reviews Verified
                    </div>

                    <small>
                      Verified profile on HarEvent
                    </small>
                  </div>
                </div>

                {/* PRICING */}
                <div className="he-subsection">
                  <h2>Pricing (Starting From)</h2>

                  <div className="he-pricing-layout">
                    <div className="he-pricing-table">
                      <div className="he-price-row he-price-heading">
                        <span>Package / Service</span>
                        <span>Starting From</span>
                      </div>

                      {priceRows.map(([name, price]) => (
                        <div
                          className="he-price-row"
                          key={name}
                        >
                          <span>{name}</span>
                          <strong>{price}</strong>
                        </div>
                      ))}

                      <button
                        className="he-outline-button"
                        onClick={scrollToQuote}
                      >
                        View Full Price Details
                        <ArrowRight size={15} />
                      </button>
                    </div>

                    {/* AMENITIES */}
                    <div className="he-amenities">
                      <h3>Amenities & Facilities</h3>

                      <div className="he-amenity-grid">
                        {defaultAmenities.map(
                          ({ label, icon: Icon }) => (
                            <button
                              key={label}
                              onClick={() =>
                                showNotice(
                                  `${label} available with this vendor.`
                                )
                              }
                            >
                              <Icon size={20} />
                              <span>{label}</span>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURED PORTFOLIO */}
                <div className="he-subsection">
                  <div className="he-section-heading">
                    <div>
                      <h2>Portfolio Highlights</h2>
                      <p>
                        Explore work from {vendor.fullName}.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab("Photos");
                        window.scrollTo({
                          top:
                            document.getElementById(
                              "details-section"
                            )?.offsetTop || 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      View All
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="he-portfolio-row">
                    {gallery.slice(0, 4).map((image, index) => (
                      <button
                        key={image}
                        onClick={() => {
                          setActiveImage(index);
                          setLightbox(true);
                        }}
                      >
                        <img
                          src={image}
                          alt={`${vendor.fullName} portfolio`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PRICING */}
            {activeTab === "Pricing & Packages" && (
              <section className="he-section-card">
                <div className="he-section-heading">
                  <div>
                    <h2>Pricing & Packages</h2>
                    <p>
                      Packages shown below are starting prices.
                    </p>
                  </div>
                </div>

                <div className="he-big-price">
                  <span>Starting From</span>
                  <strong>{vendor.startingPrice}</strong>
                  <p>
                    Final pricing depends on event type,
                    requirements and package selection.
                  </p>
                </div>

                <div className="he-package-grid">
                  {priceRows.map(([name, price], index) => (
                    <div className="he-package-card" key={name}>
                      <div className="he-package-icon">
                        {index === 0 ? (
                          <Camera />
                        ) : index === 1 ? (
                          <Sparkles />
                        ) : index === 2 ? (
                          <Flower2 />
                        ) : (
                          <Star />
                        )}
                      </div>

                      <h3>{name}</h3>

                      <strong>{price}</strong>

                      <p>
                        Customised according to your
                        celebration requirements.
                      </p>

                      <button onClick={scrollToQuote}>
                        Request Details
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SERVICES */}
            {activeTab === "Services" && (
              <section className="he-section-card">
                <h2>Services Offered</h2>

                <div className="he-service-grid">
                  {vendor.services.map((service, index) => {
                    const ServiceIcon =
                      [
                        Camera,
                        Music,
                        Flower2,
                        Utensils,
                      ][index % 4];

                    return (
                      <div
                        className="he-service-card"
                        key={service}
                      >
                        <div className="he-service-icon">
                          <ServiceIcon size={22} />
                        </div>

                        <h3>{service}</h3>

                        <p>
                          Professional service available
                          as part of customised event
                          packages.
                        </p>

                        <button
                          onClick={scrollToQuote}
                        >
                          Ask for Details
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* AMENITIES */}
            {activeTab === "Amenities" && (
              <section className="he-section-card">
                <h2>Amenities & Facilities</h2>

                <div className="he-large-amenity-grid">
                  {defaultAmenities.map(
                    ({ label, icon: Icon }) => (
                      <button
                        key={label}
                        onClick={() =>
                          showNotice(
                            `${label} information selected.`
                          )
                        }
                      >
                        <span>
                          <Icon size={23} />
                        </span>

                        <strong>{label}</strong>

                        <small>
                          Available / subject to package
                        </small>
                      </button>
                    )
                  )}
                </div>
              </section>
            )}

            {/* PHOTOS */}
            {activeTab === "Photos" && (
              <section className="he-section-card">
                <div className="he-section-heading">
                  <div>
                    <h2>Portfolio Gallery</h2>
                    <p>
                      Selected work from{" "}
                      {vendor.fullName}.
                    </p>
                  </div>
                </div>

                <div className="he-full-gallery">
                  {gallery.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => {
                        setActiveImage(index);
                        setLightbox(true);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${vendor.fullName} gallery ${index + 1}`}
                        onError={(e) => {
                          e.currentTarget.src = "/preview.png";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* REVIEWS */}
            {activeTab === "Reviews" && (
              <section className="he-section-card">
                <div className="he-review-header">
                  <div className="he-review-big">
                    <strong>{vendor.rating}</strong>

                    <div className="he-review-stars">
                      ★★★★★
                    </div>

                    <span>
                      {vendor.reviewCount} Reviews
                    </span>
                  </div>

                  <div className="he-review-bars">
                    {[
                      ["Quality", "95%"],
                      ["Service", "92%"],
                      ["Communication", "94%"],
                      ["Value", "90%"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <span>{label}</span>

                        <div className="he-bar">
                          <span
                            style={{ width: value }}
                          />
                        </div>

                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="he-review-list">
                  {[
                    {
                      name: "Priya & Rohit",
                      title: "Wedding",
                      text:
                        "The team was professional, creative and very easy to coordinate with. We loved the final result.",
                    },
                    {
                      name: "Ananya Sharma",
                      title: "Engagement",
                      text:
                        "Great communication and beautiful work. Everything was handled smoothly from start to finish.",
                    },
                    {
                      name: "Rahul Mehta",
                      title: "Reception",
                      text:
                        "Very good service and attention to detail. Would definitely recommend this vendor.",
                    },
                  ].map((review) => (
                    <article
                      className="he-review-card"
                      key={review.name}
                    >
                      <div className="he-review-person">
                        <div>
                          {review.name.charAt(0)}
                        </div>

                        <section>
                          <strong>{review.name}</strong>

                          <span>
                            ★★★★★ · {review.title}
                          </span>
                        </section>
                      </div>

                      <p>{review.text}</p>

                      <small>
                        <BadgeCheck size={14} />
                        Verified customer review
                      </small>
                    </article>
                  ))}
                </div>

                <button
                  className="he-main-gradient-button he-review-button"
                  onClick={() =>
                    requireLogin("Writing a review")
                  }
                >
                  Write a Review
                  <ArrowRight size={16} />
                </button>
              </section>
            )}
          </div>

          {/* =========================================
              RIGHT SIDEBAR
          ========================================= */}
          <aside className="he-sidebar">
            <div id="quote-section">
              <QuoteForm
                vendor={vendor}
                onSubmit={handleQuoteSubmit}
              />
            </div>

            {/* Location */}
            <div className="he-sidebar-card">
              <div className="he-sidebar-card-header">
                <h3>Location</h3>

                <button
                  onClick={() =>
                    showNotice("Map location feature opened.")
                  }
                >
                  View on Map
                </button>
              </div>

              <div className="he-map-placeholder">
                <MapPin size={35} />
                <span>{vendor.location}</span>
              </div>

              <div className="he-location-details">
                <div>
                  <MapPin size={16} />
                  <span>
                    {vendor.fullName}, {vendor.location}
                  </span>
                </div>

                <div>
                  <Car size={16} />
                  <span>Parking information available</span>
                </div>

                <div>
                  <Clock3 size={16} />
                  <span>Contact vendor for availability</span>
                </div>
              </div>
            </div>

            {/* Similar Vendors */}
            {similarVendors.length > 0 && (
              <div className="he-sidebar-card">
                <div className="he-sidebar-card-header">
                  <h3>Similar Vendors</h3>

                  <Link to="/vendor-categories">
                    View All
                  </Link>
                </div>

                <div className="he-similar-list">
                  {similarVendors.map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        navigate(
                          `/vendor-profile/${item.id}`
                        )
                      }
                    >
                      <img
                        src={item.portfolioImage}
                        alt={item.fullName}
                        onError={(e) => {
                          e.currentTarget.src =
                            "/preview.png";
                        }}
                      />

                      <div>
                        <strong>{item.fullName}</strong>

                        <span>
                          {item.startingPrice}
                        </span>

                        <small>
                          ★ {item.rating}
                        </small>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="he-contact-card">
              <div>
                <Phone size={24} />
              </div>

              <h3>Need Help?</h3>

              <p>
                Need help choosing the right vendor
                for your event?
              </p>

              <button onClick={handleCall}>
                <Phone size={15} />
                Call HarEvent
              </button>

              <Link to="/contact">
                Talk to an Expert
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {/* LIGHTBOX */}
      {lightbox && gallery[activeImage] && (
        <div
          className="he-lightbox"
          onClick={() => setLightbox(false)}
        >
          <button
            className="he-lightbox-close"
            onClick={() => setLightbox(false)}
            aria-label="Close image"
          >
            <X />
          </button>

          <button
            className="he-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();

              setActiveImage(
                (activeImage - 1 + gallery.length) %
                  gallery.length
              );
            }}
          >
            <ChevronLeft />
          </button>

          <img
            src={gallery[activeImage]}
            alt={vendor.fullName}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="he-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();

              setActiveImage(
                (activeImage + 1) % gallery.length
              );
            }}
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* NOTICE */}
      {notice && (
        <div className="he-notice">
          <CheckCircle2 size={17} />
          <span>{notice}</span>

          <button onClick={() => setNotice("")}>
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}