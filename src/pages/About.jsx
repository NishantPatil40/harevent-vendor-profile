
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Compass,
  Heart,
  Handshake,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Users,
  Wallet,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const customerBenefits = [
  "Explore venues, decorators, caterers, photographers, makeup artists, DJs, planners and more.",
  "Browse by event or vendor category to find services that match your occasion.",
  "View vendor services and portfolios, then send an enquiry to request a quote.",
  "Chat with vendors and ask questions before making your decision.",
];

const vendorBenefits = [
  "Create a business profile featuring your services, cities and portfolio.",
  "Reach customers who are planning events in your area.",
  "Receive enquiries, send quotes and manage your calendar from one dashboard.",
  "Add team members, such as staff and an accountant, with limited access.",
];

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Choose your event or the service you need, and select your city.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Compare",
    text: "Explore vendor profiles, services and portfolios to find your match.",
    Icon: ClipboardList,
  },
  {
    number: "03",
    title: "Connect",
    text: "Send an enquiry, discuss your requirements and get a suitable quote.",
    Icon: MessageCircle,
  },
  {
    number: "04",
    title: "Celebrate",
    text: "Confirm your vendor and enjoy a celebration worth remembering.",
    Icon: Sparkles,
  },
];

const values = [
  {
    title: "Simplicity",
    text: "Planning should be easy to start and easy to follow.",
    Icon: Heart,
  },
  {
    title: "Clarity",
    text: "Quotes help you understand the services and costs for your event.",
    Icon: Search,
  },
  {
    title: "Fairness to Vendors",
    text: "Every vendor deserves a chance to be seen for the quality of their work.",
    Icon: Handshake,
  },
  {
    title: "Respect for Every Celebration",
    text: "Every occasion and tradition matters, from a small puja to a grand wedding.",
    Icon: Users,
  },
];

