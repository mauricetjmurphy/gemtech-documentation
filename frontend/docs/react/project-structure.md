---
title: "React App Project Structure"
date: "2024-07-18"
path: "/react/project-structure"
---

# React App Project Structure

## Directory tree

```
/project-name
  ├── /src
  │    ├── /components
  │    │    ├── /Common
  │    │    ├── /Layout
  │    │    └── /UI
  │    ├── /containers
  │    ├── /services
  │    ├── /hooks
  │    ├── /assets
  │    │    ├── /images
  │    │    ├── /fonts
  │    │    └── /styles
  │    ├── /utils
  │    ├── /store
  │    │    ├── /slices
  │    │    └── /reducers
  │    ├── /routes
  │    ├── /pages
  │    │    ├── /HomePage
  │    │    ├── /AboutPage
  │    │    └── /ContactPage
  │    ├── /types
  │    ├── /contexts
  │    ├── /public
  │    ├── /config
  │    ├── /scripts
  │    ├── /tests
  │    │    ├── /unit
  │    │    ├── /integration
  │    │    └── /e2e
  │    └── /docs
  ├── /.github
  └── /build
```

## Directories

### `/src`

Main source directory.

### `/components`

Reusable UI components.

- `/Common`: Generic components used across the app.
- `/Layout`: Components for major page layouts.
- `/UI`: Small, reusable UI elements like buttons and icons.

### `/containers`

Contains components that connect to Redux or other state management systems.

### `/services`

Services for external API communication.

### `/hooks`

Custom React hooks.

### `/assets`

Static resources.

- `/images`
- `/fonts`
- `/styles`: Global stylesheets or CSS/SCSS modules.

### `/utils`

Utility functions and helpers.

### `/store`

Redux-specific files.

- `/slices`
- `/reducers`

### `/routes`

Setup files for React Router.

### `/pages`

Application views/pages.

- `/HomePage`
- `/AboutPage`
- `/ContactPage`

### `/types`

TypeScript types and interfaces (if using TypeScript).

### `/contexts`

Context API files for global state like themes or authentication.

### `/public`

Contains the index.html and other static assets.

### `/config`

Configuration files (Webpack, Babel, etc.).

### `/scripts`

Custom scripts for building, running, or deploying.

### `/tests`

Test files.

- `/unit`
- `/integration`
- `/e2e`

### `/docs`

Documentation of the application.

### `/.github`

GitHub workflows and actions.

### `/build`

Output directory for builds (not checked into source control).
