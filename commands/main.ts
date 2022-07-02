import { Command, HelpCommand } from "../deps.ts";
import { UserCommand } from "./user.ts";
import { HabitCommand } from "./habit.ts";

export class MainCommand extends Command {
  constructor() {
    super();
    this.name("habitra-cli")
      .description("Command line tool for HabiTra")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("user", new UserCommand())
      .command("habit", new HabitCommand())
      .reset();
  }
}
