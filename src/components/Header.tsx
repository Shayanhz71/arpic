
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

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
            <Link to="/" className="text-2xl font-bold text-[#78156F]">
              استودیو ادیت عکس
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center max-w-xs w-full mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="جستجو..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 space-x-reverse items-center">
            <Link to="/" className="text-gray-700 hover:text-[#78156F] font-medium">
              صفحه اصلی
            </Link>
            
            <Link to="/services" className="text-gray-700 hover:text-[#78156F] font-medium">
              خدمات
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#78156F] font-medium bg-transparent">فروشگاه</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/shop/albums"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Album className="h-6 w-6 text-[#78156F]" />
                            <div className="mb-2 mt-4 text-lg font-medium text-[#78156F]">
                              آلبوم‌ها
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              آلبوم‌های دیجیتال و فریمی در طرح‌های متنوع
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/shop/frames"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Image className="h-6 w-6 text-[#78156F]" />
                            <div className="mb-2 mt-4 text-lg font-medium text-[#78156F]">
                              قاب‌ها
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              قاب‌های چوبی در سایزها و رنگ‌های مختلف
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/cooperation" className="text-gray-700 hover:text-[#78156F] font-medium">
              همکاری با ما
            </Link>
            
            <Link to="/about" className="text-gray-700 hover:text-[#78156F] font-medium">
              درباره ما
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-[#78156F] font-medium">
              تماس با ما
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-[#78156F] hover:bg-[#651260]">درخواست ادیت</Button>

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
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="جستجو..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                صفحه اصلی
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                خدمات
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                فروشگاه
              </Link>
              <div className="pr-4">
                <Link
                  to="/shop/albums"
                  className="text-gray-600 hover:text-[#78156F] block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  - آلبوم‌ها
                </Link>
                <Link
                  to="/shop/frames"
                  className="text-gray-600 hover:text-[#78156F] block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  - قاب‌ها
                </Link>
              </div>
              <Link
                to="/cooperation"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                همکاری با ما
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#78156F] font-medium block py-2"
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
