"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    src: "/images/Carousel/Christmas Party.jpg",
    title: "Holiday Celebration",
    caption: "Closing the year out together.",
  },
  {
    src: "/images/Carousel/Thanksgiving.jpg",
    title: "Thanksgiving Together",
    caption: "Sharing a meal as a team.",
  },
  {
    src: "/images/Carousel/Cookie Truck.jpg",
    title: "Cookie Truck Day",
    caption: "Sweet breaks in the middle of busy season.",
  },
  {
    src: "/images/Carousel/NKU Game.jpg",
    title: "Attending NKY Chamber Events",
    caption: "Growing connections through local events.",
  },
  {
    src: "/images/Carousel/Womes Inititiave.jpg",
    title: "Women's Initiative",
    caption: "Connecting, mentoring, and growing.",
  },
  {
    src: "/images/Carousel/Braxton.jpg",
    title: "End of Season Party",
    caption: "Celebrating another successful tax season.",
  },
];

export default function CultureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-surface-container-low py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <div className="max-w-2xl reveal">
          <p className="section-kicker">Build Your Career at Rudler, PSC</p>
          <h2 className="section-title mb-4">Grow with a Team That Invests in You</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            We're always looking for motivated individuals who want to grow, contribute, and make an impact. Step inside life at Rudler.
          </p>
        </div>
      </div>

      <div className="reveal reveal-delay-1">
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y">
              {slides.map((slide) => (
                <div
                  key={slide.src}
                  className="flex-[0_0_88%] sm:flex-[0_0_78%] md:flex-[0_0_64%] lg:flex-[0_0_56%] xl:flex-[0_0_52%] min-w-0 px-1.5 md:px-2"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(13,32,59,0.18)] group">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 768px) 78vw, (max-width: 1024px) 64vw, (max-width: 1280px) 56vw, 840px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <h3 className="font-body text-2xl md:text-4xl font-semibold leading-tight mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm md:text-lg text-white/85 leading-relaxed max-w-2xl">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur shadow-lg border border-outline-variant/30 items-center justify-center text-on-surface transition-all hover:bg-white hover:text-primary hover:scale-105"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="hidden md:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur shadow-lg border border-outline-variant/30 items-center justify-center text-on-surface transition-all hover:bg-white hover:text-primary hover:scale-105"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-outline-variant hover:bg-on-surface-variant"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-10 md:mt-14 flex justify-center reveal reveal-delay-2">
        <Link href="/careers" className="btn-primary">
          Explore Careers
        </Link>
      </div>
    </section>
  );
}
