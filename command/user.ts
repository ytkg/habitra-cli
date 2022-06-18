import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";

const create = new Command()
  .description("Create user command")
  .option("--id <id:string>", "id", { required: true })
  .option("--password <password:string>", "password", { required: true })
  .action(async (options) => {
    const response = await fetch("https://api.habitra.io/v1/users", {
      method: "POST",
      body: JSON.stringify({ id: options.id, password: options.password }),
    });
    console.log(await response.text());
  });

export const user = new Command()
  .description("User command")
  .command("create", create);
