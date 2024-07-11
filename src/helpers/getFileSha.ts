import { octokit } from '../api'
import { path, headers } from '../constants'

// Get the SHA of the file in the GitHub repository
export async function getFileSha (repo: string) {
    try {
        const { data: { sha } }: any = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            path,
            headers,
        })
        
        console.log(`File ${path} SHA: `, sha)
        return sha
    } catch (error) {
        console.error(`Error getting SHA of ${path} file`, error)
    }
}