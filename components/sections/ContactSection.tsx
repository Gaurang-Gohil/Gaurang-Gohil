import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something reliable"
        description="Open to full-time opportunities and consulting collaborations."
      />

      <div id="contact-heading" className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <form className="panel space-y-4 p-6" aria-label="Contact form">
          <label className="block space-y-2 text-sm text-slate-200">
            <span>Name</span>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-accent"
            />
          </label>

          <label className="block space-y-2 text-sm text-slate-200">
            <span>Email</span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-accent"
            />
          </label>

          <label className="block space-y-2 text-sm text-slate-200">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-sky-300"
          >
            Send Message
          </button>
        </form>

        <aside className="panel space-y-4 p-6 text-sm text-slate-300">
          <p>
            Email:{' '}
            <Link href="mailto:ronie@example.com" className="text-accent hover:underline">
              ronie@example.com
            </Link>
          </p>
          <p>
            GitHub:{' '}
            <Link
              href="https://github.com/ronie"
              className="text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ronie
            </Link>
          </p>
          <p>
            LinkedIn:{' '}
            <Link
              href="https://www.linkedin.com/in/ronie"
              className="text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ronie
            </Link>
          </p>
        </aside>
      </div>
    </section>
  );
}
