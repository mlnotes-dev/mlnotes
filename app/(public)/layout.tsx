import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-background/50">
        <div className="max-w-4xl mx-auto py-5 px-3 flex justify-between items-center">
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
            </ul>
          </nav>
        </div>
      </header>

      <main className='max-w-4xl mx-auto py-5 px-3 space-y-8'>
        {children}
      </main>

      <footer className='border-t'>
        <div className='max-w-4xl mx-auto py-5 px-3 flex flex-col text-center gap-6 md:flex-row md:justify-between md:text-left'>
          <div>
            <h2 className="text-2xl font-medium">ML Notes</h2>
            <p className="text-muted-foreground font-light">Created by <a className="underline text-primary hover:text-blue-500" href="https://charan.dev">Charan Manikanta Nalla</a></p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="icon" className='rounded-full' asChild>
              <a href="https://instagram.com/ml.charan.dev" target="_blank">
                <span className='sr-only'>Instagram</span><FaInstagram />
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

        <div className='px-4'>
          <Separator className="max-w-4xl mx-auto" />
        </div>

        <div className='max-w-4xl mx-auto py-5 px-3 flex flex-col text-center gap-2 md:flex-row md:justify-between md:text-left'>
          <p className="text-muted-foreground font-light">&copy; {new Date().getFullYear()} ML Notes. All rights reserved.</p>
          <p className="text-muted-foreground font-light">Powered by <a href="https://devsforfun.com" target="_blank" className="underline text-primary hover:text-blue-500">devsForFun studio</a></p>
        </div>
      </footer>
    </>
  );
}
