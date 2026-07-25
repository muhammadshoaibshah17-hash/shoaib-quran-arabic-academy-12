"use client";

import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 border rounded-full px-3 py-2 bg-white shadow-sm">

      <Globe size={18} className="text-emerald-700" />

      <select
        className="bg-transparent outline-none text-sm font-medium cursor-pointer"
        defaultValue="en"
      >
        <option value="en">🇬🇧 English</option>
        <option value="ur">🇵🇰 اردو</option>
        <option value="ar">🇸🇦 العربية</option>
      </select>

    </div>
  );
}