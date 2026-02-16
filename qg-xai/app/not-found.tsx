import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
