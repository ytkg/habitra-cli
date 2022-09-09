import { Command, HelpCommand } from "../deps.ts";
import { ListCommand } from "./track/list.ts";
import { CreateCommand } from "./track/create.ts";

export class TrackCommand extends Command {
  constructor() {
    super();
    this.description("Track command")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("list", new ListCommand())
      .command("create", new CreateCommand())
      .reset();
  }
}
