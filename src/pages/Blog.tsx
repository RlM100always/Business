import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, Clock, Eye, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  views: number;
  category: string;
  tags: string[];
  featuredImage: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development in Bangladesh',
      excerpt: 'Exploring emerging technologies and trends shaping the web development landscape in Bangladesh and how local companies are adapting.',
      content: '',
      author: 'Md. Rahman Ahmed',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      views: 1250,
      category: 'Technology',
      tags: ['Web Development', 'Bangladesh', 'Future Tech'],
      featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      featured: true
    },
    {
      id: '2',
      title: 'Building Scalable Mobile Apps for International Markets',
      excerpt: 'Best practices for developing mobile applications that can scale globally while maintaining performance and user experience.',
      content: '',
      author: 'Sarah Khan',
      authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      views: 980,
      category: 'Mobile Development',
      tags: ['Mobile Apps', 'Scalability', 'International'],
      featuredImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: '3',
      title: 'AI and Machine Learning: Opportunities for Students',
      excerpt: 'How university students can leverage AI and ML technologies to build innovative projects and advance their careers.',
      content: '',
      author: 'Dr. Fatima Begum',
      authorImage: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-08',
      readTime: '10 min read',
      views: 1450,
      category: 'AI & ML',
      tags: ['Artificial Intelligence', 'Students', 'Career'],
      featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: '4',
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity measures that small and medium businesses should implement to protect their digital assets.',
      content: '',
      author: 'Arif Hassan',
      authorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      views: 750,
      category: 'Cybersecurity',
      tags: ['Security', 'Small Business', 'Best Practices'],
      featuredImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: '5',
      title: 'Cloud Migration Strategies for Bangladeshi Enterprises',
      excerpt: 'A comprehensive guide to cloud migration for local enterprises, including cost considerations and implementation strategies.',
      content: '',
      author: 'Karim Ahmed',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-03',
      readTime: '15 min read',
      views: 620,
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'Enterprise', 'Bangladesh'],
      featuredImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: '6',
      title: 'Remote Work Culture in Tech: Lessons from Dhaka',
      excerpt: 'How tech companies in Dhaka are building successful remote work cultures and maintaining team productivity.',
      content: '',
      author: 'Nadia Rahman',
      authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      publishDate: '2024-01-01',
      readTime: '9 min read',
      views: 890,
      category: 'Work Culture',
      tags: ['Remote Work', 'Tech Culture', 'Productivity'],
      featuredImage: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  ];

  const categories = ['all', 'Technology', 'Mobile Development', 'AI & ML', 'Cybersecurity', 'Cloud Computing', 'Work Culture'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in technology from our expert team in Dhaka.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative max-w-md w-full">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={featuredPost.authorImage} 
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{featuredPost.author}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          {new Date(featuredPost.publishDate).toLocaleDateString()}
                          <Clock size={14} className="ml-3 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar size={12} className="mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Eye size={14} className="mr-1" />
                    {post.views}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria or browse all categories.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;