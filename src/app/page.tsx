import { AboutPreview } from "@/components/home/AboutPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import ContactSection from "@/components/shared/ContactSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ReviewsPreview />
      <GalleryPreview />
      <ContactSection />
      {/* More sections like services preview, testimonials, etc */}
    </div>
  );
}
