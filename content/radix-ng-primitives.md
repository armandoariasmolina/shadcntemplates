---
author: radix-ng
avatarUrl: https://deifkwefumgah.cloudfront.net/avatars/optimized/radix-ng-primitives-avatar-128.webp
createdAt: '2024-11-05T01:38:30.411Z'
demoUrl: https://radix-ng.com
description: Angular port of Radix UI Primitives. Accessible. Customizable.
distribution: open-source
githubUrl: https://github.com/radix-ng/primitives
lastCommitOnDefaultBranch: '2025-05-22T12:17:09.000Z'
stars: 188
themeKey: radix-ng-primitives
title: Primitives
category:
  - angular
  - express
  - vite
  - tailwind
  - radix-ui
---
## Overview:
Radix-NG is an unofficial Angular port of Radix UI, a low-level UI component library that prioritizes accessibility, customization, and developer experience. It shares the same principles and vision as Radix UI, making it suitable for inclusion in design systems or adoption incrementally. The project structure includes a roadmap and showcases different components and their statuses.

## Features:
- **Accessibility**: focuses on ensuring all components meet accessibility standards.
- **Customization**: allows for easy customization of UI components to suit different design needs.
- **Developer Experience**: prioritizes a smooth and efficient development experience.
- **Base Layer Integration**: can be used as the base layer of a design system or integrated incrementally.
- **Documentation**: detailed documentation available at radix-ng.com.
- **Storybook Showcase**: showcases components in a Storybook at sb-primitives.radix-ng.com.
- **Component Varieties**: offers a diverse range of components such as Dialog, Select, Progress, and more.
- **Community Engagement**: encourages community adoption and feedback for continuous improvement.

## Installation:
To install Radix-NG, follow these steps:

1. Run the following command to install Radix-NG:
```bash
npm install @radix-ui/angular
```

2. Import the desired Radix UI components into your Angular module:
```typescript
import { RadixDialogModule, RadixSelectModule } from '@radix-ui/angular';
@NgModule({
  imports: [
    RadixDialogModule,
    RadixSelectModule
  ]
})
export class YourModule {}
```

3. Start using the components in your Angular templates:
```html
<radix-dialog>...</radix-dialog>
<radix-select>...</radix-select>
```

## Summary:
Radix-NG, as an Angular port of Radix UI, provides a comprehensive set of UI components with a strong focus on accessibility and customization. Its seamless integration with Angular projects and commitment to developer experience make it a valuable addition to any web development toolkit. Furthermore, ongoing community engagement and feedback mechanisms ensure continuous enhancements and improvements to the library.