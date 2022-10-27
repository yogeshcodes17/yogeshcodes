---
id: js-ts-monorepo
title: JavaScript and TypeScript Monorepos
---

## Monorepo

One repo, many related TS/JS packages co-located in a git repo.

Destructuring big code base into small chunks/package 
Low-level → High level
Types, Utilities, Data layer will help to build the main Web UI package.

The small chunks will be fully encapsulated, so this will reduce the maintenance. It will open the way for better collaborative work. 

## Naming conventions

@shlack/types - will be used for common mono repos @shlack will be the common repository holding many sub packages this is also very easy to host this in npm registry.

## Workspaces

Installing dependencies in packages will install in root and import in local dependency and it's because of [this](https://nodejs.org/api/modules.html#modules_all_together)

## Tsconfig

instead of using separate tsconfig.json content for each package we could reuse it by putting one in top level and extending the tsconfig.json in package level

1. Create tsconfig.settings.json file in root and create tsconfig.json file in package level
2. Use this property in the package tsconfig file `"extends": "../tsconfig.settings.json",`
3. More importantly add composite: true in the compilerOptions in tsconfig 

Example

```jsx
{
  "extends": "../tsconfig.settings.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

**We can create a tsconfig file in packages directory and use that to run the all packages.** 

The root file will look like this

```jsx
{
  "references": [{ "path": "types" }, { "path": "utils" }],
  "files": []
}
```

Little confusion on composite and how one link to another one