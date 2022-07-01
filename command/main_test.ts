import { assertEquals } from "../dev_deps.ts";
import { MainCommand } from "./main.ts";

const command = new MainCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage:   habitra-cli
  Version: 0.0.0      

  Description:

    Command line tool for HabiTra

  Options:

    -V, --version  - Show the version number for this program.  

  Commands:

    user   - User command 
    habit  - Habit command
`,
  );
});
