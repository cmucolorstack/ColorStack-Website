'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    title: 'Finding My Community',
    quote:
      'ColorStack at CMU has completely changed my college career. It has brough me so many opportunities to network with students both in and outside of CMU, while also building my leadership skills.',
    name: 'James',
    role: 'Secretary',
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-cmu-light-gray">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cmu-dark-gray">
            Voices Of
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold gradient-text mt-1">
            ColorStack
          </h3>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-cmu-red mb-4">{testimonials[current].title}</h4>
              <p className="text-cmu-iron-gray leading-relaxed text-lg italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-cmu-dark-gray">{testimonials[current].name}</p>
              <p className="text-sm text-cmu-iron-gray">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Nav Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-cmu-red text-cmu-red flex items-center justify-center hover:bg-cmu-red hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-cmu-red' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-cmu-red text-cmu-red flex items-center justify-center hover:bg-cmu-red hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
