import { useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// ARTE HOMES · Wilson Garden, Bangalore (11)
import arte01 from "@/assets/arte-01.jpg";
import arte02 from "@/assets/arte-02.jpg";
import arte03 from "@/assets/arte-03.jpg";
import arte04 from "@/assets/arte-04.jpg";
import arte05 from "@/assets/arte-05.jpg";
import arte06 from "@/assets/arte-06.jpg";
import arte07 from "@/assets/arte-07.jpg";
import arte08 from "@/assets/arte-08.jpg";
import arte09 from "@/assets/arte-09.jpg";
import arte10 from "@/assets/arte-10.jpg";
import arte11 from "@/assets/arte-11.jpg";
// Radha Mohan Residence (6)
import mohan01 from "@/assets/mohan-01.jpg";
import mohan02 from "@/assets/mohan-02.jpg";
import mohan03 from "@/assets/mohan-03.jpg";
import mohan04 from "@/assets/mohan-04.jpg";
import mohan05 from "@/assets/mohan-05.jpg";
import mohan06 from "@/assets/mohan-06.jpg";
// Shrinivas Murthy Residence (1)
import shri01 from "@/assets/shrinivas-01.jpg";

type Slide = { src: string; alt: string; project: string; location: string };

const RAW: Slide[] = [
  ...[arte01, arte02, arte03, arte04, arte05, arte06, arte07, arte08, arte09, arte10, arte11].map((a, i) => ({
    src: a,
    alt: `ARTE Homes view ${i + 1}`,
    project: "ARTE Homes",
    location: "Wilson Garden, Bangalore",
  })),
  ...[mohan01, mohan02, mohan03, mohan04, mohan05, mohan06].map((a, i) => ({
    src: a,
    alt: `Radha Mohan Residence view ${i + 1}`,
    project: "Radha Mohan Residence",
    location: "Bangalore",
  })),
  {
    src: shri01,
    alt: "Shrinivas Murthy Residence front elevation",
    project: "Shrinivas Murthy Residence",
    location: "Bangalore",
  },
];

// Interleave slides by project so the same project never plays back-to-back.
const interleaveByProject = (slides: Slide[]): Slide[] => {
  const groups = new Map<string, Slide[]>();
  slides.forEach((s) => {
    if (!groups.has(s.project)) groups.set(s.project, []);
    groups.get(s.project)!.push(s);
  });
  const buckets = Array.from(groups.values());
  const out: Slide[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const b of buckets) {
      const next = b.shift();
      if (next) {
        out.push(next);
        added = true;
      }
    }
  }
  return out;
};

export const ProjectsCarousel = () => {
  const [active, setActive] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const SLIDES = useMemo(() => interleaveByProject(RAW), []);
  const autoplay = useRef(
    Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;
    const plugin = autoplay.current;
    if (active !== null) plugin.stop();
    else plugin.play();
  }, [active, api]);

  return (
    <>
      <div className="mt-20 -mx-6 lg:-mx-20 px-6 lg:px-20">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          setApi={setApi}
          className="w-full"
        >
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
          Auto-playing. Hover to pause, click any image to enlarge.
        </p>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-[96vw] w-[96vw] sm:max-w-6xl border-0 bg-ink/95 p-0 shadow-2xl [&>button]:top-3 [&>button]:right-3 [&>button]:h-10 [&>button]:w-10 [&>button]:rounded-full [&>button]:bg-ivory/90 [&>button]:text-ink [&>button]:opacity-100 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:hover:bg-copper [&>button]:hover:text-ivory [&>button>svg]:h-5 [&>button>svg]:w-5"
        >
          {active !== null && (
            <div className="relative">
              <img
                src={SLIDES[active].src}
                alt={SLIDES[active].alt}
                className="w-full h-auto max-h-[85vh] object-contain animate-fade-in"
              />
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
