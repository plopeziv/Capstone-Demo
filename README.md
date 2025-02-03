# <p align="center" style="padding-top:20px">React Stat Viewer: A Multi-Sport Stats Dashboard </p>

## Project Overview

This repository serves as a practice project showcasing standard software development practices. It demonstrates key concepts such as unit testing, continuous integration, version control, and clean code principles.

This is the frontend portion of a React/Next.js application, built with TypeScript, Tailwind CSS, and Jest for testing. GitHub Actions is used to automate CI/CD workflows. The primary focus of this frontend is to act as the View in the MVC (Model-View-Controller) design pattern, ensuring a structured and maintainable approach to UI development.

## Sports Section Under Development

- Fantasy Football
- Professional Basketball
- Professional Baseball
- Soccer

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```
   git clone git@github.com:plopez9/nextjs-practice-website.git
   ```

2. **Install Dependencies**

   ```
   cd react-stat-viewer
   npm install
   ```

3. **Run the Development Server**
   ```
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started

### Run the project

```sh
npm run start
```

### Lint the code

This project uses ESLint for linting JavaScript/TypeScript code, including the project's Jest tests. The linting rules can be found in the `eslint.config.mjs` file. Make sure to run the linter to ensure code quality and adherence to project standards.

> **Note:** The CI/CD pipeline will fail if the code has not been properly linted.

To run the linter locally, use the following command:

```sh
npm run lint
```

### Testing

The tests for this project are written using the Jest framework, a popular testing framework for JavaScript, React, and TypeScript. Jest provides a robust set of features for writing unit, integration, and end-to-end tests, including automatic test discovery, mocks, and assertions. It is configured to run the projects unit tests, monitor test coverage and is integrated into the build process to ensure code quality.

> **Note:** The CI/CD pipeline will fail if any unit test fails. No coverage minimum is set for this project.

#### Run tests

```
npm run test
```

#### Continuous Testing

```
npm run test:watch
```

#### Check test coverage

```sh
npm run test:coverage
```

### Accessibility

This project prioritizes accessibility from the development stage by integrating jsx-a11y for linting and axe-core for Jest-based testing. These tools are built into the configuration and testing processes, requiring no additional setup from developers. The only responsibility is to include an accessibility test for each component.

### CI/CD Pipeline

This repository uses GitHub Actions to automate the CI/CD pipeline. The pipeline runs only on push events to the main branch and is not triggered for other branches.

Workflow Overview

1. Checks out Repo
2. Sets up Node.js (version 21.7) and caches dependencies
3. Installs dependencies
4. Builds project
5. Checks Linting
6. Runs unit-tests

Passing Criteria

- The pipeline must pass both linting and tests for the workflow to succeed.
- If any step fails, the workflow stops, and changes will not be merged into main.

To manually trigger the workflow for other branches, consider running it via GitHub Actions → Workflow Dispatch.

## Learn More

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
