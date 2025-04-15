'use client';

import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import ContactSection from "@/components/shared/ContactSection";
import { motion } from "framer-motion";


const images = [
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
  "/ppf.jpg",
];

export default function GalleryPage() {
  return (
    <>
    <section className="bg-zinc-950 text-white py-20 px-4 border-b border-zinc-800">
  <div className="container max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-neon-purple mb-6">
      Our Work. Your Vision.
    </h1>
    <p className="!text-lg !md:text-xl !text-zinc-400 !leading-relaxed">
      Every vehicle we touch is treated like our own. We take extreme care and pride in each project — from ceramic tints to full vinyl wraps — ensuring top-tier results that truly stand out. Explore the gallery below to see what On Point craftsmanship looks like.
    </p>
  </div>
</section>
<section className="bg-black text-white px-4 pt-20 pb-28 border-t border-neon-pink">


<div className="columns-1 xs:columns-2 sm:columns-2 md:columns-3 gap-4 space-y-4">

        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`overflow-hidden rounded-lg shadow-lg border border-zinc-800 transform transition-transform hover:scale-[1.02] ${
              i % 4 === 1 ? "rotate-1" : i % 4 === 2 ? "-rotate-1" : ""
            }`}
          >
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
    <ReviewsPreview />

    <section className="bg-zinc-950 py-20">
  <div className="text-center mx-auto mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-neon-teal mb-4">Let’s Talk About Your Project</h2>
    <p className="!text-zinc-400 !text-lg">Saw something you liked? Get in touch and let’s bring your vehicle vision to life.</p>
  </div>
  <ContactSection />
</section>

    </>
   
  );
}
