import { octokit } from '../api'
import { path, apiHeader, jsonAcceptHeader } from '../constants'

// Get package.json file content from the GitHub repository in JSON format
export async function getFile (repo: string) {
    try {
        const response: any = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            path,
            headers: {
                ...apiHeader,
                ...jsonAcceptHeader,
            }
        })

        return JSON.parse(response.data)
    } catch (error) {
        console.error(`Error getting file ${path}`, error)
    }
}
