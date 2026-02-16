import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogsPage() {
  const sampleBlogs = [
    {
      id: 1,
      title: 'Digital Transformation in Modern Enterprises',
      description: 'Explore how digital transformation is reshaping businesses across industries.',
      date: '2024-01-15',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Learn the key strategies for successful cloud migration and optimization.',
      date: '2024-01-10',
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'AI and Machine Learning in Business',
      description: 'Discover how AI is transforming business operations and decision-making.',
      date: '2024-01-05',
      category: 'AI'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blogs</h1>
            <p className="text-lg text-gray-600">
              Insights and perspectives on technology, business, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {blog.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-500">{blog.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
