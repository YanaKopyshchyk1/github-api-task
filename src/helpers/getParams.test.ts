import { getParams } from './getParams'

describe('getParams', () => {
  it('should return the params if they are provided', () => {
    process.argv = ['node', 'index.ts', 'repo=jspro', 'module=oktokit', 'version=4.0.1']

    const params = getParams()

    expect(params).toEqual({ repo: 'jspro', module: 'oktokit', version: '4.0.1' })
  })

  it('should throw an error if repo is missing', () => {
    process.argv = ['node', 'index.ts', 'module=oktokit', 'version=4.0.1']

    expect(() => getParams()).toThrow('Please provide all required parameters: repo, module, version')
  })

  it('should throw an error if module is missing', () => {
    process.argv = ['node', 'index.ts', 'repo=jspro', 'version=4.0.1']

    expect(() => getParams()).toThrow('Please provide all required parameters: repo, module, version')
  })

  it('should throw an error if version is missing', () => {
    process.argv = ['node', 'index.ts', 'repo=jspro', 'module=oktokit']

    expect(() => getParams()).toThrow('Please provide all required parameters: repo, module, version')
  })
  
  it('should throw an error if version contain invalid symbols', () => {
    process.argv = ['node', 'index.ts', 'repo=jspro', 'module=oktokit', 'version=^4.0.1@latest']

    expect(() => getParams()).toThrow('Version should only contain digits and dots')
  })
})
