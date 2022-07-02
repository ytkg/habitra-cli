import { Command } from "../../deps.ts";

const apiBase = "https://api.habitra.io";

export class CreateCommand extends Command {
  constructor() {
    super();
    this.description("Create user command")
      .option("--id <id:string>", "id", { required: true })
      .option("--password <password:string>", "password", { required: true })
      .action(async (options) => {
        const response = await fetch(`${apiBase}/v1/users`, {
          method: "POST",
          body: JSON.stringify({ id: options.id, password: options.password }),
        });
        console.log(await response.text());
      })
      .reset();
  }
}
