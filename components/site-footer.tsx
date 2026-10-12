import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ground-deep">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <Image
            src="/brand/centricon-logo-on-dark.svg"
            alt="Centricon"
            width={132}
            height={200}
            unoptimized
            className="h-40 w-auto"
          />
        </div>

        <div className="md:col-span-2">
          <p className="font-brand text-label uppercase text-ink-muted">Studio</p>
          <ul className="mt-5 space-y-3">
            <li><Link href="/" className="hover:text-amber-text">Home</Link></li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber-text">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-brand text-label uppercase text-ink-muted">Contact</p>
          <ul className="mt-5 space-y-3">
            <li><a href={`mailto:${contact.email}`} className="hover:text-amber-text">{contact.email}</a></li>
            <li><a href={contact.whatsappHref} className="hover:text-amber-text">WhatsApp {contact.phoneDisplay}</a></li>
            <li><a href={contact.linkedin} className="hover:text-amber-text">LinkedIn</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-brand text-label uppercase text-ink-muted">Based in</p>
          <p className="mt-5 text-ink-muted">{site.location}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-line px-4 py-6 text-sm text-ink-muted md:px-10">
        <span>© {site.year} Centricon</span>
        <Link href="/privacy" className="hover:text-ink">Privacy policy</Link>
      </div>
    </footer>
  );
}
