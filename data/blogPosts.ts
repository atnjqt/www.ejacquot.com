export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  year: string;
  month: string;
}

/**
 * Blog post manifest — add a new entry here when you create a post.
 * Each post lives at: /blog/<year>/<month>/<slug>/page.tsx
 */
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "un-open-source-week-2026",
    title: "UN Open Source Week 2026: Maintainers, Narwhals, and the Future of AI",
    excerpt: "Reflections from the maintain-a-thon and AI keynotes — on imposter syndrome, capacity building, data sovereignty, and why narwhals beat unicorns.",
    date: "2026-06-22",
    author: "Etienne Jacquot",
    category: "Conference",
    year: "2026",
    month: "06",
  }
];