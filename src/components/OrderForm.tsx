
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const OrderForm = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const [orderType, setOrderType] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileArray]);
    }
  };
  
  // Handle file deletion
  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  // Handle form submission
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
    <section id="order" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">ثبت سفارش</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          برای ثبت سفارش ویرایش عکس، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
        </p>
        
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 rounded-none rounded-t-lg bg-[#78156F]">
                <TabsTrigger 
                  value="upload" 
                  className="data-[state=active]:bg-white data-[state=active]:text-[#78156F] data-[state=active]:shadow-none text-white"
                >
                  آپلود عکس
                </TabsTrigger>
                <TabsTrigger 
                  value="link" 
                  className="data-[state=active]:bg-white data-[state=active]:text-[#78156F] data-[state=active]:shadow-none text-white"
                >
                  ارسال لینک
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="service-type" className="mb-2 block">نوع خدمات مورد نیاز</Label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="portrait">رتوش پرتره</SelectItem>
                          <SelectItem value="wedding">ادیت عکس عروسی</SelectItem>
                          <SelectItem value="skin">رتوش پوست</SelectItem>
                          <SelectItem value="album">طراحی آلبوم</SelectItem>
                          <SelectItem value="commercial">عکاسی صنعتی</SelectItem>
                        </SelectGroup>
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
                          <div className="p-4 bg-purple-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xl font-medium text-gray-700">عکس‌های خود را اینجا بکشید و رها کنید</p>
                            <p className="text-sm text-gray-500">یا برای انتخاب فایل کلیک کنید</p>
                            <p className="text-xs text-gray-500">فرمت‌های مجاز: JPG، PNG و TIFF (حداکثر ۲۰ مگابایت)</p>
                          </div>
                          <Button type="button" variant="outline" className="border-[#78156F] text-[#78156F] hover:bg-[#78156F] hover:text-white">
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
                            <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                              <div className="flex items-center space-x-3 space-x-reverse">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#78156F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                          className="bg-[#78156F] h-2.5 rounded-full transition-all duration-300"
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
                    className="w-full bg-[#78156F] hover:bg-[#651260]"
                    disabled={isUploading}
                  >
                    ثبت سفارش
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="link" className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="service-type-link" className="mb-2 block">نوع خدمات مورد نیاز</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="portrait">رتوش پرتره</SelectItem>
                          <SelectItem value="wedding">ادیت عکس عروسی</SelectItem>
                          <SelectItem value="skin">رتوش پوست</SelectItem>
                          <SelectItem value="album">طراحی آلبوم</SelectItem>
                          <SelectItem value="commercial">عکاسی صنعتی</SelectItem>
                        </SelectGroup>
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
                  
                  <Button type="submit" className="w-full bg-[#78156F] hover:bg-[#651260]">
                    ثبت سفارش
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
