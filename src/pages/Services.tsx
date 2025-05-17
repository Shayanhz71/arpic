
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesComponent from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-[#78156F]">خدمات</span> ما
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            تیم حرفه‌ای ما با استفاده از جدیدترین تکنیک‌های ویرایش تصویر، خدمات متنوعی را برای عکاسان و آتلیه‌ها ارائه می‌دهد.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesComponent />
      
      {/* Additional Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">فرآیند انجام کار</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>ثبت درخواست و آپلود تصاویر</li>
                <li>بررسی اولیه و اعلام هزینه و زمان تحویل</li>
                <li>پرداخت و تأیید سفارش</li>
                <li>انجام ویرایش توسط متخصصین ما</li>
                <li>بازبینی نهایی و کنترل کیفیت</li>
                <li>ارسال فایل‌های نهایی به مشتری</li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">مزایای همکاری با ما</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>استفاده از تکنیک‌های پیشرفته ویرایش</li>
                <li>تیم متخصص با بیش از 10 سال تجربه</li>
                <li>تضمین رضایت مشتری</li>
                <li>قیمت مناسب و رقابتی</li>
                <li>تحویل سریع سفارشات</li>
                <li>پشتیبانی 7 روز هفته</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
