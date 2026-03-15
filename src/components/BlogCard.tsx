import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform"
      >
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-accent-gold transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2 text-accent-gold font-semibold group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-dark-blue mb-2 group-hover:text-accent-gold transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <User className="w-3 h-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1 text-accent-gold text-sm font-semibold group/btn">
              Read
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
