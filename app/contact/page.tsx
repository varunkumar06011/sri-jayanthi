import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — Sri Jayanthi Wellbeing',
  description: 'Get in touch with Sri Jayanthi Wellbeing for consultations, appointments, and enquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-forest mb-4">Contact Us</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            We are here to help you begin your journey towards holistic health and wellbeing.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="p-6 md:p-8 paper-card text-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 text-forest">
                <Phone size={22} />
              </div>
              <h2 className="font-sans text-lg font-semibold text-forest mb-2">Phone</h2>
              <a href="tel:+919177816622" className="text-forest/70 hover:text-gold transition-colors">
                +91 91778 16622
              </a>
            </div>

            {/* Email */}
            <div className="p-6 md:p-8 paper-card text-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 text-forest">
                <Mail size={22} />
              </div>
              <h2 className="font-sans text-lg font-semibold text-forest mb-2">Email</h2>
              <a href="mailto:srijayanthiwellbeing@gmail.com" className="text-forest/70 hover:text-gold transition-colors">
                srijayanthiwellbeing@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="p-6 md:p-8 paper-card text-center">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 text-forest">
                <MapPin size={22} />
              </div>
              <h2 className="font-sans text-lg font-semibold text-forest mb-2">Address</h2>
              <address className="not-italic text-sm text-forest/70 leading-relaxed">
                Sri Jayanthi Wellbeing LLP<br />
                16-2-751/91, H. No: B-34<br />
                State Bank Colony<br />
                Saidabad<br />
                Hyderabad – 500059
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Timings */}
      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 text-forest">
              <Clock size={22} />
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-3">Consultations: Timings and Fee</h2>
            <p className="text-sm text-gold font-medium">Dr. Srujana Komatreddy</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-forest">Timings</p>
                <p className="text-sm text-forest/70">
                  Monday to Sunday: 10am to 2pm and 5pm to 7pm. Please note that schedule may vary based on Doctor’s availability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold shrink-0">₹</span>
              <div>
                <p className="text-sm font-semibold text-forest">Consultation Fees</p>
                <p className="text-sm text-forest/70">Rs. 500/- INR</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold shrink-0">₹</span>
              <div>
                <p className="text-sm font-semibold text-forest">Online Consultation / Wellness Counselling Fees</p>
                <p className="text-sm text-forest/70">Rs. 1000/- INR</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-forest">Overseas Consultation</p>
                <p className="text-sm text-forest/70">Other than the regular timings — On Request</p>
              </div>
            </div>
            <div className="p-4 bg-forest/5 rounded-lg">
              <p className="text-sm text-forest font-semibold text-center">
                * Consultations are strictly based on Prior Appointment Only *
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-100 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-cream mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Prior appointment is mandatory for consultations. Reach out to us on WhatsApp or call us to schedule your visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919177816622?text=Hi, I'd like to book a consultation appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-cream font-medium rounded-sm hover:bg-cream hover:text-forest transition-colors"
            >
              Book on WhatsApp
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+919177816622"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
