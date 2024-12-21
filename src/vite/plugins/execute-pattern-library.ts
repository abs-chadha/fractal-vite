import {Plugin} from "vite";
import {exec} from "child_process";

export function executePatternLibrary(): Plugin {
    let isRunning = false
    // @ts-ignore
    return {
        name: "pattern-library-execute",
        buildEnd: async () => {
            if (!isRunning) {
                exec("yarn fractal:start")
            }
        }
    }
}