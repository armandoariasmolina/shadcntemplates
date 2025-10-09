---
author: niazmorshed2007
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/niazmorshed2007-shadcn-tour-avatar-128.webp
createdAt: '2025-02-06T00:26:40.702Z'
demoUrl: https://tour.niazmorshed.dev
distribution: open-source
githubUrl: https://github.com/NiazMorshed2007/shadcn-tour
lastCommitOnDefaultBranch: '2025-01-11T09:18:38.000Z'
stars: 194
themeKey: niazmorshed2007-shadcn-tour
title: Shadcn Tour
category:
  - nextjs
  - react
  - tailwind
---
## Overview
The `tour` component is a tool designed to facilitate product tours with motion and visual enhancements. It includes key components such as `TourProvider`, `TourAlertDialog`, and `useTour` hook to create engaging and interactive tours for applications.

## Features
- **TourProvider**: Context provider for making the tour available in the app.
- **TourAlertDialog**: Alert dialog component to start or skip the tour.
- **useTour**: Hook providing essential tour functions and states.

## Installation
To install the `tour` component, follow these steps:
1. Run the command to install the necessary packages and components:
```
npm install [package name]
```
2. After installation, components like `TourProvider`, `TourAlertDialog`, and `useTour` hook will be added to your project under `components/tour.tsx`.
3. Additional step IDs will be added under `lib/tour-constants.ts` for reference.
4. Wrap your app with `TourProvider` in `app/layout.tsx` or desired file.
5. Utilize the `setSteps` function from the `useTour` hook to highlight specific steps.
6. Use `TourAlertDialog` component to display and navigate through the tour steps.

## Summary
The `tour` component provides an efficient way to integrate product tours into applications, enhancing user experience with interactive features like motion and visual cues. By leveraging components like `TourProvider`, `TourAlertDialog`, and `useTour` hook, developers can effortlessly create engaging tours with step-by-step guides and interactive dialogues.