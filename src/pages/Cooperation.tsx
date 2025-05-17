
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CooperationPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-[#78156F]">همکاری</span> با ما
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            فرصت‌های همکاری برای عکاسان، آتلیه‌ها و متخصصین ادیت عکس
          </p>
        </div>
      </section>
      
      {/* Cooperation Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">مدل‌های همکاری</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">همکاری با عکاسان</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ارجاع مشتریان برای ادیت و رتوش عکس</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>دریافت کمیسیون به ازای هر ارجاع</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>تخفیف ویژه برای ادیت عکس‌های شخصی</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">همکاری با آتلیه‌ها</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>قرارداد همکاری بلندمدت</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>تخفیفات پلکانی براساس حجم سفارش</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>اولویت در پردازش سفارشات</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">استخدام نیرو</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>جذب متخصص ادیت عکس</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>امکان همکاری دورکاری و پروژه‌ای</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#78156F] ml-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>حقوق مناسب و پرداخت به‌موقع</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#78156F] text-center">
              فرم درخواست همکاری
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                    نام و نام خانوادگی
                  </label>
                  <Input id="fullname" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    ایمیل
                  </label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    شماره تماس
                  </label>
                  <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                </div>
                <div>
                  <label htmlFor="cooperation-type" className="block text-sm font-medium text-gray-700 mb-1">
                    نوع همکاری
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="نوع همکاری را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photographer">عکاس</SelectItem>
                      <SelectItem value="studio">آتلیه</SelectItem>
                      <SelectItem value="editor">متخصص ادیت عکس</SelectItem>
                      <SelectItem value="other">سایر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                    آدرس وب‌سایت یا نمونه کار (اختیاری)
                  </label>
                  <Input id="portfolio" placeholder="آدرس وب‌سایت یا پورتفولیو خود را وارد کنید" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    شهر محل سکونت
                  </label>
                  <Input id="city" placeholder="شهر محل سکونت خود را وارد کنید" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  سابقه کاری
                </label>
                <Textarea
                  id="experience"
                  placeholder="لطفا خلاصه‌ای از سوابق کاری خود را بنویسید"
                  className="h-32"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  توضیحات تکمیلی
                </label>
                <Textarea
                  id="message"
                  placeholder="هرگونه توضیحات تکمیلی که فکر می‌کنید مفید است"
                  className="h-32"
                />
              </div>
              
              <Button type="submit" className="w-full bg-[#78156F] hover:bg-[#651260]">
                ارسال درخواست
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">نظرات همکاران ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                text: "همکاری با این مجموعه باعث افزایش کیفیت خدمات مجموعه ما شده و توانسته‌ایم مشتریان بیشتری را جذب کنیم.",
                name: "محمد احمدی",
                role: "عکاس عروسی",
                image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                text: "سرعت بالا و کیفیت فوق‌العاده در ادیت عکس باعث شده تا تمام پروژه‌های خود را به این تیم بسپاریم.",
                name: "سارا محمدی",
                role: "مدیر آتلیه",
                image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                text: "به عنوان یک متخصص ادیت عکس، کار کردن با این تیم فرصت‌های زیادی برای رشد حرفه‌ای من فراهم کرده است.",
                name: "علی رضایی",
                role: "متخصص ادیت عکس",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <svg className="h-8 w-8 text-[#78156F] ml-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover ml-4" 
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[#78156F]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CooperationPage;
