'use client'

import { useState } from 'react';

export default function SpecialOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOfferClick = () => {
    setIsModalOpen(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track conversion for Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          content_name: 'MÉTODO BEATO - Reto 7 Días',
          content_type: 'product',
          value: 10,
          currency: 'USD'
        });
      }

      // Track conversion for TikTok Pixel
      if (typeof window !== 'undefined' && (window as any).ttq) {
        (window as any).ttq.track('CompletePayment', {
          content_type: 'product',
          content_name: 'Reto 7 Días MÉTODO BEATO',
          value: 10,
          currency: 'USD'
        });
      }

      console.log('Special offer email captured:', email);
      setIsSuccess(true);
      
      // Redirect to payment or WhatsApp
      setTimeout(() => {
        const message = `Hola Beato! Quiero aprovechar la oferta especial del Reto de 7 días por $10 USD. Mi email es: ${email}`;
        window.open(`https://wa.me/18095551234?text=${encodeURIComponent(message)}`, '_blank');
      }, 2000);

    } catch (error) {
      console.error('Error submitting special offer:', error);
      alert('Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
    setIsSuccess(false);
  };

  return (
    <>
      <section className="w-full py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="max-w-5xl mx-auto px-4">
          {/* Main Offer Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
            {/* Header with urgency */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4">
              <div className="flex items-center justify-center gap-2 text-lg font-bold">
                <span className="animate-pulse">🔥</span>
                <span>OFERTA ESPECIAL LIMITADA</span>
                <span className="animate-pulse">🔥</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Offer details */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    ¿Presupuesto Limitado?
                    <span className="block text-red-600">¡No hay problema!</span>
                  </h2>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    Prueba el poder del MÉTODO BEATO con nuestro reto de transformación de 7 días 
                    por solo <span className="font-bold text-2xl text-red-600">$10 USD</span>
                  </p>

                  {/* What's included */}
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-lg mb-3 text-green-800">
                      🎯 Lo que incluye tu Reto de 7 Días:
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Plan de entrenamiento diario (7 rutinas completas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Menú de alimentación saludable para 7 días</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Videos explicativos de cada ejercicio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Lista de compras organizada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Grupo de WhatsApp exclusivo para participantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Seguimiento diario y motivación</span>
                      </li>
                    </ul>
                  </div>

                  {/* Social proof */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">+</div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">+150 personas</div>
                      <div>ya completaron el reto</div>
                    </div>
                  </div>
                </div>

                {/* Right side - CTA and pricing */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white mb-6">
                    <div className="mb-4">
                      <div className="text-sm opacity-80 line-through">Precio regular: $47 USD</div>
                      <div className="text-5xl font-bold">$10</div>
                      <div className="text-lg">USD únicamente</div>
                    </div>
                    
                    <div className="bg-yellow-400 text-black rounded-lg p-3 mb-4 font-bold">
                      🎉 AHORRA $37 USD (79% OFF)
                    </div>

                    <button
                      onClick={handleOfferClick}
                      className="w-full py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      🚀 OBTENER MI RETO AHORA
                    </button>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-800 font-semibold mb-2">
                      🛡️ Garantía de Satisfacción
                    </div>
                    <div className="text-blue-700 text-sm">
                      Si no ves resultados en 7 días, te devolvemos tu dinero
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency timer */}
              <div className="mt-8 text-center">
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 inline-block">
                  <div className="text-red-800 font-bold mb-1">⏰ OFERTA LIMITADA</div>
                  <div className="text-red-600 text-sm">
                    Solo disponible para los primeros 50 participantes de este mes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials for the challenge */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
              <p className="text-gray-700 italic mb-3">
                "En solo 7 días perdí 3 kilos y me sentí con más energía. Fue el empujón que necesitaba para cambiar mi vida."
              </p>
              <div className="font-semibold text-gray-900">- Carmen R.</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
              <p className="text-gray-700 italic mb-3">
                "El reto me ayudó a crear hábitos saludables. Ahora sigo con el programa completo y no puedo estar más feliz."
              </p>
              <div className="font-semibold text-gray-900">- Miguel A.</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-2">{'★'.repeat(5)}</div>
              <p className="text-gray-700 italic mb-3">
                "Por $10 obtuve más valor que en programas que cuestan 10 veces más. Beato es increíble."
              </p>
              <div className="font-semibold text-gray-900">- Ana L.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            {!isSuccess ? (
              <>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  🎉 ¡Excelente decisión!
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Ingresa tu email para recibir acceso inmediato al Reto de 7 Días por solo $10 USD
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label htmlFor="offer-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="offer-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Procesando...
                      </div>
                    ) : (
                      'OBTENER ACCESO POR $10 USD'
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Serás redirigido a WhatsApp para completar el pago seguro
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  ¡Perfecto!
                </h3>
                <p className="text-gray-700 mb-6">
                  Te estamos redirigiendo a WhatsApp para completar tu pago de $10 USD y recibir acceso inmediato al reto.
                </p>
                <div className="animate-pulse text-blue-600 font-semibold">
                  Redirigiendo a WhatsApp...
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
