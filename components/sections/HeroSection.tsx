import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function HeroSection() {
  return (
    <section id="home" className="flex min-h-[90vh] items-center">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-7">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">DevOps Portfolio</p>
          <h1 className="text-5xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Ronie
            <span className="mt-2 block text-2xl font-normal text-slate-300 md:text-3xl">
              DevOps Engineer
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            I build scalable, reliable infrastructure and automate everything.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#projects" label="View Projects" />
            <ButtonLink href="#contact" label="Contact" variant="secondary" />
          </div>
        </div>

        <div className="panel mx-auto w-full max-w-xs p-3">
          <Image
            src="/profile-placeholder.svg"
            alt="Abstract portrait placeholder"
            width={460}
            height={460}
            priority
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
