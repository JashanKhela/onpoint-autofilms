// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroImage.jpg" // Replace with your actual image path
        alt="On Point Auto Films Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 backdrop-blur-xs" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-neon-pink drop-shadow-lg">
  On Point Auto Films
</h1>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Premium Auto Detailing & Protection
        </h2>
        <p className="mt-4 max-w-2xl !text-xl !md:text-2xl text-zinc-300">
        The Okanagan’s top choice for premium wraps, ceramic coating, paint protection film, tinting, and custom auto restyling.
</p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Link href="/contact">
            <button className="bg-neon-pink text-black px-6 py-3 rounded-md font-semibold hover:bg-neon-teal transition-colors w-full md:w-auto">
             View Our Services
            </button>
          </Link>
          <a
            href="tel:1234567890"
            className="border border-neon-pink text-neon-pink px-6 py-3 rounded-md font-semibold hover:bg-neon-teal hover:text-black hover:border-black transition-colors"
          >
            Call Us
          </a>
        </div>
        <p className="mt-4 !text-md md:text-base !text-white uppercase tracking-widest font-bold">
  Lifetime Installation Warranty
</p>
      </div>
    </section>
  );
}
