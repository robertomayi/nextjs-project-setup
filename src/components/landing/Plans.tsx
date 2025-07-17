'use client'

export default function Plans() {
  const plans = [
    {
      title: "BÁSICO",
      subtitle: "Perfecto para empezar",
      price: "$100",
      originalPrice: "$150",
      period: "USD/mes",
      popular: false,
      features: [
        "Plan de nutrición personalizado",
        "Rutina de entrenamiento adaptada",
        "Control y seguimiento de hábitos",
        "Acceso a la app exclusiva",
        "Recetas saludables semanales",
        "Videos explicativos de ejercicios"
      ],
      limitations: [
        "Sin asesoría 1 a 1",
        "Soporte limitado por email"
      ]
    },
    {
      title: "INTERMEDIO",
      subtitle: "El más elegido",
      price: "$185",
      originalPrice: "$250",
      period: "USD/mes",
      popular: true,
      features: [
        "Todo lo del plan Básico",
        "Asesoría personalizada 1 a 1",
        "Seguimiento diario vía WhatsApp",
        "Ajustes semanales del plan",
        "Sesión de evaluación mensual",
        "Soporte nutricional avanzado",
        "Plan de suplementación"
      ],
      limitations: []
    },
    {
      title: "EXPERTO",
      subtitle: "Transformación total",
      price: "$270",
      originalPrice: "$350",
      period: "USD/mes",
      popular: false,
      features: [
        "Todo lo del plan Intermedio",
        "Sesiones de revisión personalizadas",
        "Plan especializado para atletas",
        "Preparación para competencias",
        "Análisis corporal detallado",
        "Soporte 24/7 vía WhatsApp",
        "Llamadas semanales de seguimiento",
        "Acceso a masterclasses exclusivas"
      ],
      limitations: []
    }
  ];

  const openCalendly = () => {
    window.open('https://calendly.com/metodo-beato/consulta-gratuita', '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Elige el Plan que se
            <span className="text-yellow-400"> Adapta a Ti</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Cada plan está diseñado para diferentes niveles de compromiso y objetivos. 
            Todos incluyen la metodología probada que ha transformado más de 500 vidas.
          </p>
          
          {/* Money Back Guarantee */}
          <div className="inline-flex items-center gap-2 bg-yellow-900/30 text-yellow-300 px-4 py-2 rounded-full font-semibold border border-yellow-500/50">
            <span>✅</span>
            <span>Garantía de satisfacción 30 días</span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-900 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-500 ring-4 ring-yellow-500/20' 
                  : 'border-gray-700 hover:border-yellow-500/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                    🔥 MÁS POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                        <div className="text-sm text-gray-400">{plan.period}</div>
                      </div>
                    </div>
                    <div className="text-sm text-yellow-400 font-semibold mt-1">
                      Ahorra ${parseInt(plan.originalPrice.replace('$', '')) - parseInt(plan.price.replace('$', ''))} USD
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-yellow-400 font-bold text-lg">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-gray-700">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-500 font-bold">✗</span>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {plan.popular ? '🚀 EMPEZAR AHORA' : 'SELECCIONAR PLAN'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-2xl p-8 text-white text-center border border-yellow-500/30">
          <h3 className="text-3xl font-bold mb-4">
            ¿No estás seguro cuál plan es para ti?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Agenda una llamada gratuita de 15 minutos y te ayudo a elegir el plan perfecto para tus objetivos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openCalendly}
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors min-w-[250px]"
            >
              📅 AGENDAR LLAMADA GRATIS
            </button>
            
            <div className="text-yellow-300 font-medium">
              ⚡ Disponibilidad limitada
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-900 rounded-xl p-6 max-w-2xl border border-yellow-500/30">
            <h4 className="font-bold text-lg mb-2 text-yellow-400">🛡️ Garantía Total de Satisfacción</h4>
            <p className="text-gray-300">
              Si en los primeros 30 días no ves resultados o no estás completamente satisfecho, 
              te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
