"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink, LinkProps } from 'react-scroll';
import { useContactForm } from '@/context/ContactFormContext';

// Extend the LinkProps to include className and children
const CustomScrollLink = (props: LinkProps & { children: React.ReactNode; className?: string }) => (
  <ScrollLink {...props}>
    {props.children}
  </ScrollLink>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'solutions', label: 'Solutions' },
    { to: 'ai', label: 'AI Features' },
    { to: 'integrations', label: 'Integrations' },
    { to: 'faq', label: 'FAQ' },
  ];

  const handleGetStartedClick = () => {
    console.log('Get Started button clicked in Navigation');
    openContactForm();
    setIsMenuOpen(false);
  };

  console.log('Rendering Navigation, isMenuOpen:', isMenuOpen);

  return (
    <div className="fixed w-full z-50 transition-all duration-500 ease-in-out">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav 
            className={`transition-all duration-500 ease-in-out ${
              scrolled 
                ? 'bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 rounded-2xl h-20' 
                : 'bg-transparent border-transparent h-20'
            }`}
            style={{
              '--tw-bg-opacity': scrolled ? '0.95' : '0',
              backdropFilter: scrolled ? 'saturate(180%) blur(5px)' : 'none',
              WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(5px)' : 'none',
              borderColor: scrolled ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
            } as React.CSSProperties}
          >
            <div className="relative px-6 transition-all duration-500 h-full">
              <div className="flex justify-between items-center h-full">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    vinaka.ai
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <CustomScrollLink 
                      key={link.to}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                      activeClass="text-blue-600 font-semibold"
                    >
                      {link.label}
                    </CustomScrollLink>
                  ))}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:flex items-center">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
                    onClick={() => {
                      console.log('Desktop Get Started button clicked');
                      openContactForm();
                    }}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => {
                      console.log('Mobile menu button clicked');
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-6 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <CustomScrollLink
                    key={`mobile-${link.to}`}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => {
                      console.log('Mobile nav link clicked:', link.label);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors"
                  >
                    {link.label}
                  </CustomScrollLink>
                ))}
                <div className="pt-2">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
                    onClick={handleGetStartedClick}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
