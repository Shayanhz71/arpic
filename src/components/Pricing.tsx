
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface PricingItem {
  service: string;
  deliveryTime: string;
  basePrice: string;
  urgentPrice: string;
  urgentDelivery: string;
}

const Pricing = () => {
  const pricingItems: PricingItem[] = [
    {
      service: "رتوش پرتره ساده",
      deliveryTime: "۲ روز کاری",
      basePrice: "۱۵۰,۰۰۰",
      urgentPrice: "۲۵۰,۰۰۰",
      urgentDelivery: "۱۲ ساعت"
    },
    {
      service: "رتوش پرتره پیشرفته",
      deliveryTime: "۳ روز کاری",
      basePrice: "۲۵۰,۰۰۰",
      urgentPrice: "۳۵۰,۰۰۰",
      urgentDelivery: "۲۴ ساعت"
    },
    {
      service: "ادیت عکس عروسی",
      deliveryTime: "۴ روز کاری",
      basePrice: "۳۰۰,۰۰۰",
      urgentPrice: "۴۵۰,۰۰۰",
      urgentDelivery: "۴۸ ساعت"
    },
    {
      service: "طراحی آلبوم دیجیتال",
      deliveryTime: "۷ روز کاری",
      basePrice: "۱,۲۰۰,۰۰۰",
      urgentPrice: "۱,۸۰۰,۰۰۰",
      urgentDelivery: "۳ روز"
    },
    {
      service: "رتوش عکس محصول",
      deliveryTime: "۲ روز کاری",
      basePrice: "۲۰۰,۰۰۰",
      urgentPrice: "۳۲۰,۰۰۰",
      urgentDelivery: "۲۴ ساعت"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-[#78156F] mb-3">تعرفه خدمات</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">قیمت‌های رقابتی و مقرون به صرفه</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            قیمت‌های پایه خدمات ما به شرح زیر است. برای سفارش‌های ویژه و پروژه‌های بزرگ با ما تماس بگیرید.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#78156F]">
                      <TableHead className="text-white font-bold">نوع سرویس</TableHead>
                      <TableHead className="text-white font-bold">زمان تحویل عادی</TableHead>
                      <TableHead className="text-white font-bold">قیمت عادی (تومان)</TableHead>
                      <TableHead className="text-white font-bold">قیمت فوری (تومان)</TableHead>
                      <TableHead className="text-white font-bold">زمان تحویل فوری</TableHead>
                      <TableHead className="text-white font-bold"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingItems.map((item, index) => (
                      <TableRow 
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell>{item.deliveryTime}</TableCell>
                        <TableCell>{item.basePrice}</TableCell>
                        <TableCell>
                          <span className="text-red-500 font-medium">{item.urgentPrice}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">
                            {item.urgentDelivery}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-[#78156F] hover:bg-[#651260]">
                            سفارش
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-10 text-center">
            <div className="inline-block bg-purple-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-medium">برای سفارش‌های بیش از ۱۰ عدد، ۱۵٪ تخفیف اعمال می‌شود</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-[#78156F] hover:bg-[#651260] text-lg py-6 px-8">
              درخواست سفارش ویژه
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
