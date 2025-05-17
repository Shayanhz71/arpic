
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Info } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">تماس با ما</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
            برای هرگونه سوال، درخواست همکاری یا مشاوره، ما همیشه آماده پاسخگویی هستیم.
          </p>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-[#78156F]" />
                </div>
                <h3 className="font-bold text-xl mb-2">ایمیل</h3>
                <p className="text-gray-600 mb-4">برای پاسخگویی در کمترین زمان ممکن</p>
                <a href="mailto:info@example.com" className="text-[#78156F] font-medium">info@example.com</a>
              </CardContent>
            </Card>
            
            {/* Phone */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-[#78156F]" />
                </div>
                <h3 className="font-bold text-xl mb-2">تلفن</h3>
                <p className="text-gray-600 mb-4">از شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر</p>
                <a href="tel:+982188888888" className="text-[#78156F] font-medium">۸۸۸۸۸۸۸۸-۰۲۱</a>
              </CardContent>
            </Card>
            
            {/* Address */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Info className="h-8 w-8 text-[#78156F]" />
                </div>
                <h3 className="font-bold text-xl mb-2">آدرس</h3>
                <p className="text-gray-600 mb-4">دفتر مرکزی</p>
                <p className="text-[#78156F] font-medium">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 max-w-3xl mx-auto shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">فرم تماس با ما</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
                  <Input id="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">موضوع</label>
                <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">پیام</label>
                <Textarea id="message" placeholder="پیام خود را اینجا بنویسید..." className="min-h-[150px]" />
              </div>
              <div className="text-center">
                <Button className="bg-[#78156F] hover:bg-[#651260] px-8 py-2">ارسال پیام</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">موقعیت ما روی نقشه</h2>
          <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">نقشه در اینجا نمایش داده می‌شود</p>
              {/* In a real app, you would embed a map here */}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
