import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class CreateCommand extends Command {
  constructor() {
    super();
    this.description("Create user command")
      .option("--id <id:string>", "id", { required: true })
      .option("--password <password:string>", "password", { required: true })
      .action(async (options) => {
        const response = await Request.post(
          `/users`,
          {},
          JSON.stringify({ id: options.id, password: options.password }),
        );
        console.log(await response.text());
      })
      .reset();
  }
}
