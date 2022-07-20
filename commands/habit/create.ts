import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class CreateCommand extends Command {
  constructor() {
    super();
    this.description("Create habit command")
      .option("--name <name:string>", "name", { required: true })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await Request.post(
          `/users/${options.habitraId}/habits`,
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
