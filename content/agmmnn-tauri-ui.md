---
author: agmmnn
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/agmmnn-tauri-ui-avatar-128.webp
createdAt: '2023-05-05T01:36:18.374Z'
demoUrl: https://npmjs.com/package/create-tauri-ui
description: >-
  Create modern Tauri desktop apps in just a few simple steps with shadcn/ui.
  React, Next.js, Sveltekit.
distribution: open-source
githubUrl: https://github.com/agmmnn/tauri-ui
lastCommitOnDefaultBranch: '2024-04-05T12:34:15.000Z'
lastSourcedAt: '2023-05-05T01:06:46.998Z'
stars: 1526
themeKey: agmmnn-tauri-ui
title: Tauri UI
category:
  - nextjs
  - react
  - svelte
  - tailwind
  - radix-ui
---
## Overview
Tauri UI Template is a starting point for building modern desktop applications with web technologies. It provides customizable UI components, a lightweight and secure desktop app framework called Tauri 2, and integration with React-based framework Next.js 13 and utility-first CSS framework Tailwind. The template supports dark and light modes and utilizes components-based UI design.

## Features
- Customizable UI components with shadcn/ui
- Lightweight and secure desktop app framework Tauri 2
- Integration with React-based framework Next.js 13
- Support for dark and light modes
- Components-based UI design
- Draggable titlebar with minimize, maximize, and close buttons
- Radix UI for UI primitives
- TypeScript
- Lucide Icons
- Bundle size optimized Cargo.toml (.exe 3mb, .msi 2mb)
- Tauri GitHub Action

## Installation
To get started with Tauri UI Template, follow these steps:

1. Customize the template by editing the following files:
   - src-tauri/tauri.conf.json
   - package.json
   - src-tauri/cargo.toml

2. To change the app icon, update "app-icon.png" and run the command "pnpm tauri icon". This will automatically generate icon files into "src-tauri/icons".

3. Note that shadcn/ui is not a library, so you will need to update the components manually. Download the "shadcn/ui/apps/www/components/ui" directory and paste it into "src/components/ui".

4. To-Do list:
   - [x] Titlebar draggable.
   - [x] Titlebar minimize, maximize, close buttons.
   - [x] Titlebar double-click maximize.
   - [x] Decomposing UI into components.
   - [x] Dark-Light mode switch.
   - [x] Get simple data from the Rust backend code.

5. Folder structure: Recommended IDE Setup:
   - VS Code
   - Tauri
   - rust-analyzer

## Summary
Tauri UI Template is a flexible and customizable starting point for building modern desktop applications. It offers a range of features, including customizable UI components, a lightweight and secure desktop app framework, integration with popular web technologies, and support for dark and light modes. The template provides clear installation instructions and allows for customization of various aspects, including the app icon and UI components. With a recommended IDE setup, developers can easily get started with Tauri UI Template and create their desired desktop applications.