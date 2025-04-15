import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // adjust path if needed

const reviews = [
  {
    name: "Malcolm Bregeda",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIt24x_10kiL1er1KcJ0VAZ_Sm5wdaq6vK7obFRDI68OiqM=s120-c-rp-mo-br100",
    date: "2 months ago",
    text: "Thank you to Mathew and Derek for a super awesome amazing job, both of them are incredibly amazing to deal with and are super passionate and professional and super excellent service especially with dropping me off and picking me up.",
  },
  {
    name: "Sky Nahwegezhic",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLUxJJPESBLQ-FFSeWUGTHtUnIpDVQOqgz2na4oxgCs7X3B5A=s120-c-rp-mo-br100",
    date: "5 months ago",
    text: "Matt and Derek were awesome to deal with and provided excellent service. I loved that they dropped me off at the mall while I waited so I could do some shopping to kill some time.",
  },
  {
    name: "Murray Ashworth",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUiGiSKGRq4Bat876yPW4cuFtpsQIN0rLVnhg_7KjOsKIBwyQg=s120-c-rp-mo-br100",
    date: "10 months ago",
    text: "Amazing job on our motorhome. They did a full cut polish and custom Suntech clear wrap. Great craftsmanship.",
  },
  {
    name: "Bryan Patton",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLwChhixm7YcGiVU6W4l_rKPEI_gLbtx5iUPNkwECfygPTMvDg=s120-c-rp-mo-br100",
    date: "7 months ago",
    text: "These guys are incredible. I got PPF and tint on my new Tacoma. Professional and respectful of my budget. Highly recommend!",
  },
  {
    name: "Shaun Powers",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVEU5Mzt3xhiuEnHqN1UfZOlPc20flAIsfpRiofGigJ1NxM1OHhOg=s120-c-rp-mo-ba2-br100",
    date: "2 months ago",
    text: "Matt and crew rescued me when I got over my head with a DIY bike film protection kit. They wrapped my bike and saved it!",
  },
  {
    name: "Kelly Ryan",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXlrog1Eb57wdNsiYzBMbsCuKwTOhWUw47shcPWqiThdj27-Fz-=s120-c-rp-mo-ba3-br100",
    date: "8 months ago",
    text: "On Point Films repaired the vinyl on my new car after a bad install. Derrek and Matt are masters of their craft.",
  },
];

export function ReviewsPreview() {
  return (
    <section className="bg-zinc-950 py-20 px-4 text-white border-t border-neon-pink">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-teal mb-2">
            What People Say
          </h2>
          <p className="!text-lg !font-semibold !text-neon-pink !mb-4 !uppercase !tracking-wide">
            Trusted. Proven. Recommended.
          </p>
          <p className="!text-zinc-400 !text-xl !md:text-xl !leading-relaxed">
            We are honoured and humbled by the number of compliments we get from
            our happy customers. We're proud to showcase just a handful of the
            incredible feedback we've received.
          </p>
          <p className="mt-4 !text-zinc-300 !text-md !md:text-base !leading-relaxed">
            If you had a great experience with our services and our team, we
            invite you to share them on our&nbsp;
            <a
              href="https://g.co/kgs/h8y9owW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple hover:underline"
            >
              Google Business Page
            </a>
            .
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3 px-2 py-4"
              >
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md hover:border-neon-pink transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="rounded-full border border-neon-purple"
                      />
                      <div>
                        <h3 className="text-neon-pink font-semibold">
                          {review.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-3 text-neon-pink">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#FB06FC"
                          className="text-neon-pink"
                        />
                      ))}
                    </div>

                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?hl=en-CA&gl=ca&q=On+Point+Auto+Films,+3310+Appaloosa+Rd+Unit+%23+8,+Kelowna,+BC+V1V+2W5&ludocid=13448787660979367179&lsig=AB86z5W8IDZgYOYWbsBCUhWP_KF3#lrd=0x537d8b04a217bbf3:0xbaa3b11f7854ed0b,3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neon-purple text-neon-purple px-6 py-3 rounded-md font-semibold hover:bg-neon-teal hover:text-black transition-colors"
          >
            Read More on Google
          </a>
        </div>
      </div>
    </section>
  );
}
