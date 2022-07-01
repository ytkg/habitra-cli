import { mainCommand } from "./command/main.ts";

await mainCommand.parse(Deno.args);
