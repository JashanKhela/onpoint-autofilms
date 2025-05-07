// components/ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_papp66d",
        "template_hq6ce6l",
        form.current!,
        "_M0Et_nomzxBZ1ki8"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-4 bg-zinc-950 text-white border-t border-neon-pink">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-pink mb-4">
            Let’s Connect
          </h2>

          <p className="!text-zinc-400 mb-4 !text-lg !leading-relaxed">
            Whether you're looking for a quote, need expert advice, or just want
            to talk about your next project—our team is here and ready to help.
          </p>

          <p className="!text-zinc-400 mb-4 !text-lg !leading-relaxed">
            Simply fill out the form, and we’ll get back to you as soon as
            possible. We aim to respond to all inquiries within 1 business day.
          </p>

          <p className="!text-zinc-300 mb-4 !text-base">
            Prefer to speak directly? Give us a call at{" "}
            <a
              href="tel:+12508595432"
              className="text-neon-teal font-semibold hover:underline"
            >
              (250) 859-5432
            </a>
            —we’d love to hear from you.
          </p>

          <p className="!text-zinc-300 mb-6 !text-base">
            At On Point Auto Films, we take pride in communication and quality.
            Let’s bring your vision to life.
          </p>

          {success && (
            <p className="!text-green-500 !font-semibold">
              Your message has been sent successfully!
            </p>
          )}
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-neon-purple hover:bg-neon-teal hover:text-black text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
