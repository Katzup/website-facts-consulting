import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Filter, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { blogPosts, getAllCategories } from '@/data/blogPosts';
import { useState, useMemo } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const categories = getAllCategories();
  const years = useMemo(() => {
    const uniqueYears = new Set(blogPosts.map(post => new Date(post.date).getFullYear()));
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    if (selectedYear) {
      posts = posts.filter(post => new Date(post.date).getFullYear() === selectedYear);
    }
    return posts;
  }, [selectedCategory, selectedYear]);

  const featuredPost = filteredPosts[0];
  const recentPosts = filteredPosts.slice(1, 4);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Insights & Resources
            </span>
            <span className="w-8 h-[2px] bg-accent-gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Latest from Our Blog
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert insights, industry trends, and practical advice to help your business thrive.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 text-dark-blue">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter Articles</span>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <FolderOpen className="w-4 h-4" />
              <span className="text-sm font-medium">By Service Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === null
                    ? 'bg-accent-gold text-dark-blue'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-accent-gold text-dark-blue'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">By Year</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedYear === null
                    ? 'bg-accent-gold text-dark-blue'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold'
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedYear === year
                      ? 'bg-accent-gold text-dark-blue'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory && ` in ${selectedCategory}`}
            {selectedYear && ` from ${selectedYear}`}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-8">
            <BlogCard post={featuredPost} index={0} featured />
          </div>
        )}

        {/* Recent Posts Grid */}
        {recentPosts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 1} />
            ))}
          </div>
        )}

        {/* All Posts List */}
        {filteredPosts.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-dark-blue mb-6">
              More Articles
            </h3>
            <div className="space-y-4">
              {filteredPosts.slice(4).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-dark-blue group-hover:text-accent-gold transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-4 py-2 border border-accent-gold text-accent-gold text-sm font-medium rounded-lg hover:bg-accent-gold hover:text-dark-blue transition-colors shrink-0">
                        Read
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles found for the selected filters.
            </p>
            <Button
              onClick={() => { setSelectedCategory(null); setSelectedYear(null); }}
              variant="outline"
              className="mt-4 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
