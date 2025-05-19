
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProvinceCityProps {
  selectedProvince: string;
  selectedCity: string;
  onProvinceChange: (value: string) => void;
  onCityChange: (value: string) => void;
  disabled?: boolean;
}

const iranProvinces = [
  { id: "tehran", name: "تهران" },
  { id: "isfahan", name: "اصفهان" },
  { id: "fars", name: "فارس" },
  { id: "khorasan_razavi", name: "خراسان رضوی" },
  { id: "east_azerbaijan", name: "آذربایجان شرقی" },
  { id: "west_azerbaijan", name: "آذربایجان غربی" },
  { id: "khuzestan", name: "خوزستان" },
  { id: "alborz", name: "البرز" },
  { id: "kermanshah", name: "کرمانشاه" },
  { id: "mazandaran", name: "مازندران" },
  { id: "gilan", name: "گیلان" },
  { id: "semnan", name: "سمنان" },
  { id: "yazd", name: "یزد" },
  { id: "hamedan", name: "همدان" },
  { id: "qazvin", name: "قزوین" },
  { id: "ardabil", name: "اردبیل" },
  { id: "kurdistan", name: "کردستان" },
  { id: "markazi", name: "مرکزی" },
  { id: "hormozgan", name: "هرمزگان" },
  { id: "qom", name: "قم" },
  { id: "south_khorasan", name: "خراسان جنوبی" },
  { id: "north_khorasan", name: "خراسان شمالی" },
  { id: "kerman", name: "کرمان" },
  { id: "lorestan", name: "لرستان" },
  { id: "golestan", name: "گلستان" },
  { id: "bushehr", name: "بوشهر" },
  { id: "zanjan", name: "زنجان" },
  { id: "ilam", name: "ایلام" },
  { id: "chaharmahal", name: "چهارمحال و بختیاری" },
  { id: "kohgiluyeh", name: "کهگیلویه و بویراحمد" },
  { id: "sistan", name: "سیستان و بلوچستان" },
];

const citiesByProvince: { [key: string]: string[] } = {
  tehran: ["تهران", "شهریار", "اسلامشهر", "رباط کریم", "ورامین", "پاکدشت", "دماوند", "فیروزکوه"],
  isfahan: ["اصفهان", "کاشان", "خمینی شهر", "نجف آباد", "شاهین شهر", "فلاورجان", "گلپایگان"],
  fars: ["شیراز", "مرودشت", "کازرون", "فسا", "جهرم", "داراب", "اقلید", "لار"],
  khorasan_razavi: ["مشهد", "نیشابور", "سبزوار", "تربت حیدریه", "قوچان", "کاشمر", "تربت جام"],
  east_azerbaijan: ["تبریز", "مراغه", "میانه", "اهر", "سراب", "مرند", "بناب"],
  west_azerbaijan: ["ارومیه", "خوی", "میاندوآب", "بوکان", "مهاباد", "سلماس", "نقده"],
  khuzestan: ["اهواز", "دزفول", "آبادان", "خرمشهر", "بهبهان", "ایذه", "مسجد سلیمان", "شوشتر"],
  alborz: ["کرج", "هشتگرد", "نظرآباد", "فردیس", "محمدشهر", "کمال‌شهر", "ماهدشت"],
  kermanshah: ["کرمانشاه", "اسلام آباد غرب", "سرپل ذهاب", "کنگاور", "سنقر", "پاوه", "جوانرود"],
  mazandaran: ["ساری", "بابل", "آمل", "قائم شهر", "بهشهر", "تنکابن", "نوشهر", "چالوس"],
  gilan: ["رشت", "انزلی", "لاهیجان", "لنگرود", "رودسر", "تالش", "آستارا", "صومعه سرا"],
  semnan: ["سمنان", "شاهرود", "گرمسار", "دامغان", "ایوانکی", "مهدی‌شهر", "سرخه"],
  yazd: ["یزد", "میبد", "اردکان", "بافق", "مهریز", "تفت", "ابرکوه"],
  hamedan: ["همدان", "ملایر", "نهاوند", "اسدآباد", "کبودرآهنگ", "تویسرکان", "رزن"],
  qazvin: ["قزوین", "تاکستان", "آبیک", "بوئین‌زهرا", "محمدیه", "الوند", "اقبالیه"],
  ardabil: ["اردبیل", "پارس‌آباد", "مشکین‌شهر", "خلخال", "گرمی", "نمین", "بیله‌سوار"],
  kurdistan: ["سنندج", "سقز", "مریوان", "بانه", "قروه", "بیجار", "کامیاران", "دیواندره"],
  markazi: ["اراک", "ساوه", "خمین", "شازند", "محلات", "دلیجان", "تفرش", "آشتیان"],
  hormozgan: ["بندرعباس", "میناب", "بندر لنگه", "قشم", "کیش", "حاجی‌آباد", "رودان"],
  qom: ["قم"],
  south_khorasan: ["بیرجند", "قاین", "فردوس", "طبس", "نهبندان", "سربیشه", "سرایان"],
  north_khorasan: ["بجنورد", "اسفراین", "شیروان", "جاجرم", "گرمه", "فاروج", "راز"],
  kerman: ["کرمان", "سیرجان", "رفسنجان", "جیرفت", "بم", "زرند", "راور", "انار"],
  lorestan: ["خرم‌آباد", "بروجرد", "دورود", "ازنا", "الیگودرز", "کوهدشت", "نورآباد"],
  golestan: ["گرگان", "گنبدکاووس", "علی‌آباد کتول", "آق‌قلا", "کردکوی", "بندر ترکمن", "مینودشت"],
  bushehr: ["بوشهر", "برازجان", "گناوه", "دیلم", "کنگان", "جم", "بندر دیر", "خارک"],
  zanjan: ["زنجان", "ابهر", "خرمدره", "ماهنشان", "ایجرود", "طارم", "خدابنده"],
  ilam: ["ایلام", "ایوان", "دهلران", "آبدانان", "سرابله", "مهران", "ملکشاهی"],
  chaharmahal: ["شهرکرد", "بروجن", "فارسان", "لردگان", "سامان", "کوهرنگ", "اردل"],
  kohgiluyeh: ["یاسوج", "دوگنبدان", "دهدشت", "لیکک", "سی‌سخت", "چرام", "لنده"],
  sistan: ["زاهدان", "زابل", "چابهار", "سراوان", "ایرانشهر", "خاش", "سرباز"],
};

const ProvinceCity: React.FC<ProvinceCityProps> = ({
  selectedProvince,
  selectedCity,
  onProvinceChange,
  onCityChange,
  disabled
}) => {
  const handleProvinceChange = (value: string) => {
    onProvinceChange(value);
    // Reset city when province changes
    onCityChange("");
  };

  const availableCities = selectedProvince ? citiesByProvince[selectedProvince] || [] : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="province">استان</Label>
        <Select
          value={selectedProvince}
          onValueChange={handleProvinceChange}
          disabled={disabled}
        >
          <SelectTrigger id="province">
            <SelectValue placeholder="انتخاب استان" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {iranProvinces.map((province) => (
                <SelectItem key={province.id} value={province.id}>
                  {province.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="city">شهر</Label>
        <Select
          value={selectedCity}
          onValueChange={onCityChange}
          disabled={disabled || !selectedProvince}
        >
          <SelectTrigger id="city">
            <SelectValue placeholder={selectedProvince ? "انتخاب شهر" : "ابتدا استان را انتخاب کنید"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {availableCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProvinceCity;
