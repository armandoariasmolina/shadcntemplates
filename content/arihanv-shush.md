---
author: arihanv
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/arihanv-shush-avatar-128.webp
createdAt: '2024-08-27T23:37:59.976Z'
demoUrl: https://shush.arihanv.com
description: >-
  Shush is an app that deploys a WhisperV3 model with Flash Attention v2 on
  Modal and makes requests to it via a NextJS app
distribution: open-source
githubUrl: https://github.com/arihanv/Shush
lastCommitOnDefaultBranch: '2024-06-07T02:57:07.000Z'
stars: 204
themeKey: arihanv-shush
title: Shush
category: []
---
## Overview:
Shush is an application that showcases the deployment of a WhisperV3 model with Flash Attention v2 on Modal and interacts with it through a NextJS app. The main purpose of this app is to offer a comprehensive demonstration for individuals interested in utilizing high-performance models and reliable APIs on demand with auto-scaling capabilities. It is a demo application constructed with Next.js for the frontend and Modal for the backend.

## Features:
- **WhisperV3 Model Deployment:** Demonstrates the deployment of a WhisperV3 model with Flash Attention v2 on Modal.
- **NextJS Integration:** Utilizes a NextJS app for interacting with the deployed model.
- **Auto-Scaling Capabilities:** Showcases the ability to run high-performance models and APIs on demand with auto-scaling.

## Installation:
### Set Up:
1. Visit modal.com and create a free account.
2. Install the Modal python package and authenticate in your CLI by following the instructions on the website.

### Deploy Backend:
We will be using Modal to deploy and serve the WhisperV3 model.
Execute the following commands in your terminal:
```
# Commands to deploy the WhisperV3 model using Modal
```

### Deploy Frontend:
1. Run the NextJS app by executing the following commands after navigating to the root of the repository:
```bash
# Commands to run the NextJS app
```
2. Create a .env file and add the URL obtained from Modal (refer to .env.example for guidance).
3. Once the setup is complete, access http://localhost:3000/ in your browser to test the application and model functionality.

## Summary:
Shush is a demonstration app that exhibits the deployment of a WhisperV3 model utilizing Modal for backend services and a NextJS app for frontend interactions. By following the installation steps provided, users can experience running high-performance models with auto-scaling capabilities.