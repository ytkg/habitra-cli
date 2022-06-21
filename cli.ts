import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { VERSION } from "./version.ts";
import { userCommand } from "./command/user.ts";

await new Command()
  .name("habitra-cli")
  .version(VERSION)
  .description("Command line tool for HabiTra")
  .command("user", userCommand)
  .parse(Deno.args);
