import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class DeleteCommand extends Command {
  constructor() {
    super();
    this.description("Delete habit command")
      .option("--id <id:string>", "id", { required: true })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await Request.delete(
          `/users/${options.habitraId}/habits/${options.id}`,
          {
            Authorization: `Basic ${
              btoa(`${options.habitraId}:${options.habitraPassword}`)
            }`,
          },
        );
        console.log(await response.text());
      })
      .reset();
  }
}
