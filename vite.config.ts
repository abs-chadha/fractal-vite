import { defineConfig } from 'vite'
import { exec } from 'child_process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    executePl(),
  ],
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "@mando/ui", // Sets the name of the generated library.
      fileName: () => `index.js`, // Generates the output file name based on the format.
      // formats: ["cjs", "es"] // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name)
          if (assetInfo.name === "fractal-vite-ts.css") {
            return "main.css"
          }
          return assetInfo.name
        }
      }
    }
  }
})

function executePl() {
  let isRunning = false
  return {
    name: "Pattern library execute",
    buildEnd: async () => {
      if (!isRunning) {
        exec("yarn fractal:start")
        isRunning = true
      }
    }

  }
}