type IndexableFunc = {[key: string]: () => void}

function camelize(text: string): string {
    return text.replace(/-a([a-z])/g, (g) => g[1].toUpperCase())
}

function load(key: string) {
    const modules: IndexableFunc = {
        example: async () => {
            const {default: example} = await import("./components/example/example.mando-ui")
            example();
            console.log(`${key} Loaded`)
        },
        button: async () => {
            const {default: button} = await import("./components/button/button.mando-vue")
            button();
            console.log(`${key} Loaded`)
        }
    }

    try {
        return modules[key]()
    } catch (e) {
        throw {errorCode: 404, message: `Module ${key} not found`}
    }
}

function init(modules: HTMLElement[]) {
    if (!modules.length) return

    const moduleList: string[] = []

    for (const element of modules) {
        try {
            const moduleNames = element.dataset.module

            if (!moduleNames) {
                continue
            }

            const moduleArray: string[] = JSON.parse(moduleNames.replace(/'/g, '"'))

            for (const item of moduleArray) {
                const module = camelize(item)

                if (moduleList.indexOf(module) === -1) {
                    moduleList.push(module)
                }
            }
        } catch (error) {
            console.error('JS Name format incorrect in data attribute')
            console.log(error)
        }
    }

    moduleList.forEach((module) => {
        load(module)
    })
}

export default init