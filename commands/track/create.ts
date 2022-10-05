import { Command } from "../../deps.ts";
import { Request } from "../lib/request.ts";

export class CreateCommand extends Command {
  constructor() {
    super();
    this.description("Create track command")
      .option("--habit-id <habitId:string>", "Habit ID", { required: true })
      .option("--date <date:string>", "Date")
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await Request.post(
          `/users/${options.habitraId}/habits/${options.habitId}/tracks`,
          {
            Authorization: `Basic ${
              btoa(`${options.habitraId}:${options.habitraPassword}`)
            }`,
          },
          JSON.stringify({ date: options.date }),
        );
        console.log(await response.text());
      })
      .reset();
  }
}
