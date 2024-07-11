# Create pull request using GitHub API

This is a brief guide on how to run the project.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone [https://github.com/your-username/project-name.git](https://github.com/YanaKopyshchyk1/jspro.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd github-api-task
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```
    
4. Add `.env` file with the following constants in the root folder

    ```
    GITHUB_ACCESS_TOKEN=personal_access_token
    GITHUB_NAME="Firstname Lastname"
    GITHUB_EMAIL="githubemail@domain.com"
    ```

## Usage

To run the project, use the following command:

```bash
npm start repo=github-repo module=npm-module-name version=npm-module-version
```

To run the tests, use the following command:

```bash
npm test
```
