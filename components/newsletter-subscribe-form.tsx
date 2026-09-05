'use client';

import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = {
  projectId: string;
  apiBaseUrl?: string;
  source?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
};

/**
 * Newsletter subscribe form. POSTs directly to the Inkform platform's public
 * /api/newsletter/subscribe — no @inkform/framework dependency needed.
 * See docs.inkform.dev/guides/newsletter ("Without the framework").
 *
 * apiBaseUrl must be the platform's API origin (api.inkform.dev), not the
 * apex: the platform routes by host, and the apex serves public content only,
 * redirecting anything else to the app origin — a POST there never reaches the
 * subscribe handler.
 */
export function NewsletterSubscribeForm({
  projectId,
  apiBaseUrl = 'https://api.inkform.dev',
  source = 'footer',
  placeholder = 'you@example.com',
  buttonLabel = 'Subscribe',
  className,
}: Props) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('loading');
    setError(null);
    try {
      const res = await fetch(`${apiBaseUrl.replace(/\/$/, '')}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ projectId, email: email.trim(), source }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? `Subscription failed (${res.status})`);
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscription failed');
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className={cn('flex items-center gap-2 text-sm text-muted-foreground', className)}>
        <Check className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
        Almost there — check your inbox to confirm.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={cn('space-y-2', className)}>
      <div className="flex gap-2">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={state === 'loading'}
          className="flex-1"
        />
        <Button type="submit" disabled={state === 'loading' || !email.trim()}>
          {state === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> : buttonLabel}
        </Button>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </form>
  );
}
