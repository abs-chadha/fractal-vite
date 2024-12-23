import {defineConfig, loadEnv} from 'vite'
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths";

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
    plugins: [
      vue(),
      tsconfigPaths({loose: true})
    ],
    build: {
      emptyOutDir: true,
      minify: true,
      lib: {
        entry: "./src/index.ts", // Specifies the entry point for building the library.
        fileName: () => `main.js`, // Generates the output file name based on the format.
        formats: ["es"]
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "fractal-vite-ts.css") {
              return "css/index.css"
            }
            return assetInfo.name
          },
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name].js"
        }
      }
    }
  })
}
