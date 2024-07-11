import { octokit } from "../api"
import { headers } from '../constants'

// Get the SHA of the last commit in the GitHub repository
export async function getLastCommitSha (repo: string, defaultBranch: string) {
    try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/matching-refs/{ref}', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            headers,
            ref: `heads/${defaultBranch}`,
        })
        const { sha } = data[0].object

        console.log('Last commit SHA: ', sha)
        return sha
    } catch (error) {
        console.error('Error getting last commit sha:', error)
    }
}