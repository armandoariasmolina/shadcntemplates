---
author: damianricobelli
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/damianricobelli-stepperize-avatar-128.webp
createdAt: '2025-02-06T00:31:08.445Z'
demoUrl: https://stepperize.vercel.app
description: A library for creating step-by-step workflows in your apps
distribution: open-source
githubUrl: https://github.com/damianricobelli/stepperize
lastCommitOnDefaultBranch: '2025-04-24T14:24:54.000Z'
stars: 1337
themeKey: damianricobelli-stepperize
title: Stepperize
category:
  - react
  - react-native
---
## Overview
Stepperize is a lightweight library designed for creating step-by-step workflows within applications. Boasting fast and efficient performance, this library offers powerful and flexible features while keeping its footprint lightweight at under 1kB when gzipped. Stepperize provides a composable architecture that is fully typesafe, allowing for maximum customization without any styling.

## Features
- **Fast and efficient**: Ensures quick and responsive performance.
- **Powerful and flexible**: Offers a wide range of customization options.
- **Lightweight (< 1kB gzipped)**: Maintains a small footprint for efficient implementation.
- **Fully typesafe**: Ensures type safety throughout the workflow creation process.
- **Composable architecture**: Allows for easy composition of steps within the workflow.
- **Unstyled for maximum customization**: Provides the freedom to style the workflow as desired.

## Installation
To install Stepperize, follow these steps:

1. Import the Stepperize constructor:
   ```javascript
   import { Stepperize } from 'stepperize';
   ```

2. Define your steps using the defineStepper function:
   ```javascript
   const steps = defineStepper([
       { id: 'step1', ... },
       { id: 'step2', ... },
       // Add more steps as needed
   ]);
   ```

3. Integrate the useStepper hook in your components:
   ```javascript
   const { activeStep, prevStep, nextStep } = useStepper(steps);
   ```

## Summary
Stepperize is a versatile library that simplifies the creation of step-by-step workflows in applications. With its lightweight yet powerful feature set, including fast performance, flexibility, and type safety, Stepperize offers a seamless workflow creation experience. Its composable architecture and unstyled nature provide developers with the flexibility to tailor workflows to their specific needs while ensuring efficient and responsive performance.