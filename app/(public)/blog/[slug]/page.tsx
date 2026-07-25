import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Mdx } from '@inkform/framework/mdx';
import { loadBlogPosts, loadBlogPost } from '@inkform/framework/content';
import { blogMdxComponents } from '@/mdx-components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import '@inkform/framework/styles.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return loadBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = loadBlogPost(slug);

  if (!post) {
    return { title: 'Blog | ML Notes' };
  }

  return {
    title: `${post.title} | ML Notes`,
    description: post.description ?? post.excerpt,
    openGraph: {
      title: post.ogTitle ?? post.title,
      description: post.description ?? post.excerpt,
      images: post.ogImage ?? post.coverImage ? [{ url: post.ogImage ?? post.coverImage! }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = loadBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-4xl space-y-6">
      <Button variant="ghost" size="sm" className="-ml-2" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 size-4" />
          Back to blog
        </Link>
      </Button>

      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">{post.title}</h1>

        <p className="text-base text-muted-foreground font-light">
          {post.date ? format(new Date(post.date), 'MMM d, yyyy') : null}
          {' · '}
          {post.readingTime} min read
          {post.author ? ` · ${post.author}` : ''}
        </p>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        {post.coverImage ? (
          <div className="overflow-hidden rounded-xl border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImage} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
        ) : null}
      </header>

      <div className="blog-post-prose fw-prose mx-auto">
        <Mdx source={post.content} components={blogMdxComponents} />
      </div>
    </article>
  );
}
