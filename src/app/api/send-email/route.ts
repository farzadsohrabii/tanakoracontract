import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, phone, storeName, nationalCode } = body;

  if (!firstName || !lastName || !phone || !storeName || !nationalCode) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.tanakora.online', // SMTP خودت
      port: 465,
      auth: {
        user: 'sales@tanakora.online',
        pass: 'SalesMahabadTanakora1404',
      },
    });

    await transporter.sendMail({
      from: '"NextJS Form" <your-email@example.com>',
      to: 'your-email@example.com', // ایمیل دریافت کننده
      subject: 'فرم فروشنده جدید',
      html: `
        <h2>فرم فروشنده جدید</h2>
        <p><strong>نام:</strong> ${firstName}</p>
        <p><strong>نام خانوادگی:</strong> ${lastName}</p>
        <p><strong>شماره تلفن:</strong> ${phone}</p>
        <p><strong>نام فروشگاه:</strong> ${storeName}</p>
        <p><strong>کد ملی:</strong> ${nationalCode}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
