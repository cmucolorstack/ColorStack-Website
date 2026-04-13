'use client';

const stats = [
  { value: '50+', label: 'Registered Members' },
  { value: '5+', label: 'Industry Partners' },
  { value: '10+', label: 'Events Per Semester' },
  { value: '30%', label: 'Identify As Women' },
  { value: '15+', label: 'Workshops Hosted' },
  { value: '50%', label: 'First-Gen Students' },
];

export default function StatsTicker() {
  const doubled = [...stats, ...stats];

  return (
    <section className="py-10 bg-cmu-dark-gray overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {doubled.map((stat, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-12 md:px-16"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-gray-400 mt-1 whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
