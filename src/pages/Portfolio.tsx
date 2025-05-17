
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioPage = () => {
  // Sample portfolio items data
  const portfolioItems = [
    {
      id: 1,
      category: 'portrait',
      title: 'رتوش پرتره',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      description: 'نمونه رتوش چهره با حفظ حالت طبیعی پوست',
    },
    {
      id: 2,
      category: 'portrait',
      title: 'رتوش پرتره',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      description: 'اصلاح رنگ و کنتراست در پرتره',
    },
    {
      id: 3,
      category: 'wedding',
      title: 'ادیت عروسی',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'ویرایش رنگ و تنظیم کنتراست عکس عروسی',
    },
    {
      id: 4,
      category: 'wedding',
      title: 'ادیت عروسی',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
      description: 'رتوش حرفه‌ای عکس زوج',
    },
    {
      id: 5,
      category: 'skin',
      title: 'رتوش پوست',
      image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraW58ZW58MHx8MHx8fDA%3D',
      description: 'اصلاح بافت پوست و رفع لک',
    },
    {
      id: 6,
      category: 'skin',
      title: 'رتوش پوست',
      image: 'https://images.unsplash.com/photo-1526413300281-a44dc161a09a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNraW58ZW58MHx8MHx8fDA%3D',
      description: 'یکدست کردن تن پوست',
    },
    {
      id: 7,
      category: 'album',
      title: 'طراحی آلبوم',
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxidW18ZW58MHx8MHx8fDA%3D',
      description: 'چیدمان خلاقانه عکس‌ها در آلبوم',
    },
    {
      id: 8,
      category: 'album',
      title: 'طراحی آلبوم',
      image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFsYnVtfGVufDB8fDB8fHww',
      description: 'آلبوم دیجیتال عروسی',
    },
    {
      id: 9,
      category: 'commercial',
      title: 'عکاسی صنعتی',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'رتوش عکس محصول',
    },
    {
      id: 10,
      category: 'commercial',
      title: 'عکاسی صنعتی',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      description: 'ویرایش تصویر محصول',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">نمونه کارهای ما</h1>
            <p className="text-lg text-gray-600 mb-8">
              مجموعه‌ای از بهترین نمونه کارهای ما در زمینه‌های مختلف ویرایش تصویر، رتوش و طراحی آلبوم
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-purple-50">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">همه</TabsTrigger>
                <TabsTrigger value="portrait" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">رتوش پرتره</TabsTrigger>
                <TabsTrigger value="wedding" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">ادیت عروسی</TabsTrigger>
                <TabsTrigger value="skin" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">رتوش پوست</TabsTrigger>
                <TabsTrigger value="album" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">طراحی آلبوم</TabsTrigger>
                <TabsTrigger value="commercial" className="data-[state=active]:bg-[#78156F] data-[state=active]:text-white">عکاسی صنعتی</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {portfolioItems.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            
            {['portrait', 'wedding', 'skin', 'album', 'commercial'].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {portfolioItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#78156F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            آماده همکاری با ما هستید؟
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            برای سفارش خدمات ویرایش تصویر و یا مشاوره رایگان با کارشناسان ما تماس بگیرید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#78156F] hover:bg-white/90">
              درخواست ادیت
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              تماس با ما
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Portfolio Card Component
interface PortfolioCardProps {
  item: {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
  };
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <Button className="bg-[#78156F] hover:bg-[#651260]">
            مشاهده جزئیات
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioPage;
