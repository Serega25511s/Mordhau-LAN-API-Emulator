# Mordhau LAN API Emulator

![Mordhau](https://cdn.cloudflare.steamstatic.com/steam/apps/629760/header.jpg)

## About the Project

**Mordhau LAN API Emulator** is a server API emulator for the game [Mordhau](https://store.steampowered.com/app/629760/MORDHAU/), designed for local (LAN) play without the need for an internet connection or official servers. This project allows you to run your own backend for Mordhau, play over a local network, and test or modify the server side of the game in offline mode.

> ⚠️ **Attention:** This project is for educational and research purposes only. Use at your own risk.

---

## Features
- Full emulation of main Mordhau API endpoints for LAN mode
- Does not require an internet connection
- Integration with [Goldberg Emu](https://gitlab.com/Mr_Goldberg/goldberg_emulator) for Steam API emulation and LAN support
- Storage of users, servers, matches, and inventory data in memory (no database required)
- Flexible configuration via code

---

## Differences from the Steam Version
- **LAN Mode:** Does not require the Steam client or an internet connection, works fully offline
- **Goldberg Emu:** Used for Steam API emulation and LAN multiplayer support
- **No license check:** Suitable for local networks, testing, and modding
- **Steam version emulator:** If you need an emulator for the Steam version with support for official clients, use the [original Steam Mordhau Backend Emulator](https://github.com/Serega25511s/Mordhau-Backend-Emulator)

---

## Integration with Goldberg Emu
To enable LAN mode, you need to integrate with [Goldberg Steam Emu](https://gitlab.com/Mr_Goldberg/goldberg_emulator):
- Goldberg Emu must be installed and configured in your Mordhau client and/or server directory
- Make sure LAN mode is enabled in the Goldberg Emu config
- For more details on configuring Goldberg Emu, see the [official Goldberg documentation](https://gitlab.com/Mr_Goldberg/goldberg_emulator)

---

## GameTool Usage

GameTool is required for proper LAN emulation and is split into two parts:

### 1. `steam_api64.dll`
- **Server:** Place `steam_api64.dll` in `Mordhau Dedicated Server\Engine\Binaries\ThirdParty\Steamworks\Steamv152\Win64`
- **Client:** Place `steam_api64.dll` in `Mordhau\Engine\Binaries\ThirdParty\Steamworks\Steamv152\Win64`

### 2. Other GameTool Files (including `MordhauUniversalFixLan.dll`, `winmm.dll`, `winmm.txt`, `config.ini`, and `# Mordhau Server.bat`)
- **Server:** Place all files (except `steam_api64.dll`) in `Mordhau Dedicated Server\Mordhau\Binaries\Win64`
- **Client:** Place all files (except `steam_api64.dll` and `# Mordhau Server.bat`) in `Mordhau\Mordhau\Binaries\Win64`
- **Note:** The `# Mordhau Server.bat` file is only needed for the server.

### GameTool Configuration (`config.ini`)
The `config.ini` file configures GameTool behavior. It contains three parameters:
- `Name` — **Client only.** Sets the nickname for the client in-game.
- `Master` — **Required for both client and server.** Specifies the endpoint (URL) of your LAN API emulator (e.g., `http://127.0.0.1:3333`).
- `Server` — **Server only.**actual IP address of the dedicated game server to which players will connect. This can be a local IP (e.g., `127.0.0.1`), an external IP, or a virtual LAN IP (e.g., from RadminVPN or any LAN emulator).

**Example `config.ini`:**
```
Name=Serega
Master=http://127.0.0.1:3333
Server=127.0.0.1
```

**Important:**
- You **must** launch the game using `Mordhau-Win64-Shipping.exe`.
- The dedicated server **must** be started using the provided `.bat` file (`# Mordhau Server.bat`) placed next to `MordhauServer-Win64-Shipping.exe`.
- If you do not follow these steps, the emulator will not work correctly.

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/MordhauAPI-LAN.git
cd MordhauAPI-LAN
```

### 2. Install dependencies
```bash
npm install
```

### 3. Place and configure GameTool (**REQUIRED**)
GameTool is essential for the emulator to work. Follow the instructions in the [GameTool Usage](#gametool-usage) section above to correctly place all GameTool files and configure `config.ini` for both server and client.

### 4. Start the API server
```bash
npm start
```
or
```bash
node index.js
```

---

## Project Structure
- `server.js` — Fastify API server startup
- `Api/` — directory with endpoint implementations

---

## Known Issues
- When entering the game, you may see a connection error message. **If your nickname and level are loaded in the game, everything is working correctly.** This error is related to incomplete emulation and does not affect LAN gameplay.

---

## Contribution & Feedback
I'm welcome your PRs, bug reports, and suggestions! Open issues or create pull requests.

---

## License
This project is licensed under the MIT License. Not affiliated with Triternion or the official Mordhau servers.

---

**Enjoy Mordhau over your local network!**

---

## Steam Version Emulator
If you need an emulator for the Steam version of Mordhau with support for official clients and online mode, use [Mordhau-Backend-Emulator (Steam)](https://github.com/Serega25511s/Mordhau-Backend-Emulator). 