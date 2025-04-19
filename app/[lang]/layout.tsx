import { Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/header';
import { i18n } from '@/lib/i18n-config';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  );
}