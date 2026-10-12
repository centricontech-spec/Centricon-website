import { ButtonLink, Container, Tag } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="pb-36 pt-48">
      <Tag>404</Tag>
      <h1 className="mt-8 font-display text-display-l">This frame is missing.</h1>
      <p className="mt-6 text-lead text-ink-muted">The page you were looking for doesn&apos;t exist or has moved.</p>
      <ButtonLink href="/" className="mt-10">Back to home</ButtonLink>
    </Container>
  );
}
