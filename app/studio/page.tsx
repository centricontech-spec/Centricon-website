import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Container, SectionIntro, Tag } from "@/components/ui";
import { principles, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Centricon is an AI film and video studio that also builds AI systems. How we work and what we believe.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <Container className="grid gap-12 pb-20 pt-40 md:grid-cols-12 md:pb-28 md:pt-52">
        <div className="md:col-span-8">
          <Tag>Studio</Tag>
          <h1 className="mt-8 text-balance font-display text-display-l">A studio for a new kind of film.</h1>
        </div>
        <div className="md:col-span-4 md:pt-24">
          <p className="text-lead text-ink-muted">
            Centricon writes, directs and generates video with AI, and builds the software that sits behind it. One
            team, from the first idea to the final cut.
          </p>
        </div>
      </Container>

      <div className="relative aspect-[21/9] w-full overflow-hidden bg-ground-deep">
        <Image src="/images/hero-still-rings.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <section className="theme-light">
        <Container className="grid gap-10 py-26 md:grid-cols-12 md:py-42">
          <div className="reveal md:col-span-3">
            <Tag>Why Centricon</Tag>
          </div>
          <div className="reveal space-y-8 md:col-span-8">
            <p className="font-display text-heading">
              Generative video changed what a small team can make. It didn&apos;t change what makes a film good.
            </p>
            <p className="text-lead text-ink-muted">
              A model can produce a beautiful shot. Turning shots into something a brand can run — on-message,
              consistent from frame to frame, cut to rhythm, graded and scored — is still craft. That&apos;s the job we
              do. The name comes from the logo: rings converging on one centre, the way every part of a project
              converges on the final cut.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-26 md:py-42">
          <SectionIntro tag="What we believe" title="Four rules we work by." />
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.name} className="reveal border-t border-line pt-6">
                <span className="font-mono text-[13px] text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-display text-title">{p.name}</h3>
                <p className="mt-3 max-w-lg text-ink-muted">{p.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ground-deep">
        <Container className="py-26 md:py-36">
          <SectionIntro tag="How we work" title="Five steps, every project." />
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {steps.map((step, i) => (
              <li key={step.name} className="reveal grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
                <span className="font-mono text-[13px] text-amber-text md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-title md:col-span-4">{step.name}</h3>
                <p className="text-ink-muted md:col-span-7">{step.line}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-end justify-between gap-8 py-20 md:py-28">
          <div>
            <p className="font-brand text-label uppercase text-ink-muted">Based in</p>
            <p className="mt-3 text-lead">{site.location}</p>
          </div>
          <ButtonLink href="/contact">Work with us</ButtonLink>
        </Container>
      </section>
    </>
  );
}
