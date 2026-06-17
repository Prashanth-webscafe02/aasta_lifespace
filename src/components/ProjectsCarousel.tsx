import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// ARTE HOMES — Wilson Garden, Bangalore (11)
import arte01 from "@/assets/arte-01.jpg.asset.json";
import arte02 from "@/assets/arte-02.jpg.asset.json";
import arte03 from "@/assets/arte-03.jpg.asset.json";
import arte04 from "@/assets/arte-04.jpg.asset.json";
import arte05 from "@/assets/arte-05.jpg.asset.json";
import arte06 from "@/assets/arte-06.jpg.asset.json";
import arte07 from "@/assets/arte-07.jpg.asset.json";
import arte08 from "@/assets/arte-08.jpg.asset.json";
import arte09 from "@/assets/arte-09.jpg.asset.json";
import arte10 from "@/assets/arte-10.jpg.asset.json";
import arte11 from "@/assets/arte-11.jpg.asset.json";
// Radha Mohan Residence (6)
import mohan01 from "@/assets/mohan-01.jpg.asset.json";
import mohan02 from "@/assets/mohan-02.jpg.asset.json";
import mohan03 from "@/assets/mohan-03.jpg.asset.json";
import mohan04 from "@/assets/mohan-04.jpg.asset.json";
import mohan05 from "@/assets/mohan-05.jpg.asset.json";
import mohan06 from "@/assets/mohan-06.jpg.asset.json";
// Shrinivas Murthy Residence (1)
import shri01 from "@/assets/shrinivas-01.jpg.asset.json";

type Slide = { src: string; alt: string; project: string; location: string };

const SLIDES: Slide[] = [
  ...[arte01, arte02, arte03, arte04, arte05, arte06, arte07, arte08, arte09, arte10, arte11].map((a, i) => ({
    src: a.url,
    alt: `ARTE Homes view ${i + 1}`,
    project: "ARTE Homes",
    location: "Wilson Garden, Bangalore",
  })),
  ...[mohan01, mohan02, mohan03, mohan04, mohan05, mohan06].map((a, i) => ({
    src: a.url,
    alt: `Radha Mohan Residence view ${i + 1}`,
    project: "Radha Mohan Residence",
    location: "Bangalore",
  })),
  {
    src: shri01.url,
    alt: "Shrinivas Murthy Residence front elevation",
    project: "Shrinivas Murthy Residence",
    location: "Bangalore",
  },
];

export const ProjectsCarousel = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="mt-20 -mx-6 lg:-mx-20 px-6 lg:px-20">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {SLIDES.map((s, i) => (
              <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[48%] lg:basis-[38%] xl:basis-[32%]">
                <button
                  onClick={() => setActive(i)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-ivory-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  aria-label={`Open ${s.project}`}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-[10px] tracking-label uppercase text-copper">{s.location}</div>
                    <div className="mt-1 font-display text-xl text-ivory">{s.project}</div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 lg:-left-6 h-12 w-12 border-ink/20 bg-ivory hover:bg-copper hover:text-ivory hover:border-copper" />
          <CarouselNext className="hidden md:flex -right-2 lg:-right-6 h-12 w-12 border-ink/20 bg-ivory hover:bg-copper hover:text-ivory hover:border-copper" />
        </Carousel>
        <p className="mt-6 text-center text-[10px] tracking-label uppercase text-ink-soft/70">
          Swipe or drag — click any image to enlarge
        </p>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-[96vw] w-[96vw] sm:max-w-6xl border-0 bg-ink/95 p-0 shadow-2xl data-[state=open]:animate-scale-in"
        >
          {active !== null && (
            <div className="relative">
              <img
                src={SLIDES[active].src}
                alt={SLIDES[active].alt}
                className="w-full h-auto max-h-[85vh] object-contain animate-fade-in"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-ivory/90 text-ink hover:bg-copper hover:text-ivory transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-16">
                <div className="text-[10px] tracking-label uppercase text-copper">{SLIDES[active].location}</div>
                <div className="mt-1 font-display text-2xl text-ivory">{SLIDES[active].project}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
