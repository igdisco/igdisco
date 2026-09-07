import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="IGDISCO home">
      <span className="brand-symbol">
        <Image
          src="/assets/images/logo-light.png"
          alt=""
          width={48}
          height={42}
        />
      </span>
      <span>
        IG DISCO<span className="brand-period">.</span>
      </span>
    </Link>
  );
}
