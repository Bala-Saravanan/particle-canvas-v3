# 📦 @balasaravanan/particle-canvas-v3

A lightweight React component and canvas utility that renders interactive particles in the background. Fully compatible with React.js and Next.js, in both JavaScript and TypeScript projects.

## 🚀 Features

🎯 Works in React and Next.js (JavaScript & TypeScript)

💨 Lightweight canvas animation

⚙️ Customizable number of particles (optional)

🧠 Written in TypeScript with full type support

## 📦 Installation

```bash

npm i @balasaravanan/particle-canvas-v3

```

## 🧑‍💻 Usage

### React.js and JavaScript

```jsx
import React from "react";
import ParticleCanvas from "@balasaravanan/particle-canvas-v3";

function App() {
  return (
    <ParticleCanvas>
      <h1>Hello World</h1>
    </ParticleCanvas>
  );
}
```

### React.js and TypeScript

```jsx
import ParticleCanvas from "@balasaravanan/particle-canvas-v3";

function App() {
  return (
    <ParticleCanvas>
      <h1>Hello World</h1>
    </ParticleCanvas>
  );
}

export default App;
```

### Next.js and JavaScript

```jsx
"use client";

import ParticleCanvas from "@balasaravanan/particle-canvas-v3";

export default function Home() {
  return (
    <ParticleCanvas>
      <h1>Welcome to Next.js</h1>
    </ParticleCanvas>
  );
}
```

### Next.js and TypeScript

```jsx
"use client";

import ParticleCanvas from "@balasaravanan/particle-canvas-v3";

export default function Home() {
  return (
    <ParticleCanvas>
      <h1>Welcome to Next.js</h1>
    </ParticleCanvas>
  );
}
```

## 🛠 Project Structure

```bash

src/
├── particle-canvas.ts         # Canvas animation logic (TypeScript)
├── ParticleCanvas.tsx         # React wrapper component
├── index.ts                   # Export file
├── index.css                  # Canvas styles (optional)


```

## ✅ Compatibility

✅ React 17+

✅ React DOM

✅ Next.js App Router & Pages Router

✅ TypeScript or JavaScript

## 🎨 Customization

You can optionally control the number of particles by modifying the class directly or extending the component. Full customization API is coming soon.
