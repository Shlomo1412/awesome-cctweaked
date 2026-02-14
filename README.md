# Awesome CC: Tweaked

[![Awesome CC: Tweaked](https://img.shields.io/badge/Awesome-CC%3A%20Tweaked-blue?logo=awesome-lists)](https://tweaked.cc/)  [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-tweaked)  [![Badge](https://img.shields.io/badge/A_fork_of-ComputerCraft-ba3636?logo=greasyfork&logoColor=white)](https://modrinth.com/mod/computercraft)  [![Badge](https://img.shields.io/badge/Oh,_and_it's_also-Open_Source-000000?logo=github&logoColor=white)](https://github.com/cc-tweaked/CC-Tweaked/)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://tweaked.cc/)

A curated list of awesome resources, libraries, programs, tutorials, and projects for [CC:Tweaked](https://modrinth.com/mod/cc-tweaked), modern ComputerCraft fork for Minecraft.

<details>
<summary>📑 Table of Contents</summary>

- [Libraries](#libraries)
  - [UI Frameworks](#ui-frameworks)
  - [2D Game development](#2d-game-development)
  - [Networking](#networking)
  - [3D Renderers](#3d-renderers)
  - [Peripheral managment](#peripheral-managment)
  - [Threads/Multitasking](#threadsmultitasking)
  - [Encryption](#encryption)
  - [Teltext Renderers](#teltext-renderers)
  - [Fonts](#fonts)
  - [AI](#ai-yeah-you-heard-right)
  - [Other](#other)
- [Mods and addons](#mods-and-addons)
  - [Mods](#mods)
  - [Datapacks](#datapacks)
- [External tools, websites and events](#external-tools-websites-and-events)
- [Programs](#programs)
  - [Storage, Turtles, and Peripherals](#storage-turtles-and-peripherals)
  - [Utility](#utility)
  - [(Code) Editors](#code-editors)
  - [Games](#games)
  - [Audio/Video Players](#audiovideo-players)
  - [AI](#ai)
  - [Web, internet, and communication](#web-internet-and-communication)
  - [Demoscene & Proof-of-Concept Projects](#demoscene--proof-of-concept-projects)
- [Operating Systems](#operating-systems)
  - [Graphical Operating Systems](#graphical-operating-systems)
  - [Headless Operating Systems](#headless-operating-systems)
- [XCC](#xcc)
- [Awesome People](#awesome-people)
- [Awesome Communities](#awesome-communities)
- [Credits](#credits)
  - [Author](#author-shlomo1412)
  - [People Who Helped](#people-who-helped)
  - [Contributors](#contributors)
  - [Tools Used](#tools-used)
  - [Sources Used](#sources-used)

</details>

## Libraries

### UI Frameworks

- [Basalt](https://basalt.madefor.cc/) by [Pyroxenium (aka. Robert Jelic)](https://github.com/Pyroxenium) - a modern, fast and well-known UI Framework.

    ![Badge](https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://basalt.madefor.cc/guides/getting-started.html) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Pyroxenium/Basalt2)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/dvpd49Zxf7)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020664889666179073)  [![DeepWiki](https://img.shields.io/badge/DeepWiki-Pyroxenium%2FBasalt2-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/Pyroxenium/Basalt2)

- [PixelUI](https://shlomo1412.github.io/pixelui-website/) by [Shlomo1412](https://github.com/Shlomo1412) *(Hey, it's me!)* - New UI Framework, currently on beta. Very fast, well documented, and containing *a lot* of features.

    [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://shlomo1412.github.io/pixelui-website/) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/PixelUI)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1390010384798187570)  [![DeepWiki](https://img.shields.io/badge/DeepWiki-Shlomo1412%2FPixelUI-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/Shlomo1412/PixelUI)

> [!WARNING]
> This library is archived since the release of the new and improved version. See next entry.

- [PixelUI v2](https://pixelui.madefor.cc/) by [Shlomo1412](https://github.com/Shlomo1412) - A new, improved, built from the ground up version of [PixelUI](https://shlomo1412.github.io/pixelui-website/) - now with improved structure, and Teltext rendering using [Shrekbox](https://codeberg.org/ShreksHellraiser/shrekbox).

    [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://pixelui.madefor.cc)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/PixelUI-v2)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1433538177486032979)  [![Badge](https://pinestore.cc/projects/205/pixelui-v2)

- [PrimeUI](https://mcjack123.github.io/PrimeUI/) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - A collection of UI component primitives for ComputerCraft. provides a number of small, mostly self-contained basic UI components that are designed to be embedded directly in a program.

    [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://mcjack123.github.io/PrimeUI/) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MCJack123/PrimeUI) [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1132918663285047366)  [![Badge](https://img.shields.io/badge/Use_its-Bundler-yellow?logo=mongodb&logoColor=white)](https://mcjack123.github.io/PrimeUI/bundler.html)

- [CCKit](https://github.com/Phoenix-ComputerCraft/CCKit2/) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) *(Yes, it's him again...)* - A new cross-platform object-oriented UI framework for ComputerCraft.

    [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://phoenix-computercraft.github.io/CCKit2/) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Phoenix-ComputerCraft/CCKit2/)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1357889734533185597)

### 2D Game development

- [Obsi 2](https://github.com/simadude/obsi2) by [Simadude](https://github.com/simadude) - a Lua library that was designed specifically for CC:Tweaked. Originally it was made as a game engine, but have refactored into a library for easier packaging.

    [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/simadude/obsi2/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/simadude/obsi2)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1268129893086920704)

- [Xenon 2D Engine](https://github.com/SpartanSf/Xenon) by [SpartanSf](https://github.com/SpartanSf) (aka. SpSf) - The Xenon engine is focused for 2D games. It aims provides a feature-rich and easy to use interface for developing games.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)]( https://github.com/SpartanSf/Xenon)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1389216394205466654)

- [ion2d](https://github.com/SpartanSf/ion2d/) by [SpartanSf](https://github.com/SpartanSf) (aka. SpSf) - The spiritual successor to [Xenon](https://github.com/SpartanSf/Xenon). A [CraftOS-PC](https://www.craftos-pc.cc/) graphics mode engine with a decent set of features.

  ![Badge](https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white) [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/SpartanSf/ion2d/blob/main/README.md)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SpartanSf/ion2d/) [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1462265267056017532) 

### Networking

- [MCHTTP-and-DNS](https://github.com/THEHHOY/MCHTTP-and-DNS) by [THEHHOY](https://github.com/THEHHOY) - With MCHTTP you can request data, post data and you can make a web browser for it . You can control your world with MCHTTP. MCHTTP is pretty easy to understand.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)]( https://github.com/THEHHOY/MCHTTP-and-DNS/)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1389962676909899886)

- [ECNet2](https://github.com/migeyel/ecnet) by PG2:31 [(aka. migeyel)](https://github.com/migeyel) - Encrypted Networking over Modem.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/migeyel/ecnet)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1168339990070186056)

- ModemShark by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - a tool to sniff modem packets being sent by nearby computers.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/migeyel/ecnet)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020768938331754606)

### 3D Renderers

- [Pine3D](https://github.com/Xella37/Pine3D) by [Xella](https://github.com/Xella37) - The most known, iconic and effecient 3D renderer for CC.

    ![Badge](https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/Pine3D)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://pine3d.cc/docs/guide/1_gettingStarted)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/24/pine3d)  [![Badge](https://img.shields.io/badge/📎_View_its-Website-orange?logoColor=white)](https://pine3d.cc)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/rsA8sKAMFV)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1052272130655531089)

- [C3D](https://github.com/9551-Dev/libC3D-dev) by [9551](https://github.com/9551-Dev)

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/9551-Dev/libC3D-dev)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://c3d.madefor.cc/)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/rsA8sKAMFV)

- V3D by Shadyduck

    [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/rsA8sKAMFV)

### Peripheral managment

- [Hopper.lua](https://github.com/umnikos/hopper.lua) by [umnikos](https://github.com/umnikos) - a cli CC program for the easy setup of complex item transportation pipelines. It supports wildcards, filters, transfer limits, many different peripherals, and more.

    ![Badge](https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)]( https://github.com/umnikos/hopper.lua)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1240740777429172225)  [![Badge](https://img.shields.io/badge/Simplified-Version-orange?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1434249907450941550)

- [Open Inventory Library (OIL)](https://github.com/afonya2/CC-OpenInvLib) by afo nya~ :3 (aka. [afonya2](https://github.com/afonya2)) - A modern inventory library for CC: Tweaked, With a command line utility called `ChestPart`.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/afonya2/CC-OpenInvLib)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1240740777429172225)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/afonya2/CC-OpenInvLib/blob/main/README.md)

- [CC Speaks](https://github.com/SquidDev-CC/cc-speaks) by [SquidDev](https://github.com/SquidDev-CC) - A very silly TTS server using espeak-ng for [Speakers](https://tweaked.cc/peripheral/speaker.html). (not built as an API library but as a web service)

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)]( https://github.com/SquidDev-CC/cc-speaks)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1040756494028779721)

### Threads/Multitasking

- [Taskmaster](https://gist.github.com/MCJack123/1678fb2c240052f1480b07e9053d4537) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - A simple and highly flexible task runner/coroutine manager.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1224137562793316432)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gist.github.com/MCJack123/1678fb2c240052f1480b07e9053d4537)

- [Thread](https://github.com/Fatboychummy-CC/Libraries/blob/main/thread.lua) by [Fatboychummy](https://github.com/Fatboychummy-CC) - Simple CC Thread Implementation.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Fatboychummy-CC/Libraries/blob/main/thread.lua)

- [RedRun](https://gist.github.com/MCJack123/473475f07b980d57dd2bd818026c97e8) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - a small coroutine manager that uses the `rednet.run` top-level coroutine to run tasks in the background.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020785201393172510)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gist.github.com/MCJack123/473475f07b980d57dd2bd818026c97e8)

### Encryption

- [Advanced Encryption Standard (AES) library](https://gist.github.com/afonya2/489c3306a7d85f8f9512df321d904dbb) by [afonya2](https://gist.github.com/afonya2) - an AES implementation for CC: Tweaked.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1207425248501178378)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gist.github.com/afonya2/489c3306a7d85f8f9512df321d904dbb)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://gist.github.com/afonya2/489c3306a7d85f8f9512df321d904dbb#file-docs-md)

- [SHA256/HMAC/PBKDF2](https://pastebin.com/6UV4qfNF) by [Anavrins](https://pastebin.com/u/Anavrins) - SHA-256, HMAC and PBKDF2 functions in ComputerCraft.

    [![Badge](https://img.shields.io/badge/Open-Source-yellow?logo=pastebin&logoColor=white)](https://pastebin.com/6UV4qfNF)

### Teltext Renderers

- [Pixelbox_lite](https://github.com/9551-Dev/pixelbox_lite) by [9551_dev](https://github.com/9551-Dev) - Very fast CC library used for rendering graphics with teletext characters (\128-\159)

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/9551-Dev/pixelbox_lite)

- BLittle by BigBloke - used by LevelOS. Couldn't find any info about it.

- [Chromy | Bimg Rendering](https://discord.com/channels/477910221872824320/1021014671274291251) by [Sammy](https://modrinth.com/user/Sammy) - Render bimg files easily!

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1021014671274291251)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gist.github.com/SammyForReal/cc1f6973be9d99647953759e1eaaa759)

- [Shrekbox](https://codeberg.org/ShreksHellraiser/shrekbox) by [ShreksHellraiser](https://codeberg.org/ShreksHellraiser) - Find pixelbox incredibly useful, but wish you could get more functionality from it? So do ShreksHellraiser, so he's announcing a tentative preview of shrekbox.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1405595757075234886)  [![Badge](https://img.shields.io/badge/Open-Source-blue?logo=codeberg&logoColor=white)](https://codeberg.org/ShreksHellraiser/shrekbox)

### Fonts

- [More Fonts](https://pinestore.cc/projects/37/more-fonts) by [Michiel](https://github.com/MichielP1807) - a library to print large text using teletext pixels with various fonts, sizes, and text wrapping and spacing options!

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1236332214321680505)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MichielP1807/more-fonts/)

- [Bigfont](https://pastebin.com/3LfWxRWh) by Wojbie - Have you ever wanted to write something on computer screen in different font size? Now with magical 1.8+ features you can!

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020637420343009350)  [![Badge](https://img.shields.io/badge/Open-Source-yellow?logo=pastebin&logoColor=white)](https://pastebin.com/3LfWxRWh)

### AI (Yeah you heard right)

- [ollama-cc](https://github.com/EmmaKnijn/ollama-cc) by [Emma (aka. EmmaKnijn)](https://github.com/EmmaKnijn/) - A simple CC client for Ollama

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1390615965397553194)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/EmmaKnijn/ollama-cc)

### Other

- Trainlib by **root@dev:~# python3 mourn_sc3.py** *(<- That's the name, I promise)* - makes it easier to handle Create's train schedules using a pseudo-OOP syntax.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1292217740416778240)

- [TELEM](https://pinestore.cc/projects/14/telem) by [Cyberbit](https://pinestore.cc/user/372183766464200704) - a modular, modern “Trivial ETL Engine for Minecraft” that lets you extract data from in-game storage and machinery, transform it with middleware (e.g., calculating rates or averages), and output it via dashboards, graphs, or secure networks—all within ComputerCraft.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1178122406947192852)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/14/telem)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://telem.cyberbit.dev/)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/cyberbit/telem)

- [Quanty](https://github.com/Shlomo1412/Quanty) by [Shlomo1412](https://github.com/Shlomo1412) - a simple Lua API library for ComputerCraft/CC: Tweaked and CCVS (CC-VS ShipAPI) that provides easy-to-use functions for working with quaternions and Euler angles.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/Quanty)

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Mods and addons

### Mods

- [Advanced Peripherals](https://modrinth.com/mod/advancedperipherals) by [seniorendi](https://modrinth.com/user/seniorendi) (aka. [Intelligence Modding](https://github.com/IntelligenceModding)) - a mod that adds many useful extensions for CC:Tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/advancedperipherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://docs.advanced-peripherals.de/latest/)  [![Badge](https://img.shields.io/badge/Donate_on-Patreon-000000?logo=Patreon&logoColor=white)](https://www.patreon.com/profile/creators?u=50099915)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/srendi)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/IntelligenceModding/AdvancedPeripherals)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/JGWkTy6PG8)

- [Some Peripherals](https://modrinth.com/mod/some-peripherals) by [SuperSpaceEye](https://modrinth.com/user/SuperSpaceEye) - A WIP addon to CC:Tweaked that adds various blocks and items.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/some-peripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/SuperSpaceEye/Some-Peripherals/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SuperSpaceEye/Some-Peripherals)

- [Plethora Peripherals](https://modrinth.com/mod/plethora-peripherals) by [Lemmmy](https://modrinth.com/user/Lemmmy) (Original Creator: [SquidDev](https://modrinth.com/user/squiddev)) - a ComputerCraft/CC: Tweaked peripheral provider. It aims to provide both metadata and peripherals for vanilla Minecraft and mainstream mods.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/plethora-peripherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/plethora-peripherals)

- [Tom's Peripherals](https://modrinth.com/mod/toms-peripherals) by, well, [Tom (aka. tom5454)](https://modrinth.com/user/tom5454) - CC: Tweaked Addon with High resolution monitors, 3D grahpics and more.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/toms-peripherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/toms-peripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/tom5454/Toms-Peripherals/wiki)  [![Badge](https://img.shields.io/badge/Donate_on-Patreon-000000?logo=Patreon&logoColor=white)](https://www.patreon.com/tom5454)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/tom5454)  [![Badge](https://img.shields.io/badge/❤️_Sponsor_on-GitHub-000000?logoColor=white)](https://github.com/sponsors/tom5454) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/tom5454/Toms-Peripherals)

- [CC: DirectGPU](https://github.com/tiktop101/CC-DirectGPU-Mod) by tom (aka. [tiktop101](https://github.com/tiktop101)) - High-performance ComputerCraft peripheral for rendering full RGB graphics directly to monitors.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/tiktop101/CC-DirectGPU-Mod)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1432013639132647455)  [![Badge](https://img.shields.io/badge/Get_it_on-GitHub-black?logo=github)](https://github.com/tiktop101/CC-DirectGPU-Mod/blob/main/directgpu-1.0.0.jar)

> [!NOTE]
> This mod is currently only avilable to download from [this post](https://discord.com/channels/477910221872824320/143201363913264745) or from its [GitHub Repo](https://github.com/tiktop101/CC-DirectGPU-Mod/blob/main/directgpu-1.0.0.jar).

- [CC: Androids](https://modrinth.com/mod/cc-androids) by [ThunderBear](https://modrinth.com/user/ThunderBear) - Programmable Androids for minecraft.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-androids)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/ThunderBear2006/CC-Androids/wiki) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/tom5454/Toms-Peripherals)

- [UnlimitedPeripheralWorks](https://modrinth.com/mod/unlimitedperipheralworks) by [SirEdvin](https://modrinth.com/user/SirEdvin) - Peripheral mod, that provides a lot extra features, new peripherals and even some items.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/unlimitedperipheralworks)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/unlimitedperipheralworks)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://docs.siredvin.site/UnlimitedPeripheralWorks/)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/dYHKMQYRPp)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SirEdvin/UnlimitedPeripheralWorks)

- [Embedded Computer](https://modrinth.com/mod/embeddedcomputer/) by [WindClan](https://modrinth.com/user/WindClan) -
Addon for CC:Tweaked that adds the "Embedded Computer" and a few other goodies to improve the multiplayer experience.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/embeddedcomputer/)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/WindClan/EmbeddedComputerMod/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/WindClan/EmbeddedComputerMod)

- [SwitchCraft Peripherals](https://modrinth.com/mod/sc-peripherals) by [Lemmmy](https://modrinth.com/user/Lemmmy) - Custom peripherals for the SwitchCraft server, including 3D Printers in the style of OpenComputers.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/sc-peripherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/sc-peripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://docs.sc3.io/features/sc-peripherals.html)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/JxM3NxZ)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SwitchCraftCC/sc-peripherals)

> [!NOTE]
> This mod is archived.

- [CC:C Bridge](https://modrinth.com/mod/cccbridge) by [Sammy](https://modrinth.com/user/Sammy) - Adds compatibility between CC: Tweaked and Create through more peripherals!

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cccbridge)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/cccbridgeripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://cccbridge.kleinbox.dev/)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/servers/minecraft-computer-mods-477910221872824320)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/sammykoch)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/tweaked-programs/cccbridge)

- [CC: VS](https://modrinth.com/mod/cc-vs) by [TechTastic](https://modrinth.com/user/TechTastic) - A simple ComputerCraft x Valkyrien Skies integration addon

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-vs)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/cc-vs)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/TechTastic/CC-VS/wiki)    [![Badge](https://img.shields.io/badge/Buy_TechTastic_a-Coffee-ffdd00?logo=buymeacoffee&logoColor=white)](https://buymeacoffee.com/techtastic)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/TechTastic/CC-VS)  

- [CC Shops](https://modrinth.com/mod/cc-shops) by [TechTastic](https://modrinth.com/user/TechTastic) - CC integration for Simple Shops

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-shops)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/cc-shops)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/TechTastic/CC-Shops/wiki)    [![Badge](https://img.shields.io/badge/Buy_TechTastic_a-Coffee-ffdd00?logo=buymeacoffee&logoColor=white)](https://buymeacoffee.com/techtastic)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/TechTastic/CC-Shops)

- [Ducky Peripherals](https://modrinth.com/mod/ducky-periphs) by [SamsTheNerd](https://modrinth.com/user/SamsTheNerd) - A general peripheral addon mod for ComputerCraft Restitched and Tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/ducky-periphs)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/ducky-periphs)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/SamsTheNerd/ducky-periphs/wiki)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/samsthenerd)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SamsTheNerd/ducky-periphs)

- [More Peripherals](https://modrinth.com/mod/more-peripherals) by [RoseIsProot](https://modrinth.com/user/RoseIsProot) - Adds new and interresting peripherals for CC:Tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/more-peripherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/more-peripherals)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://ohakimen.github.io/MorePeripheralsDocs/)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/hakimen)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/OHakimen/MorePeripherals)

- [CC: Drones](https://modrinth.com/mod/cc-drones) by [Acrogenous](https://modrinth.com/user/Acrogenous) - Drones for CC Tweaked! they do turtle things, but with additional jank.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-drones)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/acrogg)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/JSJBDEV/CCDrones)

- [CC: Drones+](https://modrinth.com/mod/ccdrones+) by [minecraftbossdj](https://modrinth.com/user/minecraftbossdj) (Original Creator: [JSJBDEV](https://github.com/JSJBDEV)) - A fork of [CC: Drones](https://modrinth.com/mod/cc-drones), Originally created by [JSJBDEV](https://github.com/JSJBDEV).

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/ccdrones+)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/CCDrones/)  [![Badge](https://img.shields.io/badge/Original-Mod-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-drones)

- [AC-Drones](https://modrinth.com/mod/ac-drones) by [qrmcat](https://modrinth.com/user/qrmcat) - Adds CC:Tweaked-powered programmable drone.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/ac-drones)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/ApioCraft/ac-drones/wiki/Drone-API)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ApioCraft/ac-drones)

- [CC: Link](https://modrinth.com/mod/cc-link) by [minecraftbossdj](https://modrinth.com/user/minecraftbossdj) - a interesting take and a reimagining of Plethora, for forge.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-link)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/minecraftbossdj/CC-Link/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/CC-Link)

- [CCSecureBoot](https://modrinth.com/mod/ccsecureboot) by [JackMacWindows](https://modrinth.com/user/JackMacWindows) - Implements boot security in CC: Tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/ccsecureboot)  [![Badge](https://img.shields.io/badge/❤️_Sponsor_on-GitHub-000000?logoColor=white)](https://github.com/sponsors/MCJack123)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/CC-Link)

- [CCTech](https://modrinth.com/mod/cctech) by [ShreksHellRaiser](https://modrinth.com/user/ShreksHellraiser) - More storage types for ComputerCraft:Tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cctech)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/ShreksHellraiser/cctech/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShreksHellraiser/cctech)

- [Create: CC Better Recipes](https://modrinth.com/mod/create-ccbr) by [the-can-of-soup](https://modrinth.com/user/the-can-of-soup) - Balances ComputerCraft by making its recipes require Create materials!

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/create-ccbr)

- [KubeJS + CC: Tweaked](https://modrinth.com/mod/kubejs+cc-tweaked) by [Wolfieboy09](https://modrinth.com/user/Wolfieboy09) - KubeJS + CC: Tweaked for Forge 1.20.1 and 1.19.2

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/kubejs+cc-tweaked)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/wolfieboy09/KubeJS-CC-Tweaked/wiki)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/wolfieboy09)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/wolfieboy09/KubeJS-CC-Tweaked)  [![Badge](https://img.shields.io/badge/Original-Mod-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/kubejs-computercraft)

- [Create: CC Total Logistics](https://modrinth.com/mod/create-cc-total-logistics) by [xeli](https://modrinth.com/user/xeli) - Bridge between CC: Tweaked and Create's logistics networks.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/kubejs-tweaked)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://xeli-cloud.gitlab.io/website/2025/05/11/cc-logistics-api-0.2.0.html)  [![Badge](https://img.shields.io/badge/Donate_on-Ko--Fi-critical?logo=kofi&logoColor=white)](https://ko-fi.com/xelicloud)  [![Badge](https://img.shields.io/badge/Open-Source-important?logo=gitlab&logoColor=white)](https://gitlab.com/xeli-cloud/create-cc-logistics)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/tsQmXxRaBv)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gitlab.com/xeli-cloud/create-cc-logistics)

- [Progressive Peripherals](https://modrinth.com/mod/progressiveperipherals) by [SirEdvin](https://modrinth.com/user/SirEdvin) - CC:T addon, that break limits for turtles and peripherals. Now you can do nearly everything!

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/progressiveperipherals)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/progressiveperipherals)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SirEdvin/ProgressivePeripherals)

- [SirEdvin's Cloud Solutions](https://modrinth.com/mod/cloud-solutions) by, well, [SirEdvin](https://modrinth.com/user/SirEdvin) - CC:T addons that brings some cloud services from real world into minecraft.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cloud-solutions)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/siredvins-cloud-solutions)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://docs.siredvin.site/CloudSolutions/)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/dYHKMQYRPp)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SirEdvin/CloudSolutions)

- [Classic Peripherals](https://modrinth.com/mod/classicperipherals/) by [AlexDevs](https://modrinth.com/user/AlexDevs) (aka. Alex, [Ale32bit](https://github.com/Ale32bit)) - Addon for CC: Tweaked that adds a bunch of peripherals and tweaks.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/classicperipherals/)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1426646706036019371)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/Ale32bit/ClassicPeripherals/wiki)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.com/invite/PYzP4XjzH4)  [![Badge](https://img.shields.io/badge/❤️_Sponsor_on-GitHub-000000?logoColor=white)](https://github.com/sponsors/Ale32bit)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Ale32bit/ClassicPeripherals/)

- [Finer Peripherals](https://modrinth.com/mod/finer-peripherals) by [minecraftbossdj](https://modrinth.com/user/minecraftbossdj) - Fabric CC Addon that adds several new peripherals.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/finer-peripherals)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/FinerPeripherals)

- [Metaphysics](https://modrinth.com/mod/metaphysics) by [fashaodesu](https://modrinth.com/user/fashaodesu) - some scanner API for cc:tweaked.

    [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/metaphysics)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/KallenKas024/Metaphysics/wiki)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/KallenKas024/Metaphysics)

- [CC: Lectern Hub](https://modrinth.com/mod/cc-lectern-hub) by [minecraftbossdj](https://github.com/minecraftbossdj) - A tiny mod allowing the lectern to be a peripheral hub.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1437946565997105233)  [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/cc-lectern-hub)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/CC-Lectern-Hub/)

- [CCX](https://github.com/minecraftbossdj/CCX) by [minecraftbossdj](https://github.com/minecraftbossdj) - CC: Tweaked addon adding misc stuff.

    ![Badge](https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1443715293036679268)  [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/mod/ccx)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/mc-mods/cc-x)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/bmMnhVCqJy)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/minecraftbossdj/CCX)

### Datapacks

- [CC: Advanced Math](https://github.com/TechTastic/Advanced-Math) by [TechTastic](https://github.com/TechTastic/) - So [TechTastic](https://github.com/TechTastic/), after the making of the [Quaternion API](https://discord.com/channels/477910221872824320/1415458889847279677), realized he could also do Matrices. Then he made his own [PID controller](https://discord.com/channels/477910221872824320/1440340840625995889).
Then he had an epiphany. Why not combine these advanced mathematical libraries into one singular datapack?

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1440587036988805203)  [![Badge](https://img.shields.io/badge/Get_it_on-Modrinth-brightgreen?logo=modrinth&logoColor=white)](https://modrinth.com/datapack/advanced_math)  [![Badge](https://img.shields.io/badge/Get_it_on-CurseForge-red?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft/data-packs/advanced-math)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://techtastic.github.io/Advanced-Math/index.html)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/TechTastic/Advanced-Math)

> [!NOTE]
> This is a combination of [TechTastic](https://github.com/TechTastic/Advanced-Math)'s 3 projects:
[PID controller](https://discord.com/channels/477910221872824320/1440340840625995889), [Quaternion API](https://discord.com/channels/477910221872824320/1415458889847279677), and Matrices API.

> [!IMPORTANT]
> All of the 3 projects above was created with the help of [getItemFromBlock](https://github.com/getItemFromBlock), and the "Spark" came from [me](https://github.com/Shlomo1412), though [tastic](https://github.com/TechTastic/Advanced-Math) ended up not using my code.

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## External tools, websites and events

- [CraftOS-PC](https://www.craftos-pc.cc/) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - A fast and feature-filled ComputerCraft emulator. Run CC Tweaked programs without minecraft!

    [![Badge](https://img.shields.io/badge/View_its-Docs-4688af?logo=readthedocs&logoColor=white)](https://www.craftos-pc.cc/docs/)  [![Badge](https://img.shields.io/badge/🌐_Online-Version-yellow?logoColor=white)](https://www.craftos-pc.cc/online/)  [![Badge](https://img.shields.io/badge/📎_View_its-Website-orange?logoColor=white)](https://www.craftos-pc.cc/)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MCJack123/craftos2)

- [PineStore](https://pinestore.cc/) by [Xella](https://github.com/Xella37) - Easily add your ComputerCraft projects, browse the tags to check out already uploaded projects and use the API to create your own applications with access to the database!

    [![Badge](https://img.shields.io/badge/🌐_Visit-yellow?logoColor=white)](https://pinestore.cc)  [![Badge](https://img.shields.io/badge/View_its-Docs-4688af?logo=readthedocs&logoColor=white)](https://pinestore.cc/documentation)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/NteV9fDQeS)  [![Badge](https://img.shields.io/badge/❓_View_its-FAQ-brightgreen?logoColor=white)](https://pinestore.cc/faq)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/PineStore-site)

- [Web-Based Turtle Controller](https://github.com/Ben-Brady/cc-manager-3) by [nnilky (aka. Ben Brady)](https://github.com/Ben-Brady) -  a turtle controller that you can use from your browser, it fully simulates the 3d environment and inventory as well as exposing all the turtle's controls.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1348882886761123870)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Ben-Brady/cc-manager-3)

- [PineJam](https://pinestore.cc/jam) by [Xella](https://github.com/Xella37) - PineJam is an annual ComputerCraft-themed game jam hosted on PineStore, where participants create ComputerCraft-related projects around a central theme (like "FLOW" in 2024 or "VEHICLES" in 2025), judged on creativity, design, appeal, and how well they honor the theme.

    [![Badge](https://img.shields.io/badge/🍯_Jam-list-red?logoColor=white)](https://pinestore.cc/jam)

- [CC: Blockly Editor](https://pinestore.cc/projects/72/cc-blockly-editor) by [st sarxzer XI](https://pinestore.cc/user/687947852478939188) - a visual code editor for ComputerCraft and ComputerCraft:Tweaked. This Blockly application allows you to create Lua scripts for ComputerCraft using a visual block-based interface.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/72/cc-blockly-editor)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Sarxzer/cc-blockly-editor)

- [Charmap](https://charmap.madefor.cc/) by [ShreksHellraiser](https://github.com/ShreksHellraiser) - a simple, web-based character map tailored for ComputerCraft: it lets you select a character (e.g. "0"), preview it with customizable foreground and background colors, and copy it to your clipboard in one click—perfect for crafting colored text or interfaces in-game.

    [![Badge](https://img.shields.io/badge/🌐_Visit-yellow?logoColor=white)](https://charmap.madefor.cc/)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShreksHellraiser/cc-charmap)

- [ComputerCraft Monitor Size Calculator](https://monitorsize.madefor.cc/) by [ShreksHellraiser](https://github.com/ShreksHellraiser) - a lightweight web tool that helps you determine the monitor dimensions in both character units and pixel units based on monitor width, height, and selected text scale — ideal for planning GUI layouts in-game.

    [![Badge](https://img.shields.io/badge/🌐_Visit-yellow?logoColor=white)](https://monitorsize.madefor.cc/)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShreksHellraiser/CC_Monitor_Size)

- [XCC](#xcc) by [Shlomo1412](https://github.com/Shlomo1412) - A comprehensive web-based development suite for CC: Tweaked.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/197/the-xcc-project)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1411412232016761017)  [![Badge](https://img.shields.io/badge/🌐_Visit-Website-yellow?logoColor=white)](https://shlomo1412.github.io/XCC)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/XCC)  [![Badge](https://img.shields.io/badge/View-Section-lightgrey?logo=markdown)](#xcc)

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Programs

### Storage, Turtles, and Peripherals

- Simple automatic turtle farm by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - a simple to use turtle farm.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020799884334477467)  [![Badge](https://img.shields.io/badge/Open-Source-yellow?logo=pastebin&logoColor=white)](https://pastebin.com/H2ArwWM1)

- [MISC](https://github.com/Storehaus/CC-MISC) by [ShreksHellraiser](https://codeberg.org/ShreksHellraiser) - Modular Item Storage and Crafting system.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1061830961479831602)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Storehaus/CC-MISC)

> [!NOTE]
> MISC is no longer maintained by ShreksHellraiser. it's now maintained by the Storehaus group.

- [Turtle 3D Printer (C#)](https://discord.com/channels/477910221872824320/1158042129776508928) by [L3velDr4in](https://github.com/pre-alpha-final) - Print from png blueprints or scan terrain and reprint.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1158042129776508928)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/pre-alpha-final/rce2/tree/master/agents/MinecraftAgents/Turtle3dPrinter)

- Schematic builder! by Axo - Choose a lazy programmer to do a hard job. Because a lazy programmer will find an easy way to do it.
I will make it open source when it's complete. *(<- Yeah, that's the description)*

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1299312415862816820)

- [ShrekPrint](https://pinestore.cc/projects/115/shrekprint) by [ShreksHellraiser](https://codeberg.org/ShreksHellraiser) -  an infinitely expandable color printer.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1277470936588877865)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/115/shrekprint)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShrekshellraiserCC/shrekword)

### Utility

- [Github Downloader](https://pinestore.cc/projects/157/github-downloader-on-cc) by [Tom](https://pinestore.cc/user/787626842684915742) - A user-friendly GUI tool for downloading entire GitHub repositories directly to your ComputerCraft device.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/157/github-downloader-on-cc)

### (Code) Editors

- [PixelCode](https://github.com/Shlomo1412/PixelUI/blob/main/code_editor_app.lua) by [Shlomo](https://github.com/Shlomo1412) (Yo, that's me again!) - A simple code editor app made to demo PixelUI framework abilities.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1402258043781124117)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/181/pixelcode-pixelui-demo-)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/PixelUI/blob/main/code_editor_app.lua)

- [CONSULT](https://consult.madefor.cc/) by [Sammy](https://github.com/SammyForReal) - A Lua editor that provides a modern user interface for CraftOS (and anything based on it).

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020666130437775481)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://github.com/SammyForReal/CONSULT/wiki)  [![Badge](https://img.shields.io/badge/📎_View_its-Website-orange?logoColor=white)](https://consult.madefor.cc/)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/20/consult)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SammyForReal/CONSULT)

- [ShrekWord](https://pinestore.cc/projects/114/shrekword) by [ShreksHellraiser](https://codeberg.org/ShreksHellraiser) - a word-like document editor for computercraft.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1277470936588877865)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/114/shrekword)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShrekshellraiserCC/shrekword)

### Games

- [Crazy Cargo Crusade](https://pinestore.cc/projects/185/crazy-cargo-crusade) by [Sammy](https://github.com/SammyForReal) - A game where you drive towards a warehouse on a randomly generated map, as fast as possible! (PineJam 2025)

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1403056683701375068)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/185/crazy-cargo-crusade)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/SammyForReal/CrazyCargoCrusade/)

- [Watermelon Game 3D](https://pinestore.cc/projects/32/watermelon-game-3d) by [Xella](https://pinestore.cc/user/302427405023313920) - You might have heard about the Suika Watermelon Game! 🍉
Now imagine, you play this game in 3D. Just kidding, you don't have to imagine that, because you can play this **right now**!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/32/watermelon-game-3d)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/Watermelon-Game-3D)

- [CCDoom](https://pinestore.cc/projects/1/ccdoom) by [Xella](https://pinestore.cc/user/302427405023313920) - CCDoom is a 3D first-person shooter in ComputerCraft made using the Pine3D graphics library. It is inspired by the game "Doom" as the name implies. Enter your name and submit scores to the online leaderboard!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/1/ccdoom)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/CCDoom)

- [Pumpkin Carver](https://pinestore.cc/projects/118/pumpkin-carver) by [Xella](https://pinestore.cc/user/302427405023313920) - Enjoy the fun process of carving pumpkins now from the comfort of your ComputerCraft computer!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/118/pumpkin-carver)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/Pumpkin-Carver)

- [Spamton's Jump](https://pinestore.cc/projects/186/spamton-s-jump) by [Simaton (aka. Simadude/Sima)](https://pinestore.cc/user/352038125054459907) - A COOL GAME MADE BY SIMA!!!
JUMP HIGHER AND HIGHER UNTIL YOU [[die]]. *(<- Not even kidding. That's the original description.)*

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1402979294371905596)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/186/spamton-s-jump)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/simadude/obsi2-pinejam25-game)

- Tetracraft by [Kazza](https://pastebin.com/2jmN835i) - TETRIS ON YOUR POCKET PC (And anywhere else)

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1387297891005104218)  [![Badge](https://img.shields.io/badge/Open-Source-yellow?logo=pastebin&logoColor=white)](https://pastebin.com/2jmN835i)

- [CC Minecraft](https://pinestore.cc/projects/2/cc-minecraft) by [Xella](https://pinestore.cc/user/302427405023313920) - a mostly complete game emulating Minecraft within ComputerCraft in 3D made using the Pine3D graphics library. You can generate many different worlds, each with infinite chunks to build in with your limited number of blocks.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/2/cc-minecraft)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Xella37/CC-Minecraft)

- [Mine Clicker](https://pinestore.cc/projects/144/mine-clicker) by [Sparkwave](https://pinestore.cc/user/696752020459225148) - an awesome little idle game for CC:Tweaked.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/144/mine-clicker)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Sparkwave2/mine-clicker)

- [Car Dating Simulator](https://pinestore.cc/projects/184/car-dating-simulator) by [piguman3](https://pinestore.cc/user/703386375554334800) - *description contains inappropriate words.*

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/184/car-dating-simulator)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/piguman3/CarDatingSimBrainfuckPineJam2025EditionLimited)

> [!IMPORTANT]
> This Game requires 1.8MB of storage, meaning it won't run on in-game computer unless you change the config.

- [Samurai Salad](https://pinestore.cc/projects/5/samurai-salad) by [Michiel](https://pinestore.cc/user/134008375984914432) - A game inspired by the mobile game Fruit Ninja, where you slice various fruits (including pineapples 🍍️) to gain points, but you have to avoid the bombs to stay alive.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/5/samurai-salad)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MichielP1807/CC-Samurai-Salad)

- [CC Rubik's Cube](https://pinestore.cc/projects/4/cc-rubik-s-cube) by [Michiel](https://pinestore.cc/user/134008375984914432) - A playable Rubik's Cube in ComputerCraft made with Pine3D!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/4/cc-rubik-s-cube)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MichielP1807/CC-Rubiks-Cube)

- [Xevious](https://pinestore.cc/projects/169/xevious) by [Stuin](https://pinestore.cc/user/301973641674096640) - Control a flying attack ship, the Solvalou, to destroy the Xevious forces plotting to take over Earth.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/169/xevious)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/stuin/Xevious)

- [The Button](https://pinestore.cc/projects/8/the-button) by [Michiel](https://pinestore.cc/user/134008375984914432) - Bored? Press the button!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/8/the-button)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MichielP1807/CC-Bored-Button)

- [Racing Game](https://pinestore.cc/projects/167/racing-game) by [Remie](https://pinestore.cc/user/329631860219052032) - a small game that's all about racing a little car through some checkpoints!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/167/racing-game)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/remie92/Computer-Racer)

### Audio/Video Players

- [YouCube](https://discord.com/channels/477910221872824320/1036382245516214302) by Commandcracker - a tool that streams dfpwm files to ComputerCraft: Tweaked. The YouCube server uses yt-dlp and yt-dlp/FFmpeg to provide media from services like YouTube as dfpwm files.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1036382245516214302)  [![Badge](https://img.shields.io/badge/📎_View_its-Website-orange?logoColor=white)](https://youcube.madefor.cc/)
    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/CC-YouCube)

- [Musicify](https://discord.com/channels/477910221872824320/1027958593137414184) by [Emma (aka. EmmaKnijn)](https://github.com/EmmaKnijn/) - the port of the awesome Computronics music player to modern CC, it now plays music in every version after 1.100.0, Try it out now!

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1027958593137414184)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/knijn/musicify)

- [Musiclo](https://discord.com/channels/477910221872824320/1356285218272841830) by timuzkas - Simple, sleek YT music player.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1356285218272841830)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/136/musiclo)  [![Badge](https://img.shields.io/badge/Open-Source-important?logo=gitlab&logoColor=white)](https://gitlab.com/monosoft2/musiclo)

- [MeowSynthCC](https://pinestore.cc/projects/7/meowsynthcc) by [Michiel](https://github.com/MichielP1807) - a playful ComputerCraft project that recreates the iconic MeowSynth synthesizer inside Minecraft, letting players make music with meowing sounds in-game.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/7/meowsynthcc)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MichielP1807/MeowSynthCC)

- [Blockman (Minecraft walkman)](https://pinestore.cc/projects/82/blockman-minecraft-walkman-) by [Ella](https://pinestore.cc/user/780593515410489375) - A stationary Walkman for Minecraft.
Easy to use with a neat UI, and ten pretty themes!

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/82/blockman-minecraft-walkman-)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Bluerella/ComputerCraft-Blockman)

- [Quartz Audio Player](https://pinestore.cc/projects/59/quartz-audio-player) by [Alex](https://pinestore.cc/user/113673208296636420) - DFPWM and MDFPWM audio player for ComputerCraft.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/59/quartz-audio-player)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Ale32bit/Quartz)

- [Pocketbox](https://github.com/windclan/pocketbox) by [WindClan (aka. Ping On Reply)](https://github.com/windclan) - a DFPWM player that plays music in playlists. It goes through all the music specified in your configuration file.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1118004613950488625)  [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/145/pocketbox)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/windclan/pocketbox)

- [VBC](https://github.com/Arkowne/vbc-computercraft) by [Arkowne](https://github.com/Arkowne/) - A videoplayer for CC: Tweaked!

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1436512639550492775)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Arkowne/vbc-computercraft)  [![Badge](https://img.shields.io/badge/Demo-Video-red?logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=PHqmMYMrotw)

### AI

- [Shape AI](https://pastebin.com/Vs9WGYtu) by Kazza - Computercraft Perceptron AI

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1343763007016144926)  [![Badge](https://img.shields.io/badge/Open-Source-yellow?logo=pastebin&logoColor=white)](https://pastebin.com/Vs9WGYtu)

### Web, internet, and communication

- [Craft-Web](https://github.com/Elemnto56/Craft-Web) by jjcthe_ (aka. [Elemnto56](https://github.com/Elemnto56)) - A web broswer for CC:T.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1432089438435016876)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Elemnto56/Craft-Web)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://elemnto56.github.io/Craft-Web/)

### [Demoscene](https://en.wikipedia.org/wiki/Demoscene) & Proof-of-Concept Projects

- [Herobrine](https://pinestore.cc/projects/34/herobrine) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123)

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/34/herobrine)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MCJack123/Herobrine/)  [![Badge](https://img.shields.io/badge/Demo-Video-red?logo=youtube&logoColor=white)](https://youtu.be/kxfiFJnY4kY)

- [Astronaut](https://youtu.be/IBkzQSVgDXg) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123)

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1409343364251390002)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/MCJack123/Astronaut/releases/latest)  [![Badge](https://img.shields.io/badge/Demo-Video-red?logo=youtube&logoColor=white)](https://youtu.be/IBkzQSVgDXg)

- [CCMaps](https://pinestore.cc/projects/66/ccmaps) by [Cyberbit](https://pinestore.cc/user/372183766464200704) - A proof-of-concept vector map viewer. Requires HTTP.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/66/ccmaps)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://gist.github.com/cyberbit/b64e2e04b1006778b9077553768e07f4)

- [Minecraft IRL Weather](https://pinestore.cc/projects/140/minecraft-irl-weather) by [Tom](https://pinestore.cc/user/787626842684915742) - An IRL weather app for minecraft, Computercraft

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/140/minecraft-irl-weather)

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Operating Systems

### Graphical Operating Systems

- [LevelOS](https://discord.com/channels/477910221872824320/1021361044934889482) by Leveloper - an OS developed for ComputerCraft that brings you the feel and interface of Windows 10. With the smooth and featureful window manager multitasking has become easier than ever.

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1343763007016144926)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://discord.gg/vBsjGqy99U)  [![Badge](https://img.shields.io/badge/Demo-Video-red?logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=F29vH8W7ZjE)

- [Opus](https://github.com/kepler155c/opus) by [kelper155c](https://github.com/kepler155c) - An OS for CC, includes many features, like UI API.

    [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/kepler155c/opus)

- [Remos](https://pinestore.cc/projects/75/remos) by [ShreksHellraiser](https://codeberg.org/ShreksHellraiser) - a multitasking shell ("Operating System") heavily inspired by Android.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/75/remos)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/ShrekshellraiserCC/remos)

- [RedOS](https://pinestore.cc/projects/191/redos-file-system-) by [RedTech0 (aka. Red Tech Innovations)](https://pinestore.cc/user/926257764337070180) - a system developed for a youtube series which by [RedTech-Innovations](https://www.youtube.com/@RedTech-Coding).

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/191/redos-file-system-)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Redtech0inc/RedOS-cc-Tweaked-)  [![Badge](https://img.shields.io/badge/Watch-Series-red?logo=youtube&logoColor=white)](https://www.youtube.com/@RedTech-Coding)

- [Quint](https://pinestore.cc/projects/146/quint) by [Kuberow](https://pinestore.cc/user/1265921944860102777) - an OS for ComputerCraft. Includes GUI.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/146/quint)

### [Headless](https://en.wikipedia.org/wiki/Headless_software) Operating Systems

- [Phoenix](https://pinestore.cc/projects/38/phoenix) by [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123) - the next-generation modular operating system for ComputerCraft. It introduces a brand-new way to interact with CC, adding many services from modern systems such as preemptive multitasking, filesystem permissions, virtual device trees, and much more.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/38/phoenix)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1020804405165047911)  [![Badge](https://img.shields.io/badge/Join_its-Discord-informational?logo=discord&logoColor=white)](https://www.craftos-pc.cc/discord)  [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](https://phoenix.madefor.cc/)  [![Badge](https://img.shields.io/badge/View_its-Changelog-red?logo=changedetection&logoColor=white)](https://phoenix.madefor.cc/docs/changelog)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Phoenix-ComputerCraft/)

- [OZY OS](https://pinestore.cc/projects/190/ozy-os) by [Kuberow](https://pinestore.cc/user/1265921944860102777) and [Tom](https://pinestore.cc/user/787626842684915742) - a CC:T Operating System made for Security.

    [![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/190/ozy-os)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Kuberow/OZY-OS)

- [iPod OS](https://github.com/kaykaypoopaa/Ipod-CC-Tweaked) by [GlitchGod42](https://github.com/GlitchGod42) and [kaykaypoopaa](https://github.com/kaykaypoopaa) - an [headless](https://en.wikipedia.org/wiki/Headless_software) OS for [advanced pocket computers](https://letmegooglethat.com/?q=CC%3A+Tweaked+advanced+pocket+computer).

    [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1472312218275151997) [![Badge](https://img.shields.io/badge/View_its-Wiki-4688af?logo=readthedocs&logoColor=white)](http://ipod-os-cctweaked.duckdns.org/website/) [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/kaykaypoopaa/Ipod-CC-Tweaked)

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

<table width="100%">
  <tr>
    <td><h2 id="xcc">XCC</h2></td>
    <td align="right">
      <img src="https://img.shields.io/badge/-Recommended-success?logo=googletasks&logoColor=white" alt="Recommended Badge">
    </td>
  </tr>
</table>

[![Badge](https://img.shields.io/badge/PineStore-Post-00C853?logo=pine64&logoColor=white)](https://pinestore.cc/projects/197/the-xcc-project)  [![Badge](https://img.shields.io/badge/Original-Post-blue?logo=discord&logoColor=white)](https://discord.com/channels/477910221872824320/1411412232016761017)  [![Badge](https://img.shields.io/badge/🌐_Visit-Website-yellow?logoColor=white)](https://shlomo1412.github.io/XCC)  [![Badge](https://img.shields.io/badge/Open-Source-000000?logo=github&logoColor=white)](https://github.com/Shlomo1412/XCC)

> A comprehensive web-based development suite for **CC: Tweaked** by [Shlomo1412](https://github.com/Shlomo1412). This project provides a toolset to streamline ComputerCraft application development.

**XCC** includes UI generator with support for multiple UI frameworks ([Basalt](https://basalt.madefor.cc/), [PixelUI](https://shlomo1412.github.io/pixelui-website/), and [PrimeUI](https://mcjack123.github.io/PrimeUI/)), advanced components like `TreeView` and `Chart` widgets, and a dedicated NFP picture editor. The toolset generates clean, production-ready `Lua`/`XML`/`JSON`/`XCC` code and supports project management through our custom `.xcc` file format.

**The project is now available as an open-source solution for CC: Tweaked developers.**

As always, feedback is welcome. Feel free to point out bugs, open issues, and suggest a feature/new tool.

### Current Tools

- Basalt UI Designer
- PixelUI UI Designer
- PrimeUI UI Designer
- NFP (CC's image format) Editor

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Awesome People

> People who have helped or been significantly involved in the CC: Tweaked community. Note that it's only my opinion, and mine only.

- [JackMacWindows (aka. JackMC123/MCJack123)](https://github.com/MCJack123)

- [SquidDev](https://github.com/SquidDev-CC)

- [ShreksHellraiser](https://codeberg.org/ShreksHellraiser)

- [Xella](https://github.com/Xella37)

- [Pyroxenium (aka. Robert Jelic)](https://github.com/Pyroxenium)

- [Cyberbit](https://pinestore.cc/user/372183766464200704)

- [Sammy](https://github.com/SammyForReal)

- Leveloper

- [Michiel](https://pinestore.cc/user/134008375984914432)

- [minecraftbossdj](https://modrinth.com/user/minecraftbossdj)

- [SirEdvin](https://modrinth.com/user/SirEdvin)

- [TechTastic](https://modrinth.com/user/TechTastic)

- [Emma (aka. EmmaKnijn)](https://github.com/EmmaKnijn/)

- [Tomodachi94](https://github.com/tomodachi94)

- FLESHPRIS0N

- [TechTastic](https://github.com/TechTastic)

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Awesome Communities

- [MCCM (Minecraft Computer Mods) Discord Server](https://discord.computercraft.cc/) by HydroNitrogen.

- [PineStore Discord Server](https://discord.gg/NteV9fDQeS) by Xella.

- [Pyroxienum Discord Server](https://discord.gg/dvpd49Zxf7) by NyoriE.

- [Leveloper Software Discord Server](https://discord.gg/MuSMajUd) by Leveloper.

- [Lua3D Discord Server](https://discord.gg/MjsNjK2psB) by Xella.

- [CraftOS-PC/Phoenix Discord Server](https://discord.gg/v9yPf7qRDY) by JackMacWindows.

- [ComputerCraft Forums](https://forums.computercraft.cc/).

- [PineStore](https://pinestore.cc) by Xella.

- [Awesoft Development Server](https://discord.gg/bmMnhVCqJy) by minecraftbossdj.

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>

## Credits

### Author: [Shlomo1412](https://github.com/Shlomo1412)

### People Who Helped

- FLESHPRIS0N - Made the DeepWikis for Basalt and PixelUI, along with their Shield Badges.

### Contributors

> Insert names here

### Tools Used

- [Shieldy](https://shlomo1412.github.io/shieldy-site/) by [Shlomo1412](https://github.com/Shlomo1412) - Used to create the Shield Badges

- [SimpleIcons.org](https://simpleicons.org) - Used for the Shield badges' icons.

### Sources Used

- [PineStore](https://pinestore.cc/) by [Xella](https://github.com/Xella37) - Used for [Libraries](#libraries) and [Programs](#programs).

- [MCCM (Minecraft Computer Mods) Discord Server](https://discord.computercraft.cc/) by HydroNitrogen - Used for [Libraries](#libraries) and [Programs](#programs).

- [Modrinth](https://modrinth.com/) - Used for [Mods and addons](#mods-and-addons).

- [CurseForge](https://www.curseforge.com/) - Used for [Mods and addons](#mods-and-addons).

<div align="right">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬆️_Back_to_Top-blue?logoColor=green" alt="Back to Top Badge">
  </a>
</div>
