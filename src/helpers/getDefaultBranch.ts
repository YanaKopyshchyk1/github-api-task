import { octokit } from "../api"
import { headers } from "../constants"

// Return the default branch of the repository
export async function getDefaultBranch (repo: string) {
    try {
        // Get repository information
        const { data: { default_branch } } = await octokit.request('GET /repos/:owner/:repo', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            headers,
        })

        console.log(`Default branch of ${repo} repo: ${default_branch}`)
        return default_branch
    } catch (error) {
        console.error(`Error getting default branch`, error)
    }
}
