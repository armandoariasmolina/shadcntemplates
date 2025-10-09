---
author: htmujahid
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/htmujahid-shadcn-editor-avatar-128.webp
createdAt: '2025-02-06T00:26:40.702Z'
demoUrl: https://shadcn-editor.vercel.app
description: Lexical base rich text editor using shadcn/ui components
distribution: open-source
githubUrl: https://github.com/htmujahid/shadcn-editor
lastCommitOnDefaultBranch: '2025-05-16T11:51:06.000Z'
stars: 623
themeKey: htmujahid-shadcn-editor
title: Shadcn Editor
category:
  - nextjs
  - react
  - tailwind
---
## Overview:
The `registry-template` is a tool that allows users to run their own component registry using the shadcn CLI. By running a custom component registry, users can distribute their custom components, hooks, pages, and other files to any React project. This template is created using Next.js and utilizes a `registry.json` file to define components and their files. The registry items are served as static files under `public/r/[name].json`.

## Features:
- **Custom Component Registry**: Run your own component registry using the shadcn CLI.
- **Distribution of Custom Components**: Easily distribute custom components, hooks, and pages to any React project.
- **Next.js Template**: Utilizes Next.js for creating the custom registry.
- **Registry.json File**: Define components and their files using a `registry.json` file.
- **Route Handler**: Includes a route handler for serving registry items.
- **Compatibility with shadcn CLI**: All registry items are compatible with the shadcn CLI.
- **v0 Integration**: Adds v0 integration using the Open in v0 API.

## Installation:
To install the `registry-template` and run your own component registry, follow these steps:

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the registry using the shadcn CLI:
   ```
   shadcn build
   ```

4. Serve the registry items as static files:
   - Registry items are served under `public/r/[name].json`.
   - Route handler is included for serving registry items.

5. Visit the shadcn documentation for more details on using the registry.

## Summary:
The `registry-template` is a tool designed for users to create and run their own custom component registry using the shadcn CLI. It provides features such as the distribution of custom components, compatibility with the shadcn CLI, and integration with the Open in v0 API. With a Next.js template and a `registry.json` file for defining components, users can easily set up and utilize this tool to distribute custom components, hooks, and pages to any React project. Visit the shadcn documentation for a comprehensive guide on using the `registry-template`.