import { assertEquals } from "../dev_deps.ts";
import { MainCommand } from "./main.ts";

const command = new MainCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: habitra

  Description:

    Command line tool for HabiTra

  Commands:

    user   - User command 
    habit  - Habit command
    track  - Track command
`,
  );
});
