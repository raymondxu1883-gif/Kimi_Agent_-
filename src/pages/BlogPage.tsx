import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '2026 Wedding Sign Trends: What\'s Hot This Year',
    excerpt: 'Discover the latest wedding sign trends that will make your special day unforgettable. From minimalist designs to personalized touches, we cover it all.',
    content: 'Detailed content about wedding sign trends...',
    author: 'Sarah Johnson',
    date: 'March 10, 2026',
    readTime: '5 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20wedding%20sign%20with%20gold%20accents%20on%20white%20background&image_size=landscape_16_9',
    category: 'Trends'
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Wedding Signage',
    excerpt: 'A comprehensive guide to selecting the right wedding signs for your venue, theme, and budget.',
    content: 'Detailed content about choosing wedding signage...',
    author: 'Michael Chen',
    date: 'March 5, 2026',
    readTime: '7 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bride%20and%20groom%20with%20wedding%20sign%20in%20garden&image_size=landscape_16_9',
    category: 'Guides'
  },
  {
    id: 3,
    title: 'DIY vs. Professional Wedding Signs',
    excerpt: 'Weighing the pros and cons of creating your own wedding signs versus hiring a professional.',
    content: 'Detailed content about DIY vs professional signs...',
    author: 'Emily Rodriguez',
    date: 'February 28, 2026',
    readTime: '4 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hands%20crafting%20wedding%20sign%20with%20calligraphy&image_size=landscape_16_9',
    category: 'Tips'
  },
  {
    id: 4,
    title: 'Real Wedding: Elegant Signage for a Rustic Barn Wedding',
    excerpt: 'See how one couple transformed their barn venue with stunning wedding signs and decor.',
    content: 'Detailed content about rustic barn wedding signage...',
    author: 'David Wilson',
    date: 'February 20, 2026',
    readTime: '6 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rustic%20barn%20wedding%20with%20wooden%20signs&image_size=landscape_16_9',
    category: 'Real Weddings'
  },
  {
    id: 5,
    title: 'The Importance of Wedding Signage in Event Flow',
    excerpt: 'Learn how strategic signage placement can enhance your wedding\'s organization and guest experience.',
    content: 'Detailed content about wedding event flow...',
    author: 'Sophia Lee',
    date: 'February 15, 2026',
    readTime: '5 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wedding%20reception%20with%20elegant%20signs%20pointing%20directions&image_size=landscape_16_9',
    category: 'Tips'
  },
  {
    id: 6,
    title: 'Personalized Wedding Signs: Making Your Day Unique',
    excerpt: 'Ideas and inspiration for creating custom wedding signs that reflect your personality as a couple.',
    content: 'Detailed content about personalized wedding signs...',
    author: 'James Taylor',
    date: 'February 10, 2026',
    readTime: '8 min read',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personalized%20wedding%20sign%20with%20couple%20names%20and%20date&image_size=landscape_16_9',
    category: 'Inspiration'
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20wedding%20signage%20background%20blurred&image_size=landscape_16_9')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore wedding sign inspiration, trends, and expert tips for your special day
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gold text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-elegant hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-3 text-gray-800 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-gold font-medium hover:text-gold-dark transition-colors duration-300 gap-1"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-300">
              Previous
            </button>
            <button className="px-4 py-2 rounded-full bg-gold text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-300">
              2
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-300">
              Next
            </button>
          </nav>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Inspired</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our blog for the latest wedding sign trends, tips, and inspiration delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            />
            <button className="px-6 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;