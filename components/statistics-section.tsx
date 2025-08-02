export default function StatisticsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">2+</div>
            <div className="text-blue-200">TOTAL TOURNAMENTS</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">26+</div>
            <div className="text-blue-200">TOTAL TEAM</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">95+</div>
            <div className="text-blue-200">TOTAL MATCHES</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">390+</div>
            <div className="text-blue-200">TOTAL PLAYERS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
