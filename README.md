# faaah 🔔

Plays a sound after every npm command finishes. Works on macOS, Linux, and Windows.

## Install

```bash
npm install -g faaah
faaah setup
```

Then open a **new terminal window**. That's it — every npm command will now play a sound when it completes.

## Test it

```bash
npm list
npm -v
```

You should hear the sound after each command.

## Commands

```bash
faaah setup      # Re-run setup if something stops working
faaah verify     # Check that everything is correctly configured
faaah uninstall  # Remove PATH changes
faaah help       # Show available commands
```

## Uninstall

```bash
npm uninstall -g faaah
```

Then open a new terminal window.

## Platform audio support

| Platform | Player used |
|----------|-------------|
| macOS    | `afplay` (built-in, nothing to install) |
| Linux    | `aplay` → `paplay` → `mpg123` → `ffplay` (tries each in order) |
| Windows  | PowerShell `SoundPlayer` (built-in) |

On Linux, install at least one audio player if you don't have one:

```bash
# Ubuntu / Debian
sudo apt install alsa-utils
```

## Troubleshooting

**Sound stopped working?**
```bash
faaah verify
```
It will tell you exactly what's wrong and how to fix it.

**Using nvm / fnm / volta?**
Run `faaah setup` after switching Node.js versions if the sound stops working.

## License

MIT