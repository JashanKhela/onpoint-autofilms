"use client";

import ContactSection from "@/components/shared/ContactSection";
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Page() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-pink mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl">
          Whether you’re ready to book or just have a question — we’re here to
          help.
        </p>
      </div>

      <section className="bg-zinc-950 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neon-teal">
              Book an Appointment Online
            </h2>
            <p className="text-zinc-400 text-lg mb-4 leading-relaxed">
              Use our online portal to schedule your service in seconds. Whether
              it’s a vinyl wrap, ceramic coating, or paint protection — pick a
              time that works best for you.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Prefer email or have custom questions? Feel free to use the
              contact form below and we’ll get back to you promptly.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <InlineWidget
              url="https://calendly.com/khela-tech"
              styles={{ height: "600px" }}
              pageSettings={{
                backgroundColor: "1c1c1c",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#02FDE6",
                textColor: "#ffffff",
              }}
            />
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="bg-zinc-950 text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-left md:text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neon-teal">
            Come Say Hello
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We love meeting car lovers and locals alike. Whether you're just
            stopping by or ready to book, feel free to drop in and check out our
            space. Our friendly faces will be happy to greet you and walk you
            through your options.
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.017913110079!2d-119.44241242363406!3d49.936649322841734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537db56ecb327aa1%3A0xaabf15a741390f3b!2s3310%20Appaloosa%20Rd%20Unit%208%2C%20Kelowna%2C%20BC%20V1V%202W5!5e0!3m2!1sen!2sca!4v1713847435760!5m2!1sen!2sca"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] rounded-xl shadow-lg"
          />
        </div>
      </section>
    </section>
  );
}
