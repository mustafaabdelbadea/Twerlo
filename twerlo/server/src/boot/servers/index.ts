import  clc  from 'cli-color';
import  express  from 'express';
import * as http  from 'http';
import * as https  from 'https';


export const app = express(); 

export let server: http.Server | https.Server;

export async function start() {
    server = await app.listen(process.env.PORT, () => {
        console.log(
            clc.green.bold(
            `Server Started on Port (${process.env.PORT}). successfully \\O/`
          )
        );
      });
}


export async function stop() {
  try {
    if(server) {
      await server.close();
      console.log('main > boot > server > main > stopped.');
    }
  } catch (error) {
    console.log(error)
  }
}