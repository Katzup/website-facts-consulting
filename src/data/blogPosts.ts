import { wordpressPosts } from './wordpressPosts';

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

// The blog is Bob Katz's own writing: the original WordPress posts (2009–2018),
// with LinkedIn and Medium pieces to follow.
export const blogPosts: BlogPost[] = [...wordpressPosts];


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
  return ['Finance', 'Analytics', 'Consulting', 'Transformation', 'AI'];
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
