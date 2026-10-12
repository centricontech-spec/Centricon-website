import type { Metadata } from "next";
import { ButtonLink, Container, SectionIntro, Tag } from "@/components/ui";
import { creativeServices, engineeringServices, videoServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI video production — brand films, product ads, social content, AI avatars, music visuals and localisation — plus AI agents, apps and custom software.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Container className="pb-20 pt-40 md:pb-28 md:pt-52">
        <Tag>Services</Tag>
        <h1 className="mt-8 max-w-5xl text-balance font-display text-display-l">
          Video first. Software when you need it.
        </h1>
        <p className="mt-8 max-w-2xl text-lead text-ink-muted">
          Six kinds of AI video, a few creative extras, and an engineering team for the systems behind them.
        </p>
      </Container>

      {/* AI VIDEO */}
      <section className="border-t border-line">
        {videoServices.map((s, i) => (
          <article key={s.slug} id={s.slug} className="scroll-mt-24 border-b border-line">
            <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
              <div className="reveal md:col-span-5">
                <span className="font-mono text-[13px] text-amber-text">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-display-m">{s.name}</h2>
                <p className="mt-4 text-ink-muted">{s.line}</p>
              </div>
              <div className="reveal md:col-span-6 md:col-start-7">
                <p className="text-lead">{s.detail}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 border-t border-line pt-3 text-ink-muted">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </article>
        ))}
      </section>

      {/* CREATIVE */}
      <section className="theme-light">
        <Container className="py-26 md:py-36">
          <SectionIntro tag="Also" title="Stills, motion and identity." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {creativeServices.map((c) => (
              <div key={c.name} className="reveal border-t border-ink pt-5">
                <h3 className="font-display text-title">{c.name}</h3>
                <p className="mt-3 text-ink-muted">{c.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ENGINEERING */}
      <section id="engineering" className="scroll-mt-24">
        <Container className="py-26 md:py-36">
          <SectionIntro
            tag="Engineering"
            title="The AI behind the work."
            lead="Our engineers build AI agents, apps and the infrastructure under them — for clients, and for our own production pipeline."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((e) => (
              <div key={e.name} className="reveal border-t border-line pt-5">
                <h3 className="font-display text-title">{e.name}</h3>
                <p className="mt-3 text-ink-muted">{e.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-wrap items-end justify-between gap-8 py-20 md:py-28">
          <h2 className="max-w-3xl font-display text-heading">Not sure which one you need? Tell us the goal and we&apos;ll suggest the format.</h2>
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </Container>
      </section>
    </>
  );
}
