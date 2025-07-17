'use client'

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  objective: string;
  budget: string;
  age: string;
  experience: string;
}

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    objective: '',
    budget: '',
    age: '',
    experience: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    { value: '100-150', label: '$100 - $150 USD/mes' },
    { value: '150-200', label: '$150 - $200 USD/mes' },
    { value: '200-270', label: '$200 - $270 USD/mes' },
    { value: '270+', label: 'Más de $270 USD/mes' },
    { value: 'flexible', label: 'Presupuesto flexible' }
  ];

  const objectiveOptions = [
    'Perder peso y grasa corporal',
    'Ganar masa muscular',
    'Tonificar y definir',
    'Mejorar condición física general',
    'Preparación para competencia',
    'Recuperar forma después del embarazo',
    'Cambio de estilo de vida saludable'
  ];

  const experienceOptions = [
    'Principiante (nunca he entrenado)',
    'Básico (menos de 1 año)',
    'Intermedio (1-3 años)',
    'Avanzado (más de 3 años)'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'El WhatsApp es requerido';
    } else if (!/^\+?[\d\s\-\(\)]{8,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Número de WhatsApp inválido';
    }

    if (!formData.objective) {
      newErrors.objective = 'Selecciona tu objetivo principal';
    }

    if (!formData.budget) {
      newErrors.budget = 'Selecciona tu rango de presupuesto';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'La edad es requerida';
    }

    if (!formData.experience) {
      newErrors.experience = 'Selecciona tu nivel de experiencia';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track conversion for Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'MÉTODO BEATO Lead Form',
          content_category: 'Fitness Mentoring',
          value: formData.budget,
          currency: 'USD'
        });
      }

      // Track conversion for TikTok Pixel
      if (typeof window !== 'undefined' && (window as any).ttq) {
        (window as any).ttq.track('SubmitForm', {
          content_type: 'lead_form',
          content_name: 'MÉTODO BEATO Application'
        });
      }

      console.log('Lead captured:', formData);
      setIsSubmitted(true);
      
      // Redirect to WhatsApp with pre-filled message
      const message = `Hola Beato! Acabo de completar el formulario en tu landing page.

Mis datos:
- Nombre: ${formData.name}
- Objetivo: ${formData.objective}
- Presupuesto: ${formData.budget}
- Experiencia: ${formData.experience}

Estoy interesado/a en conocer más sobre el MÉTODO BEATO y agendar mi llamada de diagnóstico gratuita.`;

      setTimeout(() => {
        window.open(`https://wa.me/18095551234?text=${encodeURIComponent(message)}`, '_blank');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="w-full py-16 bg-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-yellow-500/30">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              ¡Formulario Enviado Exitosamente!
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Gracias por tu interés en el MÉTODO BEATO. En unos segundos te redirigiremos a WhatsApp 
              para continuar con el proceso de selección.
            </p>
            <div className="bg-yellow-900/30 rounded-lg p-4 mb-6 border border-yellow-500/50">
              <p className="text-yellow-300 font-semibold">
                📱 Próximos pasos:
              </p>
              <ul className="text-gray-300 text-left mt-2 space-y-1">
                <li>• Te contactaremos en las próximas 2 horas</li>
                <li>• Agendaremos tu llamada de diagnóstico gratuita</li>
                <li>• Recibirás un plan personalizado</li>
              </ul>
            </div>
            <div className="animate-pulse text-yellow-400 font-semibold">
              Redirigiendo a WhatsApp en 3 segundos...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="w-full py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Agenda tu <span className="text-yellow-400">Llamada de Diagnóstico</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Completa este formulario y te contactaremos en las próximas 2 horas para agendar 
            tu consulta gratuita y crear tu plan personalizado.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-yellow-900/30 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/50">
              <span>✅</span>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-600">
              <span>🔒</span>
              <span>Información Segura</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-900/30 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/50">
              <span>⚡</span>
              <span>Respuesta en 2 horas</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                    errors.name ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                  }`}
                  placeholder="Ej: María González"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-white mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="18"
                  max="70"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                    errors.age ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                  }`}
                  placeholder="Ej: 32"
                />
                {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                    errors.email ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-white mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                    errors.whatsapp ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                  }`}
                  placeholder="+1 809 555 1234"
                />
                {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
              </div>
            </div>

            {/* Objective */}
            <div>
              <label htmlFor="objective" className="block text-sm font-semibold text-white mb-2">
                ¿Cuál es tu objetivo principal? *
              </label>
              <select
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                  errors.objective ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                }`}
              >
                <option value="" className="bg-gray-800">Selecciona tu objetivo</option>
                {objectiveOptions.map((option) => (
                  <option key={option} value={option} className="bg-gray-800">{option}</option>
                ))}
              </select>
              {errors.objective && <p className="text-red-400 text-sm mt-1">{errors.objective}</p>}
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-white mb-2">
                ¿Cuál es tu nivel de experiencia en fitness? *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                  errors.experience ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                }`}
              >
                <option value="" className="bg-gray-800">Selecciona tu nivel</option>
                {experienceOptions.map((option) => (
                  <option key={option} value={option} className="bg-gray-800">{option}</option>
                ))}
              </select>
              {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience}</p>}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                ¿Cuál es tu presupuesto mensual para invertir en tu transformación? *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-800 text-white ${
                  errors.budget ? 'border-red-500 bg-red-900/20' : 'border-gray-600'
                }`}
              >
                <option value="" className="bg-gray-800">Selecciona tu presupuesto</option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800">{option.label}</option>
                ))}
              </select>
              {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-400 text-black transform hover:scale-105 shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    Enviando...
                  </div>
                ) : (
                  '🚀 ENVIAR Y AGENDAR MI LLAMADA GRATUITA'
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="text-center text-sm text-gray-400 pt-4">
              <p>
                🔒 Tu información está 100% segura. No compartimos tus datos con terceros.
                <br />
                Al enviar este formulario aceptas ser contactado por el equipo de MÉTODO BEATO.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
