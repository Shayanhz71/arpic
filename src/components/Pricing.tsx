
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">تعرفه خدمات</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          قیمت‌های پایه خدمات ما به شرح زیر است. برای سفارش‌های ویژه و پروژه‌های بزرگ با ما تماس بگیرید.
        </p>

        <div className="overflow-x-auto rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-600">
                <TableHead className="text-white">نوع سرویس</TableHead>
                <TableHead className="text-white">زمان تحویل عادی</TableHead>
                <TableHead className="text-white">قیمت عادی (تومان)</TableHead>
                <TableHead className="text-white">قیمت فوری (تومان)</TableHead>
                <TableHead className="text-white">زمان تحویل فوری</TableHead>
                <TableHead className="text-white"></TableHead>
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
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      سفارش
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">برای سفارش‌های بیش از ۱۰ عدد، ۱۵٪ تخفیف اعمال می‌شود</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            درخواست سفارش ویژه
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
