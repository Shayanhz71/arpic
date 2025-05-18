
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlbumIcon, ImageIcon, Filter, Save, X } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

// Sample product data
const products = [
  {
    id: 1,
    name: 'آلبوم فریمی عروسی',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1543589923-d58d9c3baf10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'album',
    type: 'framed',
    occasion: 'wedding'
  },
  {
    id: 2,
    name: 'آلبوم دیجیتال کودک',
    price: 550000,
    image: 'https://images.unsplash.com/photo-1574848972185-ee8498ab9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'album',
    type: 'digital',
    occasion: 'children'
  },
  {
    id: 3,
    name: 'قاب چوبی سفید',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1538385842171-6c5e1f13c858?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'frame',
    color: 'white'
  },
  {
    id: 4,
    name: 'قاب چوبی مشکی',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1537640378801-f9d933e890b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'frame',
    color: 'black'
  },
  {
    id: 5,
    name: 'آلبوم فریمی فارغ‌التحصیلی',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1532153259564-a5f24f254de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'album',
    type: 'framed',
    occasion: 'graduation'
  },
  {
    id: 6,
    name: 'آلبوم دیجیتال خانوادگی',
    price: 490000,
    image: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'album',
    type: 'digital',
    occasion: 'family'
  },
  {
    id: 7,
    name: 'قاب چوبی طبیعی',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'frame',
    color: 'natural'
  },
  {
    id: 8,
    name: 'آلبوم دیجیتال عروسی',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1507217633297-c9815ce2ac5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'album',
    type: 'digital',
    occasion: 'wedding'
  }
];

// Format price in Persian style
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان";
};

const ShopPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeFilters, setActiveFilters] = useState<{
    category: string;
    type?: string;
    occasion?: string;
    color?: string;
    minPrice?: number;
    maxPrice?: number;
  }>({ category: 'all' });
  
  const [tempFilters, setTempFilters] = useState<{
    category: string;
    type?: string;
    occasion?: string;
    color?: string;
    minPrice?: number;
    maxPrice?: number;
  }>({ category: 'all' });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    if (activeTab === 'all') return true;
    if (activeTab === 'albums') return product.category === 'album';
    if (activeTab === 'frames') return product.category === 'frame';
    
    return true;
  }).filter(product => {
    if (activeFilters.category === 'all') return true;
    
    // Album type filters
    if (activeFilters.type && product.type !== activeFilters.type) return false;
    
    // Occasion filters
    if (activeFilters.occasion && product.occasion !== activeFilters.occasion) return false;
    
    // Frame color filters
    if (activeFilters.color && product.color !== activeFilters.color) return false;
    
    // Price range filters
    if (activeFilters.minPrice && product.price < activeFilters.minPrice) return false;
    if (activeFilters.maxPrice && product.price > activeFilters.maxPrice) return false;
    
    return true;
  });

  const handleFilterChange = (filterType: string, value: string | number) => {
    setTempFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const applyFilters = () => {
    setActiveFilters({...tempFilters});
    toast({
      title: "فیلترها اعمال شدند",
      description: "محصولات بر اساس فیلترهای انتخاب شده نمایش داده می‌شوند.",
    });
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setTempFilters({ category: 'all' });
    setActiveFilters({ category: 'all' });
    toast({
      title: "فیلترها بازنشانی شدند",
      description: "تمام فیلترها حذف شدند.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-[#78156F]">فروشگاه</span> محصولات
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            آلبوم‌ها و قاب‌های با کیفیت برای نمایش بهتر خاطرات و عکس‌های شما
          </p>
        </div>
      </section>
      
      {/* Shop Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all" className="text-base">همه محصولات</TabsTrigger>
                <TabsTrigger value="albums" className="text-base">آلبوم‌ها</TabsTrigger>
                <TabsTrigger value="frames" className="text-base">قاب‌ها</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Filter Toggle Button - Mobile */}
              <div className="md:hidden flex justify-between items-center mb-4">
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="h-4 w-4" />
                  فیلترها
                  {Object.keys(activeFilters).length > 1 && (
                    <span className="bg-[#78156F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {Object.keys(activeFilters).length - 1}
                    </span>
                  )}
                </Button>
                
                <div className="text-sm text-gray-500">
                  {filteredProducts.length} محصول
                </div>
              </div>
              
              {/* Filters Sidebar */}
              <div className={`${isFilterOpen ? 'fixed inset-0 z-50 flex flex-col bg-white p-6' : 'hidden md:block'} bg-gray-50 p-4 rounded-lg`}>
                {/* Mobile Filter Header */}
                {isFilterOpen && (
                  <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="font-bold text-lg">فیلترها</h3>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                )}
                
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2 hidden md:block">فیلترها</h3>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">محدوده قیمت</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">از</label>
                      <input 
                        type="number" 
                        placeholder="حداقل قیمت" 
                        value={tempFilters.minPrice || ''}
                        onChange={(e) => handleFilterChange('minPrice', Number(e.target.value) || undefined)}
                        className="w-full p-2 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">تا</label>
                      <input 
                        type="number" 
                        placeholder="حداکثر قیمت" 
                        value={tempFilters.maxPrice || ''}
                        onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value) || undefined)}
                        className="w-full p-2 border rounded text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Album Type Filters - Show only when Albums tab is selected */}
                {(activeTab === "albums" || activeTab === "all") && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">نوع آلبوم</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="all-types" 
                          name="albumType" 
                          checked={!tempFilters.type} 
                          onChange={() => handleFilterChange('type', '')}
                          className="ml-2"
                        />
                        <label htmlFor="all-types">همه</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="digital" 
                          name="albumType" 
                          checked={tempFilters.type === 'digital'} 
                          onChange={() => handleFilterChange('type', 'digital')}
                          className="ml-2"
                        />
                        <label htmlFor="digital">دیجیتال</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="framed" 
                          name="albumType" 
                          checked={tempFilters.type === 'framed'} 
                          onChange={() => handleFilterChange('type', 'framed')}
                          className="ml-2"
                        />
                        <label htmlFor="framed">فریمی</label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Album Occasion Filters - Show only when Albums tab is selected */}
                {(activeTab === "albums" || activeTab === "all") && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">مناسبت</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="all-occasions" 
                          name="occasion" 
                          checked={!tempFilters.occasion} 
                          onChange={() => handleFilterChange('occasion', '')}
                          className="ml-2"
                        />
                        <label htmlFor="all-occasions">همه</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="wedding" 
                          name="occasion" 
                          checked={tempFilters.occasion === 'wedding'} 
                          onChange={() => handleFilterChange('occasion', 'wedding')}
                          className="ml-2"
                        />
                        <label htmlFor="wedding">عروسی</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="children" 
                          name="occasion" 
                          checked={tempFilters.occasion === 'children'} 
                          onChange={() => handleFilterChange('occasion', 'children')}
                          className="ml-2"
                        />
                        <label htmlFor="children">کودک</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="family" 
                          name="occasion" 
                          checked={tempFilters.occasion === 'family'} 
                          onChange={() => handleFilterChange('occasion', 'family')}
                          className="ml-2"
                        />
                        <label htmlFor="family">خانوادگی</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="graduation" 
                          name="occasion" 
                          checked={tempFilters.occasion === 'graduation'} 
                          onChange={() => handleFilterChange('occasion', 'graduation')}
                          className="ml-2"
                        />
                        <label htmlFor="graduation">فارغ‌التحصیلی</label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Frame Color Filters - Show only when Frames tab is selected */}
                {(activeTab === "frames" || activeTab === "all") && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">رنگ قاب</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="all-colors" 
                          name="frameColor" 
                          checked={!tempFilters.color} 
                          onChange={() => handleFilterChange('color', '')}
                          className="ml-2"
                        />
                        <label htmlFor="all-colors">همه</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="white" 
                          name="frameColor" 
                          checked={tempFilters.color === 'white'} 
                          onChange={() => handleFilterChange('color', 'white')}
                          className="ml-2"
                        />
                        <label htmlFor="white">سفید</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="black" 
                          name="frameColor" 
                          checked={tempFilters.color === 'black'} 
                          onChange={() => handleFilterChange('color', 'black')}
                          className="ml-2"
                        />
                        <label htmlFor="black">مشکی</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="natural" 
                          name="frameColor" 
                          checked={tempFilters.color === 'natural'} 
                          onChange={() => handleFilterChange('color', 'natural')}
                          className="ml-2"
                        />
                        <label htmlFor="natural">طبیعی</label>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Filter Action Buttons */}
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button 
                    onClick={applyFilters} 
                    className="bg-[#78156F] hover:bg-[#651260] flex-1 gap-2"
                  >
                    <Save className="h-4 w-4" />
                    اعمال فیلترها
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                    className="flex-1"
                  >
                    حذف فیلترها
                  </Button>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="col-span-1 md:col-span-3">
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Card key={product.id} className="overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-48 w-full object-cover" 
                          />
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              {product.category === 'album' ? (
                                <AlbumIcon className="h-4 w-4 text-[#78156F] ml-2" />
                              ) : (
                                <ImageIcon className="h-4 w-4 text-[#78156F] ml-2" />
                              )}
                              <p className="text-sm text-gray-500">
                                {product.category === 'album' ? 'آلبوم' : 'قاب'}
                              </p>
                            </div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-[#78156F] font-bold mt-2">
                              {formatPrice(product.price)}
                            </p>
                            <Button className="w-full mt-4 bg-[#78156F] hover:bg-[#651260]">
                              افزودن به سبد خرید
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-10">
                        <p className="text-gray-500">محصولی با این فیلترها یافت نشد</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="albums" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Card key={product.id} className="overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-48 w-full object-cover" 
                          />
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <AlbumIcon className="h-4 w-4 text-[#78156F] ml-2" />
                              <p className="text-sm text-gray-500">آلبوم</p>
                            </div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-[#78156F] font-bold mt-2">
                              {formatPrice(product.price)}
                            </p>
                            <Button className="w-full mt-4 bg-[#78156F] hover:bg-[#651260]">
                              افزودن به سبد خرید
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-10">
                        <p className="text-gray-500">محصولی با این فیلترها یافت نشد</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="frames" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Card key={product.id} className="overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-48 w-full object-cover" 
                          />
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <ImageIcon className="h-4 w-4 text-[#78156F] ml-2" />
                              <p className="text-sm text-gray-500">قاب</p>
                            </div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-[#78156F] font-bold mt-2">
                              {formatPrice(product.price)}
                            </p>
                            <Button className="w-full mt-4 bg-[#78156F] hover:bg-[#651260]">
                              افزودن به سبد خرید
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-10">
                        <p className="text-gray-500">محصولی با این فیلترها یافت نشد</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
