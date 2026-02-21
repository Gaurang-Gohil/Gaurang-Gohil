import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function ButtonLink({
  href,
  label,
  variant = 'primary',
}: ButtonLinkProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200';

  const variantClasses =
    variant === 'primary'
      ? 'bg-accent text-slate-950 hover:bg-sky-300'
      : 'border border-slate-700 bg-slate-900 text-slate-100 hover:border-accent hover:text-accent';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}
