'use client'

export default function Header() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/18095551234?text=Hola%2C%20quiero%20información%20sobre%20el%20MÉTODO%20BEATO', '_blank');
  };

  return (
    <header className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
              <span>👑</span>
              <span>ENTRENAMIENTO PREMIUM EXCLUSIVO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforma tu cuerpo con el
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                MÉTODO BEATO
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Transformación real con guía profesional de élite. Programas premium de fitness que incluyen 
              <span className="text-yellow-400 font-semibold"> nutrición personalizada, entrenamiento 1 a 1</span> y 
              seguimiento completo vía WhatsApp.
            </p>

            {/* Social Proof */}
            <div className="mb-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">+500 transformaciones exitosas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Resultados en 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Seguimiento 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[200px]"
                aria-label="Aplica ahora para transformar tu cuerpo"
              >
                🔥 APLICA AHORA
              </button>
              
              <button
                onClick={openWhatsApp}
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 min-w-[200px]"
                aria-label="Contactar por WhatsApp"
              >
                📱 WhatsApp Directo
              </button>
            </div>

            {/* Urgency Message */}
            <p className="text-yellow-400 font-medium flex items-center justify-center lg:justify-start gap-2">
              <span className="animate-pulse">⚡</span>
              <span>Solo quedan 5 cupos disponibles este mes</span>
            </p>
          </div>

          {/* Right side - Coach Image */}
          <div className="relative">
            <div className="relative">
              {/* Golden frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl blur-sm opacity-75"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl"></div>
              
              {/* Coach Image */}
              <div className="relative bg-black rounded-2xl p-2">
                <img
                  src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Beato - Coach Experto en Fitness"
                  className="w-full h-[500px] object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                
                {/* Coach Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-1">BEATO</h3>
                  <p className="text-white text-sm mb-2">Coach Experto en Transformación Corporal</p>
                  <div className="flex items-center gap-4 text-xs text-gray-300">
                    <span>🏆 +10 años experiencia</span>
                    <span>📈 +500 clientes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating achievements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm shadow-2xl">
              👑 Coach #1
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm shadow-2xl">
              💪 Experto Certificado
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
