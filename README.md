
# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

## Technologies Used

* [Next.js 14](https://nextjs.org/docs/getting-started)
* [HeroUI v2](https://heroui.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Tailwind Variants](https://tailwind-variants.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Framer Motion](https://www.framer.com/motion/)
* [next-themes](https://github.com/pacocoursey/next-themes)
* [Bun](https://bun.sh/) (runtime & package manager)
* [JSDoc](https://jsdoc.app/) with [TypeDoc](https://typedoc.org/) (documentation)

## Why Bun and HeroUI?

### Bun: The Modern JavaScript Runtime

This template uses Bun as its primary package manager and runtime because:

* **Performance** : Bun is significantly faster than Node.js and traditional package managers (npm, yarn)
* **All-in-One Solution** : Combines package management, testing, and runtime environments
* **Modern Compatibility** : Excellent support for Next.js and TypeScript projects
* **Simplified Workflow** : Reduces toolchain complexity with built-in features

### HeroUI: Beautiful, Production-Ready Components

We chose HeroUI v2 because:

* **Design System** : Provides a complete, accessible component library out of the box
* **Tailwind Integration** : Works seamlessly with Tailwind CSS for customization
* **React Optimization** : Components are optimized for React performance
* **Theming Support** : Built-in light/dark mode and easy theming capabilities
* **TypeScript Native** : Fully typed components for better developer experience

## How to Use

### 1. Create a new project

Using `create-next-app`:

**bash**

Copy

Download

```
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### 2. Environment Setup

Before running the project:

1. Duplicate `.env.example` to `.env`
2. Fill in all required environment variables
3. Save the file

### 3. Install dependencies

Using Bun (recommended):

**bash**

Copy

Download

```
bun install
```

Alternative package managers:

**bash**

Copy

Download

```
npm install
# or
yarn install
# or
pnpm install
```

 *Note for pnpm users* : Add this to your `.npmrc`:

**bash**

Copy

Download

```
public-hoist-pattern[]=*@heroui/*
```

Then run `pnpm install` again.

### 4. Run the development server

**bash**

Copy

Download

```
bun run dev
# or
npm run dev
```

### 5. Access Documentation

The code documentation is available in the `docs/` folder:

1. Open `docs/index.html` in your browser
2. Browse the complete API reference and component documentation

The documentation was generated using:

* JSDoc for code comments
* TypeDoc for TypeScript support and documentation generation

## Development Scripts

* `bun run dev`: Start development server
* `bun run build`: Create production build
* `bun run start`: Start production server
* `bun run docs`: Generate documentation (requires TypeDoc)
* `bun run lint`: Run linter

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
