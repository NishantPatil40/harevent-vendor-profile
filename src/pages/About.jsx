import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
  CalendarDays,
  Headphones,
  Building2,
  Camera,
  Music2,
  PartyPopper,
} from "lucide-react";
import "./About.css";

const aboutImages = {
  hero:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",

  story:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",

  celebration:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",

  vendors:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",

  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",

  corporate:
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
};

const whyHarEvent = [
  {
    icon: ShieldCheck,
    title: "Verified Vendors",
    text: "Find trusted event professionals and discover services with confidence.",
  },
  {
    icon: Search,
    title: "Compare & Choose",
    text: "Explore vendor profiles, services and portfolios before you decide.",
  },
  {
    icon: Wallet,
    title: "Clear Options",
    text: "Understand available services and request a quote that fits your event.",
  },
  {
    icon: Star,
    title: "Quality First",
    text: "Discover professionals through their work, services and customer experience.",
  },
  {
    icon: Users,
    title: "Easy Connect",
    text: "Send an enquiry and connect directly with vendors for your event.",
  },
  {
    icon: Headphones,
    title: "Event Support",
    text: "Get a simpler way to manage vendor discovery from one platform.",
  },
];

const customerBenefits = [
  "Explore venues, decorators, caterers, photographers, makeup artists, DJs, planners and more.",
  "Browse by event, such as weddings, birthdays, corporate events and festivals, or by vendor category.",
  "See each vendor's services and portfolio, and send an enquiry to get a quote.",
  "Chat with vendors to ask questions before you decide.",
];

const vendorBenefits = [
  "Create a business profile with your services, cities and portfolio.",
  "Reach customers who are planning events in your area.",
  "Receive enquiries, send quotes and manage your calendar from one dashboard.",
  "Add team members, such as staff and an accountant, with limited access.",
];

const values = [
  {
    icon: Sparkles,
    title: "Simplicity",
    text: "Planning should be easy to start and easy to follow.",
  },
  {
    icon: Search,
    title: "Clarity",
    text: "Prices depend on your event, so quotes are shared after an enquiry. We want you to know what you are paying for.",
  },
  {
    icon: Heart,
    title: "Fairness to vendors",
    text: "Every vendor deserves a chance to be seen for the quality of their work.",
  },
  {
    icon: Users,
    title: "Respect for every celebration",
    text: "Every occasion and tradition matters, from a small puja at home to a grand wedding.",
  },
];

const events = [
  { icon: Heart, label: "Weddings" },
  { icon: PartyPopper, label: "Birthdays" },
  { icon: Users, label: "Corporate Events" },
  { icon: Sparkles, label: "Engagements" },
  { icon: CalendarDays, label: "Festivals" },
  { icon: Building2, label: "Conferences" },
  { icon: Music2, label: "Concerts & Live Shows" },
  { icon: Heart, label: "Baby Showers" },
];

