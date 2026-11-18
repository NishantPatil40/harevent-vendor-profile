import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Users,
  Star,
  Headphones,
  Search,
  CalendarCheck,
  MapPin,
  Camera,
  Utensils,
  Sparkles,
  Music,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">

          {/* LEFT */}
          <div className="about-hero-content">

            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <ArrowRight size={15} />
              <span>About Us</span>
            </div>

            <div className="about-eyebrow">
              <span></span>
              ABOUT HAREVENT
            </div>

            <h1>
              Everything for
              <br />
              <span>Every Event.</span>
            </h1>

            <h2>
              जहाँ इवेंट, वहाँ HarEvent!
            </h2>

            <p className="about-intro">
              HarEvent is an event vendor marketplace built to make event
              planning simple. Discover trusted venues, decorators, caterers,
              photographers, DJs and more — all in one place.
            </p>

            <div className="about-buttons">
              <Link to="/vendor-categories" className="about-btn primary">
                Explore Vendors
                <ArrowRight size={18} />
              </Link>

              <Link to="/event-categories" className="about-btn secondary">
                Explore Events
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="about-stats">
              <div>
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>

              <div>
                <strong>100+</strong>
                <span>Events Covered</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Vendor Categories</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-hero-image-wrap">
            <img
              src="/Golden Hour Pre-Wedding Celebration.png"
              alt="Beautiful wedding celebration"
              className="about-hero-image"
            />

            <div className="about-floating-card">
              <div className="floating-icon">
                <Heart size={22} fill="white" />
              </div>

              <div>
                <h3>Every celebration matters.</h3>
                <p>
                  Find the right people to make your event memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          OUR STORY
      ========================= */}
      <section className="about-section story-section">
        <div className="about-container story-grid">

          <div className="story-image-area">
            <img
              src="/Golden Mandap Wedding Ceremony.png"
              alt="Indian wedding ceremony"
              className="story-main-image"
            />

            <div className="story-small-image">
              <img
                src="/Joyful Indian Family Celebration.png"
                alt="Family celebration"
              />
            </div>

            <div className="story-badge">
              <Heart size={17} fill="currentColor" />
              <span>Celebrate Every Moment</span>
            </div>
          </div>

          <div className="story-content">

            <div className="about-eyebrow">
              <span></span>
              OUR STORY
            </div>

            <h2>
              Your one-stop
              <br />
              <span>event vendor marketplace</span>
            </h2>

            <p>
              Planning an event often means searching through different
              contacts, comparing services and making countless calls.
              HarEvent brings the experience together in one simple place.
            </p>

            <p>
              From weddings and birthdays to corporate events and
              celebrations, customers can discover vendors, explore their
              work and connect with the people who can bring their ideas
              to life.
            </p>

            <div className="story-cards">

              <div className="mini-card">
                <div className="mini-card-icon">
                  <Heart size={20} />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To become a trusted destination for event planning in India
                  by making vendor discovery simple and reliable.
                </p>
              </div>

              <div className="mini-card">
                <div className="mini-card-icon">
                  <Sparkles size={20} />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To simplify planning, increase vendor visibility and help
                  customers find suitable services for every occasion.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================
          WHY HAREVENT
      ========================= */}
      <section className="why-section">
        <div className="about-container">

          <div className="section-heading">
            <div className="about-eyebrow center">
              <span></span>
              WHY HAREVENT
              <span></span>
            </div>

            <h2>
              Plan smarter.
              <span> Celebrate better.</span>
            </h2>

            <p>
              Everything you need to discover the right event professionals,
              all brought together in one place.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">
                <Search size={23} />
              </div>

              <h3>Discover Easily</h3>

              <p>
                Find venues and event professionals by category, service
                and occasion.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <ShieldCheck size={23} />
              </div>

              <h3>Trusted Vendors</h3>

              <p>
                Explore professional profiles and portfolios before making
                your decision.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <Star size={23} />
              </div>

              <h3>Compare & Choose</h3>

              <p>
                Compare services, portfolios and available options with
                greater confidence.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <Users size={23} />
              </div>

              <h3>Connect Directly</h3>

              <p>
                Send an enquiry and connect with vendors who understand
                your event requirements.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <CalendarCheck size={23} />
              </div>

              <h3>Plan Your Event</h3>

              <p>
                Keep your event planning journey organized from discovery
                to final booking.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          VALUES + IMAGE
      ========================= */}
      <section className="about-section values-section">
        <div className="about-container values-grid">

          <div className="values-content">

            <div className="about-eyebrow">
              <span></span>
              WHAT WE BELIEVE
            </div>

            <h2>
              Making event planning
              <span> simple and meaningful.</span>
            </h2>

            <p>
              Every event is different. Our goal is to make the process of
              finding the right people easier, clearer and more enjoyable.
            </p>

            <div className="values-list">

              <div className="value-item">
                <div className="value-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3>Simplicity</h3>
                  <p>
                    Planning should be easy to start and easy to follow.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3>Clarity</h3>
                  <p>
                    Clear vendor information helps customers make better
                    decisions.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3>Fairness</h3>
                  <p>
                    Every event professional deserves an opportunity to be
                    discovered.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <h3>Every Celebration Matters</h3>
                  <p>
                    From intimate family occasions to grand celebrations,
                    every event deserves care.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="values-image-wrap">
            <img
              src="/Joyful Indian Wedding Petal Shower.png"
              alt="Indian wedding celebration"
              className="values-image"
            />

            <div className="quote-card">
              <Quote size={27} />

              <p>
                "We don't just help plan events. We help people create
                moments worth remembering."
              </p>

              <strong>— HarEvent</strong>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          EVENTS WE COVER
      ========================= */}
      <section className="events-section">
        <div className="about-container">

          <div className="section-heading">
            <div className="about-eyebrow center">
              <span></span>
              EVENTS WE COVER
              <span></span>
            </div>

            <h2>
              One platform for
              <span> every occasion.</span>
            </h2>

            <p>
              Discover services for the moments that matter most.
            </p>
          </div>

          <div className="event-grid">

            <div className="event-card">
              <div className="event-image">
                <img
                  src="/Golden Wedding Buffet Under Crystal Lighting.png"
                  alt="Wedding event"
                />
              </div>

              <div className="event-content">
                <div className="event-icon">
                  <Heart size={18} />
                </div>

                <h3>Weddings</h3>
                <p>
                  Photography, decoration, catering, venues and more.
                </p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-image">
                <img
                  src="/Joyful Birthday Cake Celebration.png"
                  alt="Birthday celebration"
                />
              </div>

              <div className="event-content">
                <div className="event-icon">
                  <Sparkles size={18} />
                </div>

                <h3>Birthdays</h3>
                <p>
                  Make birthdays special with the right event professionals.
                </p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-image">
                <img
                  src="/Corporate Summit Networking Reception.png"
                  alt="Corporate event"
                />
              </div>

              <div className="event-content">
                <div className="event-icon">
                  <Users size={18} />
                </div>

                <h3>Corporate Events</h3>
                <p>
                  Professional services for meetings, conferences and more.
                </p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-image">
                <img
                  src="/Elegant Pastel Baby Shower Celebration.png"
                  alt="Baby shower"
                />
              </div>

              <div className="event-content">
                <div className="event-icon">
                  <Heart size={18} />
                </div>

                <h3>Special Occasions</h3>
                <p>
                  Baby showers, engagements, anniversaries and celebrations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FOR CUSTOMERS / VENDORS
      ========================= */}
      <section className="connect-section">
        <div className="about-container">

          <div className="connect-grid">

            <div className="connect-card customer-card">
              <div className="connect-icon">
                <Users size={25} />
              </div>

              <span>FOR CUSTOMERS</span>

              <h2>
                Find the right people
                <br />
                for your celebration.
              </h2>

              <p>
                Explore vendors, compare their work and send enquiries
                for your upcoming event.
              </p>

              <Link to="/vendor-categories" className="connect-btn">
                Find a Vendor
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="connect-card vendor-card">
              <div className="connect-icon">
                <Sparkles size={25} />
              </div>

              <span>FOR VENDORS</span>

              <h2>
                Put your work in front
                <br />
                of more customers.
              </h2>

              <p>
                Create your professional profile and reach people looking
                for event services.
              </p>

              <Link to="/join-as-vendor" className="connect-btn">
                Join HarEvent
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="about-cta">
        <div className="about-container">

          <div className="cta-inner">

            <div>
              <span>READY TO PLAN?</span>

              <h2>
                Ready to plan your
                <br />
                next celebration?
              </h2>

              <p>
                Explore vendors for every occasion, or tell us what
                you need to make your event memorable.
              </p>
            </div>

            <div className="cta-buttons">

              <Link
                to="/event-categories"
                className="cta-btn white"
              >
                Explore Event Categories
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/vendor-categories"
                className="cta-btn outline"
              >
                Find a Vendor
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;