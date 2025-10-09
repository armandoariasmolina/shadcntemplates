---
author: unocss-community
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/hyoban-unocss-preset-shadcn-avatar-128.webp
createdAt: '2024-08-27T23:37:59.987Z'
demoUrl: https://unocss-preset-shadcn.vercel.app
description: Use shadcn ui with UnoCSS
distribution: open-source
githubUrl: https://github.com/hyoban/unocss-preset-shadcn
lastCommitOnDefaultBranch: '2025-03-13T01:32:42.000Z'
stars: 311
themeKey: hyoban-unocss-preset-shadcn
title: Unocss Preset Shadcn
category:
  - vite
---
## Overview: 
The UnoCSS Shadcn preset offers a collection of themes for shadcn/ui, shadcn-vue, shadcn-svelte, or SolidUI, making it easy to customize and start new projects without manual setup. With additional presets for animations and clear usage instructions, developers can efficiently implement this theme in their projects.

## Features:
- **Theme Customization**: Easily customize themes for shadcn/ui, shadcn-vue, shadcn-svelte, or SolidUI.
- **Starter Templates**: Start new projects quickly without manual setup.
- **Presets for Animations**: Additional presets for animations to enhance user experience.
- **Dynamic Theme Support**: Ability to use dynamic themes and create theme switch components.

## Installation:
1. Follow the official guide to set up shadcn/ui, shadcn-vue, or shadcn-svelte, or SolidUI, replacing the step to set up Tailwind CSS with UnoCSS.
2. Install unocss-preset-shadcn and unocss-preset-animations.
3. Update your unocss.config.ts with necessary configurations.
4. Copy utils.ts into your project at src/lib.
5. Create components.json or ui.config.json (for SolidUI) in your project root and modify as needed.
6. Run the appropriate command to add components for the respective framework:
    - `npx shadcn-ui@latest add button`
    - `npx shadcn-vue@latest add button` for shadcn-vue
    - `npx shadcn-svelte@latest add button` for shadcn-svelte
    - `npx solidui-cli@latest add button` for SolidUI.

## Summary:
The UnoCSS Shadcn preset offers a convenient solution for implementing customizable themes and animations in shadcn/ui, shadcn-vue, shadcn-svelte, or SolidUI projects. By following the provided installation instructions and utilizing the dynamic theme support, developers can efficiently enhance the visual appeal and functionality of their web applications.