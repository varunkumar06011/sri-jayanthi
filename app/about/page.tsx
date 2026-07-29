import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Sri Jayanthi Wellbeing',
  description: 'Learn about Sri Jayanthi Wellbeing, our team of experienced Ayurvedic professionals and our commitment to authentic Ayurvedic healthcare.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <section className="py-12 md:py-20 border-b border-gray-100 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-2xl md:text-3xl font-bold text-forest mb-3">About Us</h1>
          <p className="font-semibold text-forest/70 max-w-2xl mx-auto">
            Rooted in ancient wisdom, guided by experience and committed to holistic wellbeing.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-sm md:text-base text-forest/80 leading-relaxed text-left">
            <p>
              Sri Jayanthi Wellbeing has been established with the belief that true health is achieved when the Physical, Mental health and Social wellbeing exist in perfect harmony. Guided by the timeless proven wisdom of Ayurveda, we are dedicated to offering authentic healing experiences that nurture wellness, restore balance and inspire a healthier way of living.
            </p>
            <p>
              Founded with the vision of making Ayurveda accessible for overall wellbeing of all, Sri Jayanthi combines traditional healing practices with personalised care in a serene and compassionate environment. Our services include Ayurvedic consultations, Panchakarma therapies at our clinics, wellness counselling and preventive healthcare programmes, each tailored to the unique constitution and health goals of every individual.
            </p>
            <p>
              Our journey is inspired by Ayurvedic knowledge that renders best practices and medicines for healthy living, few decades of Clinical excellence and Learnings from the legacy of distinguished practitioners in the field. This rich heritage guides every aspect of our practice, enabling us to offer holistic solutions for preventive care, chronic health concerns, lifestyle disorders and long term wellbeing.
            </p>
            <p>
              Complementing our clinical services coupled with extensive experience in Clinical Research, is our dedicated Ayurvedic pharmacy, where Classical, Proprietary formulations and Wellness Products are manufactured with uncompromising attention to authenticity, purity and quality in a GMP certified facility. We carefully source premium raw material required and follow methods per Ayurveda literature, supported by rigorous quality standards, to preserve the natural potency and therapeutic value of every medicine or supplement.
            </p>
            <p>
              Our formulations are designed to strengthen immunity, rejuvenate the body, enhance vitality and support the management of a wide range of health conditions, from common ailments to intractable non-communicable disorders. Every formula reflects our commitment to delivering the true benefits of Ayurveda with integrity and excellence.
            </p>
            <p className="font-semibold text-forest">
              At Sri Jayanthi Wellbeing, our purpose is to help every individual embrace a life of balance, vitality and holistic wellbeing through the transformative power of authentic Ayurveda.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-forest mb-3">Our Team</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dr. Srujana Komatreddy */}
            <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest font-sans font-bold text-2xl">
                  S
                </div>
                <div>
                  <h3 className="font-sans text-xl font-semibold text-forest">Dr. Srujana Komatreddy</h3>
                  <p className="text-sm text-gold font-bold">Managing Partner and Ayurveda Physician</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-forest/80 leading-relaxed">
                <p>
                  Dr. Srujana Reddy is a seasoned healthcare leader with over two decades of experience spanning Ayurveda Medicine, Clinical Research, Drug Development and Hospital Management. She has successfully led large scale global healthcare and clinical research initiatives, building and mentoring high-performing multidisciplinary teams while ensuring excellence in quality, governance and compliance with international regulatory standards.
                </p>
                <p>
                  With a unique blend of expertise in modern drug development and the timeless principles of Ayurveda, Her vision is to establish a globally trusted Ayurvedic wellbeing enterprise that delivers authentic wellness solutions rooted in the principles of holistic health.
                </p>
                <p>
                  As Managing Partner, she is dedicated to advancing preventive healthcare, empowering individuals and communities through education and fostering strategic collaborations that drive innovation, business growth and meaningful social impact.
                </p>
              </div>
            </div>

            {/* Sri K. Sanjeeva Reddy */}
            <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest font-sans font-bold text-2xl">
                  K
                </div>
                <div>
                  <h3 className="font-sans text-xl font-semibold text-forest">Sri K. Sanjeeva Reddy</h3>
                  <p className="text-sm text-gold font-bold">Partner</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-forest/80 leading-relaxed">
                <p>
                  Mr. Reddy brings over five decades of distinguished professional experience spanning banking, finance and organizational leadership. He served with distinction in the banking industry for nearly four decades, retiring as a Top Management Executive from a leading Public Sector Bank. He subsequently spent more than a decade as Senior General Manager, Finance at a reputed Microfinance Organization, where he continued to contribute through strategic financial leadership and governance.
                </p>
                <p>
                  Mr. Reddy brings this rich experience, strategic perspective and unwavering commitment to wellbeing, helping guide our team on a journey towards holistic health, resilience and a balanced way of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
