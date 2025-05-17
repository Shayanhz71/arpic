
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              استودیو ادیت عکس
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              صفحه اصلی
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              خدمات
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 font-medium">
              فروشگاه
            </Link>
            <Link to="/cooperation" className="text-gray-700 hover:text-blue-600 font-medium">
              همکاری با ما
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              درباره ما
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              تماس با ما
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">درخواست ادیت</Button>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700"
              aria-label={isMobileMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                صفحه اصلی
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                خدمات
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                فروشگاه
              </Link>
              <Link
                to="/cooperation"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                همکاری با ما
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                تماس با ما
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
