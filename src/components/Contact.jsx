import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

// ✅ Backend Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL;

const contactInfo = {
  email: "frandelwanjawa19@gmail.com",
  phone: "+254729634366",
  github: "https://github.com/franfreezy",
  linkedin: "https://linkedin.com/in/frandel-wanjawa",
  whatsapp: "https://wa.me/+254729634366",
  tiktok: "https://www.tiktok.com/@engcapn",
};

const NotificationBanner = ({ message, type }) => {
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] ${bgColor} text-white px-6 py-3 rounded-lg font-semibold shadow-lg`}
    >
      {message}
    </motion.div>
  );
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

const Contact = ({ isModalOpen, setIsModalOpen }) => {
  const [coffees, setCoffees] = useState(1);
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("KES");
  const [loading, setLoading] = useState(false);

  const [banner, setBanner] = useState({ show: false, message: "", type: "success" });

  const showBanner = (message, type = "success") => {
    setBanner({ show: true, message, type });
    setTimeout(() => setBanner({ show: false, message: "", type: "success" }), 4000);
  };

  const COFFEE_PRICE_KES = 20;
  const USD_TO_KES_RATE = 150;
  const coffeePrice = currency === "KES" ? COFFEE_PRICE_KES : 1;
  const total = coffees * coffeePrice;

  const convertToKes = (amount) => (currency === "KES" ? amount : amount * USD_TO_KES_RATE);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("0")) value = value.slice(1);
    if (value.length > 9) value = value.slice(0, 9);
    setPhone(value);
  };

  const fullPhone = `+254${phone}`;

  const sendPaymentToBackend = async (amountKes) => {
    setLoading(true);
    try {
      const txnResponse = await fetch(`${API_BASE_URL}/transactions/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, amount: amountKes, description: "coffee" }),
      });
      const txnData = await txnResponse.json();
      if (!txnResponse.ok) {
        showBanner(txnData.error || "Transaction failed ❌", "error");
        setLoading(false);
        return;
      }
      showBanner(txnData.message || "STK push sent successfully ✅", "success");
    } catch (error) {
      console.error("Network error:", error);
      showBanner("Server unreachable ❌", "error");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amountKes = convertToKes(total);

    const confirmPayment = window.confirm(
      `Do you want to buy Frandel Wanjawa a coffee worth ${total} ${currency}?`
    );
    if (!confirmPayment) return;

    await sendPaymentToBackend(amountKes);

    setIsModalOpen(false);
    setCoffees(1);
    setPhone("");
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") setIsModalOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {banner.show && <NotificationBanner message={banner.message} type={banner.type} />}
      </AnimatePresence>

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
            <ContactCard label="TikTok" value="@engcapn" link={contactInfo.tiktok} />
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

        {isModalOpen && (
          <div
            id="modal-overlay"
            onClick={handleOverlayClick}
            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div
              className="bg-white text-black p-6 rounded-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
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
                  <div className="flex items-center border rounded-md px-2">
                    <span className="mr-2">🇰🇪 +254</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      placeholder="712345678"
                      className="w-full px-2 py-2 outline-none"
                    />
                  </div>
                </div>

                <div className="font-semibold">Total: {total} {currency}</div>

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
                    disabled={loading}
                    className={`px-6 py-2 rounded font-bold text-black bg-yellow-500 hover:bg-yellow-400 ${loading && "opacity-50 cursor-not-allowed"}`}
                  >
                    {loading ? "Processing..." : "Pay"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
