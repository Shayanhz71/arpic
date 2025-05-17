
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BeforeAfterSlider from './BeforeAfterSlider';

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
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">نمونه کارها</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          بخشی از تجربیات و نمونه کارهای اخیر ما را مشاهده کنید.
          با نگه داشتن و حرکت روی تصاویر، تفاوت قبل و بعد از ویرایش را ببینید.
        </p>
        
        <Tabs 
          defaultValue="all" 
          className="w-full mb-12"
          onValueChange={(value) => setActiveTab(value as Category)}
        >
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="portrait">پرتره</TabsTrigger>
              <TabsTrigger value="wedding">عروسی</TabsTrigger>
              <TabsTrigger value="children">کودک</TabsTrigger>
              <TabsTrigger value="commercial">تجاری</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-10">
              {filteredItems.map((item) => (
                <div key={item.id} className="mb-12">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    heading={item.title}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {['portrait', 'wedding', 'children', 'commercial'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 gap-10">
                {filteredItems.map((item) => (
                  <div key={item.id} className="mb-12">
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      heading={item.title}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
