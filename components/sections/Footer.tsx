import Link from 'next/link';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {year} Ronie · Built for resilient systems.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/ronie" className="hover:text-accent" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ronie"
            className="hover:text-accent"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="mailto:ronie@example.com" className="hover:text-accent">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
