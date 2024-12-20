import "./styles/main.scss"
import moduleLoader from "./module-loader";

document.addEventListener(
    "DOMContentLoaded",
    () => {
        const modules: HTMLElement[] = Array.from(document.querySelectorAll(".js-module"))

        moduleLoader(modules)
    },
    false
)
