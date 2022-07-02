import { Command } from "../../deps.ts";

const apiBase = "https://api.habitra.io";

export class DeleteCommand extends Command {
  constructor() {
    super();
    this.description("Delete user command")
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await fetch(
          `${apiBase}/v1/users/${options.habitraId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Basic ${
                btoa(`${options.habitraId}:${options.habitraPassword}`)
              }`,
            },
          },
        );
        console.log(await response.text());
      })
      .reset();
  }
}
