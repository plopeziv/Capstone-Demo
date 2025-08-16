# <p align="center" style="padding-top:20px">React Stat Viewer: A Multi-Sport Stats Dashboard </p>

## Project Overview

This repository serves as a practice project showcasing standard software development practices. It demonstrates key concepts such as unit testing, continuous integration, version control, and clean code principles.

This is the frontend portion of a React/Next.js application, built with TypeScript, Tailwind CSS, and Jest for testing. GitHub Actions is used to automate CI/CD workflows. The primary focus of this frontend is to act as the View in the MVC (Model-View-Controller) design pattern, ensuring a structured and maintainable approach to UI development.

Accessibility was prioritized from the development stage by integrating jsx-a11y for linting and axe-core for Jest-based testing. These tools are pre-configured as part of the development and testing workflows, requiring no additional setup. Developers are simply expected to include an accessibility test for each component, reinforcing a culture of inclusive design from the outset.

## Sports Sections Completed

- Soccer

## Sports Section Under Development

- Fantasy Football
- Professional Basketball
- Professional Baseball

## Installation

This project is designed to work with Node.js version 21. Please use your preferred Node version manager to ensure you're using Node 21 before proceeding. To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```
   git clone https://github.com/plopeziv/Capstone-Demo.git
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Run the Development Server**
   ```
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started

### Run the project

> **Note:** This project is intended to showcase skills, so npm start and build have not been aliased. Please use npm run dev to start the development server.

```sh
npm run dev
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
npm run coverage
```

### Accessibility

This project prioritizes accessibility from the development stage by integrating jsx-a11y for linting and axe-core for Jest-based testing. These tools are built into the configuration and testing processes, requiring no additional setup from developers. The only responsibility is to include an accessibility test for each component.

### CI/CD Pipeline

This repository uses GitHub Actions to automate the CI/CD pipeline. The pipeline runs only on push events to the main branch and is not triggered for other branches.

#### Workflow Overview

1. Checks out Repo
2. Sets up Node.js (version 21.7) and caches dependencies
3. Installs dependencies
4. Builds project
5. Checks Linting
6. Runs unit-tests

#### Passing Criteria

- The pipeline must pass both linting and tests for the workflow to succeed.
- If any step fails, the workflow stops, and changes will not be merged into main.

To manually trigger the workflow for other branches, consider running it via GitHub Actions → Workflow Dispatch.

## Rest API

This project interacts with the free public REST API provided by [football-data.org](https://www.football-data.org/). Authentication is required regardless of payment structure. The project makes requests to the following endpoints:

- Competition Standings: – to fetch current league tables and team rankings.

- Competition Top Scorers: – to retrieve data on the Premier League's leading goal scorers.

## Environment Variables

### Setting Up Your Own Environment

If you're running this project after the evaluation:

1. Create a `.env.local` file at the root of the project.
2. Add your own API token like this:

```env
NEXT_PUBLIC_FOOTBALL_API_TOKEN=your_personal_token_here
```

You can obtain a free token by signing up at [football-data.org](https://www.football-data.org/).

## Credits

This project utilized the REST API provided by [football-data.org](https://www.football-data.org/). Many thanks to them for offering comprehensive and reliable football data for development and testing purposes.

Special thanks to [Punchkick](https://www.punchkick.com/) for the original [Figma](https://www.figma.com/design/263XJno7ii0uEaarJP9Ydw/Umain-Tech-Case?node-id=27-5682&t=q4KY4eqUbEEr3A2s-0) design and [API](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/) that inspired the Munchies page. Their work provided a valuable foundation for the experimenting, and building of this feature.
