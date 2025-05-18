import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#78156F] flex items-center justify-center mr-2">
                <span className="text-white font-bold">AP</span>
              </div>
              استودیو ادیت عکس
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ارائه دهنده خدمات حرفه‌ای ویرایش و رتوش عکس برای عکاسان و آتلیه‌ها با بالاترین کیفیت و سریع‌ترین زمان ممکن.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-gray-800 hover:bg-[#78156F] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">اینستاگرام</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#78156F] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">تلگرام</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-1.713,0.617 -7.688,2.957 -10.03,3.844c-0.173,0.066 -0.29,0.231 -0.295,0.415c-0.004,0.184 0.105,0.354 0.275,0.429c0.997,0.439 2.305,1.026 2.305,1.026c0,0 0.61,2.008 0.928,3.035c0.042,0.134 0.145,0.243 0.276,0.292c0.132,0.049 0.279,0.033 0.398,-0.042c0.604,-0.393 1.546,-1.006 1.546,-1.006c0,0 1.786,1.427 2.326,1.871Z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#78156F] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">واتساپ</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-8px] after:w-16 after:h-[3px] after:bg-[#78156F]">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">خدمات</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">فروشگاه</Link>
              </li>
              <li>
                <Link to="/cooperation" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">همکاری با ما</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">درباره ما</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">تماس با ما</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-8px] after:w-16 after:h-[3px] after:bg-[#78156F]">خدمات</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/portrait" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">رتوش پرتره</Link>
              </li>
              <li>
                <Link to="/services/wedding" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">ادیت عکس عروسی</Link>
              </li>
              <li>
                <Link to="/services/skin" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">رتوش پوست</Link>
              </li>
              <li>
                <Link to="/services/album" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">طراحی آلبوم</Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-gray-400 hover:text-white hover:underline transition-colors inline-block py-1">عکاسی صنعتی</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:right-0 after:bottom-[-8px] after:w-16 after:h-[3px] after:bg-[#78156F]">اطلاعات تماس</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3 space-x-reverse">
                <svg className="h-6 w-6 text-[#78156F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-300">09052405866</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <svg className="h-6 w-6 text-[#78156F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">ََarpic@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <svg className="h-6 w-6 text-[#78156F] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">آمل، کوچه بانک خون، پلاک 12</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-bold mb-4">عضویت در خبرنامه</h3>
            <div className="flex">
              <Input type="email" placeholder="ایمیل خود را وارد کنید" className="rounded-l-none rounded-r-md border-gray-700 bg-gray-800 text-white" />
              <Button type="button" className="rounded-r-none rounded-l-md bg-[#78156F] hover:bg-[#651260]">
                عضویت
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© ۱۴۰۴ استودیو آرپیک. تمامی حقوق محفوظ است.</p>
            <div className="flex space-x-4 space-x-reverse">
              <img alt="نماد اعتماد الکترونیکی" className="h-16 w-16 bg-white p-1 rounded" src="/lovable-uploads/dcad7324-6bb3-4bb4-b3a8-c4f037b2f8cb.png" />
              <img alt="پرداخت امن زرین پال" className="h-16 w-16 bg-white p-1 rounded" src="/lovable-uploads/9429f81d-f40b-4aeb-91c5-5a9a651b6756.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;