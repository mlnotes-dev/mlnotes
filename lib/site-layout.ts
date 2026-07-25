import { cn } from '@/lib/utils';

/** Standard page content width — matches the home page main column. */
export const siteContentInnerClass = 'mx-auto w-full max-w-4xl px-3';

/** Magazine / blog index width — wider hero layout on desktop. */
export const siteWideInnerClass = 'mx-auto w-full max-w-6xl px-4 md:px-6';

/** Break out of a narrower parent to full viewport, then constrain to magazine width. */
export const siteWideBreakoutClass =
  'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 md:px-6';

export function cnSiteContent(className?: string) {
  return cn(siteContentInnerClass, className);
}

export function cnSiteWide(className?: string) {
  return cn(siteWideInnerClass, className);
}
