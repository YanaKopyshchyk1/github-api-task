import { Octokit } from "octokit"

// Octokit instance for GitHub API
export const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN
})