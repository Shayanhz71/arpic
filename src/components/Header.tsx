
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // بررسی وضعیت احراز هویت
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // بررسی وجود session موجود
    supabase.auth.getSession().then(({ data: { session } }) => {
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

  const navItems = [
    { path: '/', label: 'صفحه اصلی' },
    { path: '/services', label: 'خدمات' },
    { path: '/portfolio', label: 'نمونه کارها' },
    { path: '/shop', label: 'فروشگاه' },
    { path: '/about', label: 'درباره ما' },
    { path: '/contact', label: 'تماس با ما' },
    { path: '/cooperation', label: 'همکاری با ما' },
  ];

  // Store previous path before navigating to auth
  const handleAuthClick = () => {
    localStorage.setItem('previousPath', location.pathname);
  };

  return (
    <header className="fixed top-0 right-0 left-0 bg-white shadow-md z-40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold text-[#78156F]">ARPIC</span>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 mx-1 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#78156F] text-white'
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Auth Buttons / User Menu */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link to="/edit-request">
              <Button variant="outline" className="border-[#78156F] text-[#78156F] hover:bg-[#78156F] hover:text-white">
                درخواست ادیت
              </Button>
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#78156F]">
                    حساب کاربری
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <span className="text-gray-600 mb-2">
                      {user.email}
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="cursor-pointer" onClick={handleLogout}>خروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth" state={{ from: location.pathname }} onClick={handleAuthClick}>
                <Button className="bg-[#78156F]">
                  ورود / ثبت نام
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="p-2 ml-2 text-gray-600 rounded-md md:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md ${
                  isActive(item.path)
                    ? 'bg-[#78156F] text-white'
                    : 'text-gray-700 hover:bg-purple-100'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
