
'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function SellerForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        storeName: '',
        nationalCode: '',
        Email: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // edited
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                router.push('/thank-you');
            } else {
                alert('خطا در ارسال فرم');
            }
        } catch (err) {
            console.error(err);
            alert('خطا در ارسال فرم');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center">فرم ثبت نام فروشنده</h2>

                <input
                    type="text"
                    name="firstName"
                    placeholder="نام"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="نام خانوادگی"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="شماره تلفن"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="text"
                    name="Email"
                    placeholder=" ایمیل "
                    value={form.storeName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
                <input
                    type="text"
                    name="storeName"
                    placeholder="نام فروشگاه"
                    value={form.storeName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="text"
                    name="nationalCode"
                    placeholder="کد ملی"
                    value={form.nationalCode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    {loading ? 'در حال ارسال...' : 'ارسال'}
                </button>
            </form>
        </div>
    );
}
