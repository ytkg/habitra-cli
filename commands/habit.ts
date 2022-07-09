import { Command, HelpCommand } from "../deps.ts";
import { CreateCommand } from "./habit/create.ts";
import { UpdateCommand } from "./habit/update.ts";
import { DeleteCommand } from "./habit/delete.ts";

export class HabitCommand extends Command {
  constructor() {
    super();
    this.description("Habit command")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("create", new CreateCommand())
      .command("update", new UpdateCommand())
      .command("delete", new DeleteCommand())
      .reset();
  }
}
