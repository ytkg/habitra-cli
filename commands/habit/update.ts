import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class UpdateCommand extends Command {
  constructor() {
    super();
    this.description("Update habit command")
      .option("--id <id:string>", "id", { required: true })
      .option("--name <name:string>", "name", { required: true })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await Request.put(
          `/users/${options.habitraId}/habits/${options.id}`,
          {
            Authorization: `Basic ${
              btoa(`${options.habitraId}:${options.habitraPassword}`)
            }`,
          },
          JSON.stringify({ name: options.name }),
        );
        console.log(await response.text());
      })
      .reset();
  }
}
