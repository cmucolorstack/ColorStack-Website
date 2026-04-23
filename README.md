# ColorStack at CMU
Made by William.
#
A modern React website for ColorStack at Carnegie Mellon University, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage component
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and it will automatically deploy.

## Customization

- Update the CMU ColorStack image in the left column
- Modify sponsor logos in the right column
- Customize colors in `tailwind.config.js`
- Add new pages in the `app/` directory

