# How to download

All versions of RROx can be found on the [Releases](https://github.com/tom-90/RROx/releases) page. Download the file with the name `RailroadsOnline.Extended.msi` and run it to install RROx.

# Support & Info

For questions about or issues with RROx, please use [the Discord server](https://discord.gg/vPxGPCDFBp).

# Antivirus warning

RROx needs to inject code into the game to function. However, this is not something regular programs do, and as such, it might get detected by your antivirus.

If necessary, you can add an exception to your antivirus for the following folder: `C:\Program Files\RROx` (This is the default installation directory. It can be changed during the installation).

All of the code is open-source, such that it can be verified by others to make sure it does not contain any malicious code. RROx attaches to the game using [DLL injection](https://wikipedia.org/wiki/DLL_injection). This means that no game files are modified on disk. By closing RROx and restarting the game, the game will run completely unaffected. To start using RROx, click the attach button below.

# How to use

Watch the [demo video](https://www.youtube.com/watch?v=Vvz0CANFxD0) that shows the basic usage of RROx *(This video is outdated as it shows version 1. A new video for version 2 will be available soon)*. In addition, the Info tab gives more a more detailed explanation of how to use it.

# Running RROx locally

If you want to build a version yourself, you can follow the below instructions to get each part to work.

## Run Electron App (Not working)

From within the root folder, run `yarn install` to install all dependencies.
Make sure you have NodeJS (tested with v16.13) and yarn installed.
(Yarn is required because the repository uses yarn workspaces)

Then to start the electron app run `yarn start` from the `packages/electron` directory.

## Build locally

1. From within the root folder, run `yarn install` to install all dependencies.
2. Install VSCode build tools (2022) and wix 3.11 [(here)](https://github.com/wixtoolset/wix3/releases/tag/wix3112rtm)
3. Add both installed tools to path (in my case, they're `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Current\Bin` and `C:\Program Files (x86)\WiX Toolset v3.11\bin`)
4. Modify some files so that newer build tools do not complain (Already done in this fork)
	* In `packages/dll/src/query/query.cpp`: Add `#include <algorithm>`
	* In `packages/dll/src/UE425/fname.h`: Add `#include <string>`
5. If you're using Node v17 or above, set an environmental variable `$env:NODE_OPTIONS="--no-experimental-fetch"`
6. Run the build command `yarn lerna run build`. This may take a few minutes
7. The output file is at `packages\electron\out`