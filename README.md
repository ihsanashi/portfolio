# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

## Introduction

This is a repo for my latest development portfolio, built with React and Next.js, with the content coming in from [Sanity.io](https://www.sanity.io/), and queried with [Apollo Client](https://www.apollographql.com/) and [GraphQL](https://graphql.org/).

## Technologies

- React and Next.js for UI, utilising getStaticProps (static generation, fetch data at build time) and getServerSideProps (server-side rendering, fetch data at request time). _next-sanity-image_ was used for image optimisation.
- sanity/client library for fetching content from the Sanity CMS, and _react-portable-text_ library for rendering rich text
- Apollo-client and GraphQL was used to query the data from Sanity
- Tailwind CSS was used for styling
- _moment_ library for formatting dates and times
- Material UI for rendering the Timeline component for showcasing my work experience
- Utilise Next.js API route and _@sendgrid/mail_ library to send an email to myself when a viewer submits a form in my contact page
- Dark mode switcher configured with _next-themes_ and Tailwind CSS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
