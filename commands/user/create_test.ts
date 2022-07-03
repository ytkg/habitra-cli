import { assertEquals } from "../../dev_deps.ts";
import { CreateCommand } from "./create.ts";

const command = new CreateCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Create user command

  Options:

    --id        <id>        - id        (required)
    --password  <password>  - password  (required)
`,
  );
});
