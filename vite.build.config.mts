import {defineConfig, loadEnv} from 'vite'
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default ({mode}) => {
  // bug for below line fix here: https://stackoverflow.com/a/75633477
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env
    },
    css: {
      postcss: {
        plugins: [autoprefixer()]
      }
    },
    plugins: [vue()],
    build: {
      minify: true,
      lib: {
        entry: "./src/index.ts", // Specifies the entry point for building the library.
        name: "@mando/ui", // Sets the name of the generated library.
        fileName: () => `main.js`, // Generates the output file name based on the format.
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
}