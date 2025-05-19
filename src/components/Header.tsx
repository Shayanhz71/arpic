import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    // بررسی وضعیت احراز هویت
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // بررسی وجود session موجود
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  const navItems = [{
    path: '/',
    label: 'صفحه اصلی'
  }, {
    path: '/portfolio',
    label: 'نمونه کارها'
  }, {
    path: '/about',
    label: 'درباره ما'
  }, {
    path: '/contact',
    label: 'تماس با ما'
  }, {
    path: '/cooperation',
    label: 'همکاری با ما'
  }];
  const servicesItems = [{
    path: '/services/portrait',
    label: 'رتوش پرتره'
  }, {
    path: '/services/wedding',
    label: 'ادیت عروسی'
  }, {
    path: '/services/album',
    label: 'طراحی آلبوم'
  }, {
    path: '/services/commercial',
    label: 'عکاسی تجاری'
  }, {
    path: '/services/wall-frame',
    label: 'قاب دیواری'
  }];
  const shopItems = [{
    path: '/shop/albums',
    label: 'آلبوم‌ها'
  }, {
    path: '/shop/frames',
    label: 'قاب‌ها'
  }];

  // Store previous path before navigating to auth
  const handleAuthClick = () => {
    localStorage.setItem('previousPath', location.pathname);
  };
  return <header className="fixed top-0 right-0 left-0 bg-black bg-opacity-90 z-40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/486ef567-1053-4466-a561-0c4afdbad7a8.png" alt="Arpic" className="h-16 redius-margin-27" />
          </Link>

          {/* Desktop Menu */}
          {!isMobile && <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
              <Link to="/" className={`px-3 py-2 mx-1 rounded-md transition-colors ${isActive('/') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>
                صفحه اصلی
              </Link>
              
              <NavigationMenu dir="rtl">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${isActive('/services') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>خدمات</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {servicesItems.map(item => <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium">{item.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/portfolio" className={`px-3 py-2 mx-1 rounded-md transition-colors ${isActive('/portfolio') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>
                نمونه کارها
              </Link>
              
              <NavigationMenu dir="rtl">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${isActive('/shop') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>فروشگاه</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        {shopItems.map(item => <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium">{item.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/about" className={`px-3 py-2 mx-1 rounded-md transition-colors ${isActive('/about') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>
                درباره ما
              </Link>
              
              <Link to="/contact" className={`px-3 py-2 mx-1 rounded-md transition-colors ${isActive('/contact') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>
                تماس با ما
              </Link>
              
              <Link to="/cooperation" className={`px-3 py-2 mx-1 rounded-md transition-colors ${isActive('/cooperation') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`}>
                همکاری با ما
              </Link>
            </nav>}

          {/* Auth Buttons / User Menu */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link to="/edit-request">
              <Button variant="outline" className="border-[#78156F] text-white hover:bg-[#78156F] hover:text-white">
                درخواست ادیت
              </Button>
            </Link>
            
            {user ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#78156F]">
                    حساب کاربری
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-gray-200">
                  <DropdownMenuItem className="text-gray-600">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    خروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> : <Link to="/auth" state={{
            from: location.pathname
          }} onClick={handleAuthClick}>
                <Button className="bg-[#78156F]">
                  ورود / ثبت نام
                </Button>
              </Link>}

            {/* Mobile Menu Toggle */}
            {isMobile && <button onClick={toggleMenu} className="p-2 ml-2 text-white rounded-md md:hidden focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && <nav className="md:hidden pt-4 pb-4 space-y-2">
            <Link to="/" className={`block px-3 py-2 rounded-md ${isActive('/') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
              صفحه اصلی
            </Link>
            
            <div className="px-3 py-2 text-white">
              خدمات
              <div className="pr-4 mt-1 space-y-1">
                {servicesItems.map(item => <Link key={item.path} to={item.path} className={`block px-3 py-2 rounded-md ${isActive(item.path) ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
                    {item.label}
                  </Link>)}
              </div>
            </div>
            
            <Link to="/portfolio" className={`block px-3 py-2 rounded-md ${isActive('/portfolio') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
              نمونه کارها
            </Link>
            
            <div className="px-3 py-2 text-white">
              فروشگاه
              <div className="pr-4 mt-1 space-y-1">
                {shopItems.map(item => <Link key={item.path} to={item.path} className={`block px-3 py-2 rounded-md ${isActive(item.path) ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
                    {item.label}
                  </Link>)}
              </div>
            </div>
            
            <Link to="/about" className={`block px-3 py-2 rounded-md ${isActive('/about') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
              درباره ما
            </Link>
            
            <Link to="/contact" className={`block px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
              تماس با ما
            </Link>
            
            <Link to="/cooperation" className={`block px-3 py-2 rounded-md ${isActive('/cooperation') ? 'bg-[#78156F] text-white' : 'text-white hover:bg-[#78156F]/20'}`} onClick={closeMenu}>
              همکاری با ما
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;