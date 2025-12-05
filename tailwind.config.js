/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // Include tutti i file della cartella app
    "./components/**/*.{js,ts,jsx,tsx}"   // Include tutti i componenti
  ],
  theme: {
    extend: {},                            // Qui puoi aggiungere personalizzazioni dei colori, font, ecc.
  },
  plugins: [],                             // Eventuali plugin Tailwind
}
