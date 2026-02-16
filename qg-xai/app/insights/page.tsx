import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function InsightsPage() {
  const sampleInsights = [
    {
      id: 1,
      title: 'Future of Enterprise Technology',
      description: 'Strategic insights on emerging technologies and their impact on enterprises.',
      date: '2024-01-20',
      category: 'Strategy'
    },
    {
      id: 2,
      title: 'Data-Driven Decision Making',
      description: 'How organizations are leveraging data analytics for better outcomes.',
      date: '2024-01-15',
      category: 'Analytics'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Digital Age',
      description: 'Essential security practices for modern digital businesses.',
      date: '2024-01-10',
      category: 'Security'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insights</h1>
            <p className="text-lg text-gray-600">
              Expert analysis and thought leadership on industry trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {insight.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {insight.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <div className="text-sm text-gray-500">{insight.date}</div>
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
