import * as boot from "./boot";
import * as apis from "./app/apis";
// Start all services
async function start() {
    try {
        // Start apis and boot the application
        apis.start()
        await boot.start()

        //On click ctrl + c  (SIGINT) it will end the process and stop the server 
        process.on('SIGINT', async () => {
            await boot.stop()
            process.exit(1)  
        })
    } catch (error) {
        await boot.stop()
        console.log("APP ERROR");
        console.trace(error);
    }
}

 export async function stop() {
    try{
        await boot.stop()
    } catch(error) {
        console.log("APP ERROR");
        console.trace(error);  
    }

}

start()