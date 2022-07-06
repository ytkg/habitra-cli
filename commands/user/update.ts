import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class UpdateCommand extends Command {
  constructor() {
    super();
    this.description("Update user command")
      .option("--password <password:string>", "Habits new password", {
        required: true,
      })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await await Request.put(
          `/users/${options.habitraId}`,
          {
            Authorization: `Basic ${
              btoa(`${options.habitraId}:${options.habitraPassword}`)
            }`,
          },
          JSON.stringify({ password: options.password }),
        );
        console.log(await response.text());
      })
      .reset();
  }
}
