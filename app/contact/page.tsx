import type { Metadata } from "next";
import { Arrow, Container, Tag } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Centricon. Email, WhatsApp or call — we reply within 24 hours on weekdays.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: contact.phoneDisplay, href: contact.whatsappHref },
  { label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref },
  { label: "LinkedIn", value: "centricon-tech", href: contact.linkedin },
];

const brief = [
  "What the video is for, and who will watch it",
  "Where it will run: social, ads, website, TV, an event",
  "Your deadline",
  "A budget range, even a rough one",
  "Links to anything you like the look of",
];

export default function ContactPage() {
  return (
    <>
      <Container className="pb-16 pt-40 md:pb-24 md:pt-52">
        <Tag marker>Start a project</Tag>
        <h1 className="mt-8 max-w-5xl text-balance font-display text-display-l">Tell us about your project.</h1>
        <p className="mt-8 max-w-xl text-lead text-ink-muted">{contact.response}</p>
      </Container>

      <section className="border-t border-line">
        <Container>
          <ul>
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="group flex flex-wrap items-center justify-between gap-4 border-b border-line py-8 md:py-10"
                >
                  <span className="w-40 font-brand text-label uppercase text-ink-muted">{c.label}</span>
                  <span className="flex-1 break-all font-display text-heading transition-transform duration-300 ease-brand group-hover:translate-x-3">
                    {c.value}
                  </span>
                  <Arrow className="size-6 text-ink-muted transition group-hover:text-amber" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="theme-light">
        <Container className="grid gap-10 py-26 md:grid-cols-12 md:py-36">
          <div className="md:col-span-4">
            <Tag>A good first message</Tag>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-heading">Five things that help us reply with a real plan, not more questions.</p>
            <ol className="mt-10 space-y-4">
              {brief.map((b, i) => (
                <li key={b} className="flex gap-6 border-t border-line pt-4 text-lead">
                  <span className="font-mono text-[13px] leading-8 text-amber-text">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
