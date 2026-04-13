'use client';

const companies = [
  { name: 'Google',        logo: '/logos/google.svg' },
  { name: 'Goldman Sachs', logo: '/logos/goldman-sachs.svg' },
  { name: 'Blue Origin',   logo: '/logos/blue-origin.svg' },
  { name: 'Microsoft',     logo: '/logos/microsoft.svg' },
  { name: 'Mastercard',    logo: '/logos/mastercard.svg' },
  { name: 'Uber',          logo: '/logos/uber.svg' },
  { name: 'Pfizer',        logo: '/logos/pfizer.svg' },
  { name: 'HP',            logo: '/logos/hp.svg' },
  { name: 'DoorDash',      logo: '/logos/doordash.svg' },
  { name: 'Accenture',     logo: '/logos/accenture.svg' },
  { name: 'IBM',           logo: '/logos/ibm.svg' },
  { name: "L'Oreal",       logo: '/logos/loreal.svg' },
];

export default function CompanyBanner() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-6 bg-white border-y border-gray-100">
      <p className="text-xs uppercase tracking-[0.2em] text-cmu-iron-gray mb-5 font-semibold text-center md:pl-[50%]">
        Where Our Members Have Worked
      </p>
      <div className="ticker-wrapper">
        <div className="ticker-content" style={{ animationDuration: '40s' }}>
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.logo}
                alt={company.name}
                className="h-7 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
