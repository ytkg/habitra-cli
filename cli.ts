import { MainCommand } from "./commands/main.ts";
import { VERSION } from "./version.ts";

await new MainCommand()
  .version(`v${VERSION}`)
  .parse(Deno.args);
