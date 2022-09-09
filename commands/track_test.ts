import { assertEquals } from "../dev_deps.ts";
import { TrackCommand } from "./track.ts";

const command = new TrackCommand().help({ colors: false }).helpOption(false);

Deno.test("help command", () => {
  const output = command.getHelp();

  assertEquals(
    output,
    `
  Usage: COMMAND

  Description:

    Track command

  Commands:

    create  - Create track command
`,
  );
});
