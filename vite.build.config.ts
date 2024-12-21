import {defineConfig, Plugin} from 'vite'
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  build: {
    minify: true,
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "@mando/ui", // Sets the name of the generated library.
      fileName: () => `index.js`, // Generates the output file name based on the format.
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "fractal-vite-ts.css") {
            return "main.css"
          }
          return assetInfo.name
        }
      }
    }
  }
})
