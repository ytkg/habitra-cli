import { assertEquals } from "../dev_deps.ts";
import { habitCommand } from "./habit.ts";

const command = habitCommand.reset().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Habit command

  Commands:

    create  - Create habit command
`,
  );
});
