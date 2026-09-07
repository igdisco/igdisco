import Image from "next/image";
import Link from "next/link";

export default function Brand({ showText = true }: { showText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="IGDISCO home">
      <span className="relative inline-flex items-center justify-center">
        <Image
          src="/assets/images/logo-light.png"
          alt="IGDISCO"
          width={40}
          height={40}
          className="brand-logo-light h-9 w-auto object-contain transition-transform group-hover:scale-105"
          priority
        />
        <Image
          src="/assets/images/logo-dark.png"
          alt="IGDISCO"
          width={40}
          height={40}
          className="brand-logo-dark h-9 w-auto object-contain transition-transform group-hover:scale-105"
          priority
        />
      </span>
      {showText && (
        <span className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
          IGDISCO
        </span>
      )}
    </Link>
  );
}
