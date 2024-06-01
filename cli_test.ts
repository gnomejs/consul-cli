import { consul } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("consul") !== undefined;

Deno.test({
    name: "consul",
    ignore: !hasExe,
    fn: async () => {
        const result = await consul("--version");
        equals(result.code, 0);
        ok(result.text().length > 3);
    },
});
