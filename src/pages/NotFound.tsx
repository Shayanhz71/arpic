
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-vazir">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="text-center max-w-lg mx-auto px-4">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl font-bold text-gray-800 mb-4">صفحه مورد نظر پیدا نشد</p>
          <p className="text-gray-600 mb-8">متأسفانه صفحه‌ای که به دنبال آن هستید در سایت ما وجود ندارد.</p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
