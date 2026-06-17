import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Ayurvedic Doctor in Telangana',
  description: 'Meet the Ayurvedic specialist behind Sri Jayanthi Wellbeing, serving patients across Telangana with authentic Panchakarma and classical Ayurvedic care.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-forest mb-4">About</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            The people and the purpose behind Sri Jayanthi Wellbeing.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="w-full aspect-[3/4] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-forest/30">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs">Doctor Photo</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-2">Dr. [Founder Name]</h2>
              <p className="text-sm text-gold font-medium mb-6">BAMS, MD (Ayurveda) | Panchakarma Specialist</p>
              <div className="space-y-4 text-sm text-forest/70 leading-relaxed">
                <p>
                  I have been practicing Ayurveda for over 15 years now. My training started in a traditional gurukul setting 
                  and was solidified by years of clinical work in both government hospitals and private practice.
                </p>
                <p>
                  I specialize in Panchakarma and musculoskeletal disorders — mainly because I saw too many people 
                  suffering from back pain and being told surgery was the only option. It rarely is.
                </p>
                <p>
                  My approach is conversational. I explain your condition, the treatment plan, and what you can realistically expect. 
                  No miracles. No guarantees. Just solid medicine applied with care.
                </p>
              </div>
              <div className="mt-6 p-5 bg-gray-50 border-l-4 border-forest">
                <p className="text-base text-forest/90 leading-relaxed font-medium">
                  We don't just treat — we teach you to heal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img src="/Logo-Final-Version.png" alt="" className="w-20 h-auto opacity-40" />
          </div>
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-4">Our Mission</h2>
          <p className="text-forest/70 leading-relaxed">
            To make authentic Ayurvedic healthcare accessible, honest, and effective. 
            We believe that true wellness comes from understanding your own body, not depending on a doctor forever. 
            Our job is to guide you back to balance — and then teach you how to stay there.
          </p>
        </div>
      </section>

      {/* Clinic Origin */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl font-bold text-forest mb-6">How the Clinic Started</h2>
          <div className="space-y-4 text-sm text-forest/70 leading-relaxed">
            <p>
              Sri Jayanthi began as a small consultation room in 2009. I had just completed my post-graduation and wanted 
              a space where I could practice without rushing through patients.
            </p>
            <p>
              Word spread slowly. A farmer with chronic knee pain walked in, and walked out pain-free after two weeks. 
              A teacher with psoriasis found relief after years of steroid creams. They told their families. Their families told others.
            </p>
            <p>
              Today we have a full Panchakarma unit, a pharmacy, and a team of therapists and assistants. 
              But the core remains the same: one patient at a time, one honest conversation at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl font-bold text-forest mb-8 text-center">The Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: 'Ayurvedic Doctor', desc: 'Patient consultations, diagnosis, and treatment planning.' },
              { role: 'Panchakarma Therapist', desc: 'Classical procedure execution and post-treatment care.' },
              { role: 'Pharmacy Assistant', desc: 'Medicine preparation, dispensing, and inventory.' },
            ].map((member, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4 text-forest font-sans font-bold text-xl">
                  {member.role[0]}
                </div>
                <h3 className="font-sans text-lg font-semibold text-forest mb-2">{member.role}</h3>
                <p className="text-sm text-forest/60">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
