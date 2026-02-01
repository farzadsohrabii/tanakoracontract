'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleGo = () => {
    if (!checked) return;
    router.push('/seller-form');
  };

  return (
    <div className=" md:flex-row  md:h-14 md:w-full md:items-center md:justify-center md:gap-10 ---------- gap-4 flex flex-col items-center w-full">
      <label className="flex items-center md:gap-2 md:cursor-pointer gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="h-4 w-4 accent-blue-600"
        />
        <span className="text-sm text-[#000000c9]">
          قوانین و شرایط را می‌پذیرم
        </span>
      </label>

      <button
        onClick={handleGo}
        disabled={!checked}
        className={`
          h-12 w-82 rounded-lg px-4 py-2 text-white transition
          ${checked
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'}
        `}
      >
        رفتن به صفحه بعد
      </button>
    </div>
  );
}
