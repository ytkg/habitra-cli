import { Command, HelpCommand } from "./deps.ts";
import { VERSION } from "./version.ts";
import { userCommand } from "./command/user.ts";
import { habitCommand } from "./command/habit.ts";

await new Command()
  .name("habitra-cli")
  .version(VERSION)
  .description("Command line tool for HabiTra")
  .default("help")
  .command("help", new HelpCommand().hidden())
  .command("user", userCommand)
  .command("habit", habitCommand)
  .parse(Deno.args);
