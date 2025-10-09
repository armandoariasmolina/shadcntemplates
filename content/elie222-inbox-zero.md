---
author: elie222
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/elie222-inbox-zero-avatar-128.webp
createdAt: '2024-08-27T23:37:59.978Z'
demoUrl: https://getinboxzero.com
description: >-
  The world's best AI personal assistant for email. Open source app to help you
  reach inbox zero fast.
distribution: open-source
githubUrl: https://github.com/elie222/inbox-zero
lastCommitOnDefaultBranch: '2025-05-23T17:38:28.000Z'
stars: 7797
themeKey: elie222-inbox-zero
title: Inbox Zero
category:
  - nextjs
  - tailwind
  - prisma
  - boilerplate
---
## Overview: 
Inbox Zero is an open-source email application designed to help users achieve inbox zero quickly through AI assistance. The app offers features such as Newsletter Cleaner, AI Assistant, Cold Email Blocker, Email Analytics, New Senders identification, Unreplied Emails tracker, and Large Email Finder. It is built with Next.js, Tailwind CSS, and other tools.

## Features:
- **Newsletter Cleaner:** Easily manage and unsubscribe from newsletters.
- **AI Assistant:** Automate responses, archiving, labeling, and forwarding emails based on plain text prompt rules.
- **Cold Email Blocker:** Automatically block cold emails.
- **Email Analytics:** Track email activity with daily, weekly, and monthly stats.
- **New Senders:** Identify and block new spam senders.
- **Unreplied Emails:** Keep track of emails awaiting responses.
- **Large Email Finder:** Locate and delete large emails to free up space.

## Installation:
1. Ensure you have Node.js >= 18.0.0 and pnpm >= 8.6.12 installed.
2. Set up required external services: OpenAI, Google OAuth, Google PubSub, Upstash Redis, and Tinybird.
3. Create a `.env` file and set environment variables like `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `OPENAI_API_KEY`, `UPSTASH_REDIS_URL`, `UPSTASH_REDIS_TOKEN`, and `TINYBIRD_TOKEN`.
4. Run migrations and start the app locally by running commands like `pnpm run migrate` and `pnpm dev`.

## Summary:
Inbox Zero is a feature-rich email application that aims to streamline your email management experience through various AI-powered tools and features. By providing functionalities like email analysis, spam blocking, newsletter management, and automated responses, it helps users achieve inbox zero efficiently. The installation process involves setting up necessary external services and configuring environment variables to run the app locally.