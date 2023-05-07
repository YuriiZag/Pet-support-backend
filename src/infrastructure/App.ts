import { ISevice } from "../types/services";
import { Server } from "./server";


export class App implements ISevice {
  private static instance: App;
  private server: ISevice = new Server();
  constructor() {
    if (!App.instance) {
      App.instance = this;
    }
    return App.instance;
  }
  async init() {
    const { server } = this;
      console.log("App started");
      
      await server.init();

      return true
  }
}
