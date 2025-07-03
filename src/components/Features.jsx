import { FaCoins, FaGem, FaSyncAlt, FaShoppingCart } from "react-icons/fa";

const featureData = [
  {
    icon: <FaCoins className="text-5xl text-yellow-500 mb-4" />,
    title: "Gold SIP",
    desc: "12‑month plan with bonuses & flexible amounts.",
  },
  {
    icon: <FaGem className="text-5xl text-yellow-500 mb-4" />,
    title: "Jewelry Redemption",
    desc: "Convert holdings into jewelry with discounted making charges.",
  },
  {
    icon: <FaSyncAlt className="text-5xl text-yellow-500 mb-4" />,
    title: "Auto‑Purchase on Price Dips",
    desc: "Pre‑fund wallet & let the app buy automatically when market dips.",
  },
  {
    icon: <FaShoppingCart className="text-5xl text-yellow-500 mb-4" />,
    title: "Digital Buying & Selling",
    desc: "Buy/sell gold, silver, and gems from as low as 0.01g.",
  },
];

export default function Features() {
  return (
    <section id="features" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  className="bg-gradient-to-br from-white to-yellow-50 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">Key Features</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Built for modern investors — backed by physical stores and trusted jewelers.
        </p>
        <div data-aos="zoom-in" data-aos-delay="200" className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {featureData.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-100"
            >
              <div className="flex flex-col items-center">
                {icon}
                <h3 className="mt-4 text-xl font-semibold text-yellow-600">
                  {title}
                </h3>
                <p className="mt-2 text-base text-gray-700 text-center">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
