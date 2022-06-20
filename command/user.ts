import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";

const apiBase = "https://api.habitra.io";

const createCommand = new Command()
  .description("Create user command")
  .option("--id <id:string>", "id", { required: true })
  .option("--password <password:string>", "password", { required: true })
  .action(async (options) => {
    const response = await fetch(`${apiBase}/v1/users`, {
      method: "POST",
      body: JSON.stringify({ id: options.id, password: options.password }),
    });
    console.log(await response.text());
  });

const updateCommand = new Command()
  .description("Update user command")
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
  });

export const userCommand = new Command()
  .description("User command")
  .command("create", createCommand)
  .command("update", updateCommand)
