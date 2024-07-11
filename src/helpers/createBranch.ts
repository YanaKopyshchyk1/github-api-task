import { octokit } from "../api"
import { headers } from '../constants'

type CreateBranchParams = {
    repo: string
    module: string
    version: string
    sha: string
}

export async function createBranch ({ repo, module, version, sha }: CreateBranchParams) {
    const newBranch = `update-${module}-pack-for-${version.replaceAll('.', '-')}`

    try {
        const { status } = await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
            owner: process.env.GITHUB_USERNAME || '',
            repo,
            sha,
            headers,
            ref: `refs/heads/${newBranch}`,
        })
        console.log('Creating branch status:', status)
        return newBranch
    }   catch (error) {
        console.error('Error creating branch:', error)
    }
}