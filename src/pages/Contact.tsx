
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mail, phone, info } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add contact form submission logic here
  };

  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-[#78156F]">تماس</span> با ما
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            برای درخواست خدمات، طرح سوالات و یا ارسال پیشنهادات با ما در تماس باشید
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <mail className="h-8 w-8 text-[#78156F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">ایمیل</h3>
              <p className="text-gray-600 mb-2">پاسخگوی ایمیل‌های شما هستیم</p>
              <a href="mailto:info@photoedit.com" className="text-[#78156F] font-semibold">info@photoedit.com</a>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <phone className="h-8 w-8 text-[#78156F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">شماره تماس</h3>
              <p className="text-gray-600 mb-2">همه روزه از ساعت ۹ صبح تا ۶ عصر</p>
              <a href="tel:+982112345678" className="text-[#78156F] font-semibold">۰۲۱-۱۲۳۴۵۶۷۸</a>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <info className="h-8 w-8 text-[#78156F]" />
              </div>
              <h3 className="text-xl font-bold mb-2">آدرس</h3>
              <p className="text-gray-600 mb-2">دفتر مرکزی</p>
              <p className="text-[#78156F] font-semibold">تهران، خیابان ولیعصر، خیابان فرشته، پلاک ۱۲۳</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-[#78156F]">ارسال پیام</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      نام و نام خانوادگی
                    </label>
                    <Input id="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      ایمیل
                    </label>
                    <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    موضوع
                  </label>
                  <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    پیام
                  </label>
                  <Textarea id="message" placeholder="پیام خود را بنویسید" className="h-32" />
                </div>
                <Button type="submit" className="w-full bg-[#78156F] hover:bg-[#651260]">
                  ارسال پیام
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215828.3558227072!2d51.24883569148324!3d35.697389277176196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1652690344434!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">پرسش‌های متداول</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            پاسخ سوالات رایج شما در مورد نحوه ارتباط و همکاری با ما
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "ساعات کاری شما چگونه است؟",
                answer: "دفتر ما از شنبه تا پنجشنبه از ساعت ۹ صبح تا ۶ عصر فعال است. روزهای جمعه و تعطیلات رسمی تعطیل هستیم."
              },
              {
                question: "آیا امکان ارسال فایل‌ها از طریق ایمیل وجود دارد؟",
                answer: "بله، شما می‌توانید فایل‌های خود را به آدرس ایمیل orders@photoedit.com ارسال کنید. برای فایل‌های بزرگتر از ۲۰ مگابایت، توصیه می‌کنیم از سرویس‌های اشتراک‌گذاری فایل مانند Google Drive استفاده کنید."
              },
              {
                question: "آیا امکان ملاقات حضوری وجود دارد؟",
                answer: "بله، با هماهنگی قبلی و تعیین وقت ملاقات، می‌توانید به دفتر ما مراجعه کنید. برای تعیین وقت با شماره دفتر تماس بگیرید."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-[#78156F]">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
