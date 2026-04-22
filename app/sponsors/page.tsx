import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Sponsors() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cmu-dark-gray mb-6">
            Our Partners in <span className="gradient-text">Progress</span>
          </h1>
          <p className="text-lg text-cmu-iron-gray max-w-2xl mx-auto leading-relaxed">
            We&apos;re proud to partner with industry leaders who share our vision of increasing diversity in tech. These organizations provide mentorship, resources, and opportunities to our members.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cmucolorstack@gmail.com" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-cmu-red text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-cmu-dark-red hover:shadow-xl transition-all duration-300"
            >
              Become A Sponsor
            </a>
            <a
              href="/documents/ColorStack CMU Sponsorship Packet (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-cmu-red text-cmu-red px-8 py-3 rounded-full font-semibold hover:bg-cmu-red hover:text-white transition-all duration-300"
            >
              Sponsorship Packet
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors List */}
      <section className="py-24 bg-cmu-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-cmu-dark-gray mb-4">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-center text-cmu-iron-gray mb-16 max-w-xl mx-auto">
            Thank you to our amazing sponsors who make our mission possible.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              src="/documents/nvidia-logo-vert.png"
              alt="NVIDIA"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </section>


      {/* Become a Sponsor CTA */}
      <section className="py-24 bg-gradient-to-br from-cmu-dark-gray to-cmu-steel-gray text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Become a Sponsor</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Interested in partnering with ColorStack at CMU? Fill out the form below and we&apos;ll get back to you.
          </p>
          <a
            href="/documents/ColorStack CMU Sponsorship Packet (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cmu-dark-gray transition-all duration-300 mb-2"
          >
            View Sponsorship Packet
          </a>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
