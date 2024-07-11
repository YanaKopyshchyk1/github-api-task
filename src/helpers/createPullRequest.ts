import { octokit } from "../api"
import { headers } from '../constants'

type CreatePullRequestParams = {
    repo: string
    module: string
    currentVersion: string
    newVersion: string
    defaultBranch: string
    newBranch: string
}

export async function createPullRequest ({ repo, module, currentVersion, newVersion, defaultBranch, newBranch }: CreatePullRequestParams) {
    try {
        const { status } = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            title: `Update ${module} version`,
            body: `Update ${module} version from ${currentVersion} to ${newVersion}`,
            head: newBranch,
            base: defaultBranch,
            headers,
        })
        console.log('Creating PR status:', status)
    } catch (error) {
        console.error('Error creating pull request:', error)
    }
}
