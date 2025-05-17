
import React from 'react';
import Header from '@/components/Header';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import OrderForm from '@/components/OrderForm';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-200 via-purple-100 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                خدمات حرفه‌ای <span className="text-[#78156F]">ویرایش عکس</span> برای عکاسان و آتلیه‌ها
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                در عصر دیجیتال، کیفیت عکس‌های شما نقش مهمی در موفقیت کسب و کارتان دارد. 
                ما در <span className="text-[#78156F] font-semibold">آرپیک</span> به شما کمک می‌کنیم تا با ارائه خدمات ویرایش حرفه‌ای، تصاویری خیره‌کننده به مشتریان خود تحویل دهید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/edit-request">
                  <Button className="bg-[#78156F] hover:bg-[#651260] text-lg py-6 px-8 shadow-lg">
                    درخواست ادیت
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-[#78156F] text-[#78156F] hover:bg-[#78156F] hover:text-white text-lg py-6 px-8">
                    مشاهده نمونه‌کارها
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000"
                afterImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                description="برای مشاهده تفاوت، اسلایدر را حرکت دهید"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <Services />
      <Portfolio />
      <Pricing />
      <OrderForm />
      <Testimonials />
      <FAQ />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
