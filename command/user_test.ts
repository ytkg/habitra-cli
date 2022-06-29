import { assertEquals } from "../dev_deps.ts";
import { userCommand } from "./user.ts";

const command = userCommand.reset().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    User command

  Commands:

    create  - Create user command
    update  - Update user command
    delete  - Delete user command
`,
  );
});
