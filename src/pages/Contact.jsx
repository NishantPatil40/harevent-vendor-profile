
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const SUPPORT_EMAIL = "harevent2020@gmail.com";
const SUPPORT_PHONE = "+91 74481 81396";
const WHATSAPP_URL = "https://wa.me/917448181396";
const INSTAGRAM_URL = "https://www.instagram.com/harevent_20/?hl=en";
const OFFICE_ADDRESS = "Walgaon Road, Amravati, Maharashtra, India";

/* Form typography */
const fieldLabelStyle = {
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "4px",
  whiteSpace: "nowrap",
  fontSize: "15px",
  lineHeight: "1.4",
  fontWeight: 600,
};

const fieldControlStyle = {
  fontSize: "16px",
};

const contactOptions = [
  {
    eyebrow: "FOR CUSTOMERS",
    title: "Planning an event?",
    description:
      "Need help finding vendors, exploring services or sending an enquiry? Our team is here to guide you.",
    Icon: HeartHandshake,
    links: [
      {
        label: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        Icon: Mail,
      },
      {
        label: "Chat with us on WhatsApp",
        href: WHATSAPP_URL,
        Icon: MessageCircle,
        external: true,
      },
    ],
  },
  {
    eyebrow: "FOR VENDORS",
    title: "Grow your business.",
    description:
      "Want to list your business or need help with your vendor profile? Get in touch with our support team.",
    Icon: Store,
    links: [
      {
        label: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        Icon: Mail,
      },
      {
        label: SUPPORT_PHONE,
        href: "tel:+917448181396",
        Icon: Phone,
      },
      {
        label: "List your business",
        href: "/join-as-vendor",
        Icon: ArrowRight,
      },
    ],
  },
  {
    eyebrow: "MEDIA & PARTNERSHIPS",
    title: "Let's work together.",
    description:
      "For press enquiries, collaborations and business partnerships, write to our HarEvent team.",
    Icon: Users,
    links: [
      {
        label: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        Icon: Mail,
      },
    ],
  },
];

