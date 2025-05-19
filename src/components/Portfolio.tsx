
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BeforeAfterSlider from './BeforeAfterSlider';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

type Category = 'all' | 'portrait' | 'wedding' | 'children' | 'commercial';

interface PortfolioItem {
  id: number;
  category: Category[];
  beforeImage: string;
  afterImage: string;
  title: string;
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: ['portrait'],
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
      afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      title: "رتوش پرتره"
    },
    {
      id: 2,
      category: ['wedding'],
      beforeImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      afterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
      title: "ادیت عروسی"
    },
    {
      id: 3,
      category: ['children'],
      beforeImage: "https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=1000",
      afterImage: "https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=1000&auto=format&fit=crop",
      title: "رتوش کودک"
    },
    {
      id: 4,
      category: ['commercial'],
      beforeImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000",
      afterImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      title: "تصویر محصول"
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(activeTab));

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-[#78156F] mb-3">نمونه کارهای آرپیک</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نمونه کارهای ما</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            بخشی از تجربیات و نمونه کارهای اخیر ما را مشاهده کنید.
            با نگه داشتن و حرکت روی تصاویر، تفاوت قبل و بعد از ویرایش را ببینید.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full mb-12"
          onValueChange={(value) => setActiveTab(value as Category)}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="portrait">پرتره</TabsTrigger>
              <TabsTrigger value="wedding">عروسی</TabsTrigger>
              <TabsTrigger value="children">کودک</TabsTrigger>
              <TabsTrigger value="commercial">تجاری</TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <TabsContent value="all" className="mt-0">
              <Carousel 
                opts={{ 
                  align: "start", 
                  loop: true,
                  dragFree: true // Allow manual dragging only when not interacting with the slider
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredItems.map((item) => (
                    <CarouselItem key={item.id} className="px-2 md:px-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <BeforeAfterSlider
                          beforeImage={item.beforeImage}
                          afterImage={item.afterImage}
                          heading={item.title}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static transform-none bg-[#78156F] text-white hover:bg-[#651260] hover:text-white" />
                  <CarouselNext className="relative static transform-none bg-[#78156F] text-white hover:bg-[#651260] hover:text-white" />
                </div>
              </Carousel>
            </TabsContent>

            {['portrait', 'wedding', 'children', 'commercial'].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Carousel 
                  opts={{ 
                    align: "start", 
                    loop: true,
                    dragFree: true // Allow manual dragging only when not interacting with the slider
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {filteredItems.map((item) => (
                      <CarouselItem key={item.id} className="px-2 md:px-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <BeforeAfterSlider
                            beforeImage={item.beforeImage}
                            afterImage={item.afterImage}
                            heading={item.title}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static transform-none bg-[#78156F] text-white hover:bg-[#651260] hover:text-white" />
                    <CarouselNext className="relative static transform-none bg-[#78156F] text-white hover:bg-[#651260] hover:text-white" />
                  </div>
                </Carousel>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
