# React Web Application Template

[![GitHub](https://img.shields.io/badge/license-MIT-green)](https://github.com/Pettor/template-web-app-react/blob/main/LICENSE)
[![Actions Main](../../actions/workflows/main.yml/badge.svg)](../../actions/workflows/main.yml)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://pettor.github.io/template-web-app-react/storybook/)

This is a template for building web applications with React. It includes a basic project structure and configuration files to help you get started quickly.

## Demo

To check out a demo of the latest main branch [click here](https://pettor.github.io/template-web-app-react/app/).

## Features

This template includes the following features:

- [React](https://reactjs.org/) for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [Vite](https://vitejs.dev/) for fast development and building.
- [Turborepo](https://turbo.build/repo/) for performant build system.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS.
- [DiasyUI](https://daisyui.com/) for component styling.
- [Storybook](https://storybook.js.org/) for component development.
- [Storybook Component Test](https://storybook.js.org/docs/writing-tests/component-testing) for testing components.
- [Playwright](https://playwright.dev/) for end-to-end testing.
- [Vitest](https://vitest.dev/) for testing components.
- [Github Actions](https://docs.github.com/en/actions) for continuous integration.
- [Github Pages](https://pages.github.com/) for hosting the application.
- [Prettier](https://prettier.io/) for code formatting.
- [ESLint](https://eslint.org/) for linting.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository to your local machine.
1. Enable `corepack` by running `corepack enable`.
1. Install the dependencies by running `pnpm i` in the project directory.
1. Start the development server by running `pnpm dev`.

### Enable Github Actions

To enable Github Actions for this repository, follow these steps:

1. Go to the `Settings` tab in the repository.
1. Click the `Actions` tab in the sidebar.
1. Enable the `Allow all actions` option.
1. Click the `Rules` tab in the sidebar.
1. Add a new rule with the following settings:
   - Name: `Main`
   - Enforcement status: `Active`
   - Target branches: `Include default branch`
   - Rules: `Require status checks to pass` and add `Lint`, `Build`, `Test Components` and `Test E2E` checks.

### Enable Github Pages

To enable Github Pages for this repository, follow these steps:

1. Go to the `Settings` tab in the repository.
1. Click the `Pages` tab in the sidebar.
1. Select the `deploy/main` branch as the source.
1. Update Readme with the correct link to the deployed application.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository. If you would like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
