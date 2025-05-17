
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

const Index = () => {
  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                خدمات حرفه‌ای <span className="text-blue-600">ویرایش عکس</span> برای عکاسان و آتلیه‌ها
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                در عصر دیجیتال، کیفیت عکس‌های شما نقش مهمی در موفقیت کسب و کارتان دارد. 
                ما به شما کمک می‌کنیم تا با ارائه خدمات ویرایش حرفه‌ای، تصاویری خیره‌کننده به مشتریان خود تحویل دهید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                  درخواست ادیت
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg py-6 px-8">
                  مشاهده نمونه‌کارها
                </Button>
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
