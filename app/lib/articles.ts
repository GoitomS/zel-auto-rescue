import articlesData from "@/content/articles.json";

export type ArticleBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "divider" };

export interface Article {
  slug: string;
  title: string;
  category: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  author: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: ArticleBlock[];
}

const articles = (articlesData as Article[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllArticles(): Article[] {
  return articles;
}

export function getLatestArticles(count = 3): Article[] {
  return articles.slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleHref(article: Pick<Article, "slug">): string {
  return `/blog/${article.slug}`;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatArticleDate(date: string): string {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}
