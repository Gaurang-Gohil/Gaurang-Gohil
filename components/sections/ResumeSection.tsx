import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ResumeSection() {
  return (
    <section id="resume" aria-labelledby="resume-heading">
      <SectionHeading
        eyebrow="Resume"
        title="Want the full details?"
        description="Download a concise overview of my experience, certifications, and project highlights."
      />
      <div id="resume-heading" className="panel flex items-center justify-between gap-4 p-6 max-sm:flex-col max-sm:items-start">
        <p className="text-slate-300">Latest resume in PDF format.</p>
        <Link
          href="/resume.pdf"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-sky-300"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Link>
      </div>
    </section>
  );
}