function About() {
  return (
    <div className="about-page">
      <main>

        {/* =========================
            HERO
        ========================= */}
        <section className="about-hero">
          <div className="about-container">

            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>

            <div className="about-hero-grid">

              <div className="about-hero-copy">

                <span className="about-eyebrow">
                  ABOUT HAREVENT
                </span>

                <h1>
                  About <span>HarEvent</span>
                </h1>

                <h2>
                  Everything for Every Event.
                  <br />
                  जहाँ इवेंट, वहाँ HarEvent!
                </h2>

                <p className="about-lead">
                  HarEvent is an event vendor marketplace built to make event
                  planning simple. We bring venues, decorators, caterers,
                  photographers, DJs and many more services together in one
                  place, so you can find the right people for every
                  celebration.
                </p>

                <div className="about-hero-actions">

                  <Link
                    to="/event-categories"
                    className="about-btn about-btn-primary"
                  >
                    Explore Event Categories
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/vendor-categories"
                    className="about-btn about-btn-secondary"
                  >
                    Find a Vendor
                  </Link>

                </div>

                <div className="about-mini-stats">

                  <div>
                    <ShieldCheck size={19} />
                    <span>Trusted Platform</span>
                  </div>

                  <div>
                    <Users size={19} />
                    <span>Event Vendors</span>
                  </div>

                  <div>
                    <Heart size={19} />
                    <span>Every Celebration</span>
                  </div>

                  <div>
                    <Headphones size={19} />
                    <span>Easy Support</span>
                  </div>

                </div>

              </div>

              <div className="about-hero-visual">

                <img
                  src={aboutImages.hero}
                  alt="Beautiful event celebration"
                />

                <div className="about-hero-card">

                  <div className="about-card-icon">
                    <Heart size={20} fill="currentColor" />
                  </div>

                  <h3>
                    We believe every celebration deserves to be special.
                  </h3>

                  <div className="about-card-stats">

                    <div>
                      <strong>500+</strong>
                      <span>Happy Clients</span>
                    </div>

                    <div>
                      <strong>300+</strong>
                      <span>Vendor Services</span>
                    </div>

                    <div>
                      <strong>1L+</strong>
                      <span>Event Choices</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =========================
            OUR STORY
        ========================= */}
        <section className="about-section about-story">
          <div className="about-container about-story-grid">

            <div className="about-story-images">

              <img
                className="about-story-main"
                src={aboutImages.story}
                alt="Wedding celebration"
              />

              <img
                className="about-story-small"
                src={aboutImages.celebration}
                alt="Event decoration"
              />

              <div className="about-story-badge">
                <Heart size={17} fill="currentColor" />

                <span>
                  Creating unforgettable moments
                </span>
              </div>

            </div>

            <div className="about-story-copy">

              <span className="about-section-label">
                OUR STORY
              </span>

              <h2>
                Your one-stop event vendor marketplace
              </h2>

              <p>
                Planning an event usually means countless calls, scattered
                contacts and endless comparing. HarEvent was created to change
                that. We are a marketplace that connects people planning
                weddings, birthdays, corporate events, engagements, festivals
                and other special occasions with the vendors who bring those
                events to life.
              </p>

              <p>
                For customers, HarEvent is a place to discover, compare and
                connect. For event professionals, it is a place to be seen,
                show their work and meet customers who need them.
              </p>

              <div className="about-story-cards">

                <article>

                  <div className="about-small-icon">
                    <Sparkles size={19} />
                  </div>

                  <h3>
                    Our Vision
                  </h3>

                  <p>
                    To become a trusted destination for event planning in
                    India by making it easier for people to find the right
                    vendors for every occasion.
                  </p>

                </article>

                <article>

                  <div className="about-small-icon">
                    <ArrowRight size={19} />
                  </div>

                  <h3>
                    Our Mission
                  </h3>

                  <p>
                    To simplify event planning, increase visibility for event
                    vendors, and create a convenient platform where customers
                    can discover suitable services.
                  </p>

                </article>

              </div>

            </div>

          </div>
        </section>


        {/* =========================
            WHY HAREVENT
        ========================= */}
        <section className="about-section about-why">

          <div className="about-container">

            <div className="about-centered-heading">

              <span className="about-section-label">
                WHY HAREVENT?
              </span>

              <h2>
                Event planning should feel exciting, not exhausting
              </h2>

              <p>
                Good events begin with good choices. But finding reliable
                vendors, understanding what a service includes and comparing
                options is hard when information is scattered.
              </p>

            </div>

            <div className="about-why-grid">

              {whyHarEvent.map(
                ({ icon: Icon, title, text }) => (
                  <article
                    className="about-why-card"
                    key={title}
                  >

                    <div className="about-feature-icon">
                      <Icon size={22} />
                    </div>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </article>
                )
              )}

            </div>

          </div>
        </section>


        {/* =========================
            WHAT HAREVENT OFFERS
        ========================= */}
        <section className="about-section about-offers">

          <div className="about-container">

            <div className="about-centered-heading">

              <span className="about-section-label">
                WHAT HAREVENT OFFERS
              </span>

              <h2>
                Find event vendors for every occasion
              </h2>

            </div>

            <div className="about-offer-grid">

              {/* Customers */}
              <article className="about-offer-card">

                <div className="about-offer-image">

                  <img
                    src={aboutImages.vendors}
                    alt="Event professionals working together"
                  />

                </div>

                <div className="about-offer-content">

                  <div className="about-offer-title">

                    <Users size={22} />

                    <h3>
                      For customers
                    </h3>

                  </div>

                  <ul>

                    {customerBenefits.map((item) => (
                      <li key={item}>

                        <CheckCircle2 size={17} />

                        <span>
                          {item}
                        </span>

                      </li>
                    ))}

                  </ul>

                  <Link
                    to="/vendor-categories"
                    className="about-text-link"
                  >
                    Explore Vendors
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>


              {/* Vendors */}
              <article className="about-offer-card">

                <div className="about-offer-image">

                  <img
                    src={aboutImages.corporate}
                    alt="Event vendor services"
                  />

                </div>

                <div className="about-offer-content">

                  <div className="about-offer-title">

                    <Camera size={22} />

                    <h3>
                      For vendors
                    </h3>

                  </div>

                  <ul>

                    {vendorBenefits.map((item) => (
                      <li key={item}>

                        <CheckCircle2 size={17} />

                        <span>
                          {item}
                        </span>

                      </li>
                    ))}

                  </ul>

                  <Link
                    to="/join-as-vendor"
                    className="about-text-link"
                  >
                    Join HarEvent
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>

            </div>

          </div>
        </section>


        {/* =========================
            HOW IT WORKS
        ========================= */}
        <section className="about-section about-how">

          <div className="about-container">

            <div className="about-centered-heading">

              <span className="about-section-label">
                HOW IT WORKS
              </span>

              <h2>
                From discovery to celebration
              </h2>

            </div>

            <div className="about-steps">

              {[
                [
                  "01",
                  Search,
                  "Discover",
                  "Choose your event or the service you need, and your city.",
                ],
                [
                  "02",
                  Star,
                  "Compare",
                  "Look at services and portfolios on vendor profiles.",
                ],
                [
                  "03",
                  Users,
                  "Connect",
                  "Send an enquiry and get a quote that fits your event.",
                ],
                [
                  "04",
                  PartyPopper,
                  "Celebrate",
                  "Confirm your vendor and enjoy the day.",
                ],
              ].map(([number, Icon, title, text]) => (

                <article
                  className="about-step"
                  key={number}
                >

                  <div className="about-step-top">

                    <span>
                      {number}
                    </span>

                    <div className="about-step-icon">
                      <Icon size={21} />
                    </div>

                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </article>

              ))}

            </div>

          </div>
        </section>


        {/* =========================
            VALUES
        ========================= */}
        <section className="about-section about-values">

          <div className="about-container about-values-grid">

            <div className="about-values-copy">

              <span className="about-section-label">
                WHAT WE BELIEVE
              </span>

              <h2>
                Our values
              </h2>

              <div className="about-values-list">

                {values.map(
                  ({ icon: Icon, title, text }) => (

                    <div
                      className="about-value"
                      key={title}
                    >

                      <div className="about-value-icon">
                        <Icon size={18} />
                      </div>

                      <div>

                        <h3>
                          {title}
                        </h3>

                        <p>
                          {text}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            <div className="about-values-visual">

              <img
                src={aboutImages.wedding}
                alt="People enjoying an event together"
              />

              <div className="about-quote">

                <Heart size={20} fill="currentColor" />

                <p>
                  Every celebration is different. HarEvent helps you find
                  the people who can make yours memorable.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EVENTS WE COVER
        ========================= */}
        <section className="about-section about-events">

          <div className="about-container">

            <div className="about-centered-heading">

              <span className="about-section-label">
                EVENTS WE COVER
              </span>

              <h2>
                One platform for every kind of celebration
              </h2>

              <p>
                Weddings and wedding functions, engagements, birthdays,
                anniversaries, baby showers and naming ceremonies,
                housewarmings, corporate events, conferences, college and
                school events, festival celebrations, religious and cultural
                events, concerts and live shows, and more.
              </p>

            </div>

            <div className="about-events-grid">

              {events.map(
                ({ icon: Icon, label }) => (

                  <Link
                    to="/event-categories"
                    className="about-event-chip"
                    key={label}
                  >

                    <Icon size={20} />

                    <span>
                      {label}
                    </span>

                    <ArrowRight size={15} />

                  </Link>

                )
              )}

            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================= */}
        <section className="about-cta-section">

          <div className="about-container">

            <div className="about-cta">

              <div>

                <span className="about-section-label about-section-label-light">
                  READY TO START?
                </span>

                <h2>
                  Ready to plan your next celebration?
                </h2>

                <p>
                  Explore vendors for every occasion, or tell us what you need.
                </p>

              </div>

              <div className="about-cta-actions">

                <Link
                  to="/event-categories"
                  className="about-btn about-btn-white"
                >
                  Explore Event Categories
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/vendor-categories"
                  className="about-btn about-btn-outline-light"
                >
                  Find a Vendor
                </Link>

              </div>

            </div>


            <div className="about-vendor-cta">

              <div>

                <h3>
                  Run an event business?
                </h3>

                <p>
                  Join HarEvent and reach more customers with a professional
                  vendor profile.
                </p>

              </div>

              <Link
                to="/join-as-vendor"
                className="about-btn about-btn-vendor"
              >
                List Your Business
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default About;