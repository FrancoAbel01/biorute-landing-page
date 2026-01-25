// components/EvolutionaryComponent.tsx
import React, { useState, useEffect } from 'react';


// Importar las imágenes proporcionadas
import image1 from '../imagen/image1.png';
import image2 from '../imagen/image2.png';
import image3 from '../imagen/image3.png';
import { useLanguage } from '../context/LanguageContext';

// Definición de tipos internos
interface StepData {
  id: number;
  image: string;
  title: string;
  description?: string;
  points: string[];
}

interface EvolutionaryComponentProps {
  className?: string;
  showNavigation?: boolean;
  showProgressBar?: boolean;
}

const EvolutionaryComponent: React.FC<EvolutionaryComponentProps> = ({
  className = '',
  showNavigation = true,
  showProgressBar = true,
}) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  
  // Colores personalizados según tus especificaciones
  const colors = {
    background: '#F9F3E7',
    primaryText: '#244629',
    secondaryText: '#2C5530',
    accent: '#3A5A40',
    lightAccent: '#588157',
    border: '#244629',
    progressLine: '#244629',
    progressCircle: '#244629',
    buttonBg: '#F9F3E7',
    buttonBorder: '#244629',
    buttonText: '#244629',
    completed: '#2E7D32',
    active: '#244629',
    upcoming: '#8D9B7A'
  };
  
  // Textos traducibles
  const translations = {
    en: {
      title: "Next Steps",
      subtitle: "Follow our proven 3-step process from concept to completion",
      step: "Step",
      of: "of",
      year1: "Year 1: Development & Validation",
      year2: "Year 2: Scaling & Preparation",
      year3: "Year 3: Market Expansion",
      year1Points: [
        "Lab-validated prototype and first industrial pilots",
        "Strong industry collaboration and public funding",
        "Core technical and operational team formation"
      ],
      year2Points: [
        "Production scale-up and multi-species validation",
        "Advanced pilots and regulatory progress",
        "Preparation for global commercialization"
      ],
      year3Points: [
        "Market entry and international expansion",
        "Regulatory approvals and commercial traction",
        "Dedicated commercial and growth team"
      ]
    },
    es: {
      title: "Próximos Pasos",
      subtitle: "Sigue nuestro proceso probado de 3 pasos desde el concepto hasta la finalización",
      step: "Paso",
      of: "de",
      year1: "Año 1: Desarrollo y Validación",
      year2: "Año 2: Escalado y Preparación",
      year3: "Año 3: Expansión de Mercado",
      year1Points: [
        "Prototipo validado en laboratorio y primeros pilotos industriales",
        "Colaboración sólida con la industria y obtención de financiación pública",
        "Formación del equipo técnico y operativo central"
      ],
      year2Points: [
        "Escalado de producción y validación con múltiples especies",
        "Pilotos avanzados y progreso regulatorio",
        "Preparación para la comercialización global"
      ],
      year3Points: [
        "Entrada al mercado y expansión internacional",
        "Aprobaciones regulatorias y tracción comercial",
        "Formación de un equipo dedicado a crecimiento y comercialización"
      ]
    }
  };
  
  // Obtener textos según el idioma
  const t = translations[language];
  
  // Datos de los pasos con las imágenes importadas
  const steps: StepData[] = [
    {
      id: 1,
      image: image1,
      title: language === 'en' ? "Year 1" : "Año 1",
      points: t.year1Points
    },
    {
      id: 2,
      image: image2,
      title: language === 'en' ? "Year 2" : "Año 2",
      points: t.year2Points
    },
    {
      id: 3,
      image: image3,
      title: language === 'en' ? "Year 3" : "Año 3",
      points: t.year3Points
    }
  ];

  // Calcula el progreso
  useEffect(() => {
    const calculatedProgress = ((currentStep + 1) / steps.length) * 100;
    setProgress(calculatedProgress);
  }, [currentStep, steps.length]);

  // Navegación
  const nextStep = (): void => {
    setCurrentStep(prev => (prev + 1) % steps.length);
  };

  const prevStep = (): void => {
    setCurrentStep(prev => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number): void => {
    setCurrentStep(index);
  };

  // Determinar estado del paso
  const getStepStatus = (index: number): 'completed' | 'active' | 'upcoming' => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };

  // Función para obtener la etiqueta del año según el idioma
  const getYearLabel = (stepTitle: string): string => {
    if (language === 'en') {
      if (stepTitle.includes('1')) return 'Year 1';
      if (stepTitle.includes('2')) return 'Year 2';
      if (stepTitle.includes('3')) return 'Year 3';
    } else {
      if (stepTitle.includes('1')) return 'Año 1';
      if (stepTitle.includes('2')) return 'Año 2';
      if (stepTitle.includes('3')) return 'Año 3';
    }
    return stepTitle.split(':')[0];
  };

  return (
    <div 
      className={`rounded-3xl shadow-2xl overflow-hidden ${className}`}
      style={{ backgroundColor: colors.background }}
    >
      <div className="p-6 md:p-10">
 
        <div className="text-center mb-10">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: colors.primaryText }}
          >
            {t.title}
          </h2>
          
        </div>

        
        {showProgressBar && (
          <div className="mb-10">
            <div className="relative">
              
              <div 
                className="absolute top-5 left-0 right-0 h-2 rounded-full z-0 opacity-30"
                style={{ backgroundColor: colors.border }}
              ></div>
             
              <div 
                className="absolute top-5 left-0 h-2 rounded-full z-10 transition-all duration-700 ease-out"
                style={{ 
                  width: `${progress}%`,
                  backgroundColor: colors.progressLine 
                }}
              ></div>
              
               
              <div className="relative flex justify-between z-20">
                {steps.map((step, index) => {
                  const status = getStepStatus(index);
                  const isActive = status === 'active';
                  const isCompleted = status === 'completed';
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => goToStep(index)}
                      className="flex flex-col items-center relative group focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
                      style={{ 
                        '--tw-ring-color': `${colors.active}40`
                      } as React.CSSProperties}
                      type="button"
                    >
                     
                      <div 
                        className={`
                          w-14 h-14 rounded-full flex items-center justify-center mb-4 
                          transition-all duration-500 transform group-hover:scale-110
                          border-4
                          ${isCompleted 
                            ? 'shadow-xl' 
                            : isActive 
                              ? 'shadow-2xl ring-4 ring-opacity-20' 
                              : 'shadow-lg border-opacity-30'
                          }
                        `}
                        style={{
                          backgroundColor: isActive || isCompleted 
                            ? colors.progressCircle 
                            : colors.background,
                          borderColor: colors.border,
                          borderWidth: isCompleted ? '0px' : '4px',
                          color: isActive || isCompleted ? colors.background : colors.border,
                          '--tw-ring-color': `${colors.active}20`
                        } as React.CSSProperties}
                      >
                        {isCompleted ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-lg font-bold">{index + 1}</span>
                        )}
                      </div>
                      
              
                      <div className="text-center">
                        <span 
                          className="block text-xs font-medium px-3 py-1 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: isActive 
                              ? `${colors.active}15` 
                              : isCompleted 
                                ? `${colors.completed}15` 
                                : `${colors.upcoming}15`,
                            color: isActive 
                              ? colors.active 
                              : isCompleted 
                                ? colors.completed 
                                : colors.upcoming
                          }}
                        >
                          {getYearLabel(step.title)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        
        <div className="animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4">
                <span 
                  className="px-4 py-2 rounded-full font-semibold text-sm shadow-lg backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${colors.background}E6`,
                    color: colors.primaryText,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  {t.step} {currentStep + 1} {t.of} {steps.length}
                </span>
              </div>
            </div>
            
         
            <div className="flex flex-col justify-center p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={`dot-${index}`}
                        onClick={() => goToStep(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                        style={{
                          backgroundColor: index === currentStep
                            ? colors.active
                            : index < currentStep
                              ? colors.completed
                              : colors.upcoming,
                          '--tw-ring-color': `${colors.active}40`
                        } as React.CSSProperties}
                        type="button"
                        aria-label={language === 'en' 
                          ? `Go to step ${index + 1}` 
                          : `Ir al paso ${index + 1}`
                        }
                      />
                    ))}
                  </div>
                </div>
                
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: colors.primaryText }}
                >
                  {steps[currentStep].title}
                  {language === 'en' && currentStep === 0 && ": Development & Validation"}
                  {language === 'en' && currentStep === 1 && ": Scaling & Preparation"}
                  {language === 'en' && currentStep === 2 && ": Market Expansion"}
                  {language === 'es' && currentStep === 0 && ": Desarrollo y Validación"}
                  {language === 'es' && currentStep === 1 && ": Escalado y Preparación"}
                  {language === 'es' && currentStep === 2 && ": Expansión de Mercado"}
                </h3>
              </div>
              
             
              <div className="space-y-4">
                {steps[currentStep].points.map((point, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start p-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    style={{ 
                      backgroundColor: `${colors.active}08`,
                      border: `1px solid ${colors.border}20`
                    }}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ 
                          backgroundColor: colors.active,
                          border: `2px solid ${colors.border}`
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p 
                        className="font-medium transition-colors duration-300"
                        style={{ 
                          color: colors.primaryText 
                        }}
                      >
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionaryComponent;