// components/home/AboutPreview.tsx
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-black text-white py-20 px-4 border-t border-neon-pink">

      <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-neon-pink mb-2 animate-fade-in">
  Redefining Automotive Aesthetics & Protection
</h2>
<p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">
  About On Point Auto Films
</p>
<div className="space-y-4 !text-zinc-300 !text-base !md:text-lg !leading-relaxed !animate-fade-in">
  <p className=" !text-zinc-300 !text-base !md:text-lg !leading-relaxed">
    Discover automotive excellence with On Point Auto Films, the Okanagan’s premier destination for top-tier paint-care solutions.
  </p>
  <p className=" !text-zinc-300 !text-base !md:text-lg !leading-relaxed">
    We specialize in a wide array of services including paint correction, ceramic coating, paint protection film, window tint, vinyl wrap, and colored paint protection wrap.
  </p>
  <p className=" !text-zinc-300 !text-base !md:text-lg !leading-relaxed">
    With meticulous attention to detail and a passion for perfection, our skilled and certified team ensures your vehicle shines with brilliance while safeguarding its beauty for years to come.
  </p>
  <p className=" !text-zinc-300 !text-base !md:text-lg !leading-relaxed">
    Experience unparalleled craftsmanship and unmatched dedication to automotive excellence at On Point Auto Films.
  </p>
</div>

<Link
  href="/about"
  className="inline-block mt-8 text-xl text-neon-teal font-semibold hover:underline transition-all animate-fade-in"
>
  Learn more about us →
</Link>

      </div>
    </section>
  );
}
