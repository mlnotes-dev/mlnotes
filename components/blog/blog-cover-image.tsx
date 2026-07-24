import type { BlogPost } from '@inkform/framework/content';
import { cn } from '@/lib/utils';

type OverlayTitle = {
  headline: string;
  subline: string | null;
};

export function splitTitleForOverlay(title: string): OverlayTitle {
  const colonIndex = title.indexOf(':');

  if (colonIndex === -1) {
    return { headline: title, subline: null };
  }

  return {
    headline: title.slice(colonIndex + 1).trim(),
    subline: title
      .slice(0, colonIndex)
      .trim()
      .replace(/\bML\b/g, 'Machine Learning'),
  };
}

type BlogCoverImageProps = {
  post: BlogPost;
  size?: 'featured' | 'side' | 'card';
  className?: string;
};

export function BlogCoverImage({ post, size = 'featured', className }: BlogCoverImageProps) {
  const { headline, subline } = splitTitleForOverlay(post.title);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-muted',
        size === 'featured' && 'aspect-[16/10]',
        size === 'side' && 'aspect-[16/10]',
        size === 'card' && 'aspect-[16/10]',
        className,
      )}
    >
      {post.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImage}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
      )}

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <p
          className={cn(
            'font-bold leading-tight',
            size === 'featured' && 'text-xl md:text-2xl lg:text-3xl',
            size === 'side' && 'text-base md:text-lg',
            size === 'card' && 'text-base',
          )}
        >
          {headline}
        </p>
        {subline ? (
          <p
            className={cn(
              'mt-1 font-semibold leading-tight',
              size === 'featured' && 'text-base md:text-lg lg:text-xl',
              size === 'side' && 'text-xs md:text-sm',
              size === 'card' && 'text-sm',
            )}
          >
            {subline}
          </p>
        ) : null}
      </div>
    </div>
  );
}
