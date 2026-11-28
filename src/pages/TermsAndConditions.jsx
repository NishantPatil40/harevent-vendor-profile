import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

/* =========================================
   TERMS CONTENT
   Block types:
   - p    : paragraph
   - ul   : bullet list (strings)
   - lead : bullet list with bold lead-in { lead, text }
   Use **bold** for bold text.
   Anything written as [CONFIRM: ...] is shown
   highlighted so you can find and fill it in.
========================================= */

const termsSections = [
  {
    id: "welcome",
    title: "Welcome To HarEvent",
    blocks: [
      {
        type: "p",
        text: 'HarEvent is an online marketplace that helps people discover event vendors and helps vendors reach customers. It is operated by [CONFIRM: full legal name of the company] ("HarEvent", "we", "us"). These Terms are an agreement between you and HarEvent. By using our website or apps (the "Platform"), you agree to these Terms and to our Privacy Policy. If you do not agree, please do not use the Platform.',
      },
    ],
  },
  {
    id: "key-words",
    title: "Key Words",
    blocks: [
      {
        type: "lead",
        items: [
          {
            lead: "Customer:",
            text: "anyone who uses the Platform to find, contact or hire vendors.",
          },
          {
            lead: "Vendor:",
            text: "a business or professional who lists services on the Platform, such as venues, decorators, caterers, photographers, DJs and entertainers.",
          },
          {
            lead: "Listing:",
            text: "a vendor's profile and the information on it.",
          },
          {
            lead: "Enquiry:",
            text: "a request a customer sends to a vendor.",
          },
          {
            lead: "Quote:",
            text: "a vendor's price offer in reply to an enquiry.",
          },
        ],
      },
    ],
  },
  {
    id: "what-we-do",
    title: "What HarEvent Does, And What It Does Not",
    blocks: [
      {
        type: "ul",
        items: [
          "HarEvent is a discovery and connection platform. We help customers find vendors and send enquiries, and we help vendors show their work and receive enquiries.",
          "Vendors are independent businesses. They are not employees, agents or partners of HarEvent.",
          "Any agreement for an event is between the customer and the vendor. HarEvent is not a party to it.",
          "We do not guarantee any vendor's availability, quality, pricing or performance.",
          "[CONFIRM: HarEvent does not process payments on the Platform. Customers and vendors settle payments directly.]",
          "Please do your own checks before you hire a vendor.",
        ],
      },
    ],
  },
  {
    id: "who-can-use",
    title: "Who Can Use HarEvent",
    blocks: [
      {
        type: "p",
        text: "You must be at least 18 years old and able to enter into a binding agreement. If you use HarEvent for a business, you confirm that you can bind that business. You must give accurate information and keep it up to date.",
      },
    ],
  },
  {
    id: "your-account",
    title: "Your Account",
    blocks: [
      {
        type: "p",
        text: "You are responsible for your login details and for everything done through your account. Tell us at once if you think someone has used your account without permission. A vendor account owner is responsible for the team members they add and for what they do on the account.",
      },
    ],
  },
  {
    id: "customers",
    title: "For Customers",
    blocks: [
      {
        type: "ul",
        items: [
          "Give accurate event details so vendors can reply properly.",
          "Enquiries and chats on HarEvent are meant for genuine event planning only.",
          "Compare quotes carefully. Ask the vendor to confirm in writing what is included, the payment schedule, and the cancellation terms before you confirm a booking.",
          "Payments, refunds and cancellations are agreed directly with the vendor. [CONFIRM: HarEvent's role if there is a dispute].",
          "Please do not pay the full amount in advance, and keep receipts.",
        ],
      },
    ],
  },
  {
    id: "vendors",
    title: "For Vendors",
    blocks: [
      {
        type: "lead",
        items: [
          {
            lead: "Accurate listing.",
            text: "Your information, categories, cities and photos must be true and not misleading.",
          },
          {
            lead: "Your content.",
            text: "You must own, or have permission to use, everything you upload, including photos, videos and music.",
          },
          {
            lead: "Quotes.",
            text: "Prices are shared in quotes, not on profiles. Quotes must be clear, honest and honoured, and should state what is included, extra charges, payment terms and cancellation terms.",
          },
          {
            lead: "Customer information.",
            text: "Use customer details only to respond to their enquiry and deliver the service. Do not use them for unrelated marketing or share them with others.",
          },
          {
            lead: "Your business.",
            text: "You are responsible for your licences, taxes (including GST where it applies), insurance, staff and the services you provide.",
          },
          {
            lead: "Responding.",
            text: "Reply to enquiries politely and promptly, and keep your availability up to date.",
          },
        ],
      },
    ],
  },
  {
    id: "plans-and-fees",
    title: "Vendor Plans And Fees",
    blocks: [
      {
        type: "p",
        text: "HarEvent offers vendor plans, such as Basic, Gold and Platinum, with different features. [CONFIRM: plan names, prices, billing period, features and what is free]. Paid plans may also be covered by additional terms shown at purchase.",
      },
      {
        type: "p",
        text: "[CONFIRM: refund and cancellation terms for paid plans.]",
      },
      {
        type: "p",
        text: "A plan does not guarantee a number of enquiries, bookings, rankings or earnings.",
      },
      {
        type: "p",
        text: "Badges, stamps or stickers shown on a profile mean only what HarEvent describes next to them. [CONFIRM: what verification, if any, is done before a badge is shown].",
      },
    ],
  },
  {
    id: "how-vendors-shown",
    title: "How Vendors Are Shown",
    blocks: [
      {
        type: "p",
        text: "The order in which vendors appear can depend on things such as how well they match the search, location, category, completeness of the profile, responsiveness, reviews, and the vendor's plan. [CONFIRM: ranking and promotion policy]. Where paid placement affects the order, we will say so clearly.",
      },
    ],
  },
  {
    id: "reviews",
    title: "Reviews And Ratings",
    blocks: [
      {
        type: "p",
        text: "Reviews are the opinions of the customers who write them. HarEvent does not endorse them. Reviews must be genuine, based on a real experience, and must not be defamatory or unlawful. Fake reviews, paid reviews and attempts to manipulate ratings are not allowed. Vendors may report a review they believe is false, and we may check it and remove it if it breaks these Terms. Vendors cannot edit reviews or reply to them. [CONFIRM: review rules, including who can review and when]. We do not remove a review only because a vendor disagrees with it.",
      },
    ],
  },
  {
    id: "content-ownership",
    title: "Content And Ownership",
    blocks: [
      {
        type: "p",
        text: "HarEvent owns the Platform, its design, logo, text and software. You may use the Platform for its intended purpose, but you may not copy, scrape or resell it, or use it to build a competing service.",
      },
      {
        type: "p",
        text: "You own the content you upload. By uploading it, you give HarEvent a non-exclusive, free, worldwide permission to host, display, resize and promote it on and for the Platform. If you remove the content, we will stop using it where we reasonably can.",
      },
    ],
  },
  {
    id: "must-not-do",
    title: "What You Must Not Do",
    blocks: [
      {
        type: "ul",
        items: [
          "Post anything unlawful, false, hateful, abusive, harassing, sexually explicit or that infringes someone's rights.",
          "Pretend to be someone else, or create fake enquiries or fake vendor profiles.",
          "Send spam, or use contact details for unwanted marketing.",
          "Try to access accounts, systems or data you are not allowed to.",
          "Interfere with how the Platform works, or use bots or automated tools without our written permission.",
        ],
      },
      {
        type: "p",
        text: "HarEvent welcomes everyone. Discrimination against any user is not allowed.",
      },
    ],
  },
  {
    id: "intermediary",
    title: "Our Role As An Intermediary",
    blocks: [
      {
        type: "p",
        text: "HarEvent is an intermediary. Listings, reviews and messages are created by users, and each user is responsible for what they post. We may remove or restrict content that breaks these Terms or the law, or that we are required to remove, and we act on valid legal orders and complaints.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: 'The Platform is provided "as is". To the extent the law allows, HarEvent does not guarantee that the Platform will always be available or error-free, that information on it is complete or accurate, or that any vendor will deliver as promised. HarEvent is not responsible for disputes between customers and vendors, for a vendor not performing, for cancellations, or for losses from relying on information on the Platform.',
      },
    ],
  },
  {
    id: "liability",
    title: "Limit On Our Liability",
    blocks: [
      {
        type: "p",
        text: "To the extent the law allows, HarEvent is not liable for indirect or consequential losses, such as lost profit, lost business or lost data. Our total liability to you for any claim is limited to the fees you paid to HarEvent in the 12 months before the claim, or [CONFIRM: amount] if you paid nothing. Nothing in these Terms limits liability that cannot be limited by law.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: [
      {
        type: "p",
        text: "You agree to cover HarEvent for losses and costs that result from your breach of these Terms, your content, or your misuse of the Platform.",
      },
    ],
  },
  {
    id: "suspension",
    title: "Suspension And Ending Your Account",
    blocks: [
      {
        type: "p",
        text: "We may suspend or end an account, or remove a listing or content, if these Terms are broken, if there is fraud or abuse, if safety is at risk, or if the law requires it. You can close your account at any time by contacting us. [CONFIRM: what happens to listings, reviews and chats when an account is closed].",
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints And Takedown",
    blocks: [
      {
        type: "p",
        text: "If you believe content on HarEvent infringes your rights or is unlawful, write to our Grievance Officer with the link to the content, the reason for your complaint, your contact details and a statement that your information is accurate. We will acknowledge and handle valid complaints within the time required by law, and may reject incomplete or bad-faith complaints.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "Events We Cannot Control",
    blocks: [
      {
        type: "p",
        text: "HarEvent is not responsible for delays or failures caused by events beyond our reasonable control, such as natural disasters, government action, internet or power failures, cyber-attacks or strikes.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes To These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms from time to time. The new version applies once it is posted with a new date. If you keep using HarEvent after that, you accept the changes.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of India. Courts in [CONFIRM: city] will have jurisdiction over any dispute, subject to your rights under applicable consumer law.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    blocks: [
      {
        type: "lead",
        items: [
          { lead: "Company:", text: "[CONFIRM: full legal name]" },
          { lead: "Email:", text: "[CONFIRM: email address]" },
          { lead: "Address:", text: "[CONFIRM: registered office address]" },
          {
            lead: "Grievance Officer:",
            text: "[CONFIRM: name and contact details]",
          },
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
        <mark className="terms-confirm" key={index}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

function TermsAndConditions() {
  return (
    <div className="terms-page">
      <Navbar />

      <main className="terms-main">
        <h1 className="terms-title">Terms &amp; Conditions</h1>

        <section className="terms-layout">
          <article className="terms-content">
            {termsSections.map((section) => (
              <section
                className="terms-block"
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

export default TermsAndConditions;