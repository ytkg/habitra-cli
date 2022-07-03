import { assertEquals } from "../../dev_deps.ts";
import { DeleteCommand } from "./delete.ts";

const command = new DeleteCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Delete user command

  Environment variables:

    HABITRA_ID        <value>  - Habitra ID      
    HABITRA_PASSWORD  <value>  - Habitra Password
`,
  );
});
