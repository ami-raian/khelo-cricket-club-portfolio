export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Sponsors */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">SPALDING</div>
            <div className="text-sm text-blue-200">NEVER FLAT</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">RESPECT</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">UOSPORT</div>
            <div className="text-sm text-blue-200">PERFORMANCE GEAR</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">DEPONTE</div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">SIGMA</div>
            <div className="text-sm text-blue-200">SPORTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">SETXFC</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">BROOKS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">KEVIN</div>
            <div className="text-sm text-blue-200">DURANT</div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 mb-4">© 2024 Khelo. Designed by v0 Vercel.</p>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
