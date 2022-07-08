import { Command, HelpCommand } from "../deps.ts";
import { CreateCommand } from "./habit/create.ts";
import { UpdateCommand } from "./habit/update.ts";

export class HabitCommand extends Command {
  constructor() {
    super();
    this.description("Habit command")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("create", new CreateCommand())
      .command("update", new UpdateCommand())
      .reset();
  }
}
