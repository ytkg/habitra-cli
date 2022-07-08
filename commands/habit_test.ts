import { assertEquals } from "../dev_deps.ts";
import { HabitCommand } from "./habit.ts";

const command = new HabitCommand().help({ colors: false }).helpOption(false);

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
    update  - Update habit command
`,
  );
});
