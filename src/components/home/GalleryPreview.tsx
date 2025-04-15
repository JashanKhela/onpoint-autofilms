import Image from "next/image";
import Link from "next/link";

export function GalleryPreview() {
  return (
    <section className="bg-black text-white border-t border-neon-teal">
      <div className="flex flex-col lg:flex-row">
        {/* Diagonal Image Section */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden clip-diagonal-left">
          <Image
            src="/gallery-preview.jpg" // replace with your actual image
            alt="Gallery Preview"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-6 py-12 lg:py-20 flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-teal mb-4">
            Proud of Every Detail
          </h2>
          <p className="!text-zinc-400 !text-lg !mb-6 !max-w-xl !leading-relaxed">
            At On Point, we take serious pride in every wrap, tint, and polish
            we deliver. Each vehicle we work on is more than just a job — it's a
            reflection of our passion, precision, and commitment to excellence.
            From the smallest detail to the final finish, we treat every project
            like a work of art. Want to see the difference dedication makes?
            Check out our gallery to explore real examples of our craftsmanship
            in action.
          </p>
          <Link
            href="/gallery"
            className="border border-neon-pink text-neon-pink px-6 py-3 rounded-md font-semibold hover:bg-neon-teal hover:border-none hover:text-black transition-colors"
          >
            View Our Showcase
          </Link>
        </div>
      </div>
    </section>
  );
}
