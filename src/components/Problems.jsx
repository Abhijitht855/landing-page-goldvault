const problems = [
  {
    title: "Barrier to Entry",
    desc: [
      "Traditional gold purchases require large lump sums.",
      "We enable micro‑investments and flexible SIPs.",
    ],
  },
  {
    title: "Lack of Flexibility",
    desc: [
      "Conventional schemes lock customers in.",
      "GoldVault+ lets you redeem as cash, bullion, or jewelry anytime.",
    ],
  },
  {
    title: "Disconnected Experiences",
    desc: [
      "We unite the convenience of digital with the security",
      "of physical redemption at our Dubai store.",
    ],
  },
  {
    title: "Non-Tech-Enabled Jewelers Missing Digital Opportunities",
    desc: [
      "Traditional jewelers lack the tools to offer investment-driven digital experiences.",
      "GoldVault+ becomes a B2B white-label solution for Indian jewelry brands.",
    ],
  },
];

export default function Problems() {
  return (
    <section data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black text-center">
          Problems We Solve
        </h2>

        {problems.map(({ title, desc }, index) => (
          <div
          data-aos="zoom-in" data-aos-delay="200" 
            key={index}
            className="relative flex bg-[#f8fbfd] px-6 sm:px-10 py-6 sm:py-8 rounded-md shadow-sm min-h-[140px]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-[#d68c1a] rounded-l-md" />

            <div className="pl-6 sm:pl-8 space-y-2 z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c3b57]">
                {title}
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl space-y-1">
                {desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
