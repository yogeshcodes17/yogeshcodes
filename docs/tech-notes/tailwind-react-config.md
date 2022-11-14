---
id: tailwind-Angular-config
title: Tailwind CSS Angular Config
---

# Tailwind CSS Angular Config

```jsx
ng new my-app

cd my-app

install the needed dependencies

npm install postcss --save-dev
npm install tailwindcss

create tailwind.config.js file

npx tailwind init

Configure the location of your HTML and TypeScript files

module.exports = {
 content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
 theme: {
   extend: {},
 },
 plugins: [],
};


Add Tailwind directives to your global CSS file

@tailwind base;
@tailwind components;
@tailwind utilities;

Enjoy!...
npm start

```