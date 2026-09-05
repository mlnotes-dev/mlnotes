import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { siteWideInnerClass } from '@/lib/site-layout';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { NewsletterSubscribeForm } from '@/components/newsletter-subscribe-form';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-background/50">
        <div className={`${siteWideInnerClass} py-5 flex justify-between items-center`}>
          <Link href="/">
            <h1 className="text-2xl font-bold">ML Notes</h1>
          </Link>

          <nav>
            <ul className="flex gap-2">
              <li>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
              <li>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Resources</Link>
                </Button>
              </li>
              <li className="hidden md:block">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects">Projects</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='max-w-4xl mx-auto py-5 px-3 space-y-8'>
        {children}
      </main>

      <footer className='border-t'>
        <div className={`${siteWideInnerClass} py-5 flex flex-col text-center gap-6 md:flex-row md:justify-between md:text-left`}>
          <div>
            <h2 className="text-2xl font-bold">ML Notes</h2>
            <p className="text-muted-foreground font-light">Created by <a className="underline text-primary hover:text-blue-500" href="https://charan.dev">Charan Manikanta Nalla</a></p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://instagram.com/ml.charan.dev" target="_blank">
                <span className='sr-only'>Instagram</span><FaInstagram />
              </a>
            </Button>
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://www.youtube.com/@mlnotes-dev" target="_blank">
                <span className='sr-only'>YouTube</span><FaYoutube />
              </a>
            </Button>
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://linkedin.com/in/charan-manikanta" target="_blank">
                <span className='sr-only'>Linkedin</span><FaLinkedin />
              </a>
            </Button>
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://github.com/mlnotes-dev" target="_blank">
                <span className='sr-only'>Github</span><FaGithub />
              </a>
            </Button>
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://x.com/CharanMNX/" target="_blank">
                <span className='sr-only'>X/Twitter</span><FaXTwitter />
              </a>
            </Button>
          </div>
        </div>

        {process.env.NEXT_PUBLIC_INKFORM_PROJECT_ID ? (
          <>
            <div className='px-4'>
              <Separator className={`${siteWideInnerClass}`} />
            </div>
            <div className={`${siteWideInnerClass} py-5 flex flex-col items-center text-center gap-3`}>
              <h3 className="text-lg font-semibold">Get new posts by email</h3>
              <p className="text-muted-foreground font-light text-sm">No spam, unsubscribe anytime.</p>
              <NewsletterSubscribeForm
                className="w-full max-w-sm"
                projectId={process.env.NEXT_PUBLIC_INKFORM_PROJECT_ID}
                apiBaseUrl={process.env.NEXT_PUBLIC_INKFORM_PLATFORM_URL ?? 'https://api.inkform.dev'}
              />
            </div>
          </>
        ) : null}

        <div className='px-4'>
          <Separator className={`${siteWideInnerClass}`} />
        </div>

        <div className={`${siteWideInnerClass} py-5 flex flex-col text-center gap-2 md:flex-row md:justify-between md:text-left`}>
          <p className="text-muted-foreground font-light">&copy; {new Date().getFullYear()} ML Notes. All rights reserved.</p>
          <p className="text-muted-foreground font-light">Powered by <a href="https://devsforfun.com" target="_blank" className="underline text-primary hover:text-blue-500">devsForFun studio</a></p>
        </div>
      </footer>
    </>
  );
}
