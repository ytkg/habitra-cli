import { Command } from "../../deps.ts";

const apiBase = "https://api.habitra.io";

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
        const response = await fetch(
          `${apiBase}/v1/users/${options.habitraId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Basic ${
                btoa(`${options.habitraId}:${options.habitraPassword}`)
              }`,
            },
            body: JSON.stringify({ password: options.password }),
          },
        );
        console.log(await response.text());
      })
      .reset();
  }
}
