import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Billede-sektion */}
          <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/services.jpg" // Erstat med dit billede
              alt="WoodCraft team working"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Tekst-sektion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              <span className="block text-2xl font-semibold text-gray-800 mb-2">Crafting Excellence Since 1998</span>
              WoodCraft is a family-owned carpentry business with over 25 years of experience in delivering exceptional woodworking services.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">25+ years of experience in carpentry</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Licensed and insured professionals</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Premium materials and sustainable practices</p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg inline-block mb-8">
              <p className="text-4xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}