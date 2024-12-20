
import fractal from "@frctl/fractal";
/* Create a new Fractal instance and export it for use elsewhere if required */
const app = fractal.create()

/* Set the title of the project */
app.set('project.title', 'FooCorp Component Library');

/* Tell Fractal where the components will live */
app.components.set('path', '/src/components');

/* Tell Fractal where the documentation pages will live */
app.docs.set('path', '/src/docs');

/* Specify a directory of static assets */
// app.web.set('static.path', '/public');

/* Set the static HTML build destination */
app.web.set('builder.dest', '/build');

module.exports = app