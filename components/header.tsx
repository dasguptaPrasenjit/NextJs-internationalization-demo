'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languageNames = {
  'en-US': 'English',
  'de-DE': 'Deutsch',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
};

export function Header({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${lang}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold">i18n Demo</span>
          </div>
          <Select value={lang} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {i18n.locales.map((locale) => (
                <SelectItem key={locale} value={locale}>
                  {languageNames[locale as keyof typeof languageNames]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}