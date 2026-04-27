# Crispr Eye Care

Modern eye care website for Dr. Rajeswari Thangavel, AIIMS-trained ophthalmologist in KK Nagar, Chennai.

## Services
- Cataract Surgery
- LASIK & Refractive Surgery
- Medical Retina
- Squint Treatment
- Neuro-Ophthalmology

## Tech Stack
- Eleventy (11ty)
- Nunjucks templating
- Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Start development server with live reload
npm start

# Build for production
npm run build

---

### 4. `package.json`

```json
{
  "name": "crispr-eye-care",
  "version": "1.0.0",
  "type": "module",
  "description": "Crispr Eye Care - Dr. Rajeswari Thangavel",
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
