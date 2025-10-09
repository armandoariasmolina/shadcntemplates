---
author: routerso
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/routerso-router-avatar-128.webp
createdAt: '2024-11-05T01:38:30.412Z'
demoUrl: https://router.so
description: >-
  Router.so is headless form handling and lead routing for marketing-minded
  developers.
distribution: open-source
githubUrl: https://github.com/routerso/router
lastCommitOnDefaultBranch: '2025-04-15T21:02:25.000Z'
stars: 319
themeKey: routerso-router
title: Router
category:
  - nextjs
  - react
  - tailwind
  - drizzle-orm
---
## Overview: 
The Router.so is an open-source form backend designed to make form handling easier. It provides a simple router for forms, making it easier to manage form submissions. The setup requires accounts with Resend and Vercel, along with a PostgreSQL database. This tool offers step-by-step instructions on how to set up and deploy the form backend.

## Features:
- **Simple Router for Forms:** Makes it easy to handle form submissions.
- **Self-Hosting Router:** Allows users to host the router on their own server.
- **Environment Variables Support:** Instructions on setting up environment variables for configuration.
- **Docker Support:** Provides options for installation without Docker and with Docker.
- **Database Migration Support:** Guides users on generating and running database migrations.
- **GitHub Repository Integration:** Instructions on pushing code to GitHub and deploying to Vercel.

## Installation:
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   - Rename `.env.example` to `.env.local` and update keys with values.
4. **Generate the Database Migrations**:
   ```bash
   npm run migrate:generate
   npm run migrate:latest
   ```
5. **Start the Development Server**:
   ```bash
   npm run dev
   ```
6. **Run Docker Command**:
   ```bash
   docker-compose up
   ```
7. **Deploying to Vercel**:
   - Push the code to a GitHub repository.
   - Connect the repository to Vercel.
   - Set environment variables in Vercel dashboard under "Settings > Environment Variables".

## Summary:
Router.so is a tool that simplifies form handling with its form backend router. It provides an easy setup process that includes support for self-hosting, environment variables, and database migrations. Users can choose to install with or without Docker, and deployment to Vercel is made straightforward with the provided instructions and integration with GitHub repositories. Additional resources like Vercel and Resend documentation are also available for reference.