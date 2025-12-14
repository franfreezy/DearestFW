import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = ({ onDonateClick }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    window.open('/Resume.pdf');
  };

  useEffect(() => {
    if (toggle) setActive('');
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul
      className={`list-none ${
        isSecondary
          ? 'flex sm:hidden flex-col items-start gap-4'
          : 'hidden sm:flex flex-row gap-6'
      }`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title
              ? 'text-white'
              : isSecondary
              ? 'text-secondary'
              : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setActive(link.title);

            if (link.id === 'donate') {
              onDonateClick();
              if (isSecondary) setToggle(false);
              return;
            }

            if (isSecondary) setToggle(false);
            window.location.hash = `#${link.id}`;
          }}
        >
          <span>{link.title}</span>
        </li>
      ))}

      {/* Resume button */}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            FRANDEL&nbsp;
            <span className="sm:block hidden">WANJAWA</span>
          </p>
        </Link>

        {renderNavLinks(false)}

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
              toggle ? 'flex' : 'hidden'
            }`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
