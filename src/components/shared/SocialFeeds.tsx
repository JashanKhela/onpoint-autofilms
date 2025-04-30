// components/ContactSection.tsx
"use client";

export default function SocialFeeds() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-neon-teal text-center mb-4">
          Follow Us on Social Media
        </h2>
        <p className="!text-center !text-zinc-400 mb-12 !text-lg md:text-xl">
          See our latest transformations, behind-the-scenes installs, and satisfied customers in action.
          Follow us for daily auto inspiration and updates from the shop.
        </p>

        <div className="flex justify-center items-center">
          <div>
            <h3 className="text-neon-pink font-semibold text-lg mb-2 text-center">From Facebook</h3>
            <div className="w-[300px] md:w-[500px] aspect-square rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/onpointautofilms&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: "none" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
