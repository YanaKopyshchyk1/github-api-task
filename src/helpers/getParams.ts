type InputParams = {
    repo: string;
    module: string;
    version: string;
}

export function getParams(): InputParams {
    const args = process.argv.slice(2)
    const allParams: Record<string, string> = args.reduce((acc, arg) => {
        const [key, value] = arg.split('=')
        return {
            ...acc,
            [key]: value,
        }
    }, {})
    const { repo, module, version } = allParams

    if (!repo || !module || !version) {
        throw new Error('Please provide all required parameters: repo, module, version');
    }

    if (!/^[0-9.]+$/.test(version)) {
        throw new Error('Version should only contain digits and dots');
    }

    console.log('Input params:', { repo, module, version})
    return { repo, module, version}
}

