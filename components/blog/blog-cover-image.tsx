import type { BlogPost } from '@inkform/framework/content';
import { cn } from '@/lib/utils';

type BlogCoverImageProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCoverImage({ post, className }: BlogCoverImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-muted aspect-[16/10]',
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
    </div>
  );
}
