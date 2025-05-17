
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Camera, AlbumIcon, BrushIcon, Image as ImageIconAlt } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl border-none shadow-md overflow-hidden">
      <CardContent className="flex flex-col items-center p-8">
        <div className="bg-purple-100 p-4 rounded-full mb-5">
          <Icon className="w-10 h-10 text-[#78156F]" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-center text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "رتوش پرتره",
      description: "اصلاح حرفه‌ای پوست، چهره و جزئیات تصویر در عکس‌های پرتره",
      icon: ImageIcon
    },
    {
      title: "ادیت عروسی",
      description: "ویرایش تخصصی عکس‌های عروسی با حفظ جلوه‌های طبیعی و زیبایی‌های لحظه",
      icon: Camera
    },
    {
      title: "رتوش پوست",
      description: "اصلاح و یکدست کردن بافت پوست، رفع لک و تیرگی با حفظ حالت طبیعی",
      icon: BrushIcon
    },
    {
      title: "طراحی آلبوم",
      description: "طراحی و چیدمان حرفه‌ای عکس‌ها در قالب آلبوم دیجیتال و چاپی",
      icon: AlbumIcon
    },
    {
      title: "عکاسی صنعتی",
      description: "ویرایش و رتوش تخصصی عکس‌های محصولات و تصاویر صنعتی",
      icon: ImageIconAlt
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-[#78156F] mb-3">خدمات ما</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات حرفه‌ای ویرایش تصویر</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما با بهره‌گیری از جدیدترین تکنیک‌ها و ابزارهای روز، خدمات متنوع و حرفه‌ای ویرایش عکس را ارائه می‌دهیم.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/services" className="inline-flex items-center justify-center rounded-md bg-[#78156F] py-3 px-8 text-white font-medium hover:bg-[#651260] transition-colors">
            مشاهده همه خدمات
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
