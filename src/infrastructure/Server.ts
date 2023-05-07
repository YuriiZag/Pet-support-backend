import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { ISevice } from "../types/services";
import { controllers } from "../controlers/indexs";

export class Server implements ISevice {
  private static instance: Server;
  private routePrefix = "/api";
  private server = express();

  constructor() {
    if (!Server.instance) {
      Server.instance = this;
    }
    return Server.instance;
  }

  async init() {
    const { server, routePrefix } = this;

    useExpressServer(server, {
      routePrefix,
      controllers,
      cors: true,
      defaultErrorHandler: true,
    });

    return new Promise<boolean>((resolve: any) => {
      server.listen(4000, () => {
        console.log("Server started at port 4000");

        return resolve();
      });
    });
  }
}
