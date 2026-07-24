import { BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AUTHOR_AVATAR =
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1653294234130/zKPP4PfJx.png';

type BlogPostMetaProps = {
  author: string | null;
  readingTime: number;
};

export function BlogPostMeta({ author, readingTime }: BlogPostMetaProps) {
  const initials =
    author
      ?.split(' ')
      .map((name) => name[0])
      .join('')
      .slice(0, 2) ?? 'MN';

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
      <Avatar className="size-6">
        <AvatarImage src={AUTHOR_AVATAR} alt={author ?? 'Author'} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      {author ? <span className="font-medium text-foreground">{author}</span> : null}
      <span className="flex items-center gap-1">
        <BookOpen className="size-3.5" />
        {readingTime} min read
      </span>
    </div>
  );
}
