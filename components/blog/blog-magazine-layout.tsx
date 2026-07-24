import Link from 'next/link';
import type { BlogPost } from '@inkform/framework/content';
import { BlogCoverImage } from '@/components/blog/blog-cover-image';
import { BlogPostMeta } from '@/components/blog/blog-post-meta';

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="space-y-4">
      <Link href={`/blog/${post.slug}`} className="group block space-y-4">
        <BlogCoverImage post={post} />
        <div className="space-y-3">
          <h2 className="text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-blue-500 lg:text-3xl">
            {post.title}
          </h2>
          {post.description ? (
            <p className="font-light text-muted-foreground line-clamp-3">{post.description}</p>
          ) : null}
          <BlogPostMeta author={post.author} readingTime={post.readingTime} />
        </div>
      </Link>
    </article>
  );
}

function SidePostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block space-y-3">
        <BlogCoverImage post={post} />
        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-tight text-primary transition-colors group-hover:text-blue-500">
            {post.title}
          </h3>
          <BlogPostMeta author={post.author} readingTime={post.readingTime} />
        </div>
      </Link>
    </article>
  );
}

function GridPostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block space-y-3">
        <BlogCoverImage post={post} />
        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-tight text-primary transition-colors group-hover:text-blue-500">
            {post.title}
          </h3>
          {post.description ? (
            <p className="font-light text-sm text-muted-foreground line-clamp-2">{post.description}</p>
          ) : null}
          <BlogPostMeta author={post.author} readingTime={post.readingTime} />
        </div>
      </Link>
    </article>
  );
}

function MobilePostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block space-y-3">
        <BlogCoverImage post={post} />
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-tight text-primary transition-colors group-hover:text-blue-500">
            {post.title}
          </h3>
          {post.description ? (
            <p className="font-light text-muted-foreground line-clamp-3">{post.description}</p>
          ) : null}
          <BlogPostMeta author={post.author} readingTime={post.readingTime} />
        </div>
      </Link>
    </article>
  );
}

type BlogMagazineLayoutProps = {
  posts: BlogPost[];
};

export function BlogMagazineLayout({ posts }: BlogMagazineLayoutProps) {
  const [featured, ...rest] = posts;
  const sidePosts = rest.slice(0, 2);
  const gridPosts = rest.slice(2);

  if (!featured) {
    return null;
  }

  return (
    <div className="space-y-10">
      {/* Mobile: stacked cards */}
      <div className="space-y-8 lg:hidden">
        {posts.map((post) => (
          <MobilePostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Desktop: magazine hero */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="col-span-2">
          <FeaturedPostCard post={featured} />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {sidePosts.map((post) => (
            <SidePostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Desktop: remaining posts in 3-column grid */}
      {gridPosts.length > 0 ? (
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {gridPosts.map((post) => (
            <GridPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
