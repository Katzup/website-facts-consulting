import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, getBlogPostsByCategory } from '@/data/blogPosts';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-light-bg">
        <Navigation />
        <main className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-dark-blue mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/#blog')} className="bg-accent-gold text-dark-blue hover:bg-accent-gold-hover">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getBlogPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-dark-blue mt-8 mb-4" key="${index}">${paragraph.replace('## ', '')}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3 class="text-xl font-semibold text-dark-blue mt-6 mb-3" key="${index}">${paragraph.replace('### ', '')}</h3>`;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').map(item => item.replace('- ', ''));
          return `<ul class="list-disc list-inside mb-4 text-gray-700 space-y-1" key="${index}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return `<p class="font-semibold text-dark-blue mb-4" key="${index}">${paragraph.replace(/\*\*/g, '')}</p>`;
        }
        return `<p class="mb-4 text-gray-700 leading-relaxed" key="${index}">${paragraph}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation />
      
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <div className="relative bg-dark-blue py-16 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/#blog" 
                className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent-gold text-dark-blue text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-text-secondary text-sm">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1 text-text-secondary text-sm">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                  <span className="text-dark-blue font-bold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-card">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Article Body */}
              <article 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Share this article:</span>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/#blog')}
                    variant="outline"
                    className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-card mb-6">
                  <h3 className="text-lg font-bold text-dark-blue mb-4">
                    More in {post.category}
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-dark-blue group-hover:text-accent-gold transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(relatedPost.date)} • {relatedPost.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-bold text-dark-blue mb-4">
                  Browse by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Finance', 'Analytics', 'Consulting', 'Transformation', 'AI'].map((category) => (
                    <Link
                      key={category}
                      to={`/#blog`}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        category === post.category
                          ? 'bg-accent-gold text-dark-blue'
                          : 'bg-gray-100 text-gray-600 hover:bg-accent-gold/20 hover:text-accent-gold'
                      }`}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
