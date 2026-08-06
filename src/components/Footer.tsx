/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, ShieldCheck, Truck, FileText, X, CheckCircle2, AlertTriangle, MapPin, RefreshCw, Clock, Phone, FileCheck, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  onNavigateShop: () => void;
}

type PolicyType = 'garantia' | 'envios' | 'devoluciones' | 'terminos' | 'privacidad' | null;

export default function Footer({ onNavigateShop }: FooterProps) {
  const [activeModal, setActiveModal] = useState<PolicyType>(null);
  const [showConsentBanner, setShowConsentBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted data treatment & terms
    const accepted = localStorage.getItem('marfami_terms_accepted');
    if (!accepted) {
      // Delay slightly for smooth entrance after load
      const timer = setTimeout(() => setShowConsentBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('marfami_terms_accepted', 'true');
    setShowConsentBanner(false);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-brand-navy text-gray-300 pb-16 md:pb-0 relative overflow-hidden">
        {/* Subtle decorative glow effect */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Acerca de MarFami */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue font-heading">
                Acerca de MarFami
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={onNavigateShop}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Nuestra Tienda</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('garantia')}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left text-gray-300"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Garantía de Calidad</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Atención al Cliente */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue font-heading">
                Atención al Cliente
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://wa.me/573042564311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Contacto directo WhatsApp</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('devoluciones')}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left text-gray-300"
                  >
                    <RefreshCw className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Política de Devolución y Garantías</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('envios')}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left text-gray-300"
                  >
                    <Truck className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Envíos y Servicio a Domicilio</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue font-heading">
                Legal y Políticas
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setActiveModal('terminos')}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left text-gray-300"
                  >
                    <FileText className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Términos y Condiciones</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('privacidad')}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left text-gray-300"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Tratamiento de Datos (Habeas Data)</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Síguenos */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue font-heading">
                Síguenos
              </h4>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/marfamishop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#e1306c] hover:border-[#e1306c] transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@marfamishop?_r=1&_t=ZS-97jXK9KdBlV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  title="TikTok"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/miguel.angelsoto.731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573042564311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25d366] hover:border-[#25d366] transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  title="WhatsApp"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-50 font-medium pt-1">
                Lo que buscas, lo que te encanta.
              </p>
            </div>

          </div>

        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} <strong className="text-white font-semibold">MarFami</strong>. Jamundí, Valle del Cauca. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-1.5 justify-center">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 inline" />
              <span>Tratamiento de Datos protegido bajo Ley 1581 de 2012</span>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING CONSENT / TERMS ACCEPTANCE BANNER */}
      <AnimatePresence>
        {showConsentBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-brand-navy/95 backdrop-blur-md border border-white/15 text-white p-5 rounded-2xl shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-brand-blue/20 text-brand-blue rounded-xl shrink-0 mt-0.5 border border-brand-blue/30">
                <FileCheck className="h-5 w-5" />
              </div>
              <div className="space-y-2 text-xs text-gray-200">
                <h5 className="font-bold text-white text-sm font-heading flex items-center justify-between">
                  <span>Términos y Tratamiento de Datos</span>
                  <button 
                    onClick={handleAcceptTerms} 
                    className="text-gray-400 hover:text-white transition cursor-pointer p-0.5"
                    title="Cerrar aviso"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </h5>
                <p className="leading-relaxed">
                  En <strong>MarFami</strong> tratamos tus datos personales conforme a la <strong>Ley 1581 de 2012 (Habeas Data)</strong> para procesar tus pedidos y envíos. Al navegar en nuestro sitio, aceptas nuestros términos legales.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={handleAcceptTerms}
                    className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-xl transition cursor-pointer shadow-md text-xs"
                  >
                    Aceptar y Continuar
                  </button>
                  <button
                    onClick={() => setActiveModal('terminos')}
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white rounded-xl transition text-xs cursor-pointer border border-white/10"
                  >
                    Ver Términos
                  </button>
                  <button
                    onClick={() => setActiveModal('privacidad')}
                    className="px-3 py-2 text-gray-300 hover:text-white underline text-xs cursor-pointer"
                  >
                    Política de Datos
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POLICY MODALS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[85vh] flex flex-col border border-gray-100"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-linear-to-r from-brand-navy via-brand-navy to-brand-blue text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                    {activeModal === 'garantia' && <ShieldCheck className="h-6 w-6 text-brand-blue" />}
                    {activeModal === 'envios' && <Truck className="h-6 w-6 text-brand-blue" />}
                    {activeModal === 'devoluciones' && <RefreshCw className="h-6 w-6 text-brand-blue" />}
                    {activeModal === 'terminos' && <FileText className="h-6 w-6 text-brand-blue" />}
                    {activeModal === 'privacidad' && <ShieldCheck className="h-6 w-6 text-brand-blue" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading">
                      {activeModal === 'garantia' && 'Políticas de Garantía de Calidad'}
                      {activeModal === 'envios' && 'Envíos y Servicio a Domicilio'}
                      {activeModal === 'devoluciones' && 'Política de Devoluciones y Garantías'}
                      {activeModal === 'terminos' && 'Términos y Condiciones de Uso'}
                      {activeModal === 'privacidad' && 'Tratamiento de Datos Personales'}
                    </h3>
                    <p className="text-xs text-gray-300">MarFami • Jamundí, Valle del Cauca</p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm leading-relaxed">
                
                {/* 1. POLÍTICA DE GARANTÍA DE CALIDAD */}
                {activeModal === 'garantia' && (
                  <>
                    <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Cobertura de Garantía</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          Aplica exclusivamente a defectos de fabricación o fallas técnicas en el funcionamiento normal del producto.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 text-brand-navy font-bold text-xs uppercase mb-2">
                          <Clock className="h-4 w-4 text-brand-purple" />
                          <span>Duración General</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          <strong>1 mes (30 días)</strong> a partir de la fecha de compra, presentando comprobante de pago.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 text-brand-navy font-bold text-xs uppercase mb-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span>Solución Garantizada</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          En caso de aprobación: <strong>reparación sin costo</strong> o <strong>reemplazo del producto</strong> (según disponibilidad).
                        </p>
                      </div>
                    </div>

                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">Servicio a Domicilio</h4>
                        <p className="text-xs text-emerald-800 mt-1">
                          Ofrecemos servicio a domicilio en la ciudad de <strong>Cali y Jamundí</strong>, con modalidad de <strong>Pago Contra Entrega</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span>Exclusiones de Garantía</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600 bg-amber-50/50 border border-amber-100 rounded-2xl p-4">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>Daños por mal uso, golpes, caídas o exposición a líquidos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>Manipulación indebida, reparaciones realizadas por terceros o modificaciones no autorizadas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>Desgaste natural de piezas como cables, conectores o baterías recargables.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2 border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Procedimiento de Reclamación</h4>
                      <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-600 pl-1">
                        <li>Presentar el producto junto con la factura o comprobante de compra.</li>
                        <li>Evaluación técnica por nuestro equipo para determinar si aplica la garantía.</li>
                        <li>En caso de aprobación: reparación sin costo o reemplazo del producto (según disponibilidad).</li>
                      </ol>
                    </div>
                  </>
                )}

                {/* 2. ENVÍOS Y ENTREGAS */}
                {activeModal === 'envios' && (
                  <>
                    <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                      <Truck className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Envíos y Entregas - MarFami</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          En MarFami enviamos tus productos con todo el cuidado desde <strong>Jamundí, Valle del Cauca</strong> para que lleguen de forma rápida y segura hasta la puerta de tu casa.
                        </p>
                      </div>
                    </div>

                    {/* 1. Costos y Promociones */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider flex items-center gap-2">
                        <span>1. Costo del Envío y Promociones</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                          <p className="font-bold text-emerald-900 mb-1">¡Envío GRATIS!</p>
                          <p className="text-emerald-800">
                            Disfruta de envío sin costo a nivel nacional por compras superiores a <strong>$500.000 COP</strong>.
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                          <p className="font-bold text-brand-navy mb-1">Tarifa Estándar</p>
                          <p className="text-gray-600">
                            Para compras inferiores a $500.000 COP, el costo del envío se calculará automáticamente en la pantalla de pago según el destino y peso del pedido.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. Pago Contra Entrega */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider flex items-center gap-2">
                        <span>2. Servicio de Pago Contra Entrega 🚚💰</span>
                      </h4>
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2 text-xs text-gray-600">
                        <p>
                          <strong className="text-brand-navy">Cobertura Exclusiva:</strong> Contamos con opción de Pago Contra Entrega únicamente para las ciudades de <strong>Cali y Jamundí</strong>. Recibes tu pedido en la puerta de tu casa y pagas en efectivo o transferencia al momento de la entrega.
                        </p>
                        <p>
                          <strong className="text-brand-navy">Resto del País:</strong> Para envíos a otras ciudades de Colombia, los pedidos deben estar previamente pagados a través de nuestros medios de pago en la página web.
                        </p>
                      </div>
                    </div>

                    {/* 3. Tiempos de Entrega */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-purple" />
                        <span>3. Tiempos de Entrega y Despacho</span>
                      </h4>
                      <p className="text-xs text-gray-500 italic">
                        Los tiempos de entrega cuentan a partir de la confirmación de tu pedido o pago:
                      </p>
                      <ul className="space-y-2 text-xs text-gray-600 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-blue font-bold">•</span>
                          <span><strong>Cali y Jamundí:</strong> De 1 a 2 días hábiles (o entrega el mismo día para pedidos confirmados en la mañana).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-blue font-bold">•</span>
                          <span><strong>Otras ciudades principales:</strong> De 2 a 4 días hábiles.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-blue font-bold">•</span>
                          <span><strong>Municipios y reexpediciones:</strong> De 3 a 6 días hábiles.</span>
                        </li>
                      </ul>
                      <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-3.5 text-xs text-amber-900">
                        <strong>Horario de Despacho:</strong> Los pedidos confirmados antes de la 1:00 p.m. de Lunes a Viernes se entregan a la transportadora el mismo día. Los pedidos del fin de semana o festivos se procesan al siguiente día hábil.
                      </div>
                    </div>

                    {/* 4. Seguimiento */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">4. Seguimiento de tu Pedido</h4>
                      <p className="text-xs text-gray-600">
                        Apenas tu paquete salga de nuestra sede en Jamundí, te enviaremos un mensaje por WhatsApp con:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 pl-2">
                        <li>Nombre de la empresa de mensajería.</li>
                        <li>Número de guía.</li>
                        <li>Enlace para rastrear el recorrido de tu paquete en tiempo real.</li>
                      </ul>
                    </div>

                    {/* 5. Recomendaciones */}
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">5. Recomendaciones de Entrega</h4>
                      <ul className="space-y-2 text-xs text-gray-600 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Verifica que la dirección registrada esté completa (número de casa, apartamento, torre o barrio).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Revisa que el paquete esté bien sellado al recibirlo. Si notas alguna alteración en la caja o sobre, tómale una foto antes de abrirlo y escríbenos de inmediato.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-xs text-emerald-900 space-y-1">
                      <p className="font-bold">¿Necesitas ayuda con un envío?</p>
                      <p>Estamos listos para atenderte y resolver cualquier duda:</p>
                      <p>• <strong>WhatsApp de Atención:</strong> +57 304 256 4311</p>
                      <p>• <strong>Atención al Cliente:</strong> Lunes a Sábado de 8:00 a.m. a 6:00 p.m.</p>
                    </div>
                  </>
                )}

                {/* 3. POLÍTICA DE DEVOLUCIONES Y GARANTÍAS */}
                {activeModal === 'devoluciones' && (
                  <>
                    <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-start gap-3">
                      <RefreshCw className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Política de Devoluciones y Garantías de MarFami</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          En MarFami nos esforzamos por ofrecerte productos de la mejor calidad. Si por alguna razón necesitas realizar un cambio, devolución o hacer efectiva una garantía, aquí te explicamos el paso a paso de forma clara y transparente.
                        </p>
                      </div>
                    </div>

                    {/* 1. Plazos de Solicitud */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-purple" />
                        <span>1. Plazos de Solicitud</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-600 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">•</span>
                          <span><strong>Derecho de retracto / Arrepentimiento:</strong> Dispones de <strong>5 días hábiles</strong> tras recibir tu pedido para devolverlo y solicitar el reembolso total de tu dinero.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">•</span>
                          <span><strong>Cambios por satisfacción (modelo, color u opción de preferencia):</strong> Tienes hasta <strong>15 días calendario</strong> desde la entrega de tu paquete para solicitar un cambio.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">•</span>
                          <div>
                            <strong>Garantía por defectos de fábrica:</strong>
                            <ul className="list-disc list-inside mt-1 pl-2 space-y-1 text-gray-600">
                              <li><strong>Productos de tecnología y artículos de hogar con componentes electrónicos:</strong> 30 días calendario de garantía por fallas de funcionamiento.</li>
                              <li><strong>Peluches y artículos para el hogar sin componentes electrónicos:</strong> 15 días calendario.</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* 2. Condiciones para Aceptar una Devolución */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">2. Condiciones para Aceptar una Devolución</h4>
                      <p className="text-xs text-gray-500">
                        Para hacer efectivo cualquier cambio, devolución o reembolso, el producto debe cumplir con lo siguiente:
                      </p>
                      <ul className="space-y-2 text-xs text-gray-600 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Conservar su estado original, sin señales de uso, desgaste, lavado o manipulación indebida.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Mantener sus etiquetas, accesorios y empaques originales en buen estado.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Contar con el comprobante o número de pedido.</span>
                        </li>
                      </ul>

                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-2.5">
                        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-amber-950">⚠️ Excepción de Seguridad e Higiene:</strong>
                          <p className="mt-1">
                            Por motivos de salud y cuidado personal, los productos de belleza <strong>NO tienen cambio ni devolución si sus sellos de seguridad o empaques han sido abiertos</strong>, salvo que presenten un defecto comprobado de fábrica.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3. Costos de Envío */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">3. Costos de Envío</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                          <p className="font-bold text-brand-navy mb-1">Por cambio de opinión o arrepentimiento</p>
                          <p className="text-gray-600">
                            El cliente asumirá la totalidad de los costos de envío necesarios para devolver el producto y despachar el reemplazo.
                          </p>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                          <p className="font-bold text-emerald-900 mb-1">Por producto defectuoso o error en el envío</p>
                          <p className="text-emerald-800">
                            <strong>MarFami asumirá el 100%</strong> de los costos de transporte.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 4. Reembolsos de Dinero */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">4. Reembolsos de Dinero</h4>
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-xs text-gray-600">
                        Una vez recibido e inspeccionado el producto en nuestras instalaciones, procesaremos el reembolso de tu dinero directamente a tu cuenta bancaria en un plazo de <strong>5 a 8 días hábiles</strong>.
                      </div>
                    </div>

                    {/* 5. ¿Cómo Iniciar el Proceso? */}
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">5. ¿Cómo Iniciar el Proceso?</h4>
                      <p className="text-xs text-gray-600">
                        Para gestionar cualquier devolución o garantía, comunícate directamente con nuestro equipo de atención:
                      </p>
                      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-xs text-emerald-900 space-y-1.5">
                        <p className="flex items-center gap-2 font-bold">
                          <Phone className="h-4 w-4 text-emerald-600" />
                          <span>WhatsApp de Atención al Cliente: +57 304 256 4311</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-emerald-600" />
                          <span>Horarios de Atención: Lunes a Sábado de 8:00 a.m. a 6:00 p.m.</span>
                        </p>
                        <p className="pt-1 text-emerald-800 italic">
                          Al escribirnos, por favor incluye tu número de pedido, fotos o videos del producto (en caso de fallas) y una breve explicación de tu solicitud.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* 4. TÉRMINOS Y CONDICIONES DE USO */}
                {activeModal === 'terminos' && (
                  <>
                    <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                      <FileText className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Términos y Condiciones de Uso - MarFami</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          Bienvenido al sitio web de MarFami. Al acceder, navegar o realizar compras en nuestra plataforma web, aceptas quedar vinculado por los siguientes Términos y Condiciones. Te aconsejamos leerlos detenidamente antes de realizar cualquier transacción.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-xs text-gray-600">
                      {/* 1 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">1. Información General del Negocio</h5>
                        <ul className="list-disc list-inside space-y-1 pt-1">
                          <li><strong>Nombre comercial:</strong> MarFami</li>
                          <li><strong>Ubicación principal:</strong> Jamundí, Valle del Cauca, Colombia</li>
                          <li><strong>Canal de contacto oficial:</strong> WhatsApp +57 304 256 4311</li>
                          <li><strong>Categorías de comercialización:</strong> Peluches, productos de belleza y cuidado personal, artículos para el hogar y tecnología.</li>
                        </ul>
                      </div>

                      {/* 2 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">2. Uso del Sitio Web y Capacidad Legal</h5>
                        <p>
                          Para realizar compras en MarFami, el usuario declara ser mayor de edad (18 años o más) y contar con la capacidad legal para contratar. Si eres menor de edad, debes realizar tus compras bajo la supervisión de un padre o tutor legal.
                        </p>
                        <p>
                          El usuario se compromete a proporcionar información verdadera, precisa y actualizada al momento de realizar un pedido o registro.
                        </p>
                      </div>

                      {/* 3 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">3. Precios, Inventario y Promociones</h5>
                        <p>
                          <strong>Precios:</strong> Todos los precios publicados en el sitio web están expresados en pesos colombianos ($ COP) e incluyen los impuestos aplicables.
                        </p>
                        <p>
                          <strong>Disponibilidad de Inventario:</strong> Los productos están sujetos a disponibilidad de stock. En caso de que un producto no se encuentre disponible tras realizar la compra, nos pondremos en contacto de inmediato para coordinar el cambio de artículo o la devolución del dinero.
                        </p>
                        <p>
                          <strong>Ajuste de precios:</strong> MarFami se reserva el derecho de modificar los precios, promociones o especificaciones de los productos en cualquier momento sin previo aviso.
                        </p>
                      </div>

                      {/* 4 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">4. Métodos de Pago</h5>
                        <p>Aceptamos pagos a través de los siguientes canales habilitados en nuestra web:</p>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          <li>Pasarelas de pago electrónicas (tarjetas de crédito, débito PSE, transferencias).</li>
                          <li><strong>Pago Contra Entrega:</strong> Aplica únicamente para las zonas urbanas de las ciudades de Cali y Jamundí en dinero en efectivo o transferencia confirmada al momento de la entrega.</li>
                        </ul>
                      </div>

                      {/* 5 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">5. Envíos y Políticas de Devolución</h5>
                        <p>
                          Las condiciones de despacho, tiempos de entrega, cobros de flete, así como el trámite de garantías, retractos y devoluciones se rigen estrictamente por nuestras páginas e informaciones independientes de Política de Envíos y Entregas, y Política de Devoluciones y Garantías.
                        </p>
                      </div>

                      {/* 6 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">6. Productos y Garantías Específicas</h5>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          <li><strong>Tecnología y Hogar (Electrónicos):</strong> Cuentan con 30 días de garantía por fallas de fabricación. La garantía se invalida por mal uso, golpes, humedad o manipulaciones no autorizadas.</li>
                          <li><strong>Belleza y Cuidado Personal:</strong> Por normas higiénico-sanitarias, no aceptamos cambios ni devoluciones de productos cuyo empaque o sello de seguridad haya sido abierto, salvo fallas comprobadas de fábrica.</li>
                          <li><strong>Peluches y Hogar (No Electrónicos):</strong> Cuentan con 15 días de garantía por defectos de costura o materiales.</li>
                        </ul>
                      </div>

                      {/* 7 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">7. Propiedad Intelectual</h5>
                        <p>
                          Todo el contenido presente en este sitio web, incluyendo imágenes de productos, logotipos, textos, diseños, gráficos y marcas registradas, es propiedad de MarFami o cuenta con la debida autorización de uso. Queda estrictamente prohibida su copia, reproducción o distribución sin autorización previa por escrito.
                        </p>
                      </div>

                      {/* 8 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                        <h5 className="font-bold text-brand-navy uppercase">8. Protección y Tratamiento de Datos Personales</h5>
                        <p>
                          En cumplimiento de la Ley 1581 de 2012 de Habeas Data, los datos personales recolectados a través de nuestro sitio web (nombre, dirección, teléfono, cédula y correo) serán utilizados exclusivamente para la gestión de envíos, facturación y atención al cliente. MarFami no venderá ni compartirá tus datos con terceros para fines ajenos a la transacción comercial.
                        </p>
                      </div>

                      {/* 9 & 10 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                          <h5 className="font-bold text-brand-navy uppercase">9. Modificaciones</h5>
                          <p>
                            MarFami se reserva el derecho de actualizar o cambiar estos Términos y Condiciones en cualquier momento con efecto inmediato a partir de su publicación.
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-1">
                          <h5 className="font-bold text-brand-navy uppercase">10. Ley Aplicable</h5>
                          <p>
                            Estos Términos y Condiciones se rigen e interpretan bajo las leyes de la República de Colombia.
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-xs text-emerald-900 flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold">¿Tienes preguntas sobre nuestros Términos?</p>
                          <p>Escríbenos directamente a nuestra línea de atención: WhatsApp +57 304 256 4311</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* 5. POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES (HABEAS DATA) */}
                {activeModal === 'privacidad' && (
                  <>
                    <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-navy text-xs uppercase tracking-wider">Protección y Tratamiento de Datos Personales</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          En cumplimiento de la <strong>Ley 1581 de 2012 de Habeas Data</strong> y decretos reglamentarios en Colombia, MarFami garantiza la reserva, seguridad y correcto uso de tus datos.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-xs text-gray-600">
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
                        <h5 className="font-bold text-brand-navy uppercase">Responsable del Tratamiento</h5>
                        <p>
                          <strong>MarFami</strong>, ubicada en Jamundí, Valle del Cauca, Colombia. Canal de atención oficial WhatsApp: <strong>+57 304 256 4311</strong>.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
                        <h5 className="font-bold text-brand-navy uppercase">Datos Recolectados y Finalidad</h5>
                        <p>
                          Los datos de contacto y facturación (nombre completo, número de cédula, teléfono celular/WhatsApp, dirección de residencia o entrega y correo electrónico) son recolectados exclusivamente para:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-1">
                          <li>Procesar, despachar y entregar tus compras físicas o digitales.</li>
                          <li>Emitir comprobantes y facturación de la transacción comercial.</li>
                          <li>Ofrecer soporte de posventa, confirmación de envíos y atención de garantías o devoluciones.</li>
                        </ul>
                      </div>

                      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-emerald-900 space-y-2">
                        <h5 className="font-bold uppercase">Garantía de Confidencialidad</h5>
                        <p>
                          MarFami <strong>no vende, alquila ni comparte</strong> tus datos personales con terceros para fines publicitarios externos o ajenos a la prestación directa del servicio solicitado.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
                        <h5 className="font-bold text-brand-navy uppercase">Derechos del Titular (Habeas Data)</h5>
                        <p>
                          Como titular de la información tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tus datos en cualquier momento escribiendo a nuestra línea oficial de WhatsApp (+57 304 256 4311).
                        </p>
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
                <a
                  href="https://wa.me/573042564311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition"
                >
                  <Phone className="h-4 w-4" />
                  <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
                </a>

                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs transition cursor-pointer shadow-sm"
                >
                  Entendido
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

