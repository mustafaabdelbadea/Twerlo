import * as servers from './servers/index'
import swaggerDocs from './utils/swagger';


// application booting, starting all services and if service fail will stop all services

export async function start() {
    await Promise.all([
        servers.start(),
        swaggerDocs(servers.app, +process.env.PORT)
      ]);
}


export async function stop() {
  await Promise.all([
    servers.stop()
  ])
}