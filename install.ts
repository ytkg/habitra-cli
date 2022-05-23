if (import.meta.main) {
  const p = Deno.run({
    cmd: [
      "deno",
      "install",
      "-n",
      "habitra",
      "-f",
      "cli.ts",
    ],
    stdout: "null",
    stderr: "inherit",
  });

  const status = await p.status();

  if (status.success) {
    console.log("habitra-cli was installed successfully.");
  }

  Deno.exit(status.code);
}
