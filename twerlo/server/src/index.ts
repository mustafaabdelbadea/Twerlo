import * as boot from "./boot";


async function start() {
    try {
        await boot.start()
    } catch (error) {
        console.log("APP ERROR");
        console.trace(error);
    }
}

start()