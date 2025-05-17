
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(3, { message: "نام و نام خانوادگی باید حداقل ۳ حرف باشد" }),
  email: z.string().email({ message: "ایمیل معتبر نیست" }),
  phone: z.string().min(11, { message: "شماره تماس باید حداقل ۱۱ رقم باشد" }),
  serviceType: z.string(),
  deliverySpeed: z.enum(["normal", "fast"]),
  imageCount: z.string(),
  description: z.string().optional(),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "پذیرش قوانین الزامی است" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "portrait",
      deliverySpeed: "normal",
      imageCount: "1",
      description: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Simulate payment and order processing
    if (step < 5) {
      setStep(step + 1);
    }
    
    // In the payment step, show success and generate tracking code
    if (step === 4) {
      setTimeout(() => {
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        setTrackingCode(randomCode.toString());
        setOrderCompleted(true);
        toast({
          title: "سفارش با موفقیت ثبت شد",
          description: `کد رهگیری: ${randomCode}`,
        });
      }, 1500);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Define steps
  const steps = [
    { id: 1, name: "اطلاعات شخصی" },
    { id: 2, name: "انتخاب خدمت" },
    { id: 3, name: "آپلود تصاویر" },
    { id: 4, name: "توضیحات" },
    { id: 5, name: "پرداخت" },
  ];

  return (
    <section id="order" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">ثبت سفارش</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          مراحل سفارش خدمات ویرایش عکس را دنبال کنید و در کوتاه‌ترین زمان ممکن، عکس‌های ویرایش شده خود را دریافت نمایید.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {steps.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex flex-col items-center ${
                    i < steps.length - 1 ? "w-full" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      s.id === step
                        ? "bg-blue-600 text-white"
                        : s.id < step
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s.id < step ? (
                      "✓"
                    ) : (
                      s.id
                    )}
                  </div>
                  <div className="text-xs mt-2 text-center">{s.name}</div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-1 w-full mt-2 ${
                        s.id < step ? "bg-green-500" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{steps.find(s => s.id === step)?.name}</CardTitle>
              <CardDescription>
                {step === 1 && "لطفا اطلاعات شخصی خود را وارد کنید"}
                {step === 2 && "نوع خدمت مورد نظر خود را انتخاب کنید"}
                {step === 3 && "فایل‌های تصویر خود را آپلود کنید"}
                {step === 4 && "توضیحات و جزئیات سفارش را وارد کنید"}
                {step === 5 && "اطلاعات پرداخت را وارد کنید"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <>
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>نام و نام خانوادگی</FormLabel>
                            <FormControl>
                              <Input placeholder="نام و نام خانوادگی خود را وارد کنید" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ایمیل</FormLabel>
                            <FormControl>
                              <Input placeholder="ایمیل خود را وارد کنید" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>شماره تماس</FormLabel>
                            <FormControl>
                              <Input placeholder="شماره موبایل خود را وارد کنید" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  {step === 2 && (
                    <>
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>نوع خدمت</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="نوع خدمت را انتخاب کنید" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="portrait">رتوش پرتره</SelectItem>
                                <SelectItem value="wedding">ادیت عکس عروسی</SelectItem>
                                <SelectItem value="children">رتوش عکس کودک</SelectItem>
                                <SelectItem value="commercial">ادیت عکس محصول</SelectItem>
                                <SelectItem value="album">طراحی آلبوم</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="deliverySpeed"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>سرعت تحویل</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-3 space-x-reverse">
                                  <RadioGroupItem value="normal" id="normal" />
                                  <FormLabel htmlFor="normal" className="font-normal">
                                    تحویل عادی
                                  </FormLabel>
                                </div>
                                <div className="flex items-center space-x-3 space-x-reverse">
                                  <RadioGroupItem value="fast" id="fast" />
                                  <FormLabel htmlFor="fast" className="font-normal">
                                    تحویل فوری (با هزینه بیشتر)
                                  </FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="imageCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>تعداد تصاویر</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="تعداد تصاویر را انتخاب کنید" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">۱ عدد</SelectItem>
                                <SelectItem value="2-5">۲ تا ۵ عدد</SelectItem>
                                <SelectItem value="6-10">۶ تا ۱۰ عدد</SelectItem>
                                <SelectItem value="11-20">۱۱ تا ۲۰ عدد</SelectItem>
                                <SelectItem value="20+">بیش از ۲۰ عدد</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                        <p className="mt-2 text-sm text-gray-500">
                          برای بارگذاری فایل‌ها کلیک کنید یا فایل‌ها را بکشید و اینجا رها کنید
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          فرمت‌های مجاز: JPG، PNG، TIFF تا حداکثر ۱۰ مگابایت
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*"
                        />
                        <button
                          type="button"
                          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          onClick={() => document.querySelector('input[type="file"]')?.click()}
                        >
                          انتخاب فایل
                        </button>
                      </div>
                      <div className="text-sm text-gray-500 text-center">
                        فایل‌های انتخاب شده: ۰
                      </div>
                    </div>
                  )}
                  
                  {step === 4 && (
                    <>
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>توضیحات سفارش</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="لطفا توضیحات و خواسته‌های خود را بنویسید..."
                                className="h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="acceptTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-x-reverse space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                قوانین و مقررات سایت را می‌پذیرم
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  {step === 5 && (
                    <>
                      {!orderCompleted ? (
                        <div className="space-y-6">
                          <div className="border rounded-lg p-4">
                            <h3 className="font-medium text-lg mb-2">خلاصه سفارش</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>نوع خدمت:</span>
                                <span>{form.getValues("serviceType") === "portrait" ? "رتوش پرتره" : 
                                      form.getValues("serviceType") === "wedding" ? "ادیت عکس عروسی" :
                                      form.getValues("serviceType") === "children" ? "رتوش عکس کودک" :
                                      form.getValues("serviceType") === "commercial" ? "ادیت عکس محصول" : "طراحی آلبوم"}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>تعداد تصاویر:</span>
                                <span>{form.getValues("imageCount")}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>نوع تحویل:</span>
                                <span>{form.getValues("deliverySpeed") === "normal" ? "عادی" : "فوری"}</span>
                              </div>
                              <div className="border-t my-2"></div>
                              <div className="flex justify-between font-medium">
                                <span>مبلغ قابل پرداخت:</span>
                                <span>۳۵۰,۰۰۰ تومان</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <h3 className="font-medium text-lg mb-4">اطلاعات پرداخت</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="col-span-2">
                                <FormItem>
                                  <FormLabel>شماره کارت</FormLabel>
                                  <FormControl>
                                    <Input placeholder="xxxx-xxxx-xxxx-xxxx" />
                                  </FormControl>
                                </FormItem>
                              </div>
                              <div>
                                <FormItem>
                                  <FormLabel>تاریخ انقضا</FormLabel>
                                  <FormControl>
                                    <Input placeholder="XX/XX" />
                                  </FormControl>
                                </FormItem>
                              </div>
                              <div>
                                <FormItem>
                                  <FormLabel>CVV2</FormLabel>
                                  <FormControl>
                                    <Input placeholder="XXX" />
                                  </FormControl>
                                </FormItem>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex items-center">
                              <img src="https://www.zarinpal.com/assets/images/logo-white.svg" alt="زرین پال" className="h-8 ml-2" />
                              <span className="text-sm text-gray-500">پرداخت امن با درگاه زرین‌پال</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-green-600 mb-2">سفارش شما با موفقیت ثبت شد</h3>
                          <p className="mb-4">
                            کد رهگیری سفارش شما: 
                            <span className="font-bold text-lg mr-1">{trackingCode}</span>
                          </p>
                          <div className="text-gray-600 mb-6">
                            <p>رسید پرداخت به ایمیل شما ارسال شد.</p>
                            <p>وضعیت سفارش خود را می‌توانید از طریق صفحه پیگیری سفارش مشاهده کنید.</p>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            پیگیری سفارش
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline"
                onClick={goBack}
                disabled={step === 1}
              >
                مرحله قبل
              </Button>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={form.handleSubmit(onSubmit)}
                disabled={orderCompleted}
              >
                {step < 5 ? "مرحله بعد" : orderCompleted ? "تکمیل شد" : "پرداخت"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
