'use strict';

// Require the path module
const path = require('path');

const mandelbrot = require('@frctl/mandelbrot')

const paths = {
    docs: "src/docs",
    static: "dist/assets",
    components: "src/components"
}

const fractalTheme = mandelbrot({
    skin: {
        name: "default",
        accent: "#FCB026",
        complement: "#000",
        links: "#535363"
    }
})

// Require the Fractal module
const fractal = module.exports = require('@frctl/fractal').create();

// Give your project a title.
fractal.set('project.title', 'Fractal Vite');

// Set Fractal Theme
fractal.web.theme(fractalTheme)

// Label of the components directory
fractal.components.set('label', 'UI Patterns')

// Set Default Status
fractal.components.set('default.status', 'prototype')

// Tell Fractal where to look for components
fractal.components.set('path', path.join(__dirname, paths.components));

// Tell Fractal where to look for documentation pages
fractal.docs.set('path', path.join(__dirname, paths.docs));

// Destination for the static export
fractal.web.set('builder.dest', 'dist/ui')

// Mount point for static assets
fractal.web.set('static.mount', 'assets')

// Location of compiled assets for pattern library dev
fractal.web.set('static.path', 'dist/assets')

// Server sync settings

fractal.web.set('server.sync', true)
fractal.web.set('server.syncOptions', {
    files: [
        `${paths.static}/index.cjs.js`,
        `${paths.static}/index.es.js`,
        `${paths.static}/fractal-vite-ts.css`
    ],
    ui: {
        port: 8080
    },
    open: true,
    codeSync: true
})