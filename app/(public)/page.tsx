import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

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
        <p className="text-lg md:text-2xl font-light text-muted-foreground">I&apos;m documenting my machine learning journey from the basics to building real things. Expect notes, small projects, and videos made while learning out loud.</p>
        <p className="text-lg md:text-xl font-light italic text-muted-foreground">- Charan Manikanta Nalla</p>
        <div className="flex gap-2">
          <Button size="lg" variant="outline" asChild>
            <Link href="https://instagram.com/ml.charan.dev" target="_blank"><FaInstagram /><span className="sr-only">Instagram username:</span> ml.charan.dev</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/blog">Visit Blog <ArrowRight /></Link>
          </Button>
        </div>
      </section>


    </>
  );
}
