
const exampleWidget = document.getElementById("example")

function init() {
    if (!exampleWidget) {
        return
    }
    exampleWidget.style.backgroundColor = "#ff0000"
    exampleWidget.style.color = "#ffffff"
}

export default init