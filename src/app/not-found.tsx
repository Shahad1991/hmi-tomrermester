import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Side ikke fundet | HMI Tømrermester',
  description: 'Siden du leder efter kunne ikke findes. Gå tilbage til forsiden eller find hvad du søger i vores menu.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-orange-500">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Siden blev ikke fundet
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Undskyld, siden du leder efter findes ikke eller er blevet flyttet.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Link 
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            Gå til forsiden
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              href="/kontakt"
              className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Kontakt os
            </Link>
            <Link 
              href="/galleri"
              className="flex-1 text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Se vores projekter
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Populære sider:
          </h3>
          <div className="space-y-2">
            <Link href="/ydelser/carport" className="block text-orange-600 hover:text-orange-500 transition-colors">
              Carport byggeri
            </Link>
            <Link href="/ydelser/terrasse" className="block text-orange-600 hover:text-orange-500 transition-colors">
              Terrasser
            </Link>
            <Link href="/ydelser/kokken" className="block text-orange-600 hover:text-orange-500 transition-colors">
              Køkkenrenovering
            </Link>
            <Link href="/om-os" className="block text-orange-600 hover:text-orange-500 transition-colors">
              Om os
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
