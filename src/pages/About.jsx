import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Search,
  GitCompare,
  MessageCircle,
  CalendarCheck,
  Camera,
  Utensils,
  Music,
  Sparkles,
  MapPin,
  Users,
  ShieldCheck,
  Star,
  Target,
  Eye,
  PartyPopper,
  Building2,
  Cake,
  BriefcaseBusiness,
  Church,
} from "lucide-react";

import "./About.css";

const eventImages = {
  hero:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",

  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",

  celebration:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",

  corporate:
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",

  party:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",

  decor:
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85",
};

function About() {
  const services = [
    {
      icon: Building2,
      title: "Venues",
      text: "Discover spaces that fit your event, guest count and celebration style.",
    },
    {
      icon: Sparkles,
      title: "Decorators",
      text: "Find creative decorators to turn your event idea into a beautiful setup.",
    },
    {
      icon: Camera,
      title: "Photographers",
      text: "Explore photographers who can capture the important moments of your celebration.",
    },
    {
      icon: Utensils,
      title: "Caterers",
      text: "Compare catering options for weddings, parties, corporate events and more.",
    },
    {
      icon: Music,
      title: "DJs & Artists",
      text: "Find DJs, performers and entertainment professionals for your event.",
    },
    {
      icon: Users,
      title: "Event Planners",
      text: "Connect with professionals who can help coordinate your celebration.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "Choose your event, service and city to discover relevant vendors.",
    },
    {
      number: "02",
      icon: GitCompare,
      title: "Compare",
      text: "Explore vendor profiles, services, portfolios and available information.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Connect",
      text: "Send an enquiry and discuss your requirements directly with vendors.",
    },
    {
      number: "04",
      icon: CalendarCheck,
      title: "Celebrate",
      text: "Choose the right vendor and focus on enjoying your special day.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Simplicity",
      text: "Planning should be easy to start and easy to follow.",
    },
    {
      icon: Eye,
      title: "Clarity",
      text: "We aim to make vendor information easier to understand and compare.",
    },
    {
      icon: ShieldCheck,
      title: "Fairness",
      text: "Every event professional deserves an opportunity to showcase their work.",
    },
    {
      icon: Star,
      title: "Every Celebration Matters",
      text: "From intimate family occasions to large celebrations, every event deserves attention.",
    },
  ];

  const eventTypes = [
    {
      icon: Heart,
      title: "Weddings",
      image: eventImages.wedding,
    },
    {
      icon: Cake,
      title: "Birthdays",
      image: eventImages.party,
    },
    {
      icon: BriefcaseBusiness,
      title: "Corporate Events",
      image: eventImages.corporate,
    },
    {
      icon: PartyPopper,
      title: "Celebrations",
      image: eventImages.celebration,
    },
    {
      icon: Church,
      title: "Cultural Events",
      image: eventImages.decor,
    },
  ];

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-breadcrumb">
            <span>Home</span>
            <ArrowRight size={14} />
            <strong>About Us</strong>
          </div>

          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="about-eyebrow">
                ABOUT HAREVENT
              </span>

              <h1>
                Everything for
                <span> Every Event.</span>
              </h1>

              <p className="about-hero-subtitle">
                जहाँ इवेंट, वहाँ HarEvent!
              </p>

              <p className="about-description">
                HarEvent is an event vendor marketplace built to make event
                planning simple. We bring venues, decorators, caterers,
                photographers, DJs and many more services together in one
                place, so you can find the right people for every celebration.
              </p>

              <div className="about-hero-buttons">
                <a href="/event-categories" className="about-primary-btn">
                  Explore Events
                  <ArrowRight size={17} />
                </a>

                <a href="/vendor-categories" className="about-secondary-btn">
                  Find a Vendor
                </a>
              </div>

              <div className="about-mini-stats">
                <div>
                  <strong>One Platform</strong>
                  <span>For event discovery</span>
                </div>

                <div>
                  <strong>Multiple Services</strong>
                  <span>For every celebration</span>
                </div>

                <div>
                  <strong>Easy Connection</strong>
                  <span>With event professionals</span>
                </div>
              </div>
            </div>

            <div className="about-hero-visual">
              <div className="about-hero-image-wrap">
                <img
                  src={eventImages.hero}
                  alt="Beautiful event celebration"
                />

                <div className="about-hero-badge">
                  <Heart size={18} fill="currentColor" />
                  <div>
                    <strong>Plan • Connect • Celebrate</strong>
                    <span>Everything for your event</span>
                  </div>
                </div>
              </div>

              <div className="about-floating-card">
                <CheckCircle2 size={22} />
                <div>
                  <strong>Find the right professionals</strong>
                  <span>All in one place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section about-story-section">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-images">
              <div className="story-main-image">
                <img
                  src={eventImages.wedding}
                  alt="Wedding celebration"
                />
              </div>

              <div className="story-small-image">
                <img
                  src={eventImages.celebration}
                  alt="Event celebration"
                />
              </div>

              <div className="story-note">
                <Heart size={18} fill="currentColor" />
                <span>Made for every celebration</span>
              </div>
            </div>

            <div className="about-story-content">
              <span className="about-section-label">
                OUR STORY
              </span>

              <h2>
                Your one-stop event
                <span> vendor marketplace</span>
              </h2>

              <p>
                Planning an event usually means countless calls, scattered
                contacts and endless comparing. HarEvent was created to make
                that process simpler by bringing event services and
                professionals together in one place.
              </p>

              <p>
                Whether someone is planning a wedding, birthday, corporate
                event, engagement, festival or another special occasion,
                HarEvent helps them discover vendors, explore their services
                and connect with the professionals they need.
              </p>

              <p>
                For event professionals, HarEvent provides a place to
                showcase their services, portfolio and expertise to people
                actively looking for event solutions.
              </p>

              <div className="story-highlight">
                <div className="story-highlight-icon">
                  <Target size={22} />
                </div>

                <div>
                  <strong>One place. Many possibilities.</strong>
                  <p>
                    Discover the people and services that can bring your event
                    idea to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HAREVENT */}
      <section className="about-section about-why-section">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">
              WHY HAREVENT?
            </span>

            <h2>
              Event planning should feel
              <span> exciting, not exhausting.</span>
            </h2>

            <p>
              We bring discovery, comparison and connection together so event
              planning feels more organized and convenient.
            </p>
          </div>

          <div className="about-benefit-grid">
            <div className="about-benefit-card">
              <div className="benefit-icon">
                <Search size={23} />
              </div>

              <h3>Discover Easily</h3>

              <p>
                Find venues, photographers, caterers, decorators, DJs,
                planners and other event professionals.
              </p>
            </div>

            <div className="about-benefit-card">
              <div className="benefit-icon">
                <GitCompare size={23} />
              </div>

              <h3>Compare Options</h3>

              <p>
                Explore vendor profiles, services and portfolios before
                deciding who fits your event.
              </p>
            </div>

            <div className="about-benefit-card">
              <div className="benefit-icon">
                <MessageCircle size={23} />
              </div>

              <h3>Connect Directly</h3>

              <p>
                Send an enquiry and communicate your event requirements with
                the professionals you are interested in.
              </p>
            </div>

            <div className="about-benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={23} />
              </div>

              <h3>Choose With Confidence</h3>

              <p>
                Get a clearer view of available services before moving ahead
                with your event planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="about-section about-vision-section">
        <div className="about-container">
          <div className="about-vision-grid">
            <div className="vision-image">
              <img
                src={eventImages.corporate}
                alt="Corporate event"
              />

              <div className="vision-image-overlay">
                <Sparkles size={20} />
                <span>Plan better. Celebrate better.</span>
              </div>
            </div>

            <div className="vision-content">
              <span className="about-section-label">
                OUR DIRECTION
              </span>

              <h2>
                Building a simpler way to
                <span> plan events</span>
              </h2>

              <div className="vision-card">
                <div className="vision-card-icon">
                  <Eye size={21} />
                </div>

                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To become a trusted destination for event planning in
                    India by making it easier for people to find the right
                    vendors for every occasion.
                  </p>
                </div>
              </div>

              <div className="vision-card">
                <div className="vision-card-icon">
                  <Target size={21} />
                </div>

                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To simplify event planning, increase visibility for event
                    vendors, and create a convenient platform where customers
                    can discover suitable services for their events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-section about-services-section">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">
              WHAT HAREVENT OFFERS
            </span>

            <h2>
              Find event vendors for
              <span> every occasion</span>
            </h2>

            <p>
              Explore different types of event professionals and services from
              one convenient platform.
            </p>
          </div>

          <div className="about-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="about-service-card" key={service.title}>
                  <div className="service-image">
                    <img
                      src={
                        service.title === "Venues"
                          ? eventImages.decor
                          : service.title === "Decorators"
                          ? eventImages.decor
                          : service.title === "Photographers"
                          ? eventImages.wedding
                          : service.title === "Caterers"
                          ? eventImages.celebration
                          : service.title === "DJs & Artists"
                          ? eventImages.party
                          : eventImages.corporate
                      }
                      alt={service.title}
                    />

                    <div className="service-icon">
                      <Icon size={19} />
                    </div>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <a href="/vendor-categories">
                      Explore
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-section about-how-section">
        <div className="about-container">
          <div className="about-centered-heading light-heading">
            <span className="about-section-label">
              HOW IT WORKS
            </span>

            <h2>
              From idea to celebration
              <span> in four simple steps</span>
            </h2>

            <p>
              A simple journey to help you move from searching to celebrating.
            </p>
          </div>

          <div className="about-steps">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="about-step" key={step.number}>
                  <div className="step-top">
                    <span>{step.number}</span>

                    <div className="step-icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section about-values-section">
        <div className="about-container">
          <div className="about-values-grid">
            <div className="values-intro">
              <span className="about-section-label">
                WHAT WE BELIEVE
              </span>

              <h2>
                Our values guide
                <span> every experience.</span>
              </h2>

              <p>
                We want event planning to feel clear, accessible and focused
                on the celebration itself.
              </p>

              <a href="/event-categories" className="about-primary-btn">
                Start Exploring
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="values-list">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div className="value-row" key={value.title}>
                    <div className="value-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="about-section about-events-section">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">
              EVENTS WE COVER
            </span>

            <h2>
              Every celebration has
              <span> a place here.</span>
            </h2>

            <p>
              Explore services for personal celebrations, professional events,
              cultural occasions and more.
            </p>
          </div>

          <div className="event-type-grid">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <a
                  href="/event-categories"
                  className="event-type-card"
                  key={event.title}
                >
                  <img src={event.image} alt={event.title} />

                  <div className="event-type-overlay">
                    <div className="event-type-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3>{event.title}</h3>
                      <span>Explore events</span>
                    </div>

                    <ArrowRight size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta">
            <div className="cta-decoration cta-decoration-one"></div>
            <div className="cta-decoration cta-decoration-two"></div>

            <div className="cta-content">
              <span className="about-section-label">
                READY TO PLAN?
              </span>

              <h2>
                Ready to plan your
                <span> next celebration?</span>
              </h2>

              <p>
                Explore event categories, discover vendors and find the
                services you need to make your next event memorable.
              </p>

              <div className="cta-buttons">
                <a href="/event-categories" className="about-white-btn">
                  Explore Event Categories
                  <ArrowRight size={17} />
                </a>

                <a href="/vendor-categories" className="about-outline-btn">
                  Find a Vendor
                </a>
              </div>

              <div className="vendor-cta">
                <span>Are you an event professional?</span>

                <a href="/join-as-vendor">
                  Join HarEvent
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;