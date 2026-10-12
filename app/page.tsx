import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { Arrow, ButtonLink, Container, SectionIntro, Tag, TextLink } from "@/components/ui";
import { audiences, contact, engineeringServices, steps, videoServices } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden md:min-h-[min(100svh,960px)]">
        <HeroVideo
          desktop={{
            mp4: "/video/hero/hero-desktop-1080.mp4",
            webm: "/video/hero/hero-desktop-1080.webm",
            poster: "/video/hero/hero-poster-desktop.jpg",
          }}
          mobile={{ mp4: "/video/hero/hero-mobile-720x1280.mp4", poster: "/video/hero/hero-poster-mobile.jpg" }}
        />
        <Container className="relative pb-12 pt-40 md:pb-16">
          <h1 className="font-display text-display-xl">
            <span className="hero-line"><span>We make films</span></span>
            <span className="hero-line"><span style={{ animationDelay: "90ms" }}>with AI<span className="text-amber">.</span></span></span>
          </h1>
          <div className="hero-fade mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-md text-lead text-ink/85">
              AI video, motion and visual production for brands plus the AI systems behind them.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="#services" variant="outline">What we make</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE — light panel */}
      <section className="theme-light">
        <Container className="grid gap-10 py-26 md:grid-cols-12 md:py-42">
          <div className="reveal md:col-span-3">
            <Tag>Who we are</Tag>
          </div>
          <div className="reveal md:col-span-9">
            <p className="text-balance font-display text-heading">
              Centricon is a studio for a new kind of film. We write, direct and generate video with AI, then cut,
              grade and score it the way a production house would.
            </p>
            <p className="mt-8 max-w-2xl text-lead text-ink-muted">
              Brands get campaign-quality video without the cost and lead time of a shoot. And when a project needs
              software behind it, our engineers build that too.
            </p>
            <TextLink href="/studio" className="mt-10">About the studio</TextLink>
          </div>
        </Container>
      </section>

      {/* WHAT WE MAKE */}
      <section id="services" className="scroll-mt-24">
        <Container className="py-26 md:py-42">
          <SectionIntro tag="What we make" title="Video for every screen your brand lives on." />
          <ul className="mt-16 border-b border-line md:mt-20">
            {videoServices.map((s, i) => (
              <li key={s.slug} className="reveal">
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line py-7 md:py-9"
                >
                  <span className="w-12 font-mono text-[13px] text-ink-muted transition-colors group-hover:text-amber-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 basis-80 font-display text-display-m transition-transform duration-300 ease-brand group-hover:translate-x-3">
                    {s.name}
                  </span>
                  <span className="max-w-[34ch] text-ink-muted">{s.line}</span>
                  <Arrow className="hidden size-5 text-ink-muted transition group-hover:text-amber md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-ground-deep">
        <Container className="py-26 md:py-42">
          <SectionIntro tag="Who we work with" title="Made for teams that need more video than a shoot can give them." />
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.name} className="reveal bg-ground-deep p-8">
                <h3 className="font-display text-title">{a.name}</h3>
                <p className="mt-4 text-ink-muted">{a.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW WE WORK — light panel */}
      <section className="theme-light">
        <Container className="py-26 md:py-42">
          <SectionIntro tag="How we work" title="From brief to final cut." />
          <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step.name} className="reveal border-l border-line pl-6 pr-4">
                <span className={`font-mono text-[13px] ${i === 0 ? "text-amber-text" : "text-ink-muted"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 font-display text-title">{step.name}</h3>
                <p className="mt-3 text-ink-muted">{step.line}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WE ALSO BUILD */}
      <section>
        <Container className="py-26 md:py-42">
          <SectionIntro
            tag="Engineering"
            title="We also build the AI behind the work."
            lead="The same team ships software: AI agents, apps and the systems that keep them running."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
            {engineeringServices.map((e) => (
              <div key={e.name} className="reveal border-t border-ink/80 pt-5">
                <h3 className="text-lg font-medium">{e.name}</h3>
                <p className="mt-2 text-ink-muted">{e.line}</p>
              </div>
            ))}
          </div>
          <TextLink href="/services#engineering" className="mt-14">Engineering services</TextLink>
        </Container>
      </section>

      {/* CLOSING */}
      <section className="border-t border-line">
        <Container className="py-26 md:py-42">
          <div className="reveal">
            <Tag marker>Start a project</Tag>
            <h2 className="mt-8 font-display text-display-l">
              Got an idea?
              <br />
              Let&apos;s film it<span className="text-amber">.</span>
            </h2>
          </div>
          <div className="reveal mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
            <a href={`mailto:${contact.email}`} className="border-b border-ink pb-1 text-lead">
              {contact.email}
            </a>
            <a href={contact.whatsappHref} className="text-lead text-ink-muted hover:text-ink">
              WhatsApp {contact.phoneDisplay}
            </a>
            <ButtonLink href="/contact">Book a call</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
