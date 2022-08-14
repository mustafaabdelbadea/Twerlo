import * as servers from './servers/index'



export async function start() {
    await Promise.all([
        servers.start(),
      ]);
}