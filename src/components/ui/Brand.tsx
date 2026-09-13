import Image from "next/image";
import Link from "next/link";

export default function Brand({ showText = true }: { showText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-0 sm:gap-1 group" aria-label="IGDISCO home">
      <span className="relative inline-flex items-center justify-center overflow-hidden w-[52px] h-[34px] sm:w-[60px] sm:h-[38px] -mr-2 sm:-mr-3 -translate-y-0.5 sm:-translate-y-[3px]">
        <Image
          src="/assets/images/logo-light.png"
          alt="IGDISCO"
          width={157}
          height={137}
          className="brand-logo-light w-full h-full object-cover object-top transition-transform group-hover:scale-105"
          priority
        />
        <Image
          src="/assets/images/logo-dark.png"
          alt="IGDISCO"
          width={157}
          height={137}
          className="brand-logo-dark w-full h-full object-cover object-top transition-transform group-hover:scale-105"
          priority
        />
      </span>
      {showText && (
        <span className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors leading-none">
          IGDISCO
        </span>
      )}
    </Link>
  );
}
