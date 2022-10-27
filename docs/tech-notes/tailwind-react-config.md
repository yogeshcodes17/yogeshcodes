<!-- ---
id: tailwind-Angular-config
title: Tailwind CSS Angular Config
---

# Tailwind CSS Angular Config

```jsx
yarn create react-app tailwindcss-task --**template** typescript

cd react**-tailwindcss

yarn add tailwindcss postcss-cli autoprefixer -D**

npx tailwind init —full

create postcss.config.js 

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};

create styles folder in src and add tailwind.css file
@tailwind base;

@tailwind components;

@tailwind utilities;

inside package.json file
"scripts": {
    "start": "npm run build:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/styles/tailwind.css -o src/styles/main.css"
  },

yarn build:css
yarn start

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap');
font-family: 'Roboto', sans-serif;
``` -->