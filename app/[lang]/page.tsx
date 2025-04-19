import { getDictionary } from '@/lib/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const supportedLanguages = ["en-US", "de-DE", "fr-FR", "it-IT"] as const;
  if (!supportedLanguages.includes(lang as any)) {
    throw new Error(`Unsupported language: ${lang}`);
  }
  const dictionary = await getDictionary(lang as "en-US" | "de-DE" | "fr-FR" | "it-IT");

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{dictionary.welcome}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {dictionary.description}
        </p>
      </div>
    </main>
  );
}