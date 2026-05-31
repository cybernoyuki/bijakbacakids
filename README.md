# Bijak Baca Kids

Landing page untuk **Kelas Fonik Bahasa Melayu** — program membaca untuk kanak-kanak 4-7 tahun di Cheras, Selangor. Diajar oleh **Teacher Yas** menggunakan **Teknik Bayangan** eksklusif.

**[bijakbacakids.netlify.app](https://bijakbacakids.netlify.app/)**

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, animations, responsive
- **Vanilla JS** — Intersection Observer, event listeners, zero dependencies

No frameworks, no build tools, no npm. Pure static site.

## Project Structure

```
bijakbacakids/
├── index.html          # Main HTML (clean, semantic)
├── styles.css          # All styles (well-commented, organized by section)
├── script.js           # All JavaScript (IIFE, event listeners, no globals)
├── .gitignore
├── robots.txt
├── sitemap.xml
├── hero/               # Hero banner image
├── icons/              # Teaching method icons, teacher photo
├── logo/               # Logo assets
├── programs/           # Program card images
├── sections/           # Section background/banner images
└── README.md
```

## Key Features

- Responsive design (mobile, tablet, desktop)
- Sticky navbar with scroll shadow and active section highlighting
- Mobile hamburger menu with smooth toggle
- Floating syllable animations in hero section
- Image lightbox modal
- FAQ accordion
- Testimonial "show more" toggle
- Scroll-reveal animations via Intersection Observer
- WhatsApp floating button + CTA sections
- Malay-language content optimized for Malaysian parents

## Local Development

Just open `index.html` in a browser, or serve with any static server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

## Deployment

Deployed on **Netlify** with continuous deployment from GitHub. Pushes to `main` trigger automatic redeploys.

## License

Hak Cipta Terpelihara &copy; 2026 Bijak Baca Kids.
