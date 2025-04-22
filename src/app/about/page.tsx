import ContactSection from "@/components/shared/ContactSection";
import SocialFeeds from "@/components/shared/SocialFeeds";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <section className="!bg-zinc-950 text-white py-20 px-4 border-b border-zinc-800">
      <div className="container max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/OnPointAutoFilmsLogo.jpg"
            alt="On Point Auto Films Logo"
            width={180}
            height={180}
            className="rounded-md border border-zinc-800"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-neon-pink mb-6">
          Passion. Precision. Perfection.
        </h1>

        <p className="!text-lg !md:text-xl !text-zinc-400 !leading-relaxed mb-6">
  On Point Auto Films is Kelowna’s trusted name for premium vehicle protection and enhancement — proudly born and raised in the Okanagan. Whether you're after sleek ceramic tint, precision paint protection film, or a full custom vinyl wrap, our detail-obsessed team is ready to bring your vision to life. We combine craftsmanship with cutting-edge products to ensure your vehicle looks better, lasts longer, and turns heads everywhere you go.
</p>

<p className="!text-lg !md:text-xl !text-zinc-400 !leading-relaxed">
  Founded by passionate car lovers, we take pride in every curve, edge, and finish we work on. Cars aren't just our job — they’re our lifestyle. We love meeting fellow enthusiasts, helping everyday drivers protect their investments, and delivering results that are{" "}
  <span className="text-neon-teal font-semibold">on point</span>, every time. From first-time tint customers to collectors seeking perfection, we're here to make your ride something special.
</p>
        
      </div>
    </section>
    <section className="bg-black text-white py-20 px-4 border-b border-t border-neon-pink">
  <div className="container mx-auto max-w-6xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-neon-teal mb-6">Meet the Founders</h2>
    <p className="text-zinc-400 !text-lg !md:text-xl !max-w-3xl !mx-auto mb-12">
      At the heart of On Point Auto Films are two Okanagan locals who share a love for cars,
      craftsmanship, and community. With a commitment to excellence and a passion for what they do,
      they’ve built a shop known for quality, care, and customer connection.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Founder 1 */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-left">
        <img
          src="/founder-matthew.jpg" // Update with real image path
          alt="Matthew"
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 className="text-neon-pink text-2xl font-semibold mb-2">Matthew</h3>
        <p className="!text-zinc-400">
        With over 20 years of experience in the automotive detailing industry, I’ve dedicated my career to mastering the art of polishing and ceramic coatings. Born and raised in the Okanagan, I followed my love for cars early on—starting out at a local body shop and detail business, where I began honing my skills and building my craft. What sets me apart is simple: attention to detail and treating every customer the way I’d want to be treated if it were my own business. Every vehicle I touch gets the same level of care, precision, and pride—because for me, it’s not just detailing, it’s personal.


        </p>
      </div>

      {/* Founder 2 */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-left">
        <img
          src="/founder-derek.jpg" // Update with real image path
          alt="Derek"
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 className="text-neon-pink text-2xl font-semibold mb-2">Derek</h3>
        <p className="!text-zinc-400">
          Derek brings creativity, craftsmanship, and a deep love for the automotive industry. From
          custom wraps to intricate installations, his attention to detail ensures every ride stands out.
          As co-founder, he’s built lasting relationships with customers and treats every project like
          it’s his own.
        </p>
      </div>
    </div>
  </div>
</section>
    <SocialFeeds />
    <ContactSection />
    </>
    
  );
}
