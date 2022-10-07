import {
  Command,
  DenoLandProvider,
  HelpCommand,
  UpgradeCommand,
} from "../deps.ts";
import { UserCommand } from "./user.ts";
import { HabitCommand } from "./habit.ts";
import { TrackCommand } from "./track.ts";

export class MainCommand extends Command {
  constructor() {
    super();
    this.name("habitra")
      .description("Command line tool for HabiTra")
      .default("help")
      .command("help", new HelpCommand().hidden())
      .command("user", new UserCommand())
      .command("habit", new HabitCommand())
      .command("track", new TrackCommand())
      .command(
        "upgrade",
        new UpgradeCommand({
          main: "cli.ts",
          args: ["--allow-net", "--allow-env", "--allow-read", "--allow-run"],
          provider: new DenoLandProvider(),
        }),
      )
      .reset();
  }
}
