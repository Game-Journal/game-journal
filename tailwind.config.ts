import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'space-cadet': '#111D4A',
      'dodger-blue': '#0496FF',
      'xanthous': '#FFBC42',
      'raspberry': '#D81159',
    },
    extend: {
      gradientColorStopPositions: {
        2: '-80%',
        98: '180%',
      }    
    }
  },
  plugins: [],
};
export default config;
