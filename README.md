# etude-next-boilerplate

[![Last Commit](https://img.shields.io/github/last-commit/yktt-nuane/shiftmaking)](https://github.com/yktt-nuane/shiftmaking/graphs/commit-activity)
[![CI](https://github.com/yktt-nuane/shiftmaking/actions/workflows/ci.yml/badge.svg)](https://github.com/yktt-nuane/shiftmaking/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Prerequisites

- Node.js
  - Next.js
  - ESLint
  - Prettier
  - Jest
  - Storybook
- Tailwind CSS v3+
  - Tailwind UI
- MongoDB API

### Setup

#### Environment Variables

```.env.local
MONGODB_URI=*************
MONGODB_DB=**************
```

### Develop

`npm run dev` to start development server.

### Test

To test using Jest, `npm run test`.

### Storybook

Every time you push to GitHub, it is automatically deployed to Chromatic.

`npm run storybook` to open Storybook manually.

### Deploy

Every time you push to GitHub, it is automatically deployed to Vercel.

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [Tatsuro Yokoyama](https://github.com/yktt-nuane)
  