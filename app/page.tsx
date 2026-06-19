import { Mail, MapPin, Phone, Building2, Users, Globe } from 'lucide-react'

export default function CompanyPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Zoom Software Technology
          </h1>
          <p className="text-xl text-gray-600">Company Information</p>
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Founded & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Founded</h3>
                <p className="text-gray-600">2024</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Founder &amp; CEO
                </h3>
                <p className="text-gray-600">Rohit Choudhary</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="border-t pt-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Headquarters: Bangalore</p>
                  <p className="text-gray-600">
                    No 31/2, 2nd Floor, #24, 1st Floor,
                  </p>
                  <p className="text-gray-600">South End Road, Malleshwaram,</p>
                  <p className="text-gray-600">Bangalore – 560020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Official Email</p>
                  <a
                    href="mailto:hr@zoomsoftwaretechnology.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    hr@zoomsoftwaretechnology.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:080-456745112"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    080-456745112
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 Zoom Software Technology. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
