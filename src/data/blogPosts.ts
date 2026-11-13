import { wordpressPosts } from './wordpressPosts';
import { mediumPosts } from './mediumPosts';
import { linkedinPosts } from './linkedinPosts';
import { factsPosts } from './factsPosts';
import { sentientEdgePosts } from './sentientEdgePosts';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  slug: string;
}

// The blog is Bob Katz's own writing: articles written for this site, SentientEdge research letters and market notes, LinkedIn articles
// (2014–2026), Medium articles (2023–2026) and the original WordPress posts (2009–2018), newest first.
export const blogPosts: BlogPost[] = [...factsPosts, ...sentientEdgePosts, ...linkedinPosts, ...mediumPosts, ...wordpressPosts].sort(
  (a, b) => b.date.localeCompare(a.date)
);


export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};

export const getAllCategories = (): string[] => {
  return ['Finance', 'Analytics', 'Consulting', 'Transformation', 'AI', 'CxO Advisory', 'SentientEdge Research'];
};

export const getBlogPostsByYear = (year: number): BlogPost[] => {
  return blogPosts.filter(post => new Date(post.date).getFullYear() === year);
};

export const getBlogPostsByDateRange = (startDate: string, endDate: string): BlogPost[] => {
  return blogPosts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= new Date(startDate) && postDate <= new Date(endDate);
  });
};
