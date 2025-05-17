
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';

const EditRequestPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUrgent, setIsUrgent] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileArray]);
    }
  };
  
  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast({
        title: "خطا در ارسال سفارش",
        description: "لطفاً حداقل یک تصویر بارگذاری کنید.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate file upload with progress
    setIsUploading(true);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Show success message
          toast({
            title: "سفارش شما با موفقیت ثبت شد",
            description: "کارشناسان ما به زودی با شما تماس خواهند گرفت.",
          });
          
          // Reset form
          setFiles([]);
          setUploadProgress(0);
          return 0;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">درخواست ادیت عکس</h1>
            <p className="text-lg text-gray-600 mb-8">
              برای ثبت سفارش ویرایش عکس، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
            </p>
          </div>
        </div>
      </section>
      
      {/* Order Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 rounded-none rounded-t-lg bg-[#4CAF50]">
                    <TabsTrigger 
                      value="upload" 
                      className="data-[state=active]:bg-white data-[state=active]:text-[#4CAF50] data-[state=active]:shadow-none text-white"
                    >
                      آپلود عکس
                    </TabsTrigger>
                    <TabsTrigger 
                      value="link" 
                      className="data-[state=active]:bg-white data-[state=active]:text-[#4CAF50] data-[state=active]:shadow-none text-white"
                    >
                      ارسال لینک
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload" className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="service-type" className="mb-2 block">نوع خدمات مورد نیاز</Label>
                        <Select value={orderType} onValueChange={setOrderType}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">رتوش پرتره</SelectItem>
                            <SelectItem value="wedding">ادیت عکس عروسی</SelectItem>
                            <SelectItem value="skin">رتوش پوست</SelectItem>
                            <SelectItem value="album">طراحی آلبوم</SelectItem>
                            <SelectItem value="commercial">عکاسی صنعتی</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="mb-2 block">نام و نام خانوادگی</Label>
                          <Input id="name" placeholder="نام خود را وارد کنید" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="mb-2 block">شماره تماس</Label>
                          <Input id="phone" placeholder="شماره تماس خود را وارد کنید" type="tel" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="mb-2 block">ایمیل</Label>
                          <Input id="email" placeholder="ایمیل خود را وارد کنید" type="email" />
                        </div>
                        <div>
                          <Label htmlFor="quantity" className="mb-2 block">تعداد عکس</Label>
                          <Input id="quantity" placeholder="تعداد عکس‌ها را وارد کنید" type="number" min="1" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="description" className="mb-2 block">توضیحات</Label>
                        <Textarea 
                          id="description" 
                          placeholder="توضیحات لازم برای ویرایش تصاویر را وارد کنید" 
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">آپلود تصاویر</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <input
                            type="file"
                            id="file-upload"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <Label htmlFor="file-upload" className="cursor-pointer">
                            <div className="flex flex-col items-center space-y-4">
                              <div className="p-4 bg-green-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                              </div>
                              <div className="space-y-2">
                                <p className="text-xl font-medium text-gray-700">عکس‌های خود را اینجا بکشید و رها کنید</p>
                                <p className="text-sm text-gray-500">یا برای انتخاب فایل کلیک کنید</p>
                                <p className="text-xs text-gray-500">فرمت‌های مجاز: JPG، PNG و TIFF (حداکثر ۲۰ مگابایت)</p>
                              </div>
                              <Button type="button" variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white">
                                انتخاب فایل
                              </Button>
                            </div>
                          </Label>
                        </div>
                        
                        {/* File list */}
                        {files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="font-medium">فایل‌های انتخاب شده:</p>
                            <div className="space-y-2">
                              {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border">
                                  <div className="flex items-center space-x-3 space-x-reverse">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                    <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteFile(index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Upload progress */}
                      {isUploading && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>در حال آپلود...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-[#4CAF50] h-2.5 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Switch 
                          id="urgent-mode" 
                          checked={isUrgent}
                          onCheckedChange={setIsUrgent}
                        />
                        <Label htmlFor="urgent-mode">سفارش فوری (با هزینه بیشتر)</Label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#4CAF50] hover:bg-[#388E3C] py-6 text-lg"
                        disabled={isUploading}
                      >
                        ثبت سفارش
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="link" className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="service-type-link" className="mb-2 block">نوع خدمات مورد نیاز</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">رتوش پرتره</SelectItem>
                            <SelectItem value="wedding">ادیت عکس عروسی</SelectItem>
                            <SelectItem value="skin">رتوش پوست</SelectItem>
                            <SelectItem value="album">طراحی آلبوم</SelectItem>
                            <SelectItem value="commercial">عکاسی صنعتی</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name-link" className="mb-2 block">نام و نام خانوادگی</Label>
                          <Input id="name-link" placeholder="نام خود را وارد کنید" />
                        </div>
                        <div>
                          <Label htmlFor="phone-link" className="mb-2 block">شماره تماس</Label>
                          <Input id="phone-link" placeholder="شماره تماس خود را وارد کنید" type="tel" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email-link" className="mb-2 block">ایمیل</Label>
                          <Input id="email-link" placeholder="ایمیل خود را وارد کنید" type="email" />
                        </div>
                        <div>
                          <Label htmlFor="quantity-link" className="mb-2 block">تعداد عکس</Label>
                          <Input id="quantity-link" placeholder="تعداد عکس‌ها را وارد کنید" type="number" min="1" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="image-link" className="mb-2 block">لینک تصاویر</Label>
                        <Input id="image-link" placeholder="لینک Google Drive یا Dropbox خود را وارد کنید" />
                        <p className="text-xs text-gray-500 mt-1">
                          می‌توانید لینک Google Drive، Dropbox یا هر سرویس اشتراک‌گذاری دیگری را وارد کنید.
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="description-link" className="mb-2 block">توضیحات</Label>
                        <Textarea 
                          id="description-link" 
                          placeholder="توضیحات لازم برای ویرایش تصاویر را وارد کنید" 
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Switch id="urgent-mode-link" />
                        <Label htmlFor="urgent-mode-link">سفارش فوری (با هزینه بیشتر)</Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#388E3C] py-6 text-lg">
                        ثبت سفارش
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Pricing Summary */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">تعرفه‌های ما</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#4CAF50] text-white">
                      <th className="py-3 px-4 text-right">نوع سرویس</th>
                      <th className="py-3 px-4 text-right">قیمت پایه (تومان)</th>
                      <th className="py-3 px-4 text-right">قیمت فوری (تومان)</th>
                      <th className="py-3 px-4 text-right">زمان تحویل عادی</th>
                      <th className="py-3 px-4 text-right">زمان تحویل فوری</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border-b">رتوش پرتره ساده</td>
                      <td className="py-3 px-4 border-b">۱۵۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b text-red-500">۲۵۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b">۲ روز کاری</td>
                      <td className="py-3 px-4 border-b">۱۲ ساعت</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b">رتوش پرتره پیشرفته</td>
                      <td className="py-3 px-4 border-b">۲۵۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b text-red-500">۳۵۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b">۳ روز کاری</td>
                      <td className="py-3 px-4 border-b">۲۴ ساعت</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border-b">ادیت عکس عروسی</td>
                      <td className="py-3 px-4 border-b">۳۰۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b text-red-500">۴۵۰,۰۰۰</td>
                      <td className="py-3 px-4 border-b">۴ روز کاری</td>
                      <td className="py-3 px-4 border-b">۴۸ ساعت</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                * قیمت‌ها برای هر تصویر محاسبه می‌شود و برای سفارش‌های بیش از ۱۰ عدد، ۱۵٪ تخفیف اعمال می‌گردد.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EditRequestPage;
