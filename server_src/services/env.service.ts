export default function isProduction () {
    let production = true;
    if (process.platform === "win32") {
        // if env is windows set production to false
        production = false;
    }

    return production
}
