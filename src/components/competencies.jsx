import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects, issuingorg, orgImages, certificationsByOrg, certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const OrganisationCard = ({ org, onClick }) => (
  <motion.div variants={fadeIn("up", "spring")}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full relative"
    >
      <div className="flex flex-col items-center">
        <img
          src={orgImages[org] || "https://via.placeholder.com/100"}
          alt={org}
          className="w-24 h-24 object-contain rounded-full mb-4"
        />
        <h3 className="text-white font-bold text-[20px] text-center">{org}</h3>
      </div>
      <button
        className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-xl shadow-lg hover:bg-secondary transition"
        onClick={onClick}
        aria-label={`Show certifications for ${org}`}
        type="button"
      >
        +
      </button>
    </Tilt>
  </motion.div>
);

const OrganisationListItem = ({ org, onClick }) => (
  <motion.div
    variants={fadeIn("up", "spring")}
    className="bg-tertiary px-4 py-3 rounded-lg w-full cursor-pointer hover:bg-secondary transition"
    onClick={onClick}
  >
    <h3 className="text-white text-lg font-semibold">{org}</h3>
  </motion.div>
);

const CertificationList = ({ org, onClose, onCertClick }) => {
  const certNames = certificationsByOrg[org] || [];
  const certs = certifications.filter((cert) => certNames.includes(cert.name));
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-tertiary p-8 rounded-2xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-white font-bold text-[22px] mb-4 text-center">
          Certifications from {org}
        </h2>
        {certs.length === 0 ? (
          <p className="text-secondary text-center">No certifications listed for this organisation.</p>
        ) : (
          <ul className="max-h-72 overflow-y-auto pr-2">
            {certs.map((cert, idx) => (
              <li
                key={idx}
                className="mb-4 cursor-pointer"
                onClick={() => onCertClick(cert)}
              >
                <div className="font-semibold text-white">{cert.name}</div>
                <div className="text-secondary text-[14px]">{cert.description}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const CertificationImageModal = ({ cert, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="relative bg-tertiary p-4 rounded-2xl flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-4 text-white text-xl"
        onClick={onClose}
      >
        &times;
      </button>
      <img
        src={cert.image}
        alt={cert.name}
        className="max-w-xs max-h-[60vh] rounded-lg mb-4"
      />
      <div className="text-white font-bold text-lg mb-2">{cert.name}</div>
      <div className="text-secondary text-[14px] text-center">{cert.description}</div>
    </div>
  </div>
);

const Competency = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Competencies</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following certifications solidify my skills and my commitment to quality delivery.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {issuingorg.map((org) =>
          isMobile ? (
            <OrganisationListItem key={org} org={org} onClick={() => setSelectedOrg(org)} />
          ) : (
            <OrganisationCard key={org} org={org} onClick={() => setSelectedOrg(org)} />
          )
        )}
      </div>
      {selectedOrg && !selectedCert && (
        <CertificationList
          org={selectedOrg}
          onClose={() => setSelectedOrg(null)}
          onCertClick={setSelectedCert}
        />
      )}
      {selectedCert && (
        <CertificationImageModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Competency, "");
