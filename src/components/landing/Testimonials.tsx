'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos M.",
      age: "32 años",
      location: "Santo Domingo, RD",
      before: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      feedback: "Con el MÉTODO BEATO cambié mi vida completamente. Perdí 15kg en 3 meses y gané la confianza que necesitaba. Beato no solo me dio un plan, me dio disciplina.",
      results: "Perdió 15kg en 3 meses"
    },
    {
      id: 2,
      name: "María L.",
      age: "28 años", 
      location: "Medellín, Colombia",
      before: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      feedback: "Después de 2 embarazos pensé que nunca recuperaría mi figura. El seguimiento personalizado y la nutrición adaptada a mi rutina de mamá fueron clave. ¡Estoy mejor que antes!",
      results: "Recuperó su figura post-embarazo"
    },
    {
      id: 3,
      name: "Roberto S.",
      age: "45 años",
      location: "San José, Costa Rica", 
      before: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
      feedback: "A los 45 creía que era tarde para cambiar. Beato me demostró lo contrario. Su método se adaptó a mi horario de trabajo y en 4 meses logré el físico que quería desde los 30.",
      results: "Ganó 8kg de músculo a los 45 años"
    },
    {
      id: 4,
      name: "Ana G.",
      age: "35 años",
      location: "Caracas, Venezuela",
      before: "https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=400", 
      after: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=400",
      feedback: "El apoyo constante por WhatsApp fue lo que marcó la diferencia. Cada duda, cada momento difícil, Beato estuvo ahí. No es solo un coach, es un mentor de vida.",
      results: "Transformación completa en 5 meses"
    }
  ];

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Testimonios <span className="text-yellow-400">Reales</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 500 personas han transformado sus vidas con el MÉTODO BEATO. 
            Estos son algunos de nuestros casos de éxito más inspiradores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              {/* Before/After Images */}
              <div className="relative">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <img
                      src={testimonial.before}
                      alt={`Antes de ${testimonial.name}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-sm font-semibold border border-yellow-500/50">
                      ANTES
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={testimonial.after}
                      alt={`Después de ${testimonial.name}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="absolute bottom-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-sm font-semibold">
                      DESPUÉS
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.age} • {testimonial.location}</p>
                  <p className="text-sm font-semibold text-yellow-400 mt-1">{testimonial.results}</p>
                </div>
                
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{testimonial.feedback}"
                </blockquote>
                
                {/* Rating Stars */}
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-xl p-8 text-white text-center border border-yellow-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">500+</div>
              <div className="text-lg text-gray-300">Transformaciones Exitosas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">98%</div>
              <div className="text-lg text-gray-300">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">30</div>
              <div className="text-lg text-gray-300">Días para Ver Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
