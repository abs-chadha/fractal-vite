import {createApp} from "vue";
import Button, {ButtonProps} from "./button.vue";

function init() {
    console.log("Heloo")
    const buttonContainerEl = document.getElementById("button-container")

    if (buttonContainerEl) {
        const app = createApp(Button)

        const props: ButtonProps = {
            label: "Hello World",
            className: "c-button"
        }

        app.provide("config", props)

        app.mount(buttonContainerEl)
    }
}

export default init