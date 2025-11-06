import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/logo-metricpress-peso-optimo.png" 
                alt="MetricPress Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#diferenciador" className="text-gray-700 hover:text-[#00AEEF] transition-colors font-medium">
                Diferenciador
              </a>
              <a href="#planes" className="text-gray-700 hover:text-[#00AEEF] transition-colors font-medium">
                Planes
              </a>
              <a href="#stack" className="text-gray-700 hover:text-[#00AEEF] transition-colors font-medium">
                Stack Tecnológico
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-[#00AEEF] transition-colors font-medium">
                Testimonios
              </a>
              <a href="#director" className="text-gray-700 hover:text-[#00AEEF] transition-colors font-medium">
                Director
              </a>
              <a href="#contacto">
                <Button className="bg-[#00AEEF] hover:bg-[#0098D4] text-white">
                  Contacto
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00AEEF]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              MetricPress
            </h1>
            <p className="text-2xl md:text-3xl text-[#00AEEF] font-semibold mb-8">
              Agencia Growth PR & Reputación Digital
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Dejamos de medir clippings. Empezamos a medir el crecimiento.
            </p>
            <a href="#contacto">
              <Button size="lg" className="bg-[#00AEEF] hover:bg-[#0098D4] text-white text-lg px-8 py-6">
                Agenda una Reunión
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Video Propuesta de Valor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Conoce nuestra propuesta de valor <span className="text-[#00AEEF]">"Proactiva"</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
              Descubre cómo transformamos la reputación de tu marca en crecimiento medible y resultados concretos
            </p>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/WwFXMDVTwAM"
                title="Propuesta de Valor MetricPress"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elemento Diferenciador */}
      <section id="diferenciador" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Nuestro Elemento Diferenciador: <span className="text-[#00AEEF]">"Puente de Métricas"</span>
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
              Las agencias tradicionales te "venden" visibilidad. Nosotros te entregamos un ecosistema de crecimiento medible.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <CardTitle className="text-white">Trabajamos Periodismo Persuasivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    No escribimos comunicados genéricos. Construimos historias con ángulo periodístico (Impacto, Conflicto, Novedad) que los medios no pueden ignorar.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <CardTitle className="text-white">Cada Mención es Rastreable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Usamos UTM y analítica avanzada para demostrar el ROI exacto (tráfico, leads, conversión) de cada artículo. No más "métricas de vanidad".
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00AEEF] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <CardTitle className="text-white">Fusionamos SEO con PR</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Cada backlink es una palanca de SEO técnico. Optimizamos el Schema, validamos Core Web Vitals y aseguramos que tu cobertura mueva la aguja en Google.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Planes diseñados para tu <span className="text-[#00AEEF]">ciclo de vida</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            3 planes escalables. Cada uno con herramientas de medición integradas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Impulso */}
            <Card className="border-2 border-gray-200 hover:border-[#00AEEF] transition-all">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">PLAN IMPULSO</CardTitle>
                <div className="text-4xl font-bold text-[#00AEEF] mb-2">$799.999</div>
                <CardDescription>CLP + IVA / Pago por Mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Ideal para lanzamientos (3 meses de cobertura intensiva)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Análisis y Validación de (3) Ángulos Noticiosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Desarrollo de (3) Pitchs de Estrategia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Outreach Estratégico a (10) Medios Clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Implementación de Analítica UTM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Entrega de Reporte (s)</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-[#00AEEF] hover:bg-[#0098D4] text-white">
                  Cotizar Ahora
                </Button>
              </CardContent>
            </Card>

            {/* Plan Tractor */}
            <Card className="border-2 border-[#00AEEF] shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00AEEF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                MÁS POPULAR
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">PLAN TRACTOR</CardTitle>
                <div className="text-4xl font-bold text-[#00AEEF] mb-2">$1.000.000</div>
                <CardDescription>CLP + IVA / Pago por Mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Ideal para Pymes que buscan un Sistema Estratégico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>1 Sesión de Estrategia mensual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>3 Ángulos Noticiosos Fundacionales (Pilares de Marca)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>4 Pitches Noticiosos al mes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Outreach Profesional a (20) Medios Clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Validación de Schema (SEO) Continua</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Acceso 24/7 al Dashboard de Impacto y ROI</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-[#00AEEF] hover:bg-[#0098D4] text-white">
                  Cotizar Ahora
                </Button>
              </CardContent>
            </Card>

            {/* Plan Líder */}
            <Card className="border-2 border-gray-200 hover:border-[#00AEEF] transition-all">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">PLAN LÍDER</CardTitle>
                <div className="text-4xl font-bold text-[#00AEEF] mb-2">$1.350.000</div>
                <CardDescription>CLP / Pago por Mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Ideal para Empresas que buscan el Liderazgo de Categoría</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Sello de Validación Editorial Senior (Ex-Director de Medios)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Dos (2) Sesiones de Estrategia al mes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Análisis de Sentimiento en Tiempo Real (Inteligencia 24/7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Briefing Ejecutivo Semanal (Insight Estratégico)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>3 Ángulos Noticiosos Fundacionales (Pilares de Marca)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>4 Pitches Noticiosos al mes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Outreach Profesional a (25) Medios Clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Validación de Schema (SEO) Continua</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00AEEF] mt-1">•</span>
                    <span>Acceso 24/7 al Dashboard de Impacto y ROI</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-[#00AEEF] hover:bg-[#0098D4] text-white">
                  Cotizar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section id="stack" className="py-20 bg-gradient-to-br from-gray-900 via-[#0a1f2f] to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestro <span className="text-[#00AEEF]">Stack Tecnológico</span> Exclusivo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un ecosistema único de microherramientas al servicio de nuestros clientes para transformar la reputación en crecimiento medible
              </p>
            </div>

            {/* 1. Periodismo Estratégico y Pitching */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00AEEF] rounded-lg flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold">Periodismo Estratégico y Pitching</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Generador de Ángulos Noticiosos IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Transforma tu tema en una historia con valor periodístico (Impacto, Conflicto, Novedad) que los medios no puedan ignorar.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Validador de Tono (MetricPress)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Elimina "métricas de vanidad" y "jerga" de tu pitch para alinearlo con el Tono Analista Creíble.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Constructor de Pitch a Periodistas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Ensambla un email de outreach perfecto, combinando tu ángulo y tono en una plantilla de éxito probado.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2. Analítica de Datos y Medición (ROI) */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00AEEF] rounded-lg flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold">Analítica de Datos y Medición (ROI)</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-base">Etiquetador Automático de URLs (UTM)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm">
                      Genera enlaces de seguimiento para medir el ROI exacto de cada artículo de prensa.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-base">Visualizador de Impacto (Mock)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm">
                      Crea un dashboard profesional para demostrar el ROI, CPL y conversión de tu campaña.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-base">Validador de Esquema de Datos (Schema)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm">
                      Optimiza el SEO validando el JSON-LD de tus artículos para mejores Rich Snippets.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-base">Calculadora de Relevancia (DA Proxy)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm">
                      Evalúa la verdadera autoridad de un medio para tu audiencia específica.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 3. Arquitectura, Calidad y Eficiencia */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00AEEF] rounded-lg flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold">Arquitectura, Calidad y Eficiencia</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Validador Básico de Principios SOLID</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Analiza tu código en busca de "code smells" para reducir la deuda técnica y asegurar escalabilidad.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Simulador de Core Web Vitals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Diagnostica la velocidad de tu landing page (LCP, INP, CLS) para optimizar el tráfico de PR.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Generador de Tareas para QA (Matriz)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      Crea un checklist de control de calidad para lanzar nuevas páginas o features sin errores.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 4. Monitoreo y Reputación (ORM) */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00AEEF] rounded-lg flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold">Monitoreo y Reputación (ORM)</h3>
              </div>
              <div className="max-w-2xl mx-auto">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00AEEF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Analizador Rápido de Sentimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base">
                      Diagnostica al instante el tono (Positivo, Neutro, Negativo) de menciones y comentarios para gestionar tu reputación en tiempo real.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 mb-6">
                Este stack exclusivo está disponible para todos nuestros clientes según el plan contratado
              </p>
              <a href="#contacto">
                <Button size="lg" className="bg-[#00AEEF] hover:bg-[#0098D4] text-white">
                  Conoce Más sobre Nuestras Herramientas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa Stack Tradicional vs MetricPress */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#0a1f2f] to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                El Derroche del Stack Reactivo: <br />
                Por Qué Tu Agencia <span className="text-red-500">Quema Dinero</span>
              </h2>
              <p className="text-lg md:text-xl text-[#00AEEF] font-medium max-w-3xl mx-auto">
                Las agencias tradicionales pagan $1,500/mes por herramientas que miden la vanidad.
                <br />
                Nosotros construimos un arsenal proactivo que mide tu crecimiento.
              </p>
            </div>

            {/* Tabla Comparativa */}
            <div className="overflow-x-auto rounded-xl border border-gray-700 bg-gray-800/50">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-gray-800/70 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">Función Estratégica</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">Stack Tradicional (Reactivo y Costoso)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">Arsenal Propietario MetricPress (Proactivo y Eficiente)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Fila 1: Análisis de Reputación */}
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-6 text-left font-bold text-white text-lg border-r border-gray-700 align-top">
                      Análisis de Reputación
                    </th>
                    <td className="px-6 py-6 align-top">
                      <div className="flex items-center gap-2 mb-3 text-red-500 font-bold">
                        <span className="text-xl">⚠️</span>
                        <span>Enfoque: Reactivo</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> Brand24, Mention, Prowly.<br />
                        <strong className="text-white">Métrica:</strong> Métricas de Vanidad (Alcance, Sentimiento Genérico).<br />
                        <strong className="text-white">Acción:</strong> "Escuchar" pasivamente lo que *ya se dijo* y reaccionar a la crisis.
                      </div>
                    </td>
                    <td className="px-6 py-6 bg-[#00AEEF]/10 align-top">
                      <div className="flex items-center gap-2 mb-3 text-[#00AEEF] font-bold">
                        <span className="text-xl">✓</span>
                        <span>Enfoque: Quirúrgico</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramienta:</strong> <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Analizador Rápido de Sentimiento</code><br />
                        <strong className="text-white">Métrica:</strong> Diagnóstico Accionable (Positivo, Neutro, Negativo).<br />
                        <strong className="text-white">Acción:</strong> Analizar *activamente* menciones clave para una respuesta instantánea, sin pagar por ruido.
                      </div>
                    </td>
                  </tr>

                  {/* Fila 2: Impacto SEO & ROI */}
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-6 text-left font-bold text-white text-lg border-r border-gray-700 align-top">
                      Impacto SEO & ROI
                    </th>
                    <td className="px-6 py-6 align-top">
                      <div className="flex items-center gap-2 mb-3 text-red-500 font-bold">
                        <span className="text-xl">⚠️</span>
                        <span>Enfoque: Reporte Genérico</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> Semrush, Ahrefs, Google Analytics.<br />
                        <strong className="text-white">Métrica:</strong> DA Genérico, Visibilidad, Tráfico Referido (sin filtrar).<br />
                        <strong className="text-white">Acción:</strong> Reportar puntajes de vanidad y tráfico total como "éxito".
                      </div>
                    </td>
                    <td className="px-6 py-6 bg-[#00AEEF]/10 align-top">
                      <div className="flex items-center gap-2 mb-3 text-[#00AEEF] font-bold">
                        <span className="text-xl">✓</span>
                        <span>Enfoque: Medición de Impacto</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Etiquetador UTM</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Visualizador de Impacto</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">DA Proxy</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Validador Schema</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Simulador CWV</code>.<br />
                        <strong className="text-white">Métrica:</strong> Leads, CPL, Tasa de Conversión, Calidad del Backlink.<br />
                        <strong className="text-white">Acción:</strong> *Asegurar* la calidad técnica (Schema, CWV) y *demostrar* el ROI (Leads, CPL) de cada nota.
                      </div>
                    </td>
                  </tr>

                  {/* Fila 3: Outreach y Pitching */}
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-6 text-left font-bold text-white text-lg border-r border-gray-700 align-top">
                      Outreach y Pitching
                    </th>
                    <td className="px-6 py-6 align-top">
                      <div className="flex items-center gap-2 mb-3 text-red-500 font-bold">
                        <span className="text-xl">⚠️</span>
                        <span>Enfoque: Logística</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> Hunter.io, HARO, BuzzSumo.<br />
                        <strong className="text-white">Métrica:</strong> Emails enviados, Tendencias encontradas.<br />
                        <strong className="text-white">Acción:</strong> Encontrar contactos y reaccionar a tendencias existentes.
                      </div>
                    </td>
                    <td className="px-6 py-6 bg-[#00AEEF]/10 align-top">
                      <div className="flex items-center gap-2 mb-3 text-[#00AEEF] font-bold">
                        <span className="text-xl">✓</span>
                        <span>Enfoque: Estratégico</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Generador de Ángulos IA</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Validador de Tono</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Constructor de Pitch</code>.<br />
                        <strong className="text-white">Métrica:</strong> Tasa de Respuesta, Calidad de Cobertura.<br />
                        <strong className="text-white">Acción:</strong> *Crear* la noticia, *perfeccionar* el mensaje y *ensamblar* el pitch perfecto para el periodista.
                      </div>
                    </td>
                  </tr>

                  {/* Fila 4: Flujo de Trabajo */}
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-6 text-left font-bold text-white text-lg border-r border-gray-700 align-top">
                      Flujo de Trabajo
                    </th>
                    <td className="px-6 py-6 align-top">
                      <div className="flex items-center gap-2 mb-3 text-red-500 font-bold">
                        <span className="text-xl">⚠️</span>
                        <span>Enfoque: Genérico</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> Asana, Trello, ClickUp.<br />
                        <strong className="text-white">Métrica:</strong> Tareas completadas.<br />
                        <strong className="text-white">Acción:</strong> Gestionar el proyecto de forma general.
                      </div>
                    </td>
                    <td className="px-6 py-6 bg-[#00AEEF]/10 align-top">
                      <div className="flex items-center gap-2 mb-3 text-[#00AEEF] font-bold">
                        <span className="text-xl">✓</span>
                        <span>Enfoque: Especializado</span>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Herramientas:</strong> <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Generador de Tareas QA</code>, <code className="bg-gray-900 text-[#00AEEF] px-2 py-1 rounded text-xs font-semibold">Validador SOLID</code>.<br />
                        <strong className="text-white">Métrica:</strong> Deuda Técnica Reducida, Calidad del Activo Digital.<br />
                        <strong className="text-white">Acción:</strong> Asegurar la calidad *técnica* del entregable (web, app) que el PR está promocionando.
                      </div>
                    </td>
                  </tr>

                  {/* Fila 5: Costo Mensual */}
                  <tr>
                    <th className="px-6 py-6 text-left font-bold text-[#00AEEF] text-xl border-r border-gray-700 align-top">
                      Costo Mensual Estimado
                    </th>
                    <td className="px-6 py-6 align-top">
                      <div className="text-3xl font-bold text-red-500 mb-2">$750 - $1,500 USD</div>
                      <div className="text-sm text-gray-400">(Por herramientas que se usan al 10%)</div>
                    </td>
                    <td className="px-6 py-6 bg-[#00AEEF]/10 align-top">
                      <div className="text-3xl font-bold text-[#00AEEF] mb-2">Incluido en Nuestro Servicio</div>
                      <div className="text-sm text-gray-400">(Pagas por resultados, no por software inflado.)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Resultados reales, medibles y verificables
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-l-4 border-[#00AEEF]">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/logodreamomsrrss.jpg" alt="Dreamoms" className="h-12 w-auto" />
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Trabajar con MetricPress fue un cambio radical. Estábamos acostumbrados a agencias de PR que nos entregaban 'visibilidad' y 'alcance'. MetricPress nos entregó leads calificados. Su metodología de Growth PR es la primera que conecta auténticamente la cobertura mediática con nuestro funnel de ventas."
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4 font-semibold">— Fundadora, Dreamoms</p>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-[#00AEEF]">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/trident-group-chile-logo.png" alt="Trident Group Chile" className="h-12 w-auto" />
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Necesitábamos un socio que entendiera nuestro negocio B2B de nicho, no un proveedor que solo reaccionara a las crisis. El liderazgo y la metodología de MetricPress son proactivos. Su enfoque de 'Analista Creíble' se basa en datos, no en promesas vagas."
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4 font-semibold">— Director Ejecutivo, Trident Group Chile</p>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-[#00AEEF]">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/xtreme.clean.png" alt="Xtreme Clean" className="h-12 w-auto" />
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Como agencia digital, valoramos la precisión. El enfoque de MetricPress es único porque entienden que el Growth PR es una palanca de SEO técnico. A diferencia de otros, no buscan cualquier mención; buscan el backlink de autoridad que mueva la aguja."
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4 font-semibold">— Gerente de Crecimiento, Xtreme Clean</p>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-[#00AEEF]">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/cuoco-pazzo.jpg" alt="Cuoco Pazzo" className="h-12 w-auto" />
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "Francamente, éramos escépticos del PR tradicional; parecía un derroche en métricas de vanidad. MetricPress cambió nuestra perspectiva. Nos demostraron que el PR puede tener un ROI claro. Cada mes, su 'Visualizador de Impacto' nos mostraba el CPL de esa cobertura."
                </CardDescription>
                <p className="text-sm text-gray-500 mt-4 font-semibold">— CEO, Cuoco Pazzo</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Director */}
      <section id="director" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Conoce a nuestro <span className="text-[#00AEEF]">Director</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/el-mero.png" 
                  alt="Cristian Jofré Donoso" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Cristian Jofré Donoso
                </h3>
                <p className="text-xl text-[#00AEEF] font-semibold mb-6">
                  Fundador y Director
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Con más de una década de experiencia fusionando periodismo estratégico con analítica de datos, Cristian ha liderado campañas de Growth PR para empresas B2B y B2C en toda Latinoamérica.
                  </p>
                  <p>
                    Su visión: transformar el PR tradicional en una palanca de crecimiento medible, donde cada mención se convierte en un activo de negocio rastreable.
                  </p>
                  <p className="font-semibold text-[#00AEEF]">
                    "No vendemos visibilidad. Entregamos crecimiento que puedes medir en tu dashboard."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#00AEEF]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Conversemos sobre tu <span className="text-[#00AEEF]">crecimiento</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Agenda una reunión estratégica sin compromiso
            </p>

            <Card className="border-2 border-[#00AEEF]/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email corporativo *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="w-full"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <Input
                      id="empresa"
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      className="w-full"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Cuéntanos tu desafío
                    </label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className="w-full min-h-[120px]"
                      placeholder="¿Qué objetivo de crecimiento quieres alcanzar?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00AEEF] hover:bg-[#0098D4] text-white text-lg py-6"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/logo-metricpress-peso-optimo.png" 
                alt="MetricPress" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400">
                Agencia Growth PR & Reputación Digital
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-[#00AEEF]">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.metricpress.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.metricpress.cl
                  </a>
                </li>
                <li>
                  <a href="mailto:contacto@metricpress.cl" className="hover:text-white transition-colors">
                    contacto@metricpress.cl
                  </a>
                </li>
                <li>
                  <a href="tel:+56985678296" className="hover:text-white transition-colors">
                    +56 9 8567 8296
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-[#00AEEF]">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/faq-metricpress.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    FAQ - Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="/aviso-legal.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a href="/terminos-y-condiciones.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="/politicas-de-privacidad.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Políticas de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/politicas-de-cookies.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Políticas de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left text-gray-400">
                <p>&copy; 2025 MetricPress. Todos los derechos reservados.</p>
                <p className="mt-2 text-sm">Convertimos tu reputación en crecimiento medible.</p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Comparte:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0077B5] flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label="Compartir en LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Conoce MetricPress - Agencia Growth PR & Reputación Digital')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1DA1F2] flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label="Compartir en Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label="Compartir en Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
