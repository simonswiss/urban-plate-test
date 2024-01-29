import type { Config } from "tailwindcss"
import containerQueriesPlugin from "@tailwindcss/container-queries"

export default {
  content: [
    "./src/{pages,components,layouts}/**/*.{js,ts,jsx,tsx,astro,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [containerQueriesPlugin],
} satisfies Config
