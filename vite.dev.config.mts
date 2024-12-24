/// <reference types="vitest" />
import {defineConfig, loadEnv, Plugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import {exec} from "child_process";

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
      executePatternLibrary(),
      tsconfigPaths({loose: true})
    ],
    build: {
      minify: true,
      lib: {
        entry: "./src/index.ts", // Specifies the entry point for building the library.
        fileName: () => `index.js`, // Generates the output file name based on the format
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

function executePatternLibrary(): Plugin {
  let isRunning = false
  return {
    name: "pattern-library-execute",
    buildEnd: async () => {
      if (!isRunning) {
        exec("yarn fractal:start")
      }
    }
  }
}
