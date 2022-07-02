import { MainCommand } from "./commands/main.ts";

await new MainCommand().parse(Deno.args);
