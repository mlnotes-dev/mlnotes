import { loadBlogPosts } from '@inkform/framework/content';
import { BlogMagazineLayout } from '@/components/blog/blog-magazine-layout';

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

      <BlogMagazineLayout posts={posts} />
    </>
  );
}
