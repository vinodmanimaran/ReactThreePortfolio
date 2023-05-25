import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {menu, close} from '../assets';
import logo from '../assets/logo.svg';

const Navbar = () => {
  // State variables
  const [active, setActive] = useState (''); // Track active link
  const [toggle, setToggle] = useState (false); // Toggle mobile menu
  const [scrolled, setScrolled] = useState (false); // Track scroll position

  useEffect (() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled (true);
      } else {
        setScrolled (false);
      }
    };

    // Add event listener for scroll
    window.addEventListener ('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener ('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once during component initialization

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and site title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive ('');
            window.scrollTo (0, 0); // Scroll to top on logo click
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Vinod Kumar &nbsp;
            <span className="sm:block hidden">| MERN Stack Developer</span>
          </p>
        </Link>
        {/* Desktop navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map (nav => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white white-text text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive (nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Menu toggle button */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle (!toggle)}
          />
          {/* Mobile menu items */}
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map (nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-secondary'}`}
                  onClick={() => {
                    setToggle (!toggle); // Close the mobile menu
                    setActive (nav.title); // Set active link
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
