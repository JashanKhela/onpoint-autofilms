import { AboutPreview } from "@/components/home/AboutPreview";
import { Hero } from "@/components/home/Hero";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ReviewsPreview />
      {/* More sections like services preview, testimonials, etc */}
    </div>
  );
}
