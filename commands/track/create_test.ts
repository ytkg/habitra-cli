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

    Create track command

  Options:

    --habit-id  <habitId>  - Habit ID  (required)
    --date      <date>     - Date                

  Environment variables:

    HABITRA_ID        <value>  - Habitra ID        (required)
    HABITRA_PASSWORD  <value>  - Habitra Password  (required)
`,
  );
});
