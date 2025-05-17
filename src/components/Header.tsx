
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, AlbumIcon, ImageIcon, Camera, BrushIcon, Image as ImageIconAlt } from "lucide-react";
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
                className="pl-10 pr-4 focus:border-[#78156F] focus:ring-[#78156F]"
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
            
            {/* Services Megamenu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#78156F] font-medium bg-transparent">خدمات</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2 lg:grid-cols-3">
                      <li className="row-span-3 col-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="bg-[#78156F] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                              <Camera className="h-5 w-5 text-white" />
                            </div>
                            <div className="mb-2 mt-4 text-lg font-medium text-[#78156F]">
                              خدمات ما
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              مشاهده همه خدمات تخصصی ویرایش عکس
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/services/portrait"
                            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-purple-100 hover:text-[#78156F] focus:bg-purple-100 focus:text-[#78156F]"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <ImageIcon className="h-4 w-4" />
                              <span className="text-sm font-medium">رتوش پرتره</span>
                            </div>
                            <p className="line-clamp-2 text-xs text-gray-500">
                              اصلاح حرفه‌ای پوست، چهره و جزئیات تصویر در عکس‌های پرتره
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/services/wedding"
                            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-purple-100 hover:text-[#78156F] focus:bg-purple-100 focus:text-[#78156F]"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <Camera className="h-4 w-4" />
                              <span className="text-sm font-medium">ادیت عروسی</span>
                            </div>
                            <p className="line-clamp-2 text-xs text-gray-500">
                              ویرایش تخصصی عکس‌های عروسی با حفظ جلوه‌های طبیعی و زیبایی‌های لحظه
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/services/skin"
                            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-purple-100 hover:text-[#78156F] focus:bg-purple-100 focus:text-[#78156F]"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <BrushIcon className="h-4 w-4" />
                              <span className="text-sm font-medium">رتوش پوست</span>
                            </div>
                            <p className="line-clamp-2 text-xs text-gray-500">
                              اصلاح و یکدست کردن بافت پوست، رفع لک و تیرگی با حفظ حالت طبیعی
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/services/album"
                            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-purple-100 hover:text-[#78156F] focus:bg-purple-100 focus:text-[#78156F]"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <AlbumIcon className="h-4 w-4" />
                              <span className="text-sm font-medium">طراحی آلبوم</span>
                            </div>
                            <p className="line-clamp-2 text-xs text-gray-500">
                              طراحی و چیدمان حرفه‌ای عکس‌ها در قالب آلبوم دیجیتال و چاپی
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/services/commercial"
                            className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-purple-100 hover:text-[#78156F] focus:bg-purple-100 focus:text-[#78156F]"
                          >
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <ImageIconAlt className="h-4 w-4" />
                              <span className="text-sm font-medium">عکاسی صنعتی</span>
                            </div>
                            <p className="line-clamp-2 text-xs text-gray-500">
                              ویرایش و رتوش تخصصی عکس‌های محصولات و تصاویر صنعتی
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
                            <AlbumIcon className="h-6 w-6 text-[#78156F]" />
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
                            <ImageIcon className="h-6 w-6 text-[#78156F]" />
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-white rounded-lg shadow-lg p-4">
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
              <div>
                <div className="flex items-center justify-between py-2">
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-[#78156F] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    خدمات
                  </Link>
                </div>
                <div className="pr-4 space-y-1 mt-1">
                  <Link
                    to="/services/portrait"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>رتوش پرتره</span>
                  </Link>
                  <Link
                    to="/services/wedding"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Camera className="h-4 w-4" />
                    <span>ادیت عروسی</span>
                  </Link>
                  <Link
                    to="/services/skin"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BrushIcon className="h-4 w-4" />
                    <span>رتوش پوست</span>
                  </Link>
                  <Link
                    to="/services/album"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <AlbumIcon className="h-4 w-4" />
                    <span>طراحی آلبوم</span>
                  </Link>
                  <Link
                    to="/services/commercial"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ImageIconAlt className="h-4 w-4" />
                    <span>عکاسی صنعتی</span>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between py-2">
                  <Link
                    to="/shop"
                    className="text-gray-700 hover:text-[#78156F] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    فروشگاه
                  </Link>
                </div>
                <div className="pr-4 space-y-1 mt-1">
                  <Link
                    to="/shop/albums"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <AlbumIcon className="h-4 w-4" />
                    <span>آلبوم‌ها</span>
                  </Link>
                  <Link
                    to="/shop/frames"
                    className="text-gray-600 hover:text-[#78156F] flex items-center space-x-2 space-x-reverse py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>قاب‌ها</span>
                  </Link>
                </div>
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
