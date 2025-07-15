import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: "#171919",
        base2: "#171a1c",
        neutraltext: "#dddbdb",
        accenttext: "#8b8c73",
        logobase: "#ee513f",
        logobase2: "#ee793f",
      },
      fontFamily: {
        ysabeau: ['"var(--font-ysabeau)"', 'sans-serif'],
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
