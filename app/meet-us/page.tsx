import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the executive board and student leaders of ColorStack at CMU, the official ColorStack chapter at Carnegie Mellon University.',
  alternates: { canonical: 'https://colorstackcmu.org/meet-us' },
};

export default function MeetUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-cmu-dark-gray mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-cmu-iron-gray max-w-2xl mx-auto leading-relaxed">
            The passionate leaders behind ColorStack at Carnegie Mellon University.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cmu-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-cmu-red/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cmu-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cmu-dark-gray mb-3">Executive Board</h3>
            <p className="text-cmu-iron-gray max-w-md mx-auto">
              Our executive board profiles are coming soon. Stay tuned to learn about the amazing students leading ColorStack at CMU!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
