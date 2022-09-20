import { assertEquals } from "../../dev_deps.ts";
import { UpdateCommand } from "./update.ts";

const command = new UpdateCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Update habit command

  Options:

    --id    <id>    - id    (required)
    --name  <name>  - name  (required)

  Environment variables:

    HABITRA_ID        <value>  - Habitra ID        (required)
    HABITRA_PASSWORD  <value>  - Habitra Password  (required)
`,
  );
});
