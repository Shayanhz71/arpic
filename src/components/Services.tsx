
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Camera, Album, BrushIcon, Image } from "lucide-react";

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
    <Card className="transition-all duration-300 hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-6">
        <div className="bg-purple-100 p-3 rounded-full mb-4">
          <Icon className="w-8 h-8 text-[#78156F]" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
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
      icon: Album
    },
    {
      title: "عکاسی صنعتی",
      description: "ویرایش و رتوش تخصصی عکس‌های محصولات و تصاویر صنعتی",
      icon: Image
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">خدمات ما</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          ما با بهره‌گیری از جدیدترین تکنیک‌ها و ابزارهای روز، خدمات متنوع و حرفه‌ای ویرایش عکس را ارائه می‌دهیم.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
