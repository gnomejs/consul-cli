import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("consul", {
    name: "consul",
    windows: [
        "${ALLUSERSPROFILE:-C:\\ProgramData}\\chocolatey\\bin\\consul.exe",
        "${ChocolateyInstall}\\bin\\consul.exe",
    ],
    linux: [
        "/usr/bin/consul",
        "/usr/local/bin/consul"
    ]
});

/**
 * Represents a consul command.
 */
export class ConsulCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("consul", args, options);
    }
}

/**
 * Creates a new instance of the ConsulCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the ConsulCommand class.
 */
export function consul(args?: CommandArgs, options?: CommandOptions): ConsulCommand {
    return new ConsulCommand(args, options);
}
