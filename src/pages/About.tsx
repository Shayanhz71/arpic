
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-[#78156F]">درباره</span> ما
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            تیم متخصص ما با بیش از یک دهه تجربه در زمینه ویرایش حرفه‌ای تصاویر خدمات متنوعی را ارائه می‌دهد
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#78156F]">داستان ما</h2>
              <p className="text-gray-700 mb-4">
                استودیو ادیت عکس از سال ۱۳۹۰ فعالیت خود را در زمینه ویرایش حرفه‌ای تصاویر آغاز کرد. در ابتدا با یک تیم کوچک ۳ نفره و با هدف ارائه خدمات ویرایش تخصصی به عکاسان و آتلیه‌ها شروع به کار کردیم.
              </p>
              <p className="text-gray-700 mb-4">
                با گذشت زمان و افزایش تقاضا برای خدمات ما، تیم ما گسترش یافت و امروز با بیش از ۱۵ متخصص ویرایش تصویر، یکی از بزرگترین استودیوهای تخصصی ویرایش عکس در ایران هستیم.
              </p>
              <p className="text-gray-700">
                ما همواره به دنبال به‌روزترین تکنیک‌ها و ابزارهای ویرایش عکس هستیم تا بهترین نتیجه را برای مشتریان خود فراهم کنیم. رضایت مشتری و حفظ کیفیت بالای کار همیشه اولویت اصلی ما بوده است.
              </p>
            </div>
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="تیم استودیو ادیت عکس" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">تیم ما</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            متخصصان ما با تجربه و دانش کافی آماده ارائه بهترین خدمات به شما هستند
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "احمد محمدی",
                role: "مدیر ارشد",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "سارا کریمی",
                role: "متخصص رتوش پرتره",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "علی حسینی",
                role: "متخصص ادیت عروسی",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "فاطمه نوری",
                role: "طراح آلبوم",
                image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-[#78156F]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ارزش‌های ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">کیفیت</h3>
              <p className="text-gray-600">
                همواره بالاترین استانداردهای کیفیت را در تمامی خدمات خود رعایت می‌کنیم.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">سرعت</h3>
              <p className="text-gray-600">
                ارائه سریع خدمات بدون کاهش کیفیت، یکی از اصول کاری ماست.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">مشتری‌مداری</h3>
              <p className="text-gray-600">
                رضایت مشتری همیشه در اولویت ماست و تمام تلاش خود را برای جلب رضایت شما انجام می‌دهیم.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-[#78156F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده همکاری با ما هستید؟
          </h2>
          <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            با تیم ما تماس بگیرید و از خدمات حرفه‌ای ما بهره‌مند شوید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="bg-white text-[#78156F] hover:bg-gray-100 border-none">
              تماس با ما
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#78156F]">
              مشاهده خدمات
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
