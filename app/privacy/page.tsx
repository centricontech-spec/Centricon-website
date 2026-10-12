import type { Metadata } from "next";
import { Container, Tag } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Centricon collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    items: [
      "Personal information you give us, such as your name, email address and phone number, when you contact us or request our services.",
      "Usage data, including how you interact with our website and services.",
      "Technical data, such as your IP address, browser type and device information.",
    ],
  },
  {
    title: "How we use your information",
    items: [
      "To provide, maintain and improve our services.",
      "To communicate with you about our services and updates.",
      "To respond to your enquiries and provide support.",
      "To understand how our website is used and improve it.",
      "To comply with legal obligations and protect our legal rights.",
    ],
  },
  {
    title: "Data security",
    items: [
      "We use appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction.",
      "Data sent to and from this website is encrypted in transit.",
      "Access to personal information is limited to people who need it.",
      "We review our security practices regularly.",
    ],
  },
  {
    title: "Data sharing and disclosure",
    items: [
      "We do not sell, trade or rent your personal information.",
      "We may share information with trusted service providers who help us run our website and services.",
      "We may disclose information if required by law or to protect our rights and safety.",
      "If Centricon is merged or acquired, your information may transfer to the new owner.",
    ],
  },
  {
    title: "Your rights",
    items: [
      "You can ask us to access, correct or delete your personal information.",
      "You can opt out of marketing messages at any time.",
      "You can ask for a copy of the personal information we hold about you.",
      "You can object to some kinds of processing of your information.",
    ],
  },
  {
    title: "Cookies",
    items: [
      "We may use cookies and similar technologies to understand how the website is used.",
      "You can control cookies through your browser settings. Some features may not work with cookies disabled.",
    ],
  },
  {
    title: "Third-party links",
    items: [
      "Our website may link to other websites. We are not responsible for their privacy practices, and we encourage you to read their policies.",
    ],
  },
  {
    title: "Children's privacy",
    items: [
      "Our services are not intended for children under 13, and we do not knowingly collect their personal information. If we learn we have, we will delete it.",
    ],
  },
  {
    title: "Changes to this policy",
    items: [
      "We may update this policy to reflect changes in our practices or legal requirements. The date of the latest update is shown at the top of this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container className="pb-26 pt-40 md:pb-36 md:pt-52">
      <Tag>Legal</Tag>
      <h1 className="mt-8 font-display text-display-m">Privacy policy</h1>
      <p className="mt-4 font-mono text-[13px] text-ink-muted">Last updated 12 October 2026</p>

      <div className="mt-16 max-w-3xl space-y-14">
        {sections.map((s, i) => (
          <section key={s.title}>
            <h2 className="flex gap-4 font-display text-title">
              <span className="font-mono text-[13px] leading-9 text-amber-text">{String(i + 1).padStart(2, "0")}</span>
              {s.title}
            </h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <h2 className="font-display text-title">Contact us</h2>
          <p className="mt-5 text-ink-muted">
            Questions about this policy or your data: <a className="text-ink underline" href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
            {contact.phoneDisplay}.
          </p>
        </section>
      </div>
    </Container>
  );
}
