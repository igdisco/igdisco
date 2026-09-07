import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Brand from "./Brand";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>
              Enjoy the night.
              <br />
              We’ve got IT.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <Link href="/#services">Our services</Link>
              <Link href="/#capabilities">What we deliver</Link>
              <Link href="/#process">Our approach</Link>
              <Link href="/#team">Our team</Link>
            </div>
            <div>
              <span>LET’S CONNECT</span>
              <Link href="/#contact">
                Start a conversation <ArrowUpRight size={13} />
              </Link>
              <Link href="/#faq">Common questions</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} IGDISCO. All rights reserved.
          </span>
          <span>DevOps. Infrastructure. Security. Cloud. Operations.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
