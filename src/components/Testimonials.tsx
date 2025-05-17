
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  content: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "سارا محمدی",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "عکاس پرتره",
      content: "با استفاده از خدمات ویرایش عکس شما، کیفیت کارهای من به شکل قابل توجهی افزایش پیدا کرد. مشتریانم از نتایج راضی هستند و من زمان بیشتری برای عکاسی دارم."
    },
    {
      id: 2,
      name: "علی رضایی",
      avatar: "https://i.pravatar.cc/150?img=2",
      role: "صاحب آتلیه عکاسی",
      content: "همکاری با تیم شما باعث شد حجم کاری آتلیه ما افزایش پیدا کند. کیفیت رتوش‌ها عالی است و سرعت تحویل هم فوق‌العاده."
    },
    {
      id: 3,
      name: "مریم کریمی",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "عکاس عروسی",
      content: "رتوش حرفه‌ای و سریع شما به من کمک کرد تا بتوانم در زمان کوتاه‌تری آلبوم‌های عروسی را تحویل دهم. از صمیم قلب ممنونم."
    },
    {
      id: 4,
      name: "امیر حسینی",
      avatar: "https://i.pravatar.cc/150?img=4",
      role: "عکاس محصول",
      content: "کیفیت ویرایش عکس‌های محصول توسط تیم شما بی‌نظیر است. مشتریان من از نتیجه کار بسیار راضی هستند."
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">نظرات مشتریان</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          ببینید مشتریان ما درباره خدمات ویرایش عکس ما چه می‌گویند.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Avatar className="w-16 h-16 border-2 border-blue-100">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>

                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-600">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
