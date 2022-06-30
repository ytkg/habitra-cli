import { Command, HelpCommand } from "../deps.ts";

const apiBase = "https://api.habitra.io";

const createCommand = new Command()
  .description("Create habit command")
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
  });

export const habitCommand = new Command()
  .description("Habit command")
  .default("help")
  .command("help", new HelpCommand().hidden())
  .command("create", createCommand);
