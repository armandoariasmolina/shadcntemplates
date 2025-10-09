---
author: lakshaybhushan
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/lakshaybhushan-nextjs-notion-waitlist-template-avatar-128.webp
createdAt: '2025-02-06T00:31:08.445Z'
demoUrl: 'https://nextjs-notion-waitlist.vercel.app'
description: >-
  A template repository for creating a waitlist using Next.js 14, Notion as a
  CMS, Upstash Redis for rate limiting and Resend for sending emails with a
  custom domain.
distribution: open-source
githubUrl: 'https://github.com/lakshaybhushan/nextjs-notion-waitlist-template'
lastCommitOnDefaultBranch: '2024-12-18T16:57:13.000Z'
stars: 169
themeKey: lakshaybhushan-nextjs-notion-waitlist-template
title: Nextjs Notion Waitlist Template
category:
  - nextjs
  - react
  - tailwind
  - notion
  - boilerplate
  - template
---
## Overview:
GithubBanner is a template repository designed for creating a waitlist utilizing technologies like Next.js 14, Notion as a CMS, Upstash Redis for rate limiting, Resend for email sending, and a combination of shadcn/ui, Magic UI, and Tailwind CSS for UI development. This template offers a basic implementation of using Notion as a CMS for a waitlist, allowing users to manage content without the need for a backend or database.

## Features:
- **Next.js 14:** A popular React framework for building web applications.
- **Notion as a CMS:** Utilize Notion to manage waitlist users and content.
- **Upstash Redis:** Implement rate limiting functionalities using Upstash Redis.
- **Resend:** Ability to send emails to users who sign up for the waitlist.
- **Vercel Deployment:** Easily deploy the application to Vercel with a single click.
- **shadcn/ui:** Utilize shadcn/ui for creating UI components.
- **Magic UI:** Incorporate Magic UI for enhancing the user interface.
- **Tailwind CSS:** Use Tailwind CSS for styling the components efficiently.

## Installation:
To get started with the GithubBanner template, here are the steps to follow:

### Notion:
1. Create a new database in your Notion workspace with 'Name' and 'Email' columns.
2. Obtain the SECRET key for your workspace from the Notion Integrations page.
3. Note down the ID of the database created from its URL.

### Upstash Redis:
1. Sign up for a free Upstash Redis account.
2. Create a new Redis database to obtain a REST URL and TOKEN.

### Resend:
1. Sign up for a Resend account and add your domain along with verifying DNS records.
2. Generate an API key from the Resend dashboard.

### Building with the Template:
- Deploy to Vercel by clicking the provided button and providing necessary environment variables:
  - NOTION_SECRET: Your Notion secret key.
  - NOTION_DB: The ID of the Notion database to be used.
  - RESEND_API_KEY: Your Resend API key.
  - UPSTASH_REDIS_REST_URL: Your Upstash Redis REST URL.
  - UPSTASH_REDIS_REST_TOKEN: Your Upstash Redis token.

## Summary:
GithubBanner is a versatile template repository that simplifies the process of creating a waitlist using modern technologies like Next.js, Notion, Upstash Redis, and Resend. By leveraging the provided features and following the installation guide, users can efficiently set up and customize their waitlist management system with ease.
