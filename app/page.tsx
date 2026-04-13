import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CompanyBanner from '@/components/CompanyBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Section ── */}
      {/* Photo is z-10 so it sits on top of the banner that extends behind it */}
      <section className="pt-20 min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left – Photo, higher z-index so banner slides behind it */}
        <div className="flex-1 relative min-h-[40vh] md:min-h-0 z-10">
          <Image
            src="/documents/banner.jpg"
            alt="ColorStack CMU members"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right – CTA */}
        <div className="flex-1 bg-gradient-to-b from-red-50 via-white to-white flex flex-col items-center justify-start pt-12 pb-16">

          {/* Heading */}
          <div className="text-center max-w-lg px-8 mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-1">
              <span className="text-cmu-dark-gray">Welcome to</span>
              <br />
              <span className="gradient-text">ColorStack</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-cmu-dark-gray mt-2">
              at Carnegie Mellon University
            </p>
          </div>

          

          {/* Linktree-style quick links */}
          <div className="flex flex-col gap-3 w-full max-w-xs px-8">
            <a
              href="https://tartanconnect.cmu.edu/colorstack/club_signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cmu-red text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg hover:bg-cmu-dark-red hover:shadow-xl transition-all duration-300"
            >
              Join ColorStack @ CMU
            </a>
            <a
              href="https://colorstackcmu-xog2733.slack.com/join/shared_invite/zt-3efky9p51-lgong62X_lybJnZk~NoaeQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cmu-dark-gray text-white px-6 py-3 rounded-full font-semibold text-center shadow hover:bg-black hover:shadow-lg transition-all duration-300"
            >
              Join Our Slack
            </a>
            <a
              href="https://www.instagram.com/colorstack_cmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-cmu-red text-cmu-red px-6 py-3 rounded-full font-semibold text-center hover:bg-cmu-red hover:text-white transition-all duration-300"
            >
              Follow Us on Instagram
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cmucolorstack@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-cmu-dark-gray text-cmu-dark-gray px-6 py-3 rounded-full font-semibold text-center hover:bg-cmu-dark-gray hover:text-white transition-all duration-300"
            >
              Contact Us via Email
            </a>
          </div>
          {/* Banner – stretches behind the photo on the left */}
          <div className="w-full md:w-screen md:-ml-[50vw] mt-auto mb-auto pt-10">
            <CompanyBanner />
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="py-24 bg-cmu-light-gray">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cmu-dark-gray mb-6">
            Our <span className="gradient-text">Mission.</span>
          </h2>
          <p className="text-lg md:text-xl text-cmu-iron-gray max-w-3xl mx-auto leading-relaxed">
            As one of the top computer science universities in the nation, we leverage Carnegie Mellon&apos;s vast resources and connections to create meaningful change in tech diversity.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-cmu-red font-semibold hover:underline"
          >
            Learn More &rarr;
          </Link>
        </div>
      </section>

      {/* ── Features (Workshops / PD / Community) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* Workshops */}
          <div className="bg-cmu-light-gray rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-cmu-red/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cmu-dark-gray mb-3">Workshops</h3>
            <p className="text-cmu-iron-gray text-sm leading-relaxed">
              Join us for interactive workshops with leading tech companies such as Bloomberg to hone your technical skills and career readiness. From Leetcode sessions at Study Jams, internship panels with Google and Amazon engineers, we provide experiences to help you excel.
            </p>
          </div>

          {/* Professional Development */}
          <div className="bg-cmu-light-gray rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-cmu-red/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cmu-dark-gray mb-3">Professional Development</h3>
            <p className="text-cmu-iron-gray text-sm leading-relaxed">
                Elevate your career with our professional development programs. We offer free headshots, resume reviews, and career guidance to help you navigate the tech landscape and achieve your goals.
            </p>
          </div>

          {/* Community */}
          <div className="bg-cmu-light-gray rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-cmu-red/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cmu-dark-gray mb-3">Community</h3>
            <p className="text-cmu-iron-gray text-sm leading-relaxed">
              ColorStack at CMU is small but mighty. Representation in tech at CMU is still catching up, which makes community more important than ever. We're here for any student working toward a career in software — anyone in SCS, ECE, IS, Stat/ML, self-taught folks crossing over — and we work hand-in-hand with SPIRIT, NSBE, and SHPE so students of color have a place to land. Whether it's an intern mixer, a game night, or one of our study jams with pizza, you belong here.            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialCarousel />

      {/* ── Get Involved ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-cmu-dark-gray mb-14">
            Get <span className="gradient-text">Involved</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sponsorship */}
            <Link
              href="/sponsors"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cmu-red to-cmu-dark-red p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Collaborate With Us</p>
              <h3 className="text-2xl font-bold">Sponsorship</h3>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>

            {/* Join Community */}
            <a
              href="https://tartanconnect.cmu.edu/colorstack/club_signup"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cmu-dark-gray to-cmu-steel-gray p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Join Us</p>
              <h3 className="text-2xl font-bold">Join The Community</h3>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

            {/* Contact */}
            <Link
              href="/about#contact"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cmu-iron-gray to-cmu-steel-gray p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Get In Touch</p>
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
