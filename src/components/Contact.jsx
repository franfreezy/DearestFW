import React, { useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const contactInfo = {
  email: "frandelwanjawa19@gmail.com",
  phone: "+254729634366",
  github: "https://github.com/franfreezy",
  linkedin: "https://linkedin.com/in/frandel-wanjawa",
  whatsapp: "https://wa.me/+254729634366",
};

const ContactCard = ({ label, value, link }) => (
  <div className="mb-4">
    <span className="text-white font-medium">{label}:</span>{" "}
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:underline ml-1"
      >
        {value}
      </a>
    ) : (
      <span className="text-secondary ml-1">{value}</span>
    )}
  </div>
);

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coffees, setCoffees] = useState(1);
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("KES");

  const coffeePrice = currency === "KES" ? 130 : 1;
  const total = coffees * coffeePrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., payment gateway)
    console.log(`Buying ${coffees} coffee(s) for ${total} ${currency}, phone: ${phone}`);
    alert(`Thank you for your support! We'll contact ${phone} shortly.`);
    setIsModalOpen(false);
    setCoffees(1);
    setPhone("");
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact Info</h3>

        <div className="mt-10 text-lg">
          <ContactCard label="Email" value={contactInfo.email} link={`mailto:${contactInfo.email}`} />
          <ContactCard label="Phone" value={contactInfo.phone} link={`tel:${contactInfo.phone}`} />
          <ContactCard label="GitHub" value="DevFrandel" link={contactInfo.github} />
          <ContactCard label="LinkedIn" value="Engr. Frandel Wanjawa" link={contactInfo.linkedin} />
          <ContactCard label="WhatsApp" value="Chat Now" link={contactInfo.whatsapp} />

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block mt-6 bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Buy Me a Coffee ☕
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Support Me ☕</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Number of Coffees</label>
                <input
                  type="number"
                  min={1}
                  value={coffees}
                  onChange={(e) => setCoffees(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="KES">KES</option>
                  <option value="USD">USD</option>
                </select>
              </div>

              <div className="font-semibold">
                Total: {total} {currency}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-700 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded font-bold"
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
