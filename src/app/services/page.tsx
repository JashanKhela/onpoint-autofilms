import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import ContactSection from "@/components/shared/ContactSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    title: "Vinyl Wrap",
    description:
      "Transform the look of your vehicle with custom vinyl wraps. Bold colors, textures, and flawless installs.",
    image: "/vinyl-wrap.jpg",
  },
  {
    title: "Paint Protection Film (PPF)",
    description:
      "Industry-grade PPF that shields your vehicle from rock chips, scratches, and the harsh elements.",
    image: "/ppf.jpg",
  },
  {
    title: "Ceramic Coating",
    description:
      "A high-gloss, hydrophobic finish that protects your paint and keeps your vehicle shining for years.",
    image: "/ceramic-coating.jpg",
  },
  {
    title: "Paint Correction",
    description:
      "Eliminate swirl marks, scratches, and oxidation to restore your car’s factory finish.",
    image: "/paint-correction.jpg",
  },
  {
    title: "Window Tinting",
    description:
      "Premium window tints with UV protection, enhanced privacy, and a sleek finish.",
    image: "/window-tint.jpg",
  },
  {
    title: "Colored PPF",
    description:
      "Vibrant color meets full-body protection in our advanced colored paint protection film installs.",
    image: "/colored-ppf.jpg",
  },
];

export default function Page() {
  return (
<>
    <section className="relative bg-zinc-950 text-white py-32 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-30 bg-[url('/ppf.jpg')] bg-cover bg-center blur-sm" />
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-neon-pink mb-6">
        Premium Automotive Services
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Industry-leading wraps, coatings, and protection—flawlessly installed for those who expect the best.
      </p>
      <Button variant="default" className="bg-neon-pink text-black hover:bg-neon-teal hover:text-white transition-all duration-300">
        Get a Quote
      </Button>
    </div>
  </section>
  <section className="bg-zinc-950 text-white px-6 md:px-12 py-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neon-teal">
      Excellence in Every Detail
    </h2>
    <p className="text-zinc-400 text-lg leading-relaxed">
      At OnPoint Auto Films, we take serious pride in every wrap, tint, and polish. 
      Every project is a reflection of our passion for perfection. 
      We don’t settle for anything less than flawless — and neither should you. 
      That’s why we offer a <span className="text-white font-semibold">lifetime installation warranty</span> and back our work with unmatched customer care.
    </p>
  </div>
</section>

    <section className="bg-zinc-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-pink mb-4">
          Our Services
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl">
          Top-tier automotive care, tailored to elevate and protect your ride.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 hover:border-neon-teal transition-all duration-300"
          >
            <div className="relative h-60 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <Button variant="outline" className="bg-neon-pink border-black text-black hover:bg-neon-teal hover:text-white transition-all duration-300">
                Get a Quote
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
          <ReviewsPreview />
          <GalleryPreview />
          <ContactSection />
    </>
  );
}