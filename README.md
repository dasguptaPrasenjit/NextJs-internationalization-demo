# Next.js Internationalization 🌍

This is a simple Next.js project demonstrating **internationalization (i18n)**. Built for learning purposes using the latest features in the **Next.js app directory**.

> If you find this project helpful or interesting, please consider giving it a ⭐ on GitHub! Suggestions and improvements are always welcome 🙌

---

## 🚀 Features

- Internationalized routing (e.g., `/en-US`, `/de-DE`, `/fr-FR`)
- Language-specific content loading
- Dynamic language detection via route params
- Built with latest Next.js (v13+) & `/app` directory

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/dasguptaPrasenjit/NextJs-internationalization-demo.git
cd NextJs-internationalization-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```
It will automatically redirect to http://localhost:3000/en-US/. Use the language switcher to switch between English, 
French, Italian etc. 
---

## 📁 Project Structure Highlights

```
/app
  /[lang]        → Dynamic route for locale
    layout.tsx
    page.tsx     → Renders language-specific content
  layout.tsx     → Shared layout with language awareness
  global.css

/lib
  i18n-config.ts → i18n settings (locales, defaultLocale)
  dictionaries/  → Language translation files
```

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use it for any purpose!

---

## 🤝 Contributions

PRs, issues, feedback, and language contributions are all welcome. Open an issue or start a pull request with your ideas. Let's build together!

---

Made with ❤️ and Next.js

