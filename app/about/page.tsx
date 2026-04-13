import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cmu-dark-gray mb-6">
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg text-cmu-iron-gray max-w-2xl mx-auto leading-relaxed">
            ColorStack is a community-driven organization dedicated to increasing the number of Black, Latinx, and Indigenous technologists who graduate and launch rewarding technical careers.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-cmu-light-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="w-12 h-12 rounded-xl bg-cmu-red/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cmu-dark-gray mb-3">Our Chapter</h3>
              <p className="text-cmu-iron-gray text-sm leading-relaxed">
                ColorStack at Carnegie Mellon University is a student-led chapter of the national ColorStack organization. We work to create an inclusive environment for underrepresented students in computing at one of the world&apos;s premier technology institutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="w-12 h-12 rounded-xl bg-cmu-red/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cmu-dark-gray mb-3">Our Mission</h3>
              <p className="text-cmu-iron-gray text-sm leading-relaxed">
                We leverage Carnegie Mellon&apos;s vast resources, industry connections, and vibrant tech ecosystem to provide our members with technical workshops, professional development, networking opportunities, and a strong sense of community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cmu-dark-gray mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-cmu-iron-gray text-lg mb-8">
            Have questions or want to get involved? Reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cmucolorstack@gmail.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cmu-red text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-cmu-dark-red hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email Us
            </a>
            <a
              href="https://www.instagram.com/colorstack_cmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-cmu-red text-cmu-red px-8 py-3 rounded-full font-semibold hover:bg-cmu-red hover:text-white transition-all duration-300"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
