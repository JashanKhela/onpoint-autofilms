import Link from "next/link";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Paint Correction",
    subtitle: "Automotive Paint Correction Kelowna",
    description:
      "Remove most scratches and imperfections from your vehicle’s clear coat and restore that showroom shine.",
    image: "/paint-correction.jpg",
  },
  {
    title: "Ceramic Coating",
    subtitle: "Ceramic Coating for Vehicles",
    description:
      "Our advanced ceramic coatings create a hydrophobic layer that resists heat, UV, and chemicals — all while staying glossy.",
    image: "/ceramic-coating.jpg",
  },
  {
    title: "Paint Protection Film",
    subtitle: "Vinyl Wrap for Vehicles",
    description:
      "Durable and self-healing, our paint protection film preserves your vehicle’s integrity and finish for the long haul.",
    image: "/ppf.jpg",
  },
  {
    title: "Ceramic Window Tint",
    subtitle: "Automotive Ceramic Window Tint",
    description:
      "Enhance aesthetics and comfort with high-performance ceramic tint that reduces glare, heat, and UV rays.",
    image: "/window-tint.jpg",
  },
  {
    title: "Vinyl Wrap",
    subtitle: "Vinyl Wrap on Mini Cooper",
    description:
      "Customize your car's look with long-lasting, vibrant vinyl wraps — protection and personality in one.",
    image: "/vinyl-wrap.jpg",
  },
  {
    title: "Coloured PPF",
    subtitle: "Coloured Paint Protection Film",
    description:
      "Get protection and color in one layer. Our colored PPF resists damage while making your vehicle stand out.",
    image: "/colored-ppf.jpg",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-black text-white py-10 px-4 border-t border-neon-pink">
      <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-neon-pink mb-10 text-center">
  Services That Shine
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-zinc-900 border border-zinc-800 hover:border-neon-purple transition-all overflow-hidden"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <CardTitle className= " text-xl text-neon-pink  uppercase tracking-wide">
                    {service.title}
                  </CardTitle>
                  <h3 className="text-white font-semibold text-sm">
                    {service.subtitle}
                  </h3>
                </div>
                <CardDescription className="text-zinc-300 text-md leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block border border-neon-teal text-neon-teal px-6 py-3 rounded-md font-semibold hover:bg-neon-pink hover:text-black hover:border-black transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
