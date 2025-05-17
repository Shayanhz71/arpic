
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "چه نوع فایل‌هایی را می‌توانم آپلود کنم؟",
      answer: "شما می‌توانید فایل‌های با فرمت JPG، PNG و TIFF را آپلود کنید. حداکثر سایز هر فایل ۲۰ مگابایت است. برای بهترین نتیجه، تصاویر با کیفیت بالا (حداقل ۳۰۰DPI) ارسال کنید."
    },
    {
      question: "زمان تحویل سفارش‌ها چقدر است؟",
      answer: "زمان تحویل بسته به نوع خدمات و تعداد تصاویر متفاوت است. برای سفارش‌های عادی، بین ۲ تا ۷ روز کاری زمان نیاز است. برای سفارش‌های فوری، این زمان به ۱۲ ساعت تا ۳ روز کاری کاهش می‌یابد. زمان دقیق در جدول تعرفه‌ها قابل مشاهده است."
    },
    {
      question: "آیا امکان اصلاح مجدد عکس‌ها وجود دارد؟",
      answer: "بله، ما یک مرحله اصلاح رایگان برای هر سفارش ارائه می‌دهیم. پس از دریافت عکس‌های ویرایش شده، تا ۷ روز فرصت دارید درخواست اصلاحات جزئی را ارسال کنید."
    },
    {
      question: "نحوه پرداخت هزینه سفارش چگونه است؟",
      answer: "پرداخت از طریق درگاه‌های بانکی معتبر ایرانی مانند زرین‌پال انجام می‌شود. تمامی پرداخت‌ها به صورت آنلاین و امن هستند و بلافاصله پس از پرداخت، سفارش شما پردازش می‌شود."
    },
    {
      question: "آیا عکس‌های من محرمانه باقی می‌مانند؟",
      answer: "بله، ما به حریم خصوصی شما احترام می‌گذاریم. تمامی تصاویر دریافتی محرمانه تلقی می‌شوند و بدون اجازه صریح شما، از آن‌ها استفاده نخواهیم کرد. پس از تحویل نهایی، فایل‌های اصلی طبق سیاست حفظ حریم خصوصی ما از سرورها حذف می‌شوند."
    },
    {
      question: "آیا می‌توانم برای پروژه‌های بزرگ تخفیف دریافت کنم؟",
      answer: "بله، برای سفارش‌های بیش از ۱۰ تصویر، ۱۵٪ تخفیف اعمال می‌شود. همچنین برای آتلیه‌ها و عکاسان حرفه‌ای که همکاری مستمر دارند، بسته‌های ویژه با قیمت‌های مناسب‌تر ارائه می‌دهیم. برای اطلاعات بیشتر با ما تماس بگیرید."
    },
    {
      question: "چطور می‌توانم وضعیت سفارشم را پیگیری کنم؟",
      answer: "پس از ثبت سفارش، یک کد رهگیری به شما ارائه می‌شود. با استفاده از این کد در بخش «پیگیری سفارش» در سایت، می‌توانید وضعیت سفارش خود را مشاهده کنید. همچنین در هر مرحله از پردازش سفارش، یک ایمیل اطلاع‌رسانی برای شما ارسال می‌شود."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-[#78156F] mb-3">سوالات متداول</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">پاسخ به سوالات رایج شما</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            پاسخ سوالات رایج شما درباره خدمات ویرایش عکس ما را در اینجا بیابید.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-none overflow-hidden">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-100">
                    <AccordionTrigger className="px-5 py-4 hover:bg-gray-50 rounded-t-lg text-right font-semibold text-gray-800">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <div className="mt-10 text-center">
            <div className="max-w-xl mx-auto bg-[#78156F] rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">سوالات بیشتری دارید؟</h3>
              <p className="mb-4">
                تیم پشتیبانی ما آماده پاسخگویی به تمامی سوالات شما است.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white py-2 px-6 text-[#78156F] font-medium hover:bg-gray-100 transition-colors"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
