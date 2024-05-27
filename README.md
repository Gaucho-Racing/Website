# Gaucho Racing Website

[![Tests](https://github.com/Gaucho-Racing/Website/actions/workflows/tests.yml/badge.svg)](https://github.com/Gaucho-Racing/Website/actions/workflows/tests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f328742-ea5a-4937-9b8c-4944523152da/deploy-status)](https://app.netlify.com/sites/gauchoracing/deploys)

This website is built with React using Next.js and Tailwind CSS.

## Getting Started

Make sure you have node.js installed, along with either npm or yarn for your package manager.

First, install the dependencies:

```bash
npm i
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

If you have a suggestion that would make this site better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b gh-username/my-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add my amazing feature'`)
4. Push to the Branch (`git push origin gh-username/my-amazing-feature`)
5. Open a Pull Request

## Testing

A few tests will automatically be run on each commit, and will be required to pass before merging to `main`. You can always run them locally using the following commands:

```
npm run build

npm run lint

npm run check
```

> [!TIP]
> You can use `npm run format` to fix any prettier lint errors you have.

## Learn More

To learn more about React, Next, or Tailwind, take a look at the following resources:

- React.js Docs - https://react.dev/learn
- Next.js Docs - https://nextjs.org/docs
- Tailwind CSS Docs - https://tailwindcss.com/docs/installation

## Deployment

This project is setup to automatcially build and deploy to Netlify on any new commits pushed to the `main` branch, as well as preview deployments for any pull requests.

Check out the Netlify [console](https://app.netlify.com/sites/gauchoracing/overview) for more details.
