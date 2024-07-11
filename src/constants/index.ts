//  API related constants
export const path = 'package.json' // Path to package.json, usually it locates in the root of the repository
export const apiHeader = { 'X-GitHub-Api-Version': '2022-11-28' } // GitHub API version
export const jsonAcceptHeader = { 'Accept': 'application/vnd.github.raw+json' } // Accept header for JSON content
export const headers = { ...apiHeader } // Basic headers for the API requests