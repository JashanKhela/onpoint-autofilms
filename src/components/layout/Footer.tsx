import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-14 pb-10 text-lg text-zinc-400">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <Image
            src="/OnPointAutoFilmShortLogo.png"
            alt="On Point Auto Films Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="!text-zinc-400 !leading-relaxed !text-lg">
            Our skilled and certified team ensures your vehicle shines with
            brilliance, while safeguarding its beauty for years to come.
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="!text-white !font-semibold !mb-3">Business Hours</h4>
          <ul className="space-y-1">
            <li>Mon–Fri: 8:30am – 6:00pm</li>
            <li>Sat: 9:00am – 4:00pm</li>
            <li>Sun: CLOSED</li>
          </ul>
        </div>

        {/* Contact + Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>
              <span>📍 3310 Appaloosa Rd, Unit 8, Kelowna, BC</span>
            </li>
            <li>
              <span>
                📞{" "}
                <a
                  href="tel:+12508595432"
                  className="text-neon-pink hover:underline"
                >
                  (250) 859-5432
                </a>
              </span>
            </li>
            <li>
              <span>
                📧{" "}
                <a
                  href="mailto:matthew@onpointautofilms.ca"
                  className="text-neon-purple hover:underline"
                >
                  Send us an email
                </a>
              </span>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/onpointautofilms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-teal"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/onpointautofilms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-pink"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} On Point Auto Films. All rights
          reserved.
        </p>
        <a
            href="https://www.khelatech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-pink text-md"
          >
            Site by KhelaTech
          </a>
        <div className="mt-2 flex flex-col sm:flex-row sm:justify-center items-center gap-2 sm:gap-6 text-zinc-500">
          <Link href="/privacy" className="hover:text-neon-pink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-neon-purple">
            Terms Of Service
          </Link>
          <Link href="/contact" className="hover:text-neon-teal">
            Contact
          </Link>

        </div>
      </div>
    </footer>
  );
}
