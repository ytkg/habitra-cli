import { assertEquals } from "../../dev_deps.ts";
import { ListCommand } from "./list.ts";

const command = new ListCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Show track command

  Options:

    --habit-id  <habitId>  - Habit ID  (required)

  Environment variables:

    HABITRA_ID        <value>  - Habitra ID      
    HABITRA_PASSWORD  <value>  - Habitra Password
`,
  );
});
