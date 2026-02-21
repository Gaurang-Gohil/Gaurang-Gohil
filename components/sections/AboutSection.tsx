import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading
        eyebrow="About"
        title="Engineering resilient systems with a calm, methodical approach"
      />
      <p id="about-heading" className="panel max-w-3xl p-7 text-slate-300">
        I am a DevOps Engineer who focuses on building dependable delivery pipelines,
        improving cloud cost efficiency, and creating observable infrastructure that teams
        trust in production. My approach balances speed with reliability so product teams can
        ship confidently.
      </p>
    </section>
  );
}
