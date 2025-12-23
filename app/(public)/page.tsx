import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


const carouselImages = [
  {
    id: "ml_1.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5dxIvwWI7Lt2uaOGBQp0jredPv79lk4Eqh8XfD",
    alt: "A mirror selfie of a person wearing a hoodie, holding a phone that covers their face. Text on a dark background reads “Hi! I’m Charan” and “I’m learning Machine Learning,” with a small hand-drawn robot illustration."
  },
  {
    id: "ml_2.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5dIcR9RkbKzesDqvrjLlYxQt6u5oPOaMRAS2Cn",
    alt: "A dark background slide with handwritten text listing facts about the creator: founded and led a Google Developer Student Club in college (2023–24), got an internship from a hackathon that became a full-time role, and currently works as a software engineer and freelancer."
  },
  {
    id: "ml_3.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5d0rzdnX5xQaz2gSLynhjmur1iJfNtB6oRC7IT",
    alt: "A dark background slide with handwritten text listing facts about the creator: founded and led a Google Developer Student Club in college (2023–24), got an internship from a hackathon that became a full-time role, and currently works as a software engineer and freelancer."
  },
  {
    id: "ml_4.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5dGhFuD9kIev8UYN7t5VOh0BfQ6woCbcmAnjZ3",
    alt: "A slide with handwritten text saying “I tried learning it before but I got lost,” paired with a meme of a person jokingly claiming to be a machine learning engineer. It continues to say “I couldn’t use the theory I’ve learnt,” with an arrow pointing forward.”"
  },
  {
    id: "ml_5.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5d7EBjYJKGpQtPKYA9rn4svzaf2WESJUhFHD68",
    alt: "A slide with handwritten text reading “So this is my attempt to actually learn Machine Learning,” on a dark background."
  },
  {
    id: "ml_6.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5dnqW1JPakrCnfx3DVtycPhi5dZSGQ7aYwFvzL",
    alt: "A slide that says “from ground up. I’ll write blog posts, build tiny projects, and make videos as I learn,” with a “Fresh Start” meme image below the text."
  },
  {
    id: "ml_7.webp",
    src: "https://yrl6d1934r.ufs.sh/f/8xl3hznmHo5dSh7IvP0WoZle7MX3guhcvnQVJpfi20LkKwEa",
    alt: "A dark slide with handwritten text saying “If you’re interested in ML or want to learn with me, follow along!” with a smiling emoji and the word “end” at the bottom."
  }

];

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 md:gap-6">
        <Badge variant="outline" className="py-1 px-2 rounded-full border-yellow-500/20 bg-yellow-500/10">
          <div className="animate-pulse size-2 rounded-full bg-yellow-500 mr-1"></div>
          <span className='text-yellow-500'>Learning in progress...</span>
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold">Learning
          <br />
          Machine Learning
        </h2>
        <p className="sr-only">
          ML Notes is a website for Machine Learning Notes, Projects, Videos, Courses, Guides, Tutorials, and more. By a builder. Created by Charan Manikanta Nalla, and powered by devsForFun studio.
        </p>
        <p className="text-lg md:text-2xl font-light text-muted-foreground text-amber-500">I&apos;m documenting my machine learning journey from the basics to building real things. Expect notes, small projects, and videos made while learning out loud.</p>
        <p className="text-lg md:text-xl font-light italic text-muted-foreground">- Charan Manikanta Nalla</p>
        <div className="flex gap-2">
          <Button size="lg" variant="outline" asChild>
            <Link href="https://instagram.com/ml.charan.dev" target="_blank"><FaInstagram /><span className="sr-only">Instagram username:</span> ml.charan.dev</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/blog">Visit Blog <ArrowRight /></Link>
          </Button>
        </div>

        <p className="inline-flex text-muted-foreground font-light items-center gap-1">See what this is about <ArrowDown className='size-5' /></p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className='text-sm text-center text-muted-foreground font-medium uppercase tracking-wider'>FIRST POST</h2>

        <Carousel
          opts={{
            align: 'start',
            loop: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-4">
            {carouselImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 md:basis-2/5 lg:basis-1/3"
              >
                <div className="group bg-white dark:bg-zinc-100 p-2 pb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-1 border border-border/20">
                  <div className="relative aspect-square overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40" />
            <CarouselNext className="static translate-y-0 border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40" />
          </div>
        </Carousel>
      </section>
    </>
  );
}
