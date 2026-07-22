import Link from 'next/link';
import { loadBlogPosts } from '@inkform/framework/content';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | ML Notes',
  description: 'Machine learning notes from the ground up. By a builder.',
};

export default function BlogIndexPage() {
  const posts = loadBlogPosts();

  return (
    <>
      <div className="font-light text-muted-foreground text-lg">
        <h2 className="text-4xl font-bold text-primary">Blog</h2>
        <p>Machine learning notes from the ground up. By a builder.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-3">
            <Link href={`/blog/${post.slug}`} className="group block space-y-3">
              {post.coverImage ? (
                <div className="overflow-hidden rounded-lg border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt=""
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : null}

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {post.date ? format(new Date(post.date), 'MMM d, yyyy') : null}
                  {' · '}
                  {post.readingTime} min read
                  {post.author ? ` · ${post.author}` : ''}
                </p>

                {post.description ? (
                  <p className="font-light text-muted-foreground">{post.description}</p>
                ) : null}
              </div>
            </Link>

            {post.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}

            <Separator />
          </article>
        ))}
      </div>
    </>
  );
}
