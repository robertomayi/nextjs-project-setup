'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/18095551234?text=Hola%20Beato%2C%20quiero%20más%20información%20sobre%20el%20MÉTODO%20BEATO', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/teambeato', '_blank');
  };

  const openCalendly = () => {
    window.open('https://calendly.com/metodo-beato/consulta-gratuita', '_blank');
  };

  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              MÉTODO BEATO
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos vidas a través del fitness con programas personalizados, 
              nutrición especializada y seguimiento 24/7. Más de 500 transformaciones exitosas 
              nos respaldan en República Dominicana y Latinoamérica.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <button
                onClick={openInstagram}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:scale-105 transition-transform"
                aria-label="Síguenos en Instagram"
              >
                <span className="text-lg">📷</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 p-3 rounded-lg hover:scale-105 transition-transform"
                aria-label="Contáctanos por WhatsApp"
              >
                <span className="text-lg">📱</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Planes
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Aplicar Ahora
                </button>
              </li>
              <li>
                <button
                  onClick={openCalendly}
                  className="hover:text-white transition-colors"
                >
                  Agendar Llamada
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">
              Contacto
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>WhatsApp: +1 (809) 555-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>info@metodobeato.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>República Dominicana</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📷</span>
                <span>@teambeato</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Transformar tu Vida?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              No esperes más. Tu mejor versión te está esperando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                🔥 APLICAR AHORA
              </button>
              <button
                onClick={openWhatsApp}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                💬 HABLAR CON BEATO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} MÉTODO BEATO. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Términos y Condiciones
              </button>
              <button className="hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors">
                Política de Reembolso
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
              <p className="mb-2">
                <strong>Descargo de responsabilidad:</strong> Los resultados mostrados en testimonios son casos reales pero individuales. 
                Los resultados pueden variar según el compromiso, la consistencia y las condiciones particulares de cada persona.
              </p>
              <p className="mb-2">
                El MÉTODO BEATO no garantiza resultados específicos y recomienda consultar con un médico antes de iniciar cualquier programa de ejercicio o nutrición.
              </p>
              <p>
                Esta página utiliza cookies y píxeles de seguimiento para mejorar la experiencia del usuario y optimizar nuestros servicios de marketing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </footer>
  );
}
