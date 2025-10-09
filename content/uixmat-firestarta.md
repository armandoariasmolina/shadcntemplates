---
author: uixmat
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/uixmat-firestarta-avatar-128.webp
createdAt: '2024-06-01T10:57:05.578Z'
demoUrl: https://firestarta.dev
description: >-
  Next.js SaaS boilerplate with NextAuth, Prisma, Supabase, Shadcn/ui & Lemon
  Squeezy Subscriptions
distribution: open-source
githubUrl: https://github.com/uixmat/firestarta
lastCommitOnDefaultBranch: '2024-03-03T22:04:19.000Z'
stars: 215
themeKey: uixmat-firestarta
title: Firestarta
category:
  - nextjs
  - react
  - scss
  - tailwind
  - prisma
  - supabase
  - radix-ui
  - boilerplate
---
## Overview:
The Next.js SaaS Boilerplate is a repository designed as a starting point for Next.js SaaS projects that require features such as user authentication, management, and subscription payments. It utilizes technologies like Prisma with a Postgres database, NextAuth, Typescript, Supabase for Postgres, and Lemon Squeezy for subscriptions. The repository includes various features like app directory, route groups, user profiles, account pages, custom components, and more.

## Features:
- **App directory**: Organized structure for the project's files.
- **Route Groups**: Grouping of routes for better organization.
- **Intercepting & Parallel Routes**: Handling route intercepts and parallel routes efficiently.
- **CSR/SSR**: Client-side and server-side rendering support.
- **Subscriptions with Lemon Squeezy**: Integration for subscription payment handling.
- **Basic SEO**: Includes basic Search Engine Optimization features.
- **User Profiles**: Functionality to manage user profiles.
- **Account Pages**: Pages related to user accounts.
- **Custom Components**: Ability to create and use custom UI components.

## Installation:
To set up the Next.js SaaS Boilerplate, follow these steps:

1. Create a `.env.local` file and generate a NextAuth secret.
2. Set up GitHub Authentication by creating a new app at https://github.com/settings/apps with the callback URL as `[origin]/api/auth/callback/[provider]`.
3. Open http://localhost:3000 in your browser to view the project.

## Summary:
The Next.js SaaS Boilerplate provides a solid foundation for Next.js projects requiring user authentication, subscription payments, and user management. With features like route grouping, user profiles, and custom components, this boilerplate offers a starting point for building robust SaaS applications in Next.js. The installation process involves setting up environment variables, configuring GitHub authentication, and accessing the project via localhost for further development.