const faqs = [
  {
    question: "How soon will you reply?",
    answer:
      "Our support hours are Monday to Friday, 10:00 AM to 6:00 PM. We aim to respond during working hours. Messages received outside these hours will be reviewed on the next working day.",
  },
  {
    question: "Do I contact HarEvent to get a quote?",
    answer:
      "You can open a vendor's profile and send an enquiry directly. The vendor can then discuss your requirements and share a quote for your event.",
  },
  {
    question: "How do I list my business on HarEvent?",
    answer:
      "Visit the List Your Business page to get started. You can also contact our team at harevent2020@gmail.com if you need help with the process.",
  },
  {
    question: "How do I report a problem with a vendor or a listing?",
    answer:
      "Select Report a problem in the contact form. Include the vendor or listing name, the date of your enquiry and a clear description of the issue so our team can review it.",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Customer",
    subject: "Planning an event",
    message: "",
    privacy: false,
  });

  const [notice, setNotice] = useState("");

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (notice) setNotice("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.privacy) {
      setNotice("Please agree to the Privacy Policy before continuing.");
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `I am a: ${form.role}`,
      `Subject: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      `HarEvent Contact: ${form.subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setNotice(
      "Your email app should open with your message ready to send. Please send the email there to complete your enquiry."
    );
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">

        {/* =====================================
            FULL WIDTH CONTACT HERO BANNER
        ====================================== */}

        <section
          className="contact-hero contact-hero-new"
          style={{
            width: "100vw",
            maxWidth: "none",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
            borderRadius: "0",
            backgroundImage: `
              linear-gradient(
                rgba(5, 10, 20, 0.42),
                rgba(5, 10, 20, 0.42)
              ),
              url("/Opulent Indian Garden Wedding Mandap.png")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            boxSizing: "border-box",
          }}
        >
          <div
            className="contact-hero-content"
            style={{
              width: "100%",
              maxWidth: "1500px",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >

            <div
              className="contact-hero-badge"
              style={{ fontSize: "13px" }}
            >
              <span>✦</span>
              WE'RE HERE TO MAKE YOUR EVENT SPECIAL
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5vw, 76px)",
                lineHeight: "1.12",
              }}
            >
              Let's Talk About Your
              <br />
              <span>Perfect Event.</span>
            </h1>

            <p
              className="contact-hero-description"
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Have questions, need assistance or looking for the perfect event
              vendors? Connect with HarEvent and let's make your special moments
              unforgettable.
            </p>

            <div className="contact-hero-searchbar">

              <a
                href="tel:+917448181396"
                className="contact-hero-action"
              >
                <Phone size={20} />
                <span>
                  <small style={{ fontSize: "11px" }}>
                    CALL OUR TEAM
                  </small>
                  <strong style={{ fontSize: "15px" }}>
                    {SUPPORT_PHONE}
                  </strong>
                </span>
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="contact-hero-action"
              >
                <Mail size={20} />
                <span>
                  <small style={{ fontSize: "11px" }}>
                    EMAIL SUPPORT
                  </small>
                  <strong style={{ fontSize: "15px" }}>
                    Send us an email
                  </strong>
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Walgaon+Road+Amravati+Maharashtra+India"
                target="_blank"
                rel="noreferrer"
                className="contact-hero-action"
              >
                <MapPin size={20} />
                <span>
                  <small style={{ fontSize: "11px" }}>
                    OUR LOCATION
                  </small>
                  <strong style={{ fontSize: "15px" }}>
                    Amravati, Maharashtra
                  </strong>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-hero-search-btn"
                style={{ fontSize: "15px" }}
              >
                <MessageCircle size={19} />
                Chat With Us
                <ArrowRight size={18} />
              </a>

            </div>
          </div>
        </section>

        {/* THREE WAYS TO CONTACT */}

        <section className="contact-methods contact-section">

          <div className="contact-section-heading">
            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Three ways to reach <em>our team.</em>
            </h2>

            <p>
              Choose the support that best matches what you need.
            </p>
          </div>

          <div className="contact-method-grid">
            {contactOptions.map(
              ({ eyebrow, title, description, Icon, links }) => (
                <article
                  className="contact-method-card"
                  key={eyebrow}
                >
                  <span className="contact-method-icon">
                    <Icon size={22} />
                  </span>

                  <span className="contact-card-eyebrow">
                    {eyebrow}
                  </span>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <div className="contact-method-links">
                    {links.map(
                      ({ label, href, Icon: LinkIcon, external }) => (
                        <a
                          key={label}
                          href={href}
                          {...(
                            external
                              ? {
                                  target: "_blank",
                                  rel: "noreferrer",
                                }
                              : {}
                          )}
                        >
                          <LinkIcon size={15} />
                          <span>{label}</span>
                          <ChevronRight size={14} />
                        </a>
                      )
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* CONTACT FORM AND CONTACT INFORMATION */}

        <section className="contact-main-grid contact-section">

          <div className="contact-form-panel">

            <div className="contact-panel-heading">
              <span className="contact-eyebrow">
                WRITE TO US
              </span>

              <h2>
                Send us a <em>message.</em>
              </h2>

              <p>
                Fill in the form and our team will get back to you
                during working hours.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">
                <label>
                  <span style={fieldLabelStyle}>
                    Full name <span>*</span>
                  </span>

                  <input
                    style={fieldControlStyle}
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span style={fieldLabelStyle}>
                    Email address <span>*</span>
                  </span>

                  <input
                    style={fieldControlStyle}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  <span style={fieldLabelStyle}>
                    Phone number
                    <small
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#8b7b89",
                      }}
                    >
                      (optional)
                    </small>
                  </span>

                  <input
                    style={fieldControlStyle}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <span style={fieldLabelStyle}>
                    I am a <span>*</span>
                  </span>

                  <select
                    style={fieldControlStyle}
                    name="role"
                    value={form.role}
                    onChange={updateField}
                    required
                  >
                    <option>Customer</option>
                    <option>Vendor</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label>
                <span style={fieldLabelStyle}>
                  Subject <span>*</span>
                </span>

                <select
                  style={fieldControlStyle}
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  required
                >
                  <option>Planning an event</option>
                  <option>Listing my business</option>
                  <option>Vendor plans</option>
                  <option>Report a problem</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span style={fieldLabelStyle}>
                  Your message <span>*</span>
                </span>

                <textarea
                  style={fieldControlStyle}
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                />
              </label>

              <label className="contact-privacy-check">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={form.privacy}
                  onChange={updateField}
                  required
                />

                <span>
                  I agree to HarEvent's{" "}
                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>.
                </span>
              </label>

              {notice && (
                <p
                  className="contact-form-notice"
                  role="status"
                >
                  {notice}
                </p>
              )}

              <button
                className="contact-submit"
                type="submit"
              >
                Prepare Message
                <Send size={18} />
              </button>

              <p className="contact-form-footnote">
                <ShieldCheck size={15} />
                Your details are used only to respond to your enquiry.
              </p>

            </form>
          </div>

          {/* CONTACT DETAILS */}

          <aside className="contact-info-panel">

            <div className="contact-panel-heading">
              <span className="contact-eyebrow">
                WE'D LOVE TO HEAR FROM YOU
              </span>

              <h2>
                Contact <em>information.</em>
              </h2>

              <p>
                Here's how you can reach the HarEvent team.
              </p>
            </div>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={21} />
                </span>

                <div>
                  <b>Our Office</b>

                  <p>{OFFICE_ADDRESS}</p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Walgaon+Road%2C+Amravati%2C+Maharashtra%2C+India"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Mail size={21} />
                </span>

                <div>
                  <b>Email Us</b>

                  <a href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>

                  <small>
                    For customer, vendor and general enquiries
                  </small>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Phone size={21} />
                </span>

                <div>
                  <b>Call or WhatsApp</b>

                  <a href="tel:+917448181396">
                    {SUPPORT_PHONE}
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us on WhatsApp <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <CalendarClock size={21} />
                </span>

                <div>
                  <b>Business Hours</b>
                  <p>Monday to Friday</p>
                  <p>10:00 AM – 6:00 PM</p>

                  <small>
                    Closed on Saturday and Sunday
                  </small>
                </div>
              </div>

            </div>

            <div className="contact-social-card">
              <div>
                <b>Stay connected</b>
                <span>
                  Follow HarEvent for updates and inspiration.
                </span>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow HarEvent on Instagram"
              >
                Instagram <ArrowRight size={14} />
              </a>
            </div>

          </aside>
        </section>

        {/* OFFICE MAP AND IMAGE */}

        <section className="contact-location-grid contact-section">

          <div className="contact-map-card">
            <iframe
              title="Map showing Walgaon Road, Amravati"
              src="https://www.google.com/maps?q=Walgaon+Road%2C+Amravati%2C+Maharashtra%2C+India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="contact-map-label">
              <span className="contact-info-icon">
                <MapPin size={20} />
              </span>

              <div>
                <b>Find Us Here</b>
                <small>{OFFICE_ADDRESS}</small>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Walgaon+Road%2C+Amravati%2C+Maharashtra%2C+India"
                target="_blank"
                rel="noreferrer"
              >
                Directions <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="contact-office-photo">
            <img
              src="/Luxurious Ivory Floral Wedding Stage.png"
              alt="Elegant event venue prepared for a celebration"
            />

            <div className="contact-office-overlay">
              <span>
                <HeartHandshake size={20} />
              </span>

              <div>
                <b>We're more than happy to meet you!</b>
                <small>
                  Let's build something amazing together.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK HELP */}

        <section className="contact-quick-help contact-section">

          <div className="contact-quick-copy">
            <span className="contact-eyebrow">
              NEED A HAND?
            </span>

            <h2>
              A little help goes <em>a long way.</em>
            </h2>

            <p>
              Find the right place to start. We're here to make
              your next step easier.
            </p>
          </div>

          <div className="contact-quick-links">

            <Link to="/event-categories">
              <span>
                <CalendarClock size={19} />
              </span>

              <div>
                <b>Looking for vendors?</b>
                <small>
                  Explore event categories and find services for your occasion.
                </small>
              </div>

              <ChevronRight size={17} />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <MessageCircle size={19} />
              </span>

              <div>
                <b>Need a quick answer?</b>
                <small>
                  Chat with the HarEvent team on WhatsApp.
                </small>
              </div>

              <ChevronRight size={17} />
            </a>

            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                "HarEvent grievance / complaint"
              )}`}
            >
              <span>
                <ShieldCheck size={19} />
              </span>

              <div>
                <b>Have a complaint?</b>
                <small>
                  Email us with the details and we'll review your concern.
                </small>
              </div>

              <ChevronRight size={17} />
            </a>

          </div>
        </section>

        {/* CONTACT FAQs */}

        <section className="contact-faq contact-section">

          <div className="contact-section-heading centered">
            <span className="contact-eyebrow">
              QUICK ANSWERS
            </span>

            <h2>
              Frequently asked <em>questions.</em>
            </h2>

            <p>
              A few helpful answers before you get in touch.
            </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map(({ question, answer }) => (
              <details
                className="contact-faq-item"
                key={question}
              >
                <summary>
                  {question}
                  <ChevronDown size={18} />
                </summary>

                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="contact-bottom-cta">

          <div className="contact-bottom-icon">
            <MessageCircle size={25} />
          </div>

          <div>
            <span>WE'RE JUST A MESSAGE AWAY</span>

            <h2>
              Let's make your next event special.
            </h2>

            <p>
              Tell us what you're planning. We'll help you take the next step.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Contact;
