
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { toast } from '@/hooks/use-toast';

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [session, setSession] = useState<any>(null);
  
  // فرم ورود
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // فرم ثبت نام
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('male');
  const [referrerCode, setReferrerCode] = useState('');
  const [discoveryMethod, setDiscoveryMethod] = useState('');
  
  useEffect(() => {
    // بررسی وضعیت احراز هویت موجود
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session) {
          navigate('/');
        }
      }
    );

    // بررسی وجود session موجود
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // تابع ورود
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast({
        title: "خطای ورود",
        description: "لطفاً ایمیل و رمز عبور خود را وارد کنید.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      
      if (error) {
        throw error;
      }
      
      // در صورت موفقیت، کاربر توسط onAuthStateChange به صفحه اصلی هدایت می‌شود
    } catch (error: any) {
      toast({
        title: "خطای ورود",
        description: error.message || "خطایی در ورود به سیستم رخ داد. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // تابع ثبت نام
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerEmail || !registerPassword || !firstName || !lastName || !phone) {
      toast({
        title: "خطای ثبت نام",
        description: "لطفاً تمام فیلدهای ضروری را پر کنید.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      
      // ثبت نام کاربر در سیستم احراز هویت
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: registerEmail,
        password: registerPassword,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        }
      });
      
      if (authError) {
        throw authError;
      }
      
      // اگر ثبت نام موفقیت آمیز باشد، اطلاعات پروفایل را به‌روزرسانی می‌کنیم
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            first_name: firstName,
            last_name: lastName,
            phone,
            city,
            gender,
            referrer_code: referrerCode,
            discovery_method: discoveryMethod,
          })
          .eq('id', authData.user.id);
        
        if (profileError) {
          console.error("Error updating profile:", profileError);
        }
        
        toast({
          title: "ثبت نام موفقیت‌آمیز",
          description: "حساب کاربری شما با موفقیت ایجاد شد.",
        });
      }
      
    } catch (error: any) {
      toast({
        title: "خطای ثبت نام",
        description: error.message || "خطایی در ثبت نام رخ داد. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-vazir">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">حساب کاربری</CardTitle>
              <CardDescription>وارد حساب کاربری خود شوید یا یک حساب جدید ایجاد کنید</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">ورود</TabsTrigger>
                  <TabsTrigger value="register">ثبت نام</TabsTrigger>
                </TabsList>
                
                {/* فرم ورود */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">ایمیل</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="ایمیل خود را وارد کنید"
                        disabled={loading}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="login-password">رمز عبور</Label>
                      <Input 
                        id="login-password" 
                        type="password" 
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="رمز عبور خود را وارد کنید"
                        disabled={loading}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#78156F] hover:bg-[#651260]"
                      disabled={loading}
                    >
                      {loading ? "در حال پردازش..." : "ورود"}
                    </Button>
                  </form>
                </TabsContent>
                
                {/* فرم ثبت نام */}
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">نام *</Label>
                        <Input 
                          id="first-name" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="نام خود را وارد کنید"
                          disabled={loading}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="last-name">نام خانوادگی *</Label>
                        <Input 
                          id="last-name" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="نام خانوادگی خود را وارد کنید"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">ایمیل *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          placeholder="ایمیل خود را وارد کنید"
                          disabled={loading}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="password">رمز عبور *</Label>
                        <Input 
                          id="password" 
                          type="password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          placeholder="رمز عبور خود را وارد کنید"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">شماره تماس *</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="شماره تماس خود را وارد کنید"
                          disabled={loading}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="city">شهر</Label>
                        <Input 
                          id="city" 
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="شهر محل سکونت"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label>جنسیت</Label>
                      <RadioGroup 
                        value={gender} 
                        onValueChange={setGender}
                        className="flex space-x-4 space-x-reverse mt-2"
                      >
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="cursor-pointer">آقا</Label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="cursor-pointer">خانم</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="discovery-method">نحوه آشنایی با سایت</Label>
                      <Select value={discoveryMethod} onValueChange={setDiscoveryMethod}>
                        <SelectTrigger id="discovery-method">
                          <SelectValue placeholder="انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="search">جستجو در اینترنت</SelectItem>
                            <SelectItem value="social">شبکه‌های اجتماعی</SelectItem>
                            <SelectItem value="friend">معرفی دوستان</SelectItem>
                            <SelectItem value="advertisement">تبلیغات</SelectItem>
                            <SelectItem value="other">سایر</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="referrer-code">کد معرف</Label>
                      <Input 
                        id="referrer-code" 
                        value={referrerCode}
                        onChange={(e) => setReferrerCode(e.target.value)}
                        placeholder="در صورت وجود کد معرف را وارد کنید"
                        disabled={loading}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#78156F] hover:bg-[#651260]"
                      disabled={loading}
                    >
                      {loading ? "در حال پردازش..." : "ثبت نام"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
