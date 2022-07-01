import { MainCommand } from "./command/main.ts";

await new MainCommand().parse(Deno.args);
