---
author: ajnart
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/ajnart-subs-avatar-128.webp
createdAt: '2024-11-05T01:38:30.411Z'
demoUrl: https://subs.ajnart.fr/
description: Subs ! Track your subscriptions easily
distribution: open-source
githubUrl: https://github.com/ajnart/subs
lastCommitOnDefaultBranch: '2025-04-09T15:56:38.000Z'
stars: 474
themeKey: ajnart-subs
title: Subs
category:
  - nextjs
  - react
  - vite
  - tailwind
  - headless-ui
---
## Overview
Subs Tracker is an open-source subscription cost tracker hosted on the developer's website, featuring an improved UI/UX, client-side data storage, and easy edit functionality. It allows users to add, edit, and remove subscriptions while calculating the total monthly cost. The tool has responsive design for both desktop and mobile use, built using Next.js, React, and Zustand for state management.

## Features
- **Improved UI/UX**: Enhances visual appeal and user-friendliness.
- **Client-Side Data Storage**: Stores data directly in the browser, eliminating the need for self-hosting.
- **Edit Functionality**: Easily modify existing subscriptions.
- **Automatic Favicon Fetching**: Provides visual identification for each subscription.
- **Total Monthly Cost Calculation**: Automatically calculates the total monthly cost.
- **Responsive Design**: Ensures usability on both desktop and mobile devices.

## Installation
1. Clone the repository.
2. Install dependencies with `pnpm i`.
3. Copy the example env var file with `copy .env.example .env`.
4. Optional: Update the SQLLite database file setting in `.env`.
5. Optional: Set `NEXT_PUBLIC_USE_SQLITE` to false to use local storage instead of SQLLite, persisting data in the browser.
6. Push the database schema with `pnpm run db:push` (not needed if using local storage).
7. Run the development server with `pnpm run dev`.
8. Open http://localhost:3000 in your browser.

## Summary
Subs Tracker is a simplistic open-source tool that helps users track their subscription costs with ease. It features a user-friendly interface, client-side data storage, and provides functionalities like adding, editing, and removing subscriptions. By following the installation guide, users can quickly set up the tool and start managing their subscriptions efficiently.