import {
    getParams,
    getModuleVersion,
    getDefaultBranch,
    createBranch,
    updateFile,
    createPullRequest,
    getFile,
    getFileSha,
    getLastCommitSha,
} from './helpers'

// Get command line arguments
const { repo, module, version } = getParams()

// Get current version of the module
const currentVersion = await getModuleVersion(repo, module)

if (currentVersion !== version) {
    const defaultBranch = await getDefaultBranch(repo)

    // update package.json dependencies with the new version
    const fileObj = await getFile(repo)
    fileObj.dependencies[module] = version
    
    // get package.json SHA for upating the file
    const fileSha = await getFileSha(repo)

    // get last commit SHA in the default branch to create a new branch from it
    const lastCommitSha = await getLastCommitSha(repo, defaultBranch)

    // create a new branch
    const newBranch = await createBranch({ repo, module, version, sha: lastCommitSha || '' })

    // push updated file to new branch
    updateFile({ repo, sha: fileSha, file: fileObj, branch: newBranch || ''})

    // create a pull request
    createPullRequest({
        repo, 
        module, 
        currentVersion,
        newVersion: version,
        defaultBranch,
        newBranch: newBranch || '',
    })
} else {
    console.log('The module version is already up-to-date!')
}
