import { Link } from "react-router-dom";
import { ChevronRight, Mail, ShieldCheck } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PrivacyPolicy.css";

const SUPPORT_EMAIL = "harevent2020@gmail.com";

/* =========================================
   POLICY CONTENT
   Block types:
   - p    : paragraph
   - ul   : bullet list (strings)
   - lead : bullet list with bold lead-in { lead, text }
   Use **bold** for bold text.
   Anything written as [CONFIRM: ...] is shown
   highlighted so you can find and fill it in.
========================================= */

const policySections = [
  {
    id: "about",
    title: "About This Policy",
    blocks: [
      {
        type: "p",
        text: 'HarEvent is an online marketplace that helps people find event vendors, such as venues, decorators, caterers, photographers and entertainers, and helps vendors reach customers. HarEvent is operated by [CONFIRM: full legal name of the company]. In this policy, "HarEvent", "we", "us" and "our" mean that company.',
      },
      {
        type: "p",
        text: "This policy explains what personal information we collect, why we collect it, who we share it with, how long we keep it, and what choices you have. By using HarEvent, you agree to this policy and to our Terms & Conditions.",
      },
    ],
  },
  {
    id: "who-it-covers",
    title: "Who This Policy Covers",
    blocks: [
      {
        type: "p",
        text: "This policy applies to visitors to our website and apps, customers who search for vendors or send enquiries, vendors who list their business, and team members added to a vendor account.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      {
        type: "lead",
        items: [
          {
            lead: "From customers:",
            text: "name, phone number, email address, city, event details (such as event type, date, guest count and requirements), enquiries, messages sent to vendors, and any reviews or photos you submit.",
          },
          {
            lead: "From vendors and their team members:",
            text: "business name, contact details, WhatsApp number, categories and services, cities served, description, photos and videos, and the name and contact details of team members. [CONFIRM: any documents collected for verification, such as PAN, GST or ID proof].",
          },
          {
            lead: "Collected automatically:",
            text: "device and browser type, IP address, pages visited, time spent and approximate location, collected through cookies and similar tools.",
          },
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    blocks: [
      { type: "p", text: "We use your information to:" },
      {
        type: "ul",
        items: [
          "create and manage your account;",
          "show vendors and profiles that match your search;",
          "pass your enquiry to the vendors you choose, and let you and vendors chat;",
          "send alerts about enquiries, quotes, bookings and messages, in the app and, where you allow it, on WhatsApp;",
          "show reviews and keep them genuine;",
          "provide support and respond to complaints;",
          "detect fraud, spam and misuse;",
          "understand how HarEvent is used and improve it;",
          "send updates and offers, where you have agreed;",
          "meet legal requirements.",
        ],
      },
    ],
  },
  {
    id: "consent",
    title: "Your Consent",
    blocks: [
      {
        type: "p",
        text: "We process your information based on your consent, which you give when you create an account, send an enquiry or submit content. We also process information where needed to provide our services, to keep the platform safe, and to follow the law. You can withdraw your consent at any time by contacting us. Withdrawing consent may mean we can no longer provide some services.",
      },
    ],
  },
  {
    id: "sharing",
    title: "Who We Share Information With",
    blocks: [
      {
        type: "lead",
        items: [
          {
            lead: "Vendors you contact.",
            text: "When you send an enquiry or message, the vendor receives the details needed to respond, such as your name, event details and message. [CONFIRM: when your phone number or email becomes visible to a vendor]. Vendors handle that information under their own practices, and must use it only to respond to your enquiry.",
          },
          {
            lead: "Service providers.",
            text: "Companies that help us run HarEvent, such as hosting, analytics, messaging and WhatsApp notifications, customer support and email. They may use your information only for these services.",
          },
          {
            lead: "Legal and safety.",
            text: "We may share information when the law requires it, to respond to valid legal requests, or to protect people, our rights or the platform.",
          },
          {
            lead: "Business changes.",
            text: "If HarEvent is merged, sold or restructured, information may be transferred as part of that.",
          },
        ],
      },
      {
        type: "p",
        text: "[CONFIRM: HarEvent does not sell personal information.] [CONFIRM: HarEvent does not currently collect payments on the platform. If this changes, add payment provider details here.]",
      },
    ],
  },
  {
    id: "public-content",
    title: "Messages, Reviews And Public Content",
    blocks: [
      {
        type: "p",
        text: "Messages between customers and vendors are stored so that both sides can follow up, and so that we can resolve complaints. Reviews, ratings, vendor profiles and portfolio photos may be visible to other users. Please do not share sensitive information, such as financial details or ID numbers, in chat or reviews.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    blocks: [
      {
        type: "p",
        text: "We use cookies and similar tools to keep you logged in, remember your preferences, measure performance and understand how people use HarEvent. You can block cookies in your browser settings, but some features may stop working.",
      },
    ],
  },
  {
    id: "retention",
    title: "How Long We Keep Information",
    blocks: [
      {
        type: "p",
        text: "We keep personal information only as long as needed for the purposes in this policy, or as the law requires. [CONFIRM: retention periods, for example how long inactive accounts, enquiries and chats are kept]. When you ask us to delete your information, we will delete it unless we must keep some of it for legal reasons, to settle a dispute or to prevent fraud.",
      },
    ],
  },
  {
    id: "security",
    title: "How We Protect Information",
    blocks: [
      {
        type: "p",
        text: "We use reasonable technical and organisational safeguards to protect your information from unauthorised access, loss, misuse or disclosure. No online service is completely secure, so please keep your password safe. If a data breach affects you, we will tell you and the authorities as required by law.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    blocks: [
      { type: "p", text: "You can ask us to:" },
      {
        type: "ul",
        items: [
          "show you the personal information we hold about you;",
          "correct or update information that is wrong;",
          "delete your information;",
          "withdraw your consent;",
          "nominate another person to exercise your rights if you cannot, as the law allows;",
          "address a complaint about how your information is handled.",
        ],
      },
      {
        type: "p",
        text: "To make a request, write to [CONFIRM: privacy email address]. We will reply within the time the law requires.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing And WhatsApp Messages",
    blocks: [
      {
        type: "p",
        text: "We send service messages, such as enquiry and booking updates, to the contact details you give us. We send promotional messages only where you have agreed. You can opt out at any time through your account settings, the unsubscribe link, or by replying STOP where available. [CONFIRM: opt-out options on WhatsApp].",
      },
    ],
  },
  {
    id: "children",
    title: "Children",
    blocks: [
      {
        type: "p",
        text: "HarEvent is for people aged 18 and over. We do not knowingly collect information from children. If we learn that we have, we will delete it.",
      },
    ],
  },
  {
    id: "other-sites",
    title: "Links To Other Sites",
    blocks: [
      {
        type: "p",
        text: "HarEvent may link to other websites, such as vendor websites or social media pages. We do not control them and are not responsible for their privacy practices.",
      },
    ],
  },
  {
    id: "outside-india",
    title: "Storage Outside India",
    blocks: [
      {
        type: "p",
        text: "Some of our service providers may store or process information outside India. [CONFIRM: hosting location]. Where this happens, we take steps to protect your information as the law requires.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes To This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this policy from time to time. We will post the new version here with a new date, and tell you about important changes. If you keep using HarEvent after a change, it means you accept the update.",
      },
    ],
  },
  {
    id: "grievance",
    title: "Grievance Officer And Contact",
    blocks: [
      {
        type: "p",
        text: "For questions, complaints or requests about your information:",
      },
      {
        type: "lead",
        items: [
          { lead: "Grievance Officer:", text: "[CONFIRM: name]" },
          { lead: "Email:", text: "[CONFIRM: email address]" },
          { lead: "Phone:", text: "[CONFIRM: phone number, optional]" },
          { lead: "Address:", text: "[CONFIRM: registered office address]" },
        ],
      },
    ],
  },
];

/* Turns **bold** and [CONFIRM: ...] into styled elements */
function renderText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[CONFIRM:[^\]]*\])/g);

  return parts.map((part, index) => {
    if (part.startsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("[CONFIRM:")) {
      return (
        <mark className="privacy-confirm" key={index}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Navbar />

      <main className="privacy-main">
        {/* =====================================
            HERO
        ====================================== */}
        <section className="privacy-hero">
          <div className="privacy-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <span>Privacy Policy</span>
          </div>

          <span className="privacy-eyebrow">
            <span className="privacy-eyebrow-line" />
            YOUR PRIVACY MATTERS
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <h2>How HarEvent handles your information.</h2>

          <p>
            We keep this policy simple. Here you can see what we collect,
            why we collect it, who we share it with and the choices you
            have.
          </p>

          <div className="privacy-hero-meta">
            <div>
              <ShieldCheck size={18} />
              <span>
                Last updated:{" "}
                <mark className="privacy-confirm">[CONFIRM: date]</mark>
              </span>
            </div>
            <div>
              <Mail size={18} />
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </div>
          </div>
        </section>

        {/* =====================================
            POLICY TEXT
        ====================================== */}
        <section className="privacy-layout">
        <article className="privacy-content">
          {policySections.map((section) => (
            <section
              className="privacy-block"
              id={section.id}
              key={section.id}
            >
              <h2>{section.title}</h2>

              {section.blocks.map((block, blockIndex) => {
                if (block.type === "p") {
                  return <p key={blockIndex}>{renderText(block.text)}</p>;
                }

                if (block.type === "ul") {
                  return (
                    <ul key={blockIndex}>
                      {block.items.map((item) => (
                        <li key={item}>{renderText(item)}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <ul key={blockIndex}>
                    {block.items.map((item) => (
                      <li key={item.lead}>
                        <strong>{item.lead}</strong> {renderText(item.text)}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </section>
          ))}
        </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;