import { Command, HelpCommand } from "../deps.ts";
import { VERSION } from "../version.ts";
import { userCommand } from "./user.ts";

export const mainCommand = new Command()
  .name("habitra-cli")
  .version(VERSION)
  .description("Command line tool for HabiTra")
  .default("help")
  .command("help", new HelpCommand().hidden())
  .command("user", userCommand);
