import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class ListCommand extends Command {
  constructor() {
    super();
    this.description("Show track command")
      .option("--habit-id <habitId:string>", "Habit ID", { required: true })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await Request.get(
          `/users/${options.habitraId}/habits/${options.habitId}/tracks`,
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
