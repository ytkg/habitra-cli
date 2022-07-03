import { Command, HelpCommand } from "../deps.ts";
import { CreateCommand } from "./user/create.ts";
import { UpdateCommand } from "./user/update.ts";
import { DeleteCommand } from "./user/delete.ts";

export class UserCommand extends Command {
  constructor() {
    super();
    this.description("User command")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("create", new CreateCommand())
      .command("update", new UpdateCommand())
      .command("delete", new DeleteCommand())
      .reset();
  }
}
