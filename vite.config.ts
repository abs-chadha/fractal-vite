import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts", // Specifies the entry point for building the library.
      name: "@mando/ui", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"] // Specifies the output formats (CommonJS and ES modules).
    },
  },
  plugins: [vue()],
})
