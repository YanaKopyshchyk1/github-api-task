import { getFile } from './getFile'

// Get the current version of the module from the package.json file
export async function getModuleVersion (repo: string, module: string) {
    const fileObj = await getFile(repo)

    if (!fileObj) {
        throw new Error('Error getting package.json file to read the module version')
    }

    const currectVersion = fileObj.dependencies[module]

    if (!currectVersion) {
        throw new Error(`Can't find ${module} in package.json dependencies`)
    }

    console.log(`Current ${module} version is:`, currectVersion)
    return currectVersion
}