const eventTypes = [
  "Weddings & Wedding Functions",
  "Engagements",
  "Birthdays",
  "Anniversaries",
  "Baby Showers & Naming Ceremonies",
  "Housewarmings",
  "Corporate Events",
  "Conferences",
  "College & School Events",
  "Festivals",
  "Religious & Cultural Events",
  "Concerts & Live Shows",
];

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">

        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-hero-copy">
            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={13} />
              <span>About Us</span>
            </div>

            <span className="about-eyebrow">
              <span /> THE STORY OF HAREVENT
            </span>

            <h1>
              About <em>HarEvent</em>
            </h1>

            <h2>Everything for Every Event.</h2>

            <p>
              HarEvent is an event vendor marketplace built to make event
              planning simple. We bring venues, decorators, caterers,
              photographers, DJs and many more services together in one
              place, so you can find the right people for every celebration.
            </p>

            <div className="about-hero-actions">
              <Link
                className="about-btn about-btn-primary"
                to="/event-categories"
              >
                Explore Event Categories
                <ArrowRight size={16} />
              </Link>

              <Link
                className="about-btn about-btn-outline"
                to="/vendor-categories"
              >
                Find a Vendor
              </Link>
            </div>

            <div className="about-trust-row">
              <span>
                <ShieldCheck size={17} />
                One place to discover
              </span>

              <span>
                <Heart size={16} />
                Every celebration matters
              </span>
            </div>
          </div>

          <div className="about-hero-visual">
            <img
              className="about-hero-image"
              src="/hero.png"
              alt="Beautiful Indian wedding celebration"
            />

            <div className="about-hero-stamp">
              <Heart size={18} fill="currentColor" />
              <b>
                Made for moments
                <br />
                that matter
              </b>
              <small>EVERY EVENT. EVERY VENDOR.</small>
            </div>

            <div className="about-hero-note">
              <Sparkles size={18} />
              <span>
                Celebrate more.
                <br />
                <b>Plan with ease.</b>
              </span>
            </div>
          </div>

          <div className="about-hero-decoration" aria-hidden="true">
            ✦
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="about-who about-section">
          <div className="about-photo-collage">
            <div className="about-photo-main">
              <img
                src="/Golden-Hour Garden Wedding Ceremony.png"
                alt="Wedding ceremony under a floral canopy"
              />
            </div>

            <div className="about-photo-small about-photo-top">
              <img
                src="/Golden Meadow Wedding Photoshoot.png"
                alt="Couple enjoying a wedding photoshoot"
              />
            </div>

            <div className="about-photo-small about-photo-bottom">
              <img
                src="/Joyful Indian Family Celebration.png"
                alt="Family celebrating together"
              />
            </div>

            <div className="about-photo-caption">
              <Heart size={17} fill="currentColor" />
              <span>
                Bringing people
                <br />
                and celebrations together
              </span>
            </div>
          </div>

          <div className="about-who-copy">
            <span className="about-eyebrow">WHO WE ARE</span>

            <h2>
              Your one-stop event vendor <em>marketplace.</em>
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

            <div className="about-audience-grid">
              <div>
                <span className="about-mini-icon">
                  <Users size={19} />
                </span>
                <b>For Customers</b>
                <small>
                  Discover the right services for your special occasion.
                </small>
              </div>

              <div>
                <span className="about-mini-icon">
                  <Store size={19} />
                </span>
                <b>For Vendors</b>
                <small>
                  Showcase your work and connect with new customers.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WE EXIST */}
        <section className="about-why about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHY HAREVENT EXISTS</span>

            <h2>
              Event planning should feel exciting,{" "}
              <em>not exhausting.</em>
            </h2>

            <p>
              Good events begin with good choices. Finding the right people
              to make them happen should be just as joyful.
            </p>
          </div>

          <div className="about-why-content">
            <div className="about-why-image">
              <img
                src="/Opulent Indian Garden Wedding Mandap.png"
                alt="Beautifully decorated event venue"
              />
            </div>

            <div className="about-why-card">
              <span className="about-large-icon">
                <Compass size={25} />
              </span>

              <h3>Bringing both sides together.</h3>

              <p>
                Finding reliable vendors, understanding what a service
                includes and comparing options can be difficult when
                information is scattered. At the same time, talented vendors
                need better ways to reach the customers who need them.
              </p>

              <p>
                HarEvent brings both sides together. Customers get clear
                options and a simple way to ask for quotes. Vendors get a
                professional profile and a way to reach customers across
                India.
              </p>

              <div className="about-why-points">
                <span>
                  <CheckCircle2 size={15} />
                  Discover with confidence
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Connect with ease
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* VISION AND MISSION */}
        <section className="about-purpose about-section">
          <div className="about-section-heading centered">
            <span className="about-eyebrow">OUR PURPOSE</span>

            <h2>
              A clear vision. A meaningful <em>mission.</em>
            </h2>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card vision-card">
              <span className="about-purpose-icon">
                <Target size={24} />
              </span>

              <span className="about-card-kicker">LOOKING AHEAD</span>

              <h3>Our Vision</h3>

              <p>
                To become a trusted destination for event planning in India
                by making it easier for people to find the right vendors
                for every occasion.
              </p>

              <div className="about-card-flower">✳</div>
            </article>

            <article className="about-purpose-card mission-card">
              <span className="about-purpose-icon">
                <Compass size={24} />
              </span>

              <span className="about-card-kicker">WHAT DRIVES US</span>

              <h3>Our Mission</h3>

              <p>
                To simplify event planning, increase visibility for event
                vendors, and create a convenient platform where customers
                can discover suitable services for their events.
              </p>

              <div className="about-card-flower">✳</div>
            </article>
          </div>
        </section>

        {/* WHAT HAREVENT OFFERS */}
        <section className="about-offers about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">
              ONE PLATFORM, TWO COMMUNITIES
            </span>

            <h2>
              Find event vendors for <em>every occasion.</em>
            </h2>

            <p>
              Whether you're planning a celebration or growing an event
              business, HarEvent brings useful tools and connections together.
            </p>
          </div>

          <div className="about-offer-grid">
            <article className="about-offer-card">
              <div className="about-offer-image">
                <img
                  src="/Rohan and Eisha’s Floral Engagement.png"
                  alt="Couple celebrating their engagement"
                />

                <span>
                  <Heart size={15} />
                  FOR CUSTOMERS
                </span>
              </div>

              <div className="about-offer-body">
                <div className="about-offer-title">
                  <span>
                    <Search size={20} />
                  </span>
                  <h3>Plan your event, your way.</h3>
                </div>

                <ul>
                  {customerBenefits.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/event-categories">
                  Explore events <ArrowRight size={15} />
                </Link>
              </div>
            </article>

            <article className="about-offer-card">
              <div className="about-offer-image">
                <img
                  src="/Lavish Nighttime Wedding Canopy.png"
                  alt="Lavish event venue decorated with lights"
                />

                <span>
                  <Store size={15} />
                  FOR VENDORS
                </span>
              </div>

              <div className="about-offer-body">
                <div className="about-offer-title">
                  <span>
                    <Store size={20} />
                  </span>
                  <h3>Grow your event business.</h3>
                </div>

                <ul>
                  {vendorBenefits.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/join-as-vendor">
                  Join as a vendor <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="about-how about-section">
          <div className="about-section-heading centered">
            <span className="about-eyebrow">
              A SIMPLE WAY TO GET STARTED
            </span>

            <h2>
              From your idea to <em>“I do!”</em>
            </h2>

            <p>
              Four simple steps bring you closer to the people who make your
              event special.
            </p>
          </div>

          <div className="about-steps-grid">
            {steps.map(({ number, title, text, Icon }) => (
              <article className="about-step" key={number}>
                <div className="about-step-icon">
                  <Icon size={23} />
                  <span>{number}</span>
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="about-values about-section">
          <div className="about-values-copy">
            <span className="about-eyebrow">THE THINGS THAT MATTER</span>

            <h2>
              What we <em>believe.</em>
            </h2>

            <p>
              Every great celebration starts with trust. These values guide
              how we bring customers and event professionals together.
            </p>

            <div className="about-values-list">
              {values.map(({ title, text, Icon }) => (
                <div className="about-value-item" key={title}>
                  <span>
                    <Icon size={18} />
                  </span>

                  <div>
                    <b>{title}</b>
                    <small>{text}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-values-visual">
            <img
              src="/Joyful Indian Wedding Petal Shower.png"
              alt="Joyful wedding celebration with flower petals"
            />

            <div className="about-quote">
              <span>“</span>

              <p>
                Every celebration has a story. We're here to help you bring
                yours to life.
              </p>

              <small>THE HAREVENT PROMISE</small>
            </div>
          </div>
        </section>

        {/* EVENTS WE COVER */}
        <section className="about-events about-section">
          <div className="about-section-heading centered">
            <span className="about-eyebrow">
              LIFE'S BIG AND LITTLE MOMENTS
            </span>

            <h2>
              One place for <em>every occasion.</em>
            </h2>

            <p>
              From intimate family gatherings to grand celebrations, discover
              services for all the moments worth celebrating.
            </p>
          </div>

          <div className="about-event-chips">
            {eventTypes.map((event) => (
              <span key={event}>
                <Sparkles size={14} />
                {event}
              </span>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="about-cta">
          <div className="about-cta-content">
            <span>LET'S MAKE IT MEMORABLE</span>

            <h2>Ready to plan your next celebration?</h2>

            <p>
              Explore vendors for every occasion, or tell us what you need.
              Your next great event starts here.
            </p>

            <div className="about-cta-actions">
              <Link to="/event-categories">
                Explore Event Categories
                <ArrowRight size={16} />
              </Link>

              <Link to="/vendor-categories">
                Find a Vendor
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="about-cta-side">
            <div>
              <CalendarCheck size={20} />
              <b>For every occasion</b>
              <small>Find services that fit your event.</small>
            </div>

            <div>
              <BadgeCheck size={20} />
              <b>For every celebration</b>
              <small>Connect with event professionals.</small>
            </div>

            <div>
              <Wallet size={20} />
              <b>For every plan</b>
              <small>Enquire and explore your options.</small>
            </div>
          </div>

          <div className="about-cta-sparkle">✦</div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;
