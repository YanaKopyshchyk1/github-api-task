import { octokit } from "../api"
import { path, headers } from '../constants'

type UpdateFileParams = {
    repo: string
    sha: string
    file: string
    branch: string
}

// Update the package.json file with new module version and push it to the branch
export async function updateFile ({ repo, sha, file, branch }: UpdateFileParams) {
    try {
        const { status } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            path,
            message: `Update ${path} file with new package version`,
            committer: {
                name: process.env.GITHUB_NAME || '',
                email: process.env.GITHUB_EMAIL || '',
            },
            content: btoa(JSON.stringify(file, null, 2)),
            headers,
            sha,
            branch,
        })
        console.log('Updating file status:', status)
    } catch (error) {
        console.error(`Error updating file ${path}:`, error)
    }
}