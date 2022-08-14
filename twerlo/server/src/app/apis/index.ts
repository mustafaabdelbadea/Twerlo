import { Express } from 'express';
import * as servers from '../../boot/servers'
import cors from "cors";
import restful from './rest';

export async function start() {
    servers.app.use(cors());

    servers.app.use(Express.json());

    servers.app.use("/v1", restful.v1);
}