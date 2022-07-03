import { Command } from "../../deps.ts";

const apiBase = "https://api.habitra.io";

export class CreateCommand extends Command {
  constructor() {
    super();
    this.description("Create habit command")
      .option("--id <id:string>", "id", { required: true })
      .option("--name <name:string>", "name", { required: true })
      .env("HABITRA_ID=<value:string>", "Habitra ID", { required: true })
      .env("HABITRA_PASSWORD=<value:string>", "Habitra Password", {
        required: true,
      })
      .action(async (options) => {
        const response = await fetch(
          `${apiBase}/v1/users/${options.habitraId}/habits`,
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${
                btoa(`${options.habitraId}:${options.habitraPassword}`)
              }`,
            },
            body: JSON.stringify({ id: options.id, name: options.name }),
          },
        );
        console.log(await response.text());
      })
      .reset();
  }
}